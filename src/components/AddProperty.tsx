"use client";

import { MultipleFileUpload } from "@/components/MultiFileUpload";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormLabel,
  IconButton,
  InputAdornment,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ConstructionDetailsForm from "./properties/constructionDetails";
import HoaAndFinancialDetailsForm from "./properties/hoaAndFinancialDetails";
import PropertyTypeSelector from "./properties/Properties";
import PropertyDetailsForm from "./properties/propertyDetails";
import UtilityDetailsForm from "./properties/utilityDetails";

interface Service {
  type: string;
  provided: boolean;
  providerName: string;
  serviceCharge: number;
  frequency: string;
}

interface UtilitiesDetails {
  services: Service[];
  isGreenEnergyPowered: boolean;
  greenEnergyProvider: string;
  greenEnergySources: string[];
}

interface FormData {
  name: string;
  price: string;
  description: string;
  city: string;
  state: string;
  country: string;
  noOfBedrooms: string;
  address: string;
  squareFootage: string;
  amenities: string[];
  buildingMaterials: string[];
  architecturalStyle: string;
  condition: string;
  structuralFeatures: string[];
  buildYear: string;
  utilitiesDetails: {
    services: {
      type: string;
      provided: boolean;
      providerName: string;
      serviceCharge: number;
      frequency: string;
    }[];
    isGreenEnergyPowered: boolean;
    greenEnergyProvider: string;
    greenEnergySources: string[];
  };

  hoaAndFinancialDetails: {
    name: string;
    hasDue: boolean;
    dueFrequency: string;
    dueAmount: number;
    isPropertyInMortgage: boolean;
    mortgageProvider: string;
    outstandingBalance: number;
    monthlyPayment: number;
    mortgageEndDate: string;
    otherFinancialDetails: string;
  };
}

export default function AddProperty() {
  // State variables for the main form
  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: "",
    description: "",
    city: "",
    state: "",
    country: "",
    address: "",
    noOfBedrooms: "",
    squareFootage: "",
    amenities: [],
    buildingMaterials: [],
    architecturalStyle: "",
    condition: "",
    structuralFeatures: [],
    buildYear: "",
    utilitiesDetails: {
      services: [
        {
          type: "",
          provided: true,
          providerName: "",
          serviceCharge: 0,
          frequency: "",
        },
      ],
      isGreenEnergyPowered: false,
      greenEnergyProvider: "",
      greenEnergySources: [],
    },
    hoaAndFinancialDetails: {
      name: "",
      hasDue: false,
      dueFrequency: "",
      dueAmount: 0,
      isPropertyInMortgage: false,
      mortgageProvider: "",
      outstandingBalance: 0,
      monthlyPayment: 0,
      mortgageEndDate: "",
      otherFinancialDetails: "",
    },
  });

  const [propertyType, setPropertyType] = useState("");
  const [propertySubType, setPropertySubType] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [showConstructionDetails, setShowConstructionDetails] = useState(false);
  const [showUtilityDetails, setShowUtilityDetails] = useState(false);
  const [showHoaDetails, setShowHoaDetails] = useState(false);

  const handleHoaInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      hoaAndFinancialDetails: { ...prev.hoaAndFinancialDetails, [name]: value },
    }));
  };

  const handleAmenitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amenities = e.target.value.split(",").map((item) => item.trim());
    setFormData((prev) => ({ ...prev, amenities }));
  };




   const handlestructuralFeaturesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const structuralFeatures = e.target.value.split(",").map((item) => item.trim());
    setFormData((prev) => ({ ...prev, structuralFeatures }));
  };


  // const handlestructuralFeaturesChange = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const structuralFeaturesChange = e.target.value
  //     .split(",")
  //     .map((item) => item.trim());
  //   setFormData((prev) => ({ ...prev,  structuralFeatures }));
  // };

  const handlebuildingMaterialsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const buildingMaterials = e.target.value
      .split(",")
      .map((item) => item.trim());
    setFormData((prev) => ({ ...prev, buildingMaterials }));
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUtilityInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: keyof Service
  ) => {
    const updatedServices = [...formData.utilitiesDetails.services];

    // Handle type conversion for specific fields
    if (field === "provided") {
      updatedServices[index][field] = e.target.value === "true"; // Convert to boolean
    } else if (field === "serviceCharge") {
      updatedServices[index][field] = parseFloat(e.target.value) || 0; // Convert to number
    } else {
      updatedServices[index][field] = e.target.value; // Default to string
    }

    setFormData((prev) => ({
      ...prev,
      utilitiesDetails: { ...prev.utilitiesDetails, services: updatedServices },
    }));
  };

  // Rename the general handleInputChange as well, if needed
  const handleFormInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdownChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    // Convert 'true'/'false' to boolean
    setFormData((prev) => ({
      ...prev,
      hoaAndFinancialDetails: {
        ...prev.hoaAndFinancialDetails,
        [name]: value === "true", // Boolean conversion
      },
    }));
  };




  const handlehoaAndFinancialDetailsInputChange = (e: {
    target: { name: string; value: any };
  }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      hoaAndFinancialDetails: {
        ...prev.hoaAndFinancialDetails,
        [name]: value,
      },
    }));
  };



   const handleUtilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const greenEnergySources = e.target.value.split(",").map((item) => item.trim());
    setFormData((prev) => ({ ...prev, greenEnergySources }));
  };



    const handleUtilityDropdownChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    // Convert 'true'/'false' to boolean
    setFormData((prev) => ({
      ...prev,
      utilitiesDetails: {
        ...prev.utilitiesDetails,
        [name]: value === "true", // Boolean conversion
      },
    }));
  };



   const handleUtilityGreenEnergyProviderInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };




//   const handleGreenEnergySourcesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const sources = e.target.value.split(",").map((source) => source.trim());
//   handleInputChange(
//     {
//       target: { name: "greenEnergySources", value: sources },
//     } as unknown as React.ChangeEvent<HTMLInputElement>,
//     -1, // No index needed for this field
//     "greenEnergySources" as keyof Service
//   );
// };


  const handleAddService = () => {
    setFormData((prev) => ({
      ...prev,
      utilitiesDetails: {
        ...prev.utilitiesDetails,
        services: [
          ...prev.utilitiesDetails.services,
          {
            type: "",
            provided: true,
            providerName: "",
            serviceCharge: 0,
            frequency: "",
          },
        ],
      },
    }));
  };

  const handleRemoveService = (index: number) => {
    const updatedServices = formData.utilitiesDetails.services.filter(
      (_, i) => i !== index
    );
    setFormData((prev) => ({
      ...prev,
      utilitiesDetails: { ...prev.utilitiesDetails, services: updatedServices },
    }));
  };

  const handleAddProperty = () => {
    console.log("Form Data:", { ...formData, propertyType, propertySubType });
    // Add logic to handle form submission here
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          marginLeft: "30%",
          mt: 4,
          borderBottom: "1px solid lightgray",
          pl: 2,
          pb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
          Add New Property
        </Typography>
        <IconButton
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
          Add Property
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginLeft: "30%",
          flexDirection: "row",
          mt: 2,
          pl: 2,
        }}
      >
        <Box component="form">
          <FormLabel sx={{ color: "black", fontSize: "12px", my: 1 }}>
            Name Of Property
          </FormLabel>
          <TextField
            fullWidth
            size="small"
            label="Enter data"
            sx={{ my: 1 }}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          {/* Property Type and SubType Component */}
          <PropertyTypeSelector
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            propertySubType={propertySubType}
            setPropertySubType={setPropertySubType}
          />

          <Stack spacing={34} direction="row" sx={{ my: 1 }}>
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Total Sqft
            </FormLabel>
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Price
            </FormLabel>
          </Stack>
          <Stack spacing={13} direction="row" sx={{ my: 1 }}>
            <TextField
              size="small"
              label="Enter data"
              name="squareFootage"
              value={formData.squareFootage}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Button
                      sx={{
                        color: "#26a69a",
                        fontSize: "12px",
                        borderRight: "1px solid lightgrey",
                        pl: -1,
                      }}
                    >
                      Sqft
                    </Button>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              size="small"
              label="Enter data"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Button
                      sx={{
                        color: "#26a69a",
                        fontSize: "14px",
                        borderRight: "1px solid lightgrey",
                      }}
                    >
                      $
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          {/* Additional Fields */}
          <FormLabel sx={{ color: "black", fontSize: "12px", my: 1 }}>
            Property Description
          </FormLabel>
          <TextField
            fullWidth
            label="Enter Data"
            size="small"
            multiline
            maxRows={5}
            sx={{ my: 1 }}
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />

          <Button
            sx={{
              // marginLeft: "31%",
              mt: 4,
              pl: 2,
              backgroundColor: "#EFFCF7",
              color: "#26a69a",
              justifyContent: "flex-start",
              width: "600px",
            }}
            onClick={() => setShowDetails(!showDetails)}
            endIcon={showDetails ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          >
            Property Details
          </Button>

          {/* Conditionally Render Form Component */}
          {showDetails && (
            <PropertyDetailsForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleAmenitiesChange={handleAmenitiesChange}
            />
          )}

          {/* FOR CONSTRUCTION DETAILS */}

          <Button
            sx={{
              // marginLeft: "31%",
              mt: 4,
              pl: 2,
              backgroundColor: "#EFFCF7",
              color: "#26a69a",
              justifyContent: "flex-start",
              width: "600px",
            }}
            onClick={() => setShowConstructionDetails(!showConstructionDetails)}
            endIcon={
              showConstructionDetails ? (
                <KeyboardArrowDown />
              ) : (
                <KeyboardArrowUp />
              )
            }
          >
            Construction Details
          </Button>

          {/* Conditionally Render Form Component */}
          {showConstructionDetails && (
            <ConstructionDetailsForm
              formData={formData}
              handleInputChange={handleInputChange}
              handlestructuralFeaturesChange={handlestructuralFeaturesChange}
              handlebuildingMaterialsChange={handlebuildingMaterialsChange}
            />
          )}

          {/* Toggle Button for Utility Details */}
          <Button
            sx={{
              mt: 4,
              pl: 2,
              backgroundColor: "#EFFCF7",
              color: "#26a69a",
              justifyContent: "flex-start",
              width: "600px",
            }}
            onClick={() => setShowUtilityDetails(!showUtilityDetails)}
            endIcon={
              showUtilityDetails ? <KeyboardArrowDown /> : <KeyboardArrowUp />
            }
          >
            Utility Details
          </Button>

          {/* Conditionally Render Utility Details Form */}
          {showUtilityDetails && (
            <UtilityDetailsForm
              formData={formData.utilitiesDetails}
              handleInputChange={handleUtilityInputChange} // Updated handler name
              handleAddService={handleAddService}
              handleRemoveService={handleRemoveService}
              handleDropdownChange={handleUtilityDropdownChange} 
              handleGreenEnergyInputChange={handleUtilityChange}
              handleUtilityGreenEnergyProviderInputChange={handleUtilityGreenEnergyProviderInputChange}
            />
          )}

          {/* HOA Details Section */}
          <Button
            sx={{
              mt: 4,
              pl: 2,
              backgroundColor: "#EFFCF7",
              color: "#26a69a",
              justifyContent: "flex-start",
              width: "600px",
            }}
            onClick={() => setShowHoaDetails(!showHoaDetails)}
            endIcon={
              showHoaDetails ? <KeyboardArrowDown /> : <KeyboardArrowUp />
            }
          >
            HOA and Financial Details
          </Button>

          {showHoaDetails && (
            <HoaAndFinancialDetailsForm
              formData={formData.hoaAndFinancialDetails}
              handleInputChange={handlehoaAndFinancialDetailsInputChange}
              handleDropdownChange={handleDropdownChange}
            />
          )}
        </Box>

        <MultipleFileUpload />
      </Box>
    </Container>
  );
}
