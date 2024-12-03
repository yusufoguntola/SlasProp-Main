"use client";

import { builder } from "@/builder";
import { showToast } from "@/utils/toast";
import { yupResolver } from "@mantine/form";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormLabel,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { object, string } from "yup";
import { MultipleFileUpload } from "./MultiFileUpload";
import ConstructionDetailsForm from "./properties/constructionDetails";
import { FormProvider, useForm } from "./properties/form-context";
import HoaAndFinancialDetailsForm from "./properties/hoaAndFinancialDetails";
import PropertyTypeSelector from "./properties/Properties";
import PropertyDetailsForm from "./properties/propertyDetails";
import UtilityDetailsForm from "./properties/utilityDetails";

const schema = object({
  name: string().required("Property name is required"),
  price: string().required("Price is required"),
  description: string().required("Description is required"),
  squareFootage: string().required("Square footage is required"),
  propertyType: string().required("Property type is required"),
  propertySubType: string().when("propertyType", {
    is: (type: string) => type !== "",
    then: (schema) => schema.required("Property subtype is required"),
  }),
  city: string().required("City is required"),
  state: string().required("State is required"),
  country: string().required("Country is required"),
  noOfBedrooms: string().required("Number of bedrooms is required"),
  address: string().required("Address is required"),
  buildYear: string().required("Build year is required"),
});

export default function AddProperty() {
  const form = useForm({
    initialValues: {
      name: "",
      price: "",
      description: "",
      propertyType: "Commericial",
      propertySubType: "",
      squareFootage: "",
      city: "",
      state: "",
      country: "",
      noOfBedrooms: "",
      address: "",
      amenities: [],
      buildingMaterials: [],
      architecturalStyle: "",
      condition: "",
      structuralFeatures: [],
      buildYear: "",
      images: [],
      utilitiesDetails: {
        services: [
          {
            type: "",
            provided: true,
            providerName: "",
            serviceCharge: "",
            frequency: "",
          },
        ],
        isGreenEnergyPowered: false,
        greenEnergyProvider: "",
        greenEnergySources: [],
      },
      neighbourhoodDetails: {
        name: "",
        description: "",
        population: "",
        locatedInGatedEstate: false,
        proximityToPublicPlaces: [
          {
            place: "",
            type: "",
            distance: "",
          },
        ],
      },
      hoaAndFinancialDetails: {
        name: "",
        hasDue: false,
        dueFrequency: "",
        dueAmount: "",
        isPropertyInMortgage: false,
        mortgageProvider: "",
        outstandingBalance: "",
        monthlyPayment: "",
        mortgageEndDate: "",
        otherFinancialDetails: "",
      },
    },
    validate: yupResolver(schema),
    validateInputOnBlur: true,
    transformValues: (values) => {
      console.log(values);
      return values;
    },
  });

  const [showDetails, setShowDetails] = useState(false);
  const [showConstructionDetails, setShowConstructionDetails] = useState(false);
  const [showUtilityDetails, setShowUtilityDetails] = useState(false);
  const [showNeighborhoodDetails, setShowNeighborhoodDetails] = useState(false);
  const [showHoaDetails, setShowHoaDetails] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: builder.$use.property.create,
    onError: (error) => {
      console.error("Error adding property:", error);
      showToast("error", error.message);
    },
    onSuccess: () => {
      showToast("success", "Property added successfully");
      router.push("/dashboard/my-properties");
    },
  });

  const handleSubmit = () => {
    if (!form.isValid()) {
      showToast("error", "Please fill in all required fields.");
      setError("Please fill in all required fields.");
      return;
    }
    const payload = form.getValues();
    console.log(payload);
    mutate(payload);
  };

  return (
    <FormProvider form={form}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          pl: 2,
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pl: 2,
            gap: 2,
          }}
        >
          <Box
            component='form'
            sx={{
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              width: "100%",
              mt: 6,
              gap: 2,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <FormLabel
                sx={{
                  color: "black",
                  fontSize: "13px",
                  display: "block",
                  mb: 1,
                }}
              >
                Property name
              </FormLabel>
              <TextField
                fullWidth
                size='small'
                label='Enter the name of the property'
                sx={{ my: 1 }}
                {...form.getInputProps("name")}
                error={!!form.errors.name}
                helperText={form.errors.name}
              />
            </Box>
            <PropertyTypeSelector />
            <Stack
              spacing={{ xs: 2, sm: 10 }}
              direction={{ xs: "column", sm: "row" }}
              sx={{ my: 1, mt: 2 }}
            >
              {/* Square Footage Label and Input */}
              <Box sx={{ flex: 1 }}>
                <FormLabel
                  sx={{
                    color: "black",
                    fontSize: "13px",
                    display: "block",
                    mb: 1,
                  }}
                >
                  Square Footage
                </FormLabel>
                <TextField
                  size='small'
                  placeholder='Enter square footage'
                  name='squareFootage'
                  {...form.getInputProps("squareFootage")}
                  error={!!form.errors.squareFootage}
                  helperText={form.errors.squareFootage}
                  fullWidth
                  sx={{ backgroundColor: "white", borderRadius: 1 }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Button
                            sx={{
                              color: "#26a69a",
                              fontSize: "12px",
                              borderRight: "1px solid lightgrey",
                            }}
                          >
                            Sqft
                          </Button>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>

              {/* Price Label and Input */}
              <Box sx={{ flex: 1 }}>
                <FormLabel
                  sx={{
                    color: "black",
                    fontSize: "13px",

                    display: "block",
                    mb: 1,
                  }}
                >
                  Price
                </FormLabel>
                <TextField
                  size='small'
                  fullWidth
                  name='price'
                  placeholder='Enter price'
                  sx={{ backgroundColor: "white", borderRadius: 1 }}
                  {...form.getInputProps("price")}
                  error={!!form.errors.price}
                  helperText={form.errors.price}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Button
                            sx={{
                              color: "#26a69a",
                              fontSize: "13px",
                              borderRight: "1px solid lightgrey",
                            }}
                          >
                            $
                          </Button>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>
            </Stack>

            <Box sx={{ flex: 1 }}>
              <FormLabel
                sx={{
                  color: "black",
                  fontSize: "13px",

                  display: "block",
                  mb: 1,
                }}
              >
                Property Description
              </FormLabel>
              <TextField
                fullWidth
                label='Enter description'
                size='small'
                multiline
                maxRows={5}
                sx={{ my: 1 }}
                {...form.getInputProps("description")}
                error={!!form.errors.description}
                helperText={form.errors.description}
              />
            </Box>

            {/* FOR PROPERTY DETAILS */}
            <ToggleButton
              title='Property Details'
              onClick={() => setShowDetails(!showDetails)}
              show={showDetails}
            />

            {showDetails && <PropertyDetailsForm />}

            {/* FOR CONSTRUCTION DETAILS */}

            <ToggleButton
              title='Construction Details'
              onClick={() =>
                setShowConstructionDetails(!showConstructionDetails)
              }
              show={showConstructionDetails}
            />
            {showConstructionDetails && <ConstructionDetailsForm />}

            {/* Toggle Button for Utility Details */}
            <ToggleButton
              title='Utility Details'
              onClick={() => setShowUtilityDetails(!showUtilityDetails)}
              show={showUtilityDetails}
            />

            {showUtilityDetails && <UtilityDetailsForm />}

            {/* Toggle Button for Neighborhood Details */}
            <ToggleButton
              title='Neighborhood Details'
              onClick={() =>
                setShowNeighborhoodDetails(!showNeighborhoodDetails)
              }
              show={showNeighborhoodDetails}
            />

            {/* {showNeighborhoodDetails && <NeighbourhoodDetailsForm />} */}

            {/* Toggle Button for HOA Details */}
            <ToggleButton
              title='HOA Details'
              onClick={() => setShowHoaDetails(!showHoaDetails)}
              show={showHoaDetails}
            />

            {showHoaDetails && <HoaAndFinancialDetailsForm />}

            <MultipleFileUpload
              setImages={(images: string[]) => {
                form.setFieldValue("images", images);
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              my: 4,
              width: "100%",
            }}
          >
            {error && <Box sx={{ color: "red" }}>{error}</Box>}
            <Button
              variant='contained'
              sx={{
                backgroundColor: "#DF593D",
                "&:hover": { backgroundColor: "#C84D34" },
                borderRadius: "8px",
                textTransform: "none",
                width: "100%",
                py: 1,
                fontWeight: "bold",
              }}
              disabled={isPending}
              onClick={handleSubmit}
            >
              {isPending ? "Submitting..." : "Add Property"}
            </Button>
          </Box>
        </Box>
      </Container>
    </FormProvider>
  );
}

interface ToggleButtonProps {
  title: string;
  onClick: () => void;
  show: boolean;
}

const ToggleButton = ({ title, onClick, show }: ToggleButtonProps) => {
  return (
    <Button
      sx={{
        pl: 2,
        backgroundColor: "#EFFCF7",
        color: "#26a69a",
        justifyContent: "flex-start",
        width: "100%",
      }}
      onClick={onClick}
      endIcon={show ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
    >
      {title}
    </Button>
  );
};
