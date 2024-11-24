import { Box, Grid, TextField } from "@mui/material"; // Import Grid for the layout

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
}

export default function PropertyDetailsForm({
  formData,
  handleInputChange,
  handleAmenitiesChange,
}: PropertyDetailsFormProps) {
  // Define an array of form fields
  const fields = [
    { label: "Address", name: "address", value: formData.address },
    { label: "Country", name: "country", value: formData.country },
    { label: "State", name: "state", value: formData.state },
    { label: "City", name: "city", value: formData.city },
    {
      label: "Number of Bedrooms",
      name: "noOfBedrooms",
      value: formData.noOfBedrooms,
    },
    {
      label: "Amenities (comma-separated)",
      name: "amenities",
      value: formData.amenities.join(", "),
    },
  ];

  return (
    <Box sx={{ justifyContent: "flex-start", mt: 2, width: "600px" }}>
      {/* Use Grid to layout form fields side by side */}
      <Grid container spacing={2}>
        {fields.map((field, index) => (
          <Grid item xs={6} key={index}>
            <TextField
              label={field.label}
              size="small"
              name={field.name}
              value={field.value}
              onChange={
                field.name === "amenities"
                  ? handleAmenitiesChange
                  : handleInputChange
              }
              fullWidth
              sx={{ my: 1 }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
