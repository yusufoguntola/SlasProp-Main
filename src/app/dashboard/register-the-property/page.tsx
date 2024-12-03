"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { axiosInstance } from "@/axios";
import { RegisterProperty } from "@/builder/addProperty";
import { showToast } from "@/utils/toast";
import { useForm } from "@mantine/form";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormLabel,
  Grid2 as Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

// Define the type for form fields
type FormFieldNames = keyof ReturnType<typeof useForm>["values"];

export default function RegisterTheProperty() {
  const registerForm = useForm({
    initialValues: {
      ownerName: "",
      requestType: "",
      registrantName: "",
      propertyType: "",
      registrationNumber: "",
      propertyTaxId: "",
      areaOfLand: "",
      locationId: "", // locationId is now a dropdown
      zipCode: "",
      registeredAddress: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]); // New state for location data
  const router = useRouter();

  // Dropdown options
  const requestTypeOptions = ["Certificate of Occupancy", "Claim/Query"];
  const propertyTypeOptions = [
    "Residential",
    "Commercial",
    "⁠⁠Industrial",
    "Land",
    "Special purpose",
  ];

  useEffect(() => {
    // Fetch locations on component mount
    async function fetchLocations() {
      try {
        const response = await axiosInstance.get(
          "https://slas-prop.ganafsmas.com/api/v1/locations",
        );
        setLocations(response?.data?.data); // Assuming response.data is an array of locations
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    }

    fetchLocations();
  }, []);

  async function handleProfileSubmit(values: unknown) {
    try {
      setLoading(true);
      const response = await RegisterProperty(values);
      if (response?.message) {
        showToast("success", <p>{response.message}</p>); // Assuming `dmessage` is part of the response
      }
      router.push("/dashboard/registered-properties");
    } catch (err) {
      console.error("Error adding property:", err);
    } finally {
      setLoading(false);
    }
  }

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
          Register New Property
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
        >
          Register Property
        </IconButton>
      </Box>

      <form onSubmit={registerForm.onSubmit(handleProfileSubmit)}>
        <Box sx={{ ml: "30%", mt: 4 }}>
          <Grid container spacing={2}>
            {[
              {
                name: "ownerName",
                placeholder: "Enter name of the owner",
                label: "Name of Current Owner",
              },
              {
                name: "requestType",
                label: "Request Type",
                options: requestTypeOptions,
              },
              {
                name: "registrantName",
                placeholder: "Enter name of the Registrant",
                label: "Name of the Registrant",
              },
              {
                name: "propertyType",
                label: "Type of Property",
                options: propertyTypeOptions,
              },
              {
                name: "registrationNumber",
                placeholder: "Enter registration number",
                label: "Registration Number",
              },
              {
                name: "propertyTaxId",
                placeholder: "Enter property tax ID",
                label: "Property Tax ID",
              },
              {
                name: "areaOfLand",
                placeholder: "Enter Area of Land",
                label: "Area of Land",
              },
              {
                name: "locationId",
                label: "Location",
                options: locations, // locations fetched from the API
              },
              {
                name: "zipCode",
                placeholder: "Enter ZIP/PIN Code",
                label: "ZIP/PIN Code",
              },
              {
                name: "registeredAddress",
                placeholder: "Enter registered address",
                label: "Registered Address",
              },
            ].map(({ name, label, options, placeholder }) => (
              <Grid size={{ xs: 12, sm: 6 }} key={name}>
                <FormLabel>{label}</FormLabel>
                {options ? (
                  // Dropdown field for requestType, propertyType, location
                  <TextField
                    select
                    fullWidth
                    id={name}
                    name={name}
                    size="small"
                    value={
                      registerForm.values[
                        name as keyof typeof registerForm.values
                      ]
                    }
                    onChange={(e) =>
                      registerForm.setFieldValue(
                        name as FormFieldNames,
                        e.target.value,
                      )
                    }
                  >
                    {options.length > 0 ? (
                      options.map((option: string) => (
                        <MenuItem key={option} value={option}>
                          {option}{" "}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem disabled>Loading...</MenuItem>
                    )}
                  </TextField>
                ) : (
                  // Regular text field for other fields
                  <TextField
                    fullWidth
                    id={name}
                    name={name}
                    size="small"
                    placeholder={placeholder}
                    value={
                      registerForm.values[
                        name as keyof typeof registerForm.values
                      ]
                    }
                    onChange={(e) =>
                      registerForm.setFieldValue(
                        name as FormFieldNames,
                        e.target.value,
                      )
                    }
                  />
                )}
              </Grid>
            ))}
          </Grid>

          <Container sx={{ display: "flex", justifyContent: "right", mt: 4 }}>
            <Button
              type="submit"
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: "#26a69a",
                "&:hover": { backgroundColor: "#26a69a" },
                borderRadius: "16px",
                boxShadow: "10px 10px 5px #269d91 inset",
              }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Submit & Pay"
              )}
            </Button>
          </Container>
        </Box>
      </form>
    </Container>
  );
}
