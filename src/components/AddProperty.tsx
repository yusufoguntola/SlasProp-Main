"use client";

import { createProperty } from "@/builder/addProperty";
import { MultipleFileUpload } from "@/components/MultiFileUpload";
import { showToast } from "@/utils/toast";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormLabel,
  IconButton,
  InputAdornment,
  type SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PropertyTypeSelector from "./properties/Properties";
import ConstructionDetailsForm from "./properties/constructionDetails";
import HoaAndFinancialDetailsForm from "./properties/hoaAndFinancialDetails";
import NeighbourhoodDetailsForm from "./properties/neighbourhoodDetails";
import PropertyDetailsForm from "./properties/propertyDetails";
import UtilityDetailsForm from "./properties/utilityDetails";

interface Service {
  type: string;
  provided: boolean;
  providerName: string;
  serviceCharge: number;
  frequency: string;
}

interface PublicPlace {
  place: string;
  type: string;
  distance: string;
}

// interface UtilitiesDetails {
//   services: Service[];
//   isGreenEnergyPowered: boolean;
//   greenEnergyProvider: string;
//   greenEnergySources: string[];
// }

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
      serviceCharge: string;
      frequency: string;
    }[];
    isGreenEnergyPowered: boolean;
    greenEnergyProvider: string;
    greenEnergySources: string[];
  };
  neighbourhoodDetails: {
    name: string;
    description: string;
    population: string;
    locatedInGatedEstate: boolean;
    proximityToPublicPlaces: {
      place: string;
      type: string;
      distance: string;
    }[];
  };

  hoaAndFinancialDetails: {
    name: string;
    hasDue: boolean;
    dueFrequency: string;
    dueAmount: string;
    isPropertyInMortgage: boolean;
    mortgageProvider: string;
    outstandingBalance: string;
    monthlyPayment: string;
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
  });

  const [propertyType, setPropertyType] = useState("");
  const [propertySubType, setPropertySubType] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [showConstructionDetails, setShowConstructionDetails] = useState(false);
  const [showUtilityDetails, setShowUtilityDetails] = useState(false);
  const [showNeighborhoodDetails, setShowNeighborhoodDetails] = useState(false);
  const [showHoaDetails, setShowHoaDetails] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const router = useRouter();

  // const handleHoaInputChange = (e: { target: { name: any; value: any } }) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     hoaAndFinancialDetails: { ...prev.hoaAndFinancialDetails, [name]: value },
  //   }));
  // };

  const handleCountryChange = (country: string) => {
    setFormData((prev) => ({ ...prev, country }));
  };

  const handleAmenitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amenities = e.target.value.split(",").map((item) => item.trim());
    setFormData((prev) => ({ ...prev, amenities }));
  };

  const handlestructuralFeaturesChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const structuralFeatures = e.target.value
      .split(",")
      .map((item) => item.trim());
    setFormData((prev) => ({ ...prev, structuralFeatures }));
  };

  const handlebuildingMaterialsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const buildingMaterials = e.target.value
      .split(",")
      .map((item) => item.trim());
    setFormData((prev) => ({ ...prev, buildingMaterials }));
  };

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUtilityInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: keyof Service,
  ) => {
    const updatedServices = [...formData.utilitiesDetails.services];

    // Handle type conversion for specific fields
    if (field === "provided") {
      updatedServices[index][field] = e.target.value === "true"; // Convert to boolean
    } else {
      updatedServices[index][field] = e.target.value; // Default to string
    }

    setFormData((prev) => ({
      ...prev,
      utilitiesDetails: { ...prev.utilitiesDetails, services: updatedServices },
    }));
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

  const handlehoaAndFinancialDetailsInputChange = (e: {
    target: { name: string; value: unknown };
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

  const handleUtilityEngergySourceChange = (e: SelectChangeEvent<string[]>) => {
    const greenEnergySources = e.target.value as string[]; // Directly use the array of selected options
    setFormData((prev) => ({
      ...prev,
      utilitiesDetails: {
        ...prev.utilitiesDetails,
        greenEnergySources,
      },
    }));
  };

  // const handleGreenEnergySourcesChange = (e: SelectChangeEvent<string[]>) => {
  //   const value = e.target.value;
  //   setFormData((prev) => ({
  //     ...prev,
  //     greenEnergySources: typeof value === "string" ? value.split(",") : value,
  //   }));
  // };

  const handleUtilityGreenEnergyProviderInputChange = (e: {
    target: { name: string; value: unknown };
  }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      utilitiesDetails: {
        ...prev.utilitiesDetails,
        [name]: value,
      },
    }));
  };

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
            serviceCharge: "",
            frequency: "",
          },
        ],
      },
    }));
  };

  const handleRemoveService = (index: number) => {
    const updatedServices = formData.utilitiesDetails.services.filter(
      (_, i) => i !== index,
    );
    setFormData((prev) => ({
      ...prev,
      utilitiesDetails: { ...prev.utilitiesDetails, services: updatedServices },
    }));
  };

  // Neighbourhood  Details

  const handleNeighbourhoodInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
    index?: number,
    field?: keyof PublicPlace,
  ) => {
    if (index !== undefined && field) {
      // Update a specific public place
      const updatedPlaces = [
        ...formData.neighbourhoodDetails.proximityToPublicPlaces,
      ];
      updatedPlaces[index][field] = e.target.value;
      setFormData((prev) => ({
        ...prev,
        neighbourhoodDetails: {
          ...prev.neighbourhoodDetails,
          proximityToPublicPlaces: updatedPlaces,
        },
      }));
    } else {
      // Update a general field
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        neighbourhoodDetails: { ...prev.neighbourhoodDetails, [name]: value },
      }));
    }
  };

  const handleNeighbourhoodAddPublicPlace = () => {
    setFormData((prev) => ({
      ...prev,
      neighbourhoodDetails: {
        ...prev.neighbourhoodDetails,
        proximityToPublicPlaces: [
          ...prev.neighbourhoodDetails.proximityToPublicPlaces,
          { place: "", type: "", distance: "" },
        ],
      },
    }));
  };

  const handleNeighbourhoodRemovePublicPlace = (index: number) => {
    const updatedPlaces =
      formData.neighbourhoodDetails.proximityToPublicPlaces.filter(
        (_, i: number) => i !== index,
      );
    setFormData((prev) => ({
      ...prev,
      neighbourhoodDetails: {
        ...prev.neighbourhoodDetails,
        proximityToPublicPlaces: updatedPlaces,
      },
    }));
  };

  const handleNeighbourhoodDropdownChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      neighbourhoodDetails: {
        ...prev.neighbourhoodDetails,
        [name]: value === "true", // Boolean conversion
      },
    }));
  };

  const handleAddProperty = async () => {
    try {
      // Prepare data
      const propertyData = {
        ...formData,
        propertyType,
        propertySubType,
        images,
      };

      const response = await createProperty(propertyData); // Call your API function
      if (response?.message) {
        showToast("success", <p>{response.message}</p>); // Assuming `dmessage` is part of the response
      }
      router.push("/dashboard/my-properties");
    } catch (err) {
      console.error("Error adding property:", err);
      // setError("Failed to add property. Please try again.");
    } finally {
      // setLoading(false); // Hide loading state
    }
  };

  return (
    <Container
      sx={
        {
          // maxHeight: "1000px",
          // overflowY: "auto",
          // overflowX: "hidden",
        }
      }
    >
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
            Property name
          </FormLabel>
          <TextField
            fullWidth
            size="small"
            label="Enter the name of the propert"
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

          <Stack
            spacing={34}
            direction="row"
            sx={{ my: 1 }}
            className="mt-[2rem] "
          >
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Square Footage
            </FormLabel>
            <FormLabel sx={{ color: "black", fontSize: "12px", pl: 3 }}>
              Price
            </FormLabel>
          </Stack>
          <Stack spacing={6} direction="row" sx={{ my: 1 }}>
            <TextField
              size="small"
              placeholder="Enter square footage"
              name="squareFootage"
              fullWidth
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
                        // pl: -1,
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
              fullWidth
              name="price"
              placeholder="Enter price"
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

          <div className="mt-[2rem]">
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
              value={formData.description}
              onChange={handleInputChange}
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
              handleCountryChange={handleCountryChange} // Pass it here
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
              width: "100%",
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
              width: "100%",
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
              handleUtilityEngergySourceChange={
                handleUtilityEngergySourceChange
              }
              handleUtilityGreenEnergyProviderInputChange={
                handleUtilityGreenEnergyProviderInputChange
              }
              handleUtilityDropdownChange={handleUtilityDropdownChange}
            />
          )}

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
            onClick={() => setShowNeighborhoodDetails(!showNeighborhoodDetails)}
            endIcon={
              showNeighborhoodDetails ? (
                <KeyboardArrowDown />
              ) : (
                <KeyboardArrowUp />
              )
            }
          >
            Neighborhood Details
          </Button>

          {showNeighborhoodDetails && (
            <NeighbourhoodDetailsForm
              formData={formData.neighbourhoodDetails}
              handleInputChange={handleNeighbourhoodInputChange}
              handleAddPublicPlace={handleNeighbourhoodAddPublicPlace}
              handleRemovePublicPlace={handleNeighbourhoodRemovePublicPlace}
              handleDropdownChange={handleNeighbourhoodDropdownChange}
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
              width: "100%",
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

        <MultipleFileUpload setImages={setImages} />
      </Box>
    </Container>
  );
}
