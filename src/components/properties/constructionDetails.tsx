import { Box, Grid, TextField } from "@mui/material"; // Import Grid for layout

interface ConstructionDetailsFormProps {
  formData: {
    buildingMaterials: string[];
    architecturalStyle: string;
    condition: string;
    structuralFeatures: string[];
    buildYear: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlebuildingMaterialsChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handlestructuralFeaturesChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function ConstructionDetailsForm({
  formData,
  handleInputChange,
  handlebuildingMaterialsChange,
  handlestructuralFeaturesChange,
}: ConstructionDetailsFormProps) {
  // Define an array of form fields
  const fields = [
    {
      label: "Building Materials",
      name: "buildingMaterials",
      value: formData.buildingMaterials.join(", "),
    },
    {
      label: "Architectural Style",
      name: "architecturalStyle",
      value: formData.architecturalStyle,
    },
    { label: "Condition", name: "condition", value: formData.condition },
    {
      label: "Structural Features",
      name: "structuralFeatures",
      value: formData.structuralFeatures.join(", "),
    },
    { label: "Build Year", name: "buildYear", value: formData.buildYear },
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
              // Conditionally apply the appropriate handler
              onChange={
                field.name === "buildingMaterials"
                  ? handlebuildingMaterialsChange
                  : field.name === "structuralFeatures"
                  ? handlestructuralFeaturesChange
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
