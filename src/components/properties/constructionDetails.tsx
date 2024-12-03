import { Box, Grid, TextField } from "@mui/material";
import { useFormContext } from "./form-context";

export default function ConstructionDetailsForm() {
  const form = useFormContext();

  return (
    <Box sx={{ justifyContent: "flex-start", width: "100%" }}>
      <Grid container spacing={2}>
        {/* Building Materials */}
        <Grid item xs={6}>
          <p className='mb-1 text-[12px] text-[#000000]'>Building Materials</p>
          <p className='text-[10px]'>
            Enter as many as possible separated with commas.
          </p>
          <TextField
            label='Enter building materials'
            size='small'
            name='buildingMaterials'
            value={form.values.buildingMaterials?.join(", ")}
            onChange={(e) => {
              const materials = e.target.value
                .split(",")
                .map((item) => item.trim());
              form.setFieldValue("buildingMaterials", [...new Set(materials)]);
            }}
            helperText={form.errors.buildingMaterials}
            error={!!form.errors.buildingMaterials}
            fullWidth
            sx={{ my: 1 }}
          />
        </Grid>

        {/* Structural Features */}
        <Grid item xs={6}>
          <p className='mb-1 text-[12px] text-[#000000]'>Structural Features</p>
          <p className='text-[10px]'>
            Enter as many as possible separated with commas.
          </p>
          <TextField
            label='Enter structural features'
            size='small'
            name='structuralFeatures'
            value={form.values.structuralFeatures?.join(", ")}
            onChange={(e) => {
              const features = e.target.value
                .split(",")
                .map((item) => item.trim());
              form.setFieldValue("structuralFeatures", [...new Set(features)]);
            }}
            helperText={form.errors.structuralFeatures}
            error={!!form.errors.structuralFeatures}
            fullWidth
            sx={{ my: 1 }}
          />
        </Grid>

        {/* Architectural Style */}
        <Grid item xs={6}>
          <p className='mb-1 text-[12px] text-[#000000]'>Architectural Style</p>
          <TextField
            label='Enter the architectural style'
            size='small'
            {...form.getInputProps("architecturalStyle")}
            helperText={form.errors.architecturalStyle}
            error={!!form.errors.architecturalStyle}
            fullWidth
            sx={{ my: 1 }}
          />
        </Grid>

        {/* Condition */}
        <Grid item xs={6}>
          <p className='mb-1 text-[12px] text-[#000000]'>Condition</p>
          <TextField
            label='Enter condition'
            size='small'
            {...form.getInputProps("condition")}
            helperText={form.errors.condition}
            error={!!form.errors.condition}
            fullWidth
            sx={{ my: 1 }}
          />
        </Grid>

        {/* Build Year */}
        <Grid item xs={6}>
          <p className='mb-1 text-[12px] text-[#000000]'>Build Year</p>
          <TextField
            label='Enter build year'
            size='small'
            type='number'
            {...form.getInputProps("buildYear")}
            helperText={form.errors.buildYear}
            error={!!form.errors.buildYear}
            fullWidth
            sx={{ my: 1 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
