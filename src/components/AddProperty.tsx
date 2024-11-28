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
  SelectChangeEvent,
      <Box
        sx={{
          display: "flex",
          marginLeft: "30%",
          mt: 4,
          borderBottom: "1px solid lightgray",
          pl: 2,
          pb: 2,
<<<<<<< HEAD
        }}
      >
=======
        }}>
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c
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
<<<<<<< HEAD
          }}
          onClick={handleAddProperty}
        >
=======
          }}>
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c
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
<<<<<<< HEAD
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

          <Stack spacing={34} direction="row" sx={{ my: 1, }} className="mt-[2rem] ">
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Square Footage
            </FormLabel>
            <FormLabel sx={{ color: "black", fontSize: "12px", pl:3 }}>
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
=======
        }}>
        <Box component="form">
          <FormLabel sx={{ color: "black", fontSize: "12px", my: 1 }}>
            Name Of Property
          </FormLabel>
          <TextField size="small" fullWidth label="Enter data" sx={{ my: 1 }} />
          <Stack spacing={38} direction="row" sx={{ my: 1 }}>
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Price
            </FormLabel>
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Property Type
            </FormLabel>
          </Stack>
          <Stack spacing={4} direction="row" sx={{ my: 1 }}>
            <TextField
              size="small"
              label="Enter data"
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Button
                      sx={{
                        color: "#26a69a",
                        fontSize: "14px",
                        borderRight: "1px solid lightgrey",
<<<<<<< HEAD
                      }}
                    >
=======
                      }}>
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c
                      $
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
import { Typography, TextField, Stack } from "@mui/material";
import ConstructionDetailsForm from "./properties/constructionDetails";
import HoaAndFinancialDetailsForm from "./properties/hoaAndFinancialDetails";
import NeighbourhoodDetailsForm from "./properties/neighbourhoodDetails";
import PropertyTypeSelector from "./properties/Properties";
import PropertyDetailsForm from "./properties/propertyDetails";
import UtilityDetailsForm from "./properties/utilityDetails";
<<<<<<< HEAD
          </Stack>

          {/* Additional Fields */}

          <div className="mt-[2rem]">
          <FormLabel
  sx={{ color: "black", fontSize: "12px", }} 
 
>
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

        <MultipleFileUpload setImages={setImages}/>
      </Box>
=======
            <FormControl sx={{ mx: 2, minWidth: 220 }} size="small">
              <Select
                defaultValue=""
                value={propertyType || null}
                sx={{ fontSize: "12px" }}
                name="propertyType"
                onChange={(e) => setPropertyType(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}>
                <MenuItem value="" sx={{ fontSize: "12px" }}>
                  <em>Property Type</em>
                </MenuItem>
                <MenuItem value={10} sx={{ fontSize: "12px" }}>
                  Ten
                </MenuItem>
                <MenuItem value={20} sx={{ fontSize: "12px" }}>
                  Twenty
                </MenuItem>
                <MenuItem value={30} sx={{ fontSize: "12px" }}>
                  Thirty
                </MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack spacing={34} direction="row" sx={{ my: 1 }}>
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Build Year
            </FormLabel>
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Total Sqft
            </FormLabel>
          </Stack>
          <Stack spacing={13} direction="row" sx={{ my: 1 }}>
            <TextField size="small" label="Enter data" />
            <TextField
              size="small"
              label="Enter data"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Button
                      sx={{
                        color: "#26a69a",
                        fontSize: "12px",
                        borderRight: "1px solid lightgrey",
                        pl: -1,
                      }}>
                      Sqft
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack spacing={38} direction="row" sx={{ my: 1 }}>
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Rate
            </FormLabel>
            <FormLabel sx={{ color: "black", fontSize: "12px" }}>
              Garage
            </FormLabel>
          </Stack>
          <Stack spacing={14} direction="row" sx={{ my: 1 }}>
            <TextField size="small" label="Enter data" />
            <TextField
              size="small"
              label="Enter data"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      sx={{
                        color: "#26a69a",
                        fontSize: "12px",
                        borderLeft: "1px solid lightgrey",
                        pl: -1,
                      }}>
                      Garage Type
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <FormLabel sx={{ color: "black", fontSize: "12px", my: 1 }}>
            Property Description
          </FormLabel>
          <TextField
            fullWidth
            label="Enter Data"
            multiline
            maxRows={5}
            sx={{ my: 1 }}
          />
        </Box>

        <MultipleFileUpload />
      </Box>

      <Button
        sx={{
          marginLeft: "31%",
          mt: 4,
          pl: 2,
          backgroundColor: "#EFFCF7",
          justifyContent: "flex-start",
          width: "600px",
      </Button>
      <Button
        sx={{
          marginLeft: "31%",
          mt: 2,
          pl: 2,
          backgroundColor: "#EFFCF7",
          color: "#26a69a",
          justifyContent: "flex-start",
          width: "600px",
        }}
        endIcon={<KeyboardArrowUp />}>
        Construction Details
      </Button>
      <Button
        sx={{
          marginLeft: "31%",
          mt: 2,
          pl: 2,
          backgroundColor: "#EFFCF7",
          color: "#26a69a",
          justifyContent: "flex-start",
          width: "600px",
        }}
        endIcon={<KeyboardArrowUp />}>
        Utilities / Green Energy Details
      </Button>
      <Button
        sx={{
          marginLeft: "31%",
          mt: 2,
          pl: 2,
          backgroundColor: "#EFFCF7",
          color: "#26a69a",
          justifyContent: "flex-start",
          width: "600px",
        }}
        endIcon={<KeyboardArrowUp />}>
        Community and Neighborhood Details
      </Button>
      <Button
        sx={{
          marginLeft: "31%",
          mt: 2,
          pl: 2,
          backgroundColor: "#EFFCF7",
          mb: 3,
          color: "#26a69a",
          justifyContent: "flex-start",
          width: "600px",
        }}
        endIcon={<KeyboardArrowUp />}>
        HOA and Financial Details
      </Button>
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c
    </Container>
  );
}
