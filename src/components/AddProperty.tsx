"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { useCreateProperty } from "@/api/properties/mutations";
import { MultipleFileUpload } from "@/components/MultiFileUpload";
import { showToast } from "@/utils/toast";
import { useForm, yupResolver } from "@mantine/form";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { object, string } from "yup";

import PropertyTypeSelector from "./properties/Properties";
import ConstructionDetailsForm from "./properties/constructionDetails";
import HoaAndFinancialDetailsForm from "./properties/hoaAndFinancialDetails";
import NeighbourhoodDetailsForm from "./properties/neighbourhoodDetails";
import PropertyDetailsForm from "./properties/propertyDetails";
import UtilityDetailsForm from "./properties/utilityDetails";

const schema = object({
  name: string().required("Property name is required."),
  price: string().required("Price is required."),
  description: string().required("Description is required."),
  city: string().required("City is required."),
  state: string().required("State is required."),
  country: string().required("Country is required."),
  address: string().required("Address is required."),
  noOfBedrooms: string().required("Number of bedrooms is required."),
  squareFootage: string().required("Square footage is required."),
  amenities: string().required("Amenities is required."),
  propertyType: string().required("Property type is required."),
  propertySubType: string().required("Property subtype is required."),
  constructionDetails: object({
    buildingMaterials: string().required("Building materials is required."),
    structuralFeatures: string().required("Structural features is required."),
    architecturalStyle: string().required("Architectural style is required."),
    condition: string().required("Condition is required."),
    buildYear: string().required("Build year is required."),
  }),
});

const constructionDetailsKeys = [
  "constructionDetails.buildingMaterials",
  "constructionDetails.structuralFeatures",
  "constructionDetails.architecturalStyle",
  "constructionDetails.condition",
  "constructionDetails.buildYear",
];

const locationDetailsKeys = [
  "country",
  "state",
  "address",
  "city",
  "noOfBedrooms",
  "amenities",
];

function hasErrors(keys: string[], errors: Record<string, any>): boolean {
  return keys.some((key) => !!errors[key]);
}

export default function AddProperty() {
  // State variables for the main form
  const form = useForm<CreateProperty>({
    initialValues: {
      name: "",
      price: "",
      description: "",
      city: "",
      state: "",
      country: "",
      address: "",
      noOfBedrooms: "",
      squareFootage: "",
      amenities: "",
      images: [],
      ownershipStatus: null,
      propertySubType: "",
      propertyType: "",
      constructionDetails: {
        buildingMaterials: [],
        architecturalStyle: "",
        condition: "",
        structuralFeatures: [],
        buildYear: "",
      },
      utilitiesDetails: {
        services: [],
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
  });

  const controls = {
    showDetails: false,
    showConstructionDetails: false,
    showUtilityDetails: false,
    showNeighborhoodDetails: false,
    showHoaDetails: false,
  };

  const [dropDown, setDropdown] = useState(controls);
  const [error, setError] = useState("");

  const toggle = (key: keyof typeof controls) =>
    setDropdown((prev) => ({ ...controls, [key]: !prev[key] }));

  // showToast("success", <p>{response.message}</p>); // Assuming `dmessage` is part of the response
  const { mutate, isPending } = useCreateProperty();
  const { replace } = useRouter();

  const handleAddProperty = () => {
    setError("");
    form.validate();
    mutate(form.values);
  };

  return (
    <form
      onSubmit={form.onSubmit((values) =>
        mutate(values, {
          onSuccess: () => {
            showToast("success", <p>Property created</p>);
            form.reset();
            replace("/dashboard");
          },
          onError: (error) => {
            showToast("error", "Error creating property");
            console.error("Error creating property:", error.message);
            setError(error.message);
            throw error;
          },
        })
      )}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            marginLeft: { xs: 0, md: "20%" },
            mt: 4,
            borderBottom: "1px solid lightgray",
            pl: 2,
            pb: 2,
          }}
        >
          <Stack flexGrow={1}>
            <Typography variant='h6' sx={{ fontWeight: "bold", flexGrow: 1 }}>
              Add New Property
            </Typography>

            {error && (
              <Typography variant='body1' sx={{ color: "red" }}>
                {error}
              </Typography>
            )}
          </Stack>
          <IconButton
            type='submit'
            sx={{
              backgroundColor: "#DF593D",
              "&:hover": { backgroundColor: "#DF593D" },
              borderRadius: "16px",
              color: "white",
              fontSize: "12px",
              p: 1,
            }}
            onClick={handleAddProperty}
          >
            {isPending ? "Submitting..." : "Add Property"}
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            marginLeft: { xs: 0, md: "20%" },
            flexDirection: { xs: "column", md: "row" },
            mt: 2,
            pl: 2,
          }}
        >
          <Box component='form'>
            <FormLabel sx={{ color: "black", fontSize: "12px", my: 1 }}>
              Property name
            </FormLabel>
            <TextField
              fullWidth
              size='small'
              label='Enter the name of the property'
              sx={{ my: 1 }}
              name='name'
              {...form.getInputProps("name")}
              error={!!form.errors.name}
              helperText={form.errors.name}
            />

            {/* Property Type and SubType Component */}
            <PropertyTypeSelector form={form} />

            <Stack
              spacing={34}
              direction='row'
              sx={{ my: 1 }}
              className='mt-[2rem] '
            >
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Square Footage
              </FormLabel>
              <FormLabel sx={{ color: "black", fontSize: "12px", pl: 3 }}>
                Price
              </FormLabel>
            </Stack>
            <Stack spacing={6} direction='row' sx={{ my: 1 }}>
              <TextField
                size='small'
                placeholder='Enter square footage'
                name='squareFootage'
                fullWidth
                {...form.getInputProps("squareFootage")}
                error={!!form.errors.squareFootage}
                helperText={form.errors.squareFootage}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Button
                          sx={{
                            color: "#26a69a",
                            fontSize: "12px",
                            borderRight: "1px solid lightgrey",
                            // pl: -1,
                          }}
                        >
                          Sqft
                        </Button>
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <TextField
                size='small'
                fullWidth
                name='price'
                placeholder='Enter price'
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
                            fontSize: "14px",
                            borderRight: "1px solid lightgrey",
                          }}
                        >
                          &#x20A6;
                        </Button>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Stack>

            {/* Additional Fields */}

            <div className='mt-[2rem]'>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Property Description
              </FormLabel>
              <TextField
                fullWidth
                label='Enter description'
                size='small'
                multiline
                maxRows={5}
                sx={{ my: 1 }}
                name='description'
                {...form.getInputProps("description")}
                error={!!form.errors.description}
                helperText={form.errors.description}
              />
            </div>

            <Button
              sx={{
                mt: 4,
                pl: 2,
                backgroundColor: "#EFFCF7",
                color: "#26a69a",
                justifyContent: "flex-start",
                width: "700px",
                border: hasErrors(locationDetailsKeys, form.errors)
                  ? "1px solid red"
                  : "none",
              }}
              onClick={() => toggle("showDetails")}
              endIcon={
                dropDown.showDetails ? (
                  <KeyboardArrowDown />
                ) : (
                  <KeyboardArrowUp />
                )
              }
            >
              Property Details
            </Button>

            {/* Conditionally Render Form Component */}
            {dropDown.showDetails && <PropertyDetailsForm form={form} />}

            {/* FOR CONSTRUCTION DETAILS */}

            <Button
              sx={{
                // marginLeft: "31%",
                mt: 4,
                pl: 2,
                backgroundColor: "#EFFCF7",
                color: "#26a69a",
                justifyContent: "flex-start",
                width: "100%",
                border: hasErrors(constructionDetailsKeys, form.errors)
                  ? "1px solid red"
                  : "none",
              }}
              onClick={() => toggle("showConstructionDetails")}
              endIcon={
                dropDown.showConstructionDetails ? (
                  <KeyboardArrowDown />
                ) : (
                  <KeyboardArrowUp />
                )
              }
            >
              Construction Details
            </Button>

            {/* Conditionally Render Form Component */}
            {dropDown.showConstructionDetails && (
              <ConstructionDetailsForm form={form} />
            )}

            {/* Toggle Button for Utility Details */}
            <Button
              sx={{
                mt: 4,
                pl: 2,
                backgroundColor: "#EFFCF7",
                color: "#26a69a",
                justifyContent: "flex-start",
                width: "100%",
              }}
              onClick={() => toggle("showUtilityDetails")}
              endIcon={
                dropDown.showUtilityDetails ? (
                  <KeyboardArrowDown />
                ) : (
                  <KeyboardArrowUp />
                )
              }
            >
              Utility Details
            </Button>

            {/* Conditionally Render Utility Details Form */}
            {dropDown.showUtilityDetails && <UtilityDetailsForm form={form} />}

            {/* Neighborhood  Details Section */}
            <Button
              sx={{
                mt: 4,
                pl: 2,
                backgroundColor: "#EFFCF7",
                color: "#26a69a",
                justifyContent: "flex-start",
                width: "100%",
              }}
              onClick={() => toggle("showNeighborhoodDetails")}
              endIcon={
                dropDown.showNeighborhoodDetails ? (
                  <KeyboardArrowDown />
                ) : (
                  <KeyboardArrowUp />
                )
              }
            >
              Neighborhood Details
            </Button>

            {dropDown.showNeighborhoodDetails && (
              <NeighbourhoodDetailsForm form={form} />
            )}

            {/* HOA Details Section */}
            <Button
              sx={{
                mt: 4,
                pl: 2,
                backgroundColor: "#EFFCF7",
                color: "#26a69a",
                justifyContent: "flex-start",
                width: "100%",
              }}
              onClick={() => toggle("showHoaDetails")}
              endIcon={
                dropDown.showHoaDetails ? (
                  <KeyboardArrowDown />
                ) : (
                  <KeyboardArrowUp />
                )
              }
            >
              HOA and Financial Details
            </Button>

            {dropDown.showHoaDetails && (
              <HoaAndFinancialDetailsForm form={form} />
            )}
          </Box>

          <MultipleFileUpload
            setImages={(images) => form.setFieldValue("images", images)}
          />
        </Box>
      </Container>
    </form>
  );
}
