"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { object, string } from "yup";

import { useCreateProperty } from "@/api/properties/mutations";
import { MultipleFileUpload } from "@/components/MultiFileUpload";
import { showToast } from "@/utils/toast";
import { useForm, yupResolver } from "@mantine/form";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

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

function hasErrors(keys: string[], errors: Record<string, unknown>): boolean {
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
      longitude: "",
      latitude: "",
      propertyType: "",
      listingType: "Buy",
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

  const toggle = (key: keyof typeof controls) =>
    setDropdown((prev) => ({ ...controls, [key]: !prev[key] }));

  const { mutate, isPending } = useCreateProperty();
  const { replace } = useRouter();

  const handleSubmit = (values: CreateProperty) => {
    form.validate();

    mutate(values, {
      onSuccess: () => {
        showToast("success", <p>Property created</p>);
        form.reset();
        replace("/dashboard");
      },
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Container sx={{ mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            marginLeft: { xs: 0, lg: "20%" },
            gap: 2,
            mt: 4,
            pl: 2,
            pb: 2,
            borderBottom: "1px solid lightgray",
            width: "100%",
          }}
        >
          <Stack flexGrow={1}>
            <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
              Add New Property
            </Typography>
          </Stack>
          <IconButton
            type="submit"
            sx={{
              backgroundColor: "#DF593D",
              "&:hover": { backgroundColor: "#DF593D" },
              borderRadius: "16px",
              color: "white",
              fontSize: "12px",
              p: 1,
            }}
          >
            {isPending ? "Submitting..." : "Add Property"}
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            marginLeft: { xs: 0, lg: "20%" },
            flexDirection: { xs: "column", lg: "row" },
            mt: 2,
          }}
        >
          <Box
            component="form"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormLabel sx={{ color: "black", fontSize: "12px", my: 1 }}>
              Property name
            </FormLabel>
            <TextField
              fullWidth
              size="small"
              label="Enter the name of the property"
              sx={{ my: 1 }}
              name="name"
              {...form.getInputProps("name")}
              error={!!form.errors.name}
              helperText={form.errors.name}
            />

            <FormControl fullWidth>
              <FormLabel sx={{ color: "black", fontSize: "12px", my: 1 }}>
                Listing Type
              </FormLabel>
              <Select
                size="small"
                value={form.values.listingType}
                onChange={(ev) =>
                  form.setFieldValue("listingType", ev.target.value)
                }
              >
                <MenuItem value="Buy">Buy</MenuItem>
                <MenuItem value="Rent">Rent</MenuItem>
              </Select>
            </FormControl>

            {/* Property Type and SubType Component */}
            <PropertyTypeSelector form={form} />
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              justifyContent="center"
            >
              <Stack sx={{ my: 1, gap: 1 }} flex={1}>
                <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                  Square Footage
                </FormLabel>
                <TextField
                  size="small"
                  placeholder="Enter square footage"
                  name="squareFootage"
                  fullWidth
                  {...form.getInputProps("squareFootage")}
                  error={!!form.errors.squareFootage}
                  helperText={form.errors.squareFootage}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
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
              </Stack>

              <Stack sx={{ my: 2, gap: 1 }} flex={1}>
                <FormLabel sx={{ color: "black", fontSize: "12px", gap: 1 }}>
                  Price
                </FormLabel>

                <TextField
                  size="small"
                  fullWidth
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  {...form.getInputProps("price")}
                  error={!!form.errors.price}
                  helperText={form.errors.price}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
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
            </Stack>

            {/* Additional Fields */}

            <Stack sx={{ mt: 2 }}>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Property Description
              </FormLabel>
              <TextField
                fullWidth
                label="Enter description"
                size="small"
                multiline
                maxRows={5}
                sx={{ my: 1 }}
                name="description"
                {...form.getInputProps("description")}
                error={!!form.errors.description}
                helperText={form.errors.description}
              />
            </Stack>

            <Button
              sx={{
                mt: 4,
                pl: 2,
                backgroundColor: "#EFFCF7",
                color: "#26a69a",
                justifyContent: "flex-start",
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
            name="images"
          />
        </Box>
      </Container>
    </form>
  );
}
