import { Autocomplete, Box, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useFormContext } from "./form-context";

export default function PropertyDetailsForm() {
  const [countries, setCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const form = useFormContext();

  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const countryNames = (data.data || [])
          .map((item: { country?: string }) => item.country || "")
          .filter(Boolean);
        setCountries(countryNames.sort());
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Box sx={{ justifyContent: "flex-start", width: "100%" }}>
      <Grid container spacing={2}>
        {/* First row: Country, State, and Address */}
        <Grid item xs={12} sm={6} md={4}>
          <p className='mb-2 text-[12px] text-[#000000]'>Country</p>
          <Autocomplete
            options={countries}
            getOptionLabel={(option) => option}
            value={form.values.country}
            onChange={(_, newValue) =>
              form.setFieldValue("country", newValue || "")
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label='Select Country'
                size='small'
                fullWidth
                disabled={loading}
                error={!!form.errors.country}
                helperText={
                  loading ? "Loading countries..." : form.errors.country
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p className='mb-2 text-[12px] text-[#000000]'>State</p>
          <TextField
            label='Enter State'
            size='small'
            fullWidth
            {...form.getInputProps("state")}
            error={!!form.errors.state}
            helperText={form.errors.state}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <p className='mb-2 text-[12px] text-[#000000]'>Address</p>
          <TextField
            label='Enter Address'
            size='small'
            fullWidth
            {...form.getInputProps("address")}
            error={!!form.errors.address}
            helperText={form.errors.address}
          />
        </Grid>

        {/* Second row: City and Number of Bedrooms */}
        <Grid item xs={12} sm={6} md={6}>
          <p className='mb-2 text-[12px] text-[#000000]'>City</p>
          <TextField
            label='Enter City'
            size='small'
            fullWidth
            {...form.getInputProps("city")}
            error={!!form.errors.city}
            helperText={form.errors.city}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <p className='mb-2 text-[12px] text-[#000000]'>
            Number of Bedroom(s)
          </p>
          <TextField
            label='Enter Number of Bedrooms'
            size='small'
            type='number'
            fullWidth
            {...form.getInputProps("noOfBedrooms")}
            error={!!form.errors.noOfBedrooms}
            helperText={form.errors.noOfBedrooms}
          />
        </Grid>

        {/* Third row: Amenities */}
        <Grid item xs={12}>
          <p className='text-[12px] text-[#000000]'>Amenities</p>
          <p className='text-[10px]'>
            Enter as many as possible separated with commas.
          </p>
          <TextField
            label='Enter Amenities (comma-separated)'
            size='small'
            fullWidth
            {...form.getInputProps("amenities")}
            value={form.values.amenities?.join(", ")}
            onChange={(e) => {
              const amenities = e.target.value
                .split(",")
                .map((item) => item.trim());
              form.setFieldValue("amenities", [...new Set(amenities)]);
            }}
            error={!!form.errors.amenities}
            helperText={form.errors.amenities}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
