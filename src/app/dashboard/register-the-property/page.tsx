<<<<<<< HEAD
"use client"
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
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define the type for form fields
type FormFieldNames = keyof ReturnType<typeof useForm>['values'];

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
      locationId: "",  // locationId is now a dropdown
      zipCode: "",
      registeredAddress: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);  // New state for location data
  const router = useRouter();

  // Dropdown options
  const requestTypeOptions = ["Certificate of Occupancy", "Claim/Query"];
  const propertyTypeOptions = ["Residential", "Commercial", "⁠⁠Industrial", "Land", "Special purpose"];

  useEffect(() => {
    // Fetch locations on component mount
    async function fetchLocations() {
      try {
        const response = await axiosInstance.get("https://slas-prop.ganafsmas.com/api/v1/locations");
        console.log("response", response.data);
        setLocations(response?.data?.data);  // Assuming response.data is an array of locations
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    }

    fetchLocations();
  }, []);



 

  async function handleProfileSubmit(values: any) {
    try {
      setLoading(true);
      const response = await RegisterProperty(values);
      if (response?.message) {
        showToast("success", <p>{response.message}</p>);  // Assuming `dmessage` is part of the response
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
            {[{
              name: "ownerName", placeholder: "Enter name of the owner", label: "Name of Current Owner"
            }, {
              name: "requestType", label: "Request Type", options: requestTypeOptions
            }, {
              name: "registrantName", placeholder: "Enter name of the Registrant", label: "Name of the Registrant"
            }, {
              name: "propertyType", label: "Type of Property", options: propertyTypeOptions
            }, {
              name: "registrationNumber", placeholder: "Enter registration number", label: "Registration Number"
            }, {
              name: "propertyTaxId", placeholder: "Enter property tax ID", label: "Property Tax ID"
            }, {
              name: "areaOfLand", placeholder: "Enter Area of Land", label: "Area of Land"
            }, {
              name: "locationId", label: "Location", options: locations // locations fetched from the API
            }, {
              name: "zipCode", placeholder: "Enter ZIP/PIN Code", label: "ZIP/PIN Code"
            }, {
              name: "registeredAddress", placeholder: "Enter registered address", label: "Registered Address"
            }].map((field) => (
              <Grid item xs={12} sm={6} key={field.name}>
                <FormLabel>{field.label}</FormLabel>
                {field.options ? (
                  // Dropdown field for requestType, propertyType, location
                  <TextField
                    select
                    fullWidth
                    id={field.name}
                    name={field.name}
                    size="small"
                    value={registerForm.values[field.name as FormFieldNames]}
                    onChange={(e) => registerForm.setFieldValue(field.name as FormFieldNames, e.target.value)}
                  >
                    {field.options.length > 0 ? (
                      field.options.map((option: any) => (
                        <MenuItem key={option.id || option} value={option.id || option}>
                          {option.name || option} {/* Adjust based on your API response */}
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
                    id={field.name}
                    name={field.name}
                    size="small"
                    placeholder={field.placeholder}
                    value={registerForm.values[field.name as FormFieldNames]}
                    onChange={(e) => registerForm.setFieldValue(field.name as FormFieldNames, e.target.value)}
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
              {loading ? <CircularProgress size={24} color="inherit" /> : "Submit & Pay"}
            </Button>
          </Container>
        </Box>
      </form>
    </Container>
  );
}
=======
"use client";

import { usePropertyType } from "@/hooks/use-property-type";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Suspense } from "react";

export default function RegisterTheProperty() {
  const { propertyType, setPropertyType } = usePropertyType();

  return (
    <Suspense>
      <Container>
        <Box
          sx={{
            display: "flex",
            marginLeft: "30%",
            mt: 4,
            borderBottom: "1px solid lightgray",
            pl: 2,
            pb: 2,
          }}>
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
            }}>
            Register Property
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            marginLeft: "30%",
            flexDirection: "column",
            mt: 2,
            pl: 2,
          }}>
          <Box component="form">
            <Stack spacing={16} direction="row" sx={{ my: 1 }}>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Name of Current Owner
              </FormLabel>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Name of the Registrant
              </FormLabel>
            </Stack>
            <Stack spacing={4} direction="row" sx={{ my: 1 }}>
              <TextField size="small" label="Enter data" />
              <TextField size="small" label="Enter data" />
            </Stack>
            <Stack spacing={23} direction="row" sx={{ my: 1 }}>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Type of Land
              </FormLabel>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Registration Number
              </FormLabel>
            </Stack>
            <Stack spacing={4} direction="row" sx={{ my: 1 }}>
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
                    <em>Type of Land</em>
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
              <TextField size="small" label="Enter data" />
            </Stack>
            <Stack spacing={21} direction="row" sx={{ my: 1 }}>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Property Tax ID
              </FormLabel>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Area of Land
              </FormLabel>
            </Stack>
            <Stack spacing={4} direction="row" sx={{ my: 1 }}>
              <TextField size="small" label="Enter data" />
              <TextField size="small" label="Enter data" />
            </Stack>
            <Stack spacing={21} direction="row" sx={{ my: 1 }}>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                Location
              </FormLabel>
              <FormLabel sx={{ color: "black", fontSize: "12px" }}>
                ZIP/PIN Code
              </FormLabel>
            </Stack>
            <Stack spacing={4} direction="row" sx={{ my: 1 }}>
              <TextField size="small" label="Enter data" />
              <TextField size="small" label="Enter data" />
            </Stack>
            <FormLabel sx={{ color: "black", fontSize: "12px", my: 1 }}>
              Registered Address
            </FormLabel>
            <TextField
              fullWidth
              label="Enter Data"
              multiline
              maxRows={5}
              sx={{ my: 1 }}
            />
          </Box>
        </Box>

        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{
            mt: 2,
            backgroundColor: "#26a69a",
            "&:hover": { backgroundColor: "#26a69a" },
            borderRadius: "16px",
            boxShadow: "10px 10px 5px #269d91 inset",
            width: "150px",
            display: "flex",
            marginLeft: "31%",
            mb: 4,
          }}>
          Submit & Pay
        </Button>
      </Container>
    </Suspense>
  );
}
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c
