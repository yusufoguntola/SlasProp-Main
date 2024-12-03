import { useFetchCountries } from "@/api/properties/queries";
import type { UseFormReturnType } from "@mantine/form";
import { Autocomplete, Box, Grid2 as Grid, TextField } from "@mui/material";

interface PropertyDetailsFormProps {
  form: UseFormReturnType<CreateProperty>;
}

export default function PropertyDetailsForm({
  form,
}: PropertyDetailsFormProps) {
  const { data, isFetching } = useFetchCountries();

  return (
    <Box sx={{ justifyContent: "flex-start", mt: 2, width: "100%" }}>
      <Grid container spacing={2}>
        {/* First row: Country, State, and Address */}
        <Grid size={{ xs: 6 }} sx={{ mt: 2 }}>
          <p className="mb-2 text-[12px] text-[#000000]">Country</p>
          <Autocomplete
            options={data ?? []}
            getOptionLabel={(option) => option}
            value={form.values.country}
            onChange={(_, newValue) =>
              form.setFieldValue("country", newValue || "")
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Country"
                size="small"
                fullWidth
                disabled={isFetching}
                helperText={isFetching ? "Loading countries..." : ""}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 6 }} sx={{ mt: 2 }}>
          <p className="mb-2 text-[12px] text-[#000000]">State</p>
          <TextField
            label="Enter State"
            size="small"
            name="state"
            {...form.getInputProps("state")}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 6 }} sx={{ mt: 2 }}>
          <p className="mb-2 text-[12px] text-[#000000]">Address</p>
          <TextField
            label="Enter Address"
            size="small"
            name="address"
            {...form.getInputProps("address")}
            fullWidth
          />
        </Grid>

        {/* Second row: City, Number of Bedrooms */}
        <Grid size={{ xs: 6 }} sx={{ mt: 2 }}>
          <p className="mb-2 text-[12px] text-[#000000]">City</p>
          <TextField
            label="Enter City"
            size="small"
            name="city"
            {...form.getInputProps("city")}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 6 }} sx={{ mt: 3 }}>
          <p className="mb-2 text-[12px] text-[#000000]">
            Number of Bedroom(s)
          </p>
          <TextField
            label="Enter Number of Bedrooms"
            size="small"
            type="number"
            name="noOfBedrooms"
            {...form.getInputProps("noOfBedrooms")}
            fullWidth
          />
        </Grid>

        {/* Third row: Amenities */}
        <Grid size={{ xs: 6 }} sx={{ mt: 2 }}>
          <p className="text-[12px] text-[#000000]">Amenities</p>
          <p className="text-[10px]">
            Enter as many as possible separated with commas.
          </p>
          <TextField
            label="Enter Amenities (comma-separated)"
            size="small"
            name="amenities"
            value={form.values.amenities}
            {...form.getInputProps("amenities")}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
}
