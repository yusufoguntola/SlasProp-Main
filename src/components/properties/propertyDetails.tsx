import { Autocomplete, Box, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

interface PropertyDetailsFormProps {
  formData: {
    address: string;
    country: string;
    state: string;
    city: string;
    noOfBedrooms: string;
    amenities: string[];
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAmenitiesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCountryChange: (country: string) => void;
}

export default function PropertyDetailsForm({
  formData,
  handleInputChange,
  handleAmenitiesChange,
  handleCountryChange,
}: PropertyDetailsFormProps) {
  const [countries, setCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        const data = await response.json();
        const countryNames = data.data.map((item: any) => item.country);
        setCountries(countryNames.sort());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Box sx={{ justifyContent: "flex-start", mt: 2, width: "100%" }}>
      <Grid container spacing={2}>
        {/* First row: Country, State, and Address */}
        <Grid item xs={6} sx={{ mt: 2 }}>
          <p className="mb-2 text-[12px] text-[#000000]">Country</p>
          <Autocomplete
            options={countries}
            getOptionLabel={(option) => option}
            value={formData.country}
            onChange={(_, newValue) => handleCountryChange(newValue || "")}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Country"
                size="small"
                fullWidth
                disabled={loading}
                helperText={loading ? "Loading countries..." : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={6} sx={{ mt: 2 }}>
          <p className="mb-2 text-[12px] text-[#000000]">State</p>
          <TextField
            label="Enter State"
            size="small"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sx={{ mt: 2 }}>
          <p className="mb-2 text-[12px] text-[#000000]">Address</p>
          <TextField
            label="Enter Address"
            size="small"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        {/* Second row: City, Number of Bedrooms */}
        <Grid item xs={6} sx={{ mt: 2 }}>
          <p className="mb-2 text-[12px] text-[#000000]">City</p>
          <TextField
            label="Enter City"
            size="small"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sx={{ mt: 3 }}>
          <p className="mb-2 text-[12px] text-[#000000]">
            Number of Bedroom(s)
          </p>
          <TextField
            label="Enter Number of Bedrooms"
            size="small"
            type="number"
            name="noOfBedrooms"
            value={formData.noOfBedrooms}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        {/* Third row: Amenities */}
        <Grid item xs={6} sx={{ mt: 2 }}>
          <p className="text-[12px] text-[#000000]">Amenities</p>
          <p className="text-[10px]">
            Enter as many as possible separated with commas.
          </p>
          <TextField
            label="Enter Amenities (comma-separated)"
            size="small"
            name="amenities"
            value={formData.amenities.join(", ")}
            onChange={handleAmenitiesChange}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
}
