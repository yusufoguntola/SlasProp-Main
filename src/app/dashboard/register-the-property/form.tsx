"use client";

import { useRouter } from "next/navigation";
import { object, string } from "yup";

import { useInitiatePayment, useVerifyPayment } from "@/api/payments/mutations";
import { useGetProfile } from "@/api/profile/queries";
import { useRegisterProperty } from "@/api/properties/mutations";
import { useFetchLocations } from "@/api/properties/queries";
import { showToast } from "@/utils/toast";
import { useForm, yupResolver } from "@mantine/form";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormLabel,
  Grid2 as Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import PaystackPop from "@paystack/inline-js";

const schema = object({
  ownerName: string().required("Owner name is required"),
  requestType: string().required("Request type is required"),
  registrantName: string().required("Registrant name is required"),
  propertyType: string().required("Property type is required"),
  registrationNumber: string().required("Registration number is required"),
  propertyTaxId: string().required("Property tax ID is required"),
  areaOfLand: string().required("Area of land is required"),
  locationId: string().required("Location is required"),
  zipCode: string().required("ZIP/PIN code is required"),
  registeredAddress: string().required("Registered address is required"),
});

const REQUEST_TYPES = ["Certificate of Occupancy", "Claim", "Search Query"];
const PROPERTY_TYPES = [
  "Residential",
  "Commercial",
  "Industrial",
  "Land",
  "Special purpose",
];

function calculatePayment(value: string | number) {
  if (Number.isNaN(Number(value))) return 0;

  const amount = Number(value);

  const FEE_CAP = 2_000; // Nigerian Paystack Fee Cap
  const NIGERIAN_LOCAL_TRANSACTION_FEE = 1.5 / 100; // 1.5%

  const TRX_FEE = amount * NIGERIAN_LOCAL_TRANSACTION_FEE;
  const FINAL_AMOUNT =
    TRX_FEE > FEE_CAP
      ? amount + FEE_CAP
      : amount / (1 - NIGERIAN_LOCAL_TRANSACTION_FEE) + 100;

  return Math.ceil(FINAL_AMOUNT * 100);
}

export default function RegisterTheProperty() {
  const user = useGetProfile();

  const form = useForm({
    initialValues: {
      ownerName: "",
      requestType: "",
      registrantName: `${user?.data?.firstName} ${user?.data?.lastName}`,
      propertyType: "",
      registrationNumber: "",
      propertyTaxId: "",
      areaOfLand: "",
      locationId: "",
      zipCode: "",
      registeredAddress: "",
      paymentRefId: "",
    },
    validate: yupResolver(schema),
    validateInputOnBlur: true,
  });

  const { replace } = useRouter();
  const { data: locations, isFetching } = useFetchLocations();
  const registerProperty = useRegisterProperty();
  const initiatePayment = useInitiatePayment();
  const verifyPayment = useVerifyPayment();

  const paystackPop = new PaystackPop();

  const handleSubmit = (values: RegisterProperty) =>
    registerProperty.mutate(values, {
      onSuccess: (data) =>
        paystackPop.newTransaction({
          amount: calculatePayment(data.data.data.amount),
          currency: "NGN",
          email: `${user.data?.email}`,
          key: "pk_test_c844526b24eec6fe53a6851ad0283e18c9adbc22",
          reference: data.data.data.refId,
          onSuccess: (data) => {
            verifyPayment.mutate(data.reference, {
              onSuccess: () => {
                replace("/dashboard/registered-properties");
              },
              onError: (err) => {
                showToast("error", `Unable to Verify Payment ${err.message}`);
              },
            });
          },
          onError: (err) => {
            showToast("error", `Unable to Complete Payment ${err.message}`);
          },
        }),
      onError: (err) => {
        showToast("error", `Unable to Register Property ${err.message}`);
      },
    });

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          marginLeft: { xs: 0, md: "30%" },
          mt: 4,
          borderBottom: "1px solid lightgray",
          pl: 2,
          pb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
          Register New Property
        </Typography>
      </Box>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Box sx={{ marginLeft: { xs: 0, md: "30%" }, mt: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>Name of Current Owner</FormLabel>
              <TextField
                fullWidth
                id="ownerName"
                name="ownerName"
                size="small"
                placeholder="Enter name of the owner"
                {...form.getInputProps("ownerName")}
                error={!!form.errors.ownerName}
                helperText={form.errors.ownerName}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>Request Type</FormLabel>
              <TextField
                select
                fullWidth
                id="requestType"
                name="requestType"
                size="small"
                value={form.values.requestType}
                onChange={(e) =>
                  form.setFieldValue("requestType", e.target.value)
                }
                error={!!form.errors.requestType}
                helperText={form.errors.requestType}
              >
                {REQUEST_TYPES.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>Name of the Registrant</FormLabel>
              <TextField
                disabled
                fullWidth
                id="registrantName"
                name="registrantName"
                size="small"
                placeholder="Enter name of the Registrant"
                {...form.getInputProps("registrantName")}
                error={!!form.errors.registrantName}
                helperText={form.errors.registrantName}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>Type of Property</FormLabel>
              <TextField
                select
                fullWidth
                id="propertyType"
                name="propertyType"
                size="small"
                value={form.values.propertyType}
                onChange={(e) =>
                  form.setFieldValue("propertyType", e.target.value)
                }
                error={!!form.errors.propertyType}
                helperText={form.errors.propertyType}
              >
                {PROPERTY_TYPES.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>Registration Number</FormLabel>
              <TextField
                fullWidth
                id="registrationNumber"
                name="registrationNumber"
                size="small"
                placeholder="Enter registration number"
                {...form.getInputProps("registrationNumber")}
                error={!!form.errors.registrationNumber}
                helperText={form.errors.registrationNumber}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>Property Tax ID</FormLabel>
              <TextField
                fullWidth
                id="propertyTaxId"
                name="propertyTaxId"
                size="small"
                placeholder="Enter property tax ID"
                {...form.getInputProps("propertyTaxId")}
                error={!!form.errors.propertyTaxId}
                helperText={form.errors.propertyTaxId}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>Area of Land</FormLabel>
              <TextField
                fullWidth
                id="areaOfLand"
                name="areaOfLand"
                type="number"
                size="small"
                placeholder="Enter area of land"
                {...form.getInputProps("areaOfLand")}
                error={!!form.errors.areaOfLand}
                helperText={form.errors.areaOfLand}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>Location</FormLabel>
              <TextField
                select
                fullWidth
                id="locationId"
                name="locationId"
                size="small"
                value={form.values.locationId}
                onChange={(e) =>
                  form.setFieldValue("locationId", e.target.value)
                }
                error={!!form.errors.locationId}
                helperText={
                  isFetching ? "Loading locations..." : form.errors.locationId
                }
                disabled={isFetching}
              >
                {locations?.map((location) => (
                  <MenuItem key={location.id} value={location.id}>
                    {location.name}
                  </MenuItem>
                )) || <MenuItem disabled>No locations available</MenuItem>}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>ZIP/PIN Code</FormLabel>
              <TextField
                fullWidth
                id="zipCode"
                name="zipCode"
                size="small"
                placeholder="Enter ZIP/PIN Code"
                {...form.getInputProps("zipCode")}
                error={!!form.errors.zipCode}
                helperText={form.errors.zipCode}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>Registered Address</FormLabel>
              <TextField
                fullWidth
                id="registeredAddress"
                name="registeredAddress"
                size="small"
                placeholder="Enter registered address"
                {...form.getInputProps("registeredAddress")}
                error={!!form.errors.registeredAddress}
                helperText={form.errors.registeredAddress}
              />
            </Grid>
          </Grid>

          <Container sx={{ display: "flex", justifyContent: "right", mt: 4 }}>
            <Button
              type="submit"
              variant="contained"
              size="medium"
              disabled={registerProperty.isPending || initiatePayment.isPending}
              sx={{
                backgroundColor: registerProperty.isPending
                  ? "lightgray"
                  : "#DF593D",
                "&:hover": {
                  backgroundColor: registerProperty.isPending
                    ? "lightgray"
                    : "#DF593D",
                },
                borderRadius: "16px",
                boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.15)",
                textTransform: "capitalize",
              }}
            >
              {registerProperty.isPending || initiatePayment.isPending ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Register Property"
              )}
            </Button>
          </Container>
        </Box>
      </form>
    </Container>
  );
}
