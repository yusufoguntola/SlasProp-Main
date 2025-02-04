"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { flushSync } from "react-dom";
import { usePaystackPayment } from "react-paystack";
import type { PaystackProps } from "react-paystack/dist/types";
import { object, string } from "yup";

import { useInitiatePayment, useVerifyPayment } from "@/api/payments/mutations";
import { useGetProfile } from "@/api/profile/queries";
import { useRegisterProperty } from "@/api/properties/mutations";
import { useFetchLocations } from "@/api/properties/queries";
import { useModalState } from "@/hooks/use-modal-state";
import { getPaystackKey } from "@/utils/get-paystack-key";
import { calculatePayment } from "@/utils/paystack";
import { useForm, yupResolver } from "@mantine/form";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  FormLabel,
  Grid2 as Grid,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import { SearchResults } from "./search_results";

const schema = object({
  ownerName: string().required("Owner name is required"),
  requestType: string().required("Request type is required"),
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

export default function RegisterTheProperty() {
  const user = useGetProfile();
  const [paystack, setPaystack] = useState({
    publicKey: getPaystackKey(),
    amount: 0,
    reference: "",
    split_code: "",
    email: "",
    opened: false,
  });

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
    clearInputErrorOnChange: true,
  });

  const [searchResults, setSearchResults] = useState<{
    opened: boolean;
    data: RTask[];
  }>({
    opened: false,
    data: [],
  });

  const { replace } = useRouter();
  const { data: locations, isFetching } = useFetchLocations({page_size: 100, page: 1});

  const registerProperty = useRegisterProperty();
  const initiatePayment = useInitiatePayment();
  const verifyPayment = useVerifyPayment();

  const { verifyPaymentOpen, verifyPaymentIsOpen, verifyPaymentClose } =
    useModalState("verifyPayment");

  const handleSubmit = (values: RegisterProperty) =>
    registerProperty.mutate(
      {
        ...values,
        registrantName: `${user?.data?.firstName} ${user?.data?.lastName}`,
      },
      {
        onSuccess: (data) => {
          flushSync(() => {
            setPaystack((prev) => ({
              ...prev,
              amount: calculatePayment(data.data.data.amount),
              reference: data.data.data.refId,
              split_code: data.data.data.splitCode,
              opened: true,
              email: `${user.data?.email}`,
            }));
          });
        },
      },
    );

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",

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
          <Box sx={{ mt: 4 }}>
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
                  key={user.status}
                  fullWidth
                  defaultValue={`${user.data?.firstName} ${user.data?.lastName}`}
                  id="registrantName"
                  name="registrantName"
                  size="small"
                  placeholder="Enter name of the Registrant"
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
                disabled={
                  registerProperty.isPending || initiatePayment.isPending
                }
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

        <Modal open={verifyPaymentIsOpen} onClose={verifyPaymentClose}>
          <div className="bg-white p-4 h-64 max-w-sm absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full flex items-center justify-center">
            <Button
              disabled={verifyPayment.isPending}
              variant="contained"
              onClick={() => {
                verifyPayment.mutate(paystack.reference, {
                  onSuccess: (resp) => {
                    if (form.values.requestType === "Search Query") {
                      setSearchResults({ opened: true, data: resp.data.data });
                    } else {
                      replace("/dashboard/registered-properties");
                    }
                  },
                });
              }}
            >
              {verifyPayment.isPending ? "Confirming payment..." : "Continue"}
            </Button>
          </div>
        </Modal>

        <PaystackPay
          verifyPayment={verifyPaymentOpen}
          {...paystack}
          open={paystack.opened}
          close={() => setPaystack((prev) => ({ ...prev, opened: false }))}
        />
      </Container>

      <SearchResults
        onClose={() => {
          replace("/dashboard/registered-properties");
        }}
        opened={searchResults.opened}
        results={searchResults.data}
      />
    </>
  );
}

function PaystackPay({
  open,
  close,
  verifyPayment,
  ...props
}: PaystackProps & {
  open: boolean;
  close: () => void;
  verifyPayment: () => void;
}) {
  const initializePaystack = usePaystackPayment(props);

  const makePayment = () =>
    initializePaystack({
      onSuccess: () => {
        verifyPayment();
        close();
      },
    });

  return (
    <Dialog open={open} maxWidth="sm" onClose={() => {}}>
      <DialogContent sx={{ p: 4 }}>
        <Button variant="contained" onClick={() => makePayment()}>
          Click to Make Payment
        </Button>
      </DialogContent>
    </Dialog>
  );
}
