import type { UseFormReturnType } from "@mantine/form";
import { Box, Grid2 as Grid, TextField } from "@mui/material"; // Import Grid for layout

interface PropertyDetailsFormProps {
  form: UseFormReturnType<CreateProperty>;
}

export default function ConstructionDetailsForm({
  form,
}: PropertyDetailsFormProps) {
  // Define an array of form fields
  const fields = [
    {
      label: "Enter building materials",
      name: "constructionDetails.buildingMaterials",
      value: form.values.constructionDetails.buildingMaterials,
      header: "Building Materials",
      subHeader: "Enter as many as possible separated with commas.",
    },
    {
      label: "Enter structural features",
      name: "constructionDetails.structuralFeatures",
      value: form.values.constructionDetails.structuralFeatures,
      header: "Structural Features",
      subHeader: "Enter as many as possible separated with commas.",
    },
    {
      label: "Enter the architectural style",
      name: "constructionDetails.architecturalStyle",
      value: form.values.constructionDetails.architecturalStyle,
      header: "Architectural Style",
    },
    {
      label: "Enter Condition",
      name: "constructionDetails.condition",
      value: form.values.constructionDetails.condition,
      header: "Condition",
    },

    {
      label: "Enter build year",
      name: "constructionDetails.buildYear",
      value: form.values.constructionDetails.buildYear,
      header: "Build year",
    },
  ];

  return (
    <Box sx={{ justifyContent: "flex-start", mt: 2, width: "100%" }}>
      {/* Use Grid to layout form fields side by side */}
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid size={{ xs: 6 }} key={field.label}>
            <p className="mb-1 text-[12px] text-[#000000]">{field.header}</p>
            <p className="text-[10px]">{field.subHeader}</p>
            <TextField
              label={field.label}
              size="small"
              name={field.name}
              value={field.value}
              type={field.name === "buildYear" ? "number" : "text"}
              // Conditionally apply the appropriate handler
              {...form.getInputProps(field.name)}
              fullWidth
              sx={{ my: 1 }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
