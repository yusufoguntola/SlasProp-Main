"use client";

import { yupResolver } from "@mantine/form";
import {
  Box,
  Button,
  Container,
  FormLabel,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { object, string } from "yup";
import { FormProvider, useForm } from "./properties/form-context";
import PropertyTypeSelector from "./properties/Properties";

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
  // city: string().required("City is required"),
  // state: string().required("State is required"),
  // country: string().required("Country is required"),
  // noOfBedrooms: string().required("Number of bedrooms is required"),
  // address: string().required("Address is required"),
  // amenities: array().required("Amenities are required"),
  // buildingMaterials: array().required("Building materials are required"),
  // architecturalStyle: string().required("Architectural style is required"),
  // condition: string().required("Condition is required"),
  // structuralFeatures: array().required("Structural features are required"),
  // buildYear: string().required("Build year is required"),
});

export default function AddProperty() {
  const form = useForm({
    initialValues: {
      name: "",
      price: "",
      description: "",
      // city: "",
      // state: "",
      // country: "",
      // noOfBedrooms: "",
      // address: "",
      squareFootage: "",
      // amenities: [],
      // buildingMaterials: [],
      // architecturalStyle: "",
      // condition: "",
      // structuralFeatures: [],
      // buildYear: "",
    },
    validate: yupResolver(schema),
    validateInputOnBlur: true,
  });

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
              overflowY: "auto",
              width: "100%",
              mt: 6,
            }}
          >
            <FormLabel
              sx={{
                color: "black",
                fontSize: "14px",
                fontWeight: "bold",
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
            {/* Property Type and SubType Component */}
            <PropertyTypeSelector
              propertyType={propertyType}
              setPropertyType={setPropertyType}
              propertySubType={propertySubType}
              setPropertySubType={setPropertySubType}
            />
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
                    fontSize: "14px",
                    fontWeight: "bold",
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
                    fontSize: "14px",
                    fontWeight: "bold",
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
                              fontSize: "14px",
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

            <div className='mt-[2rem]'>
              <FormLabel
                sx={{
                  color: "black",
                  fontSize: "14px",
                  fontWeight: "bold",
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
            </div>
          </Box>
        </Box>
      </Container>
    </FormProvider>
  );
}
