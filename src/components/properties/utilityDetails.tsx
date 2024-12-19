import type { UseFormReturnType } from "@mantine/form";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid2 as Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const greenEnergyOptions = [
  "Solar Power",
  "Wind Power",
  "Geothermal",
  "Biogas",
  "Biomass",
  "Hydroelectric",
];

const serviceTypeOptions = [
  "Power (Electricity)",
  "Water Supply",
  "Internet Services",
  "Security Services",
  "Gardening/Landscaping",
  "Janitorial/Cleaning Services",
  "Waste Management",
];

interface PropertyDetailsFormProps {
  form: UseFormReturnType<CreateProperty>;
}

export default function UtilityDetailsForm({ form }: PropertyDetailsFormProps) {
  const handleAddService = () => {
    form.setFieldValue("utilitiesDetails.services", [
      ...form.values.utilitiesDetails.services,
      {
        type: "",
        provided: false,
        providerName: "",
        frequency: "",
        serviceCharge: 0,
      },
    ]);
  };

  const handleRemoveService = (index: number) => {
    const filtered = form.values.utilitiesDetails.services.filter(
      (_, idx) => idx !== index,
    );

    form.setFieldValue("utilitiesDetails.services", filtered);
  };

  return (
    <Box sx={{ mt: 2, width: "100%" }}>
      {/* Green Energy Fields */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {/* Is Green Energy Powered */}
        <Grid size={{ xs: 6 }}>
          <p className="text-[12px] text-[#000000]">
            Is it Green Energy Powered?
          </p>
          <FormControl fullWidth size="small" sx={{ my: 1 }}>
            <Select
              name="isGreenEnergyPowered"
              value={
                form.values.utilitiesDetails.isGreenEnergyPowered ? "Yes" : "No"
              }
              onChange={(ev) =>
                form.setFieldValue(
                  "utilitiesDetails.isGreenEnergyPowered",
                  ev.target.value === "Yes",
                )
              }
              label="Is Green Energy Powered?"
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Green Energy Provider */}
        <Grid size={{ xs: 6 }}>
          <p className="mb-2 text-[12px] text-[#000000]">
            Green Energy Provider
          </p>
          <TextField
            label="Enter Green Energy Provider"
            name="utilitiesDetails.greenEnergyProvider"
            {...form.getInputProps("utilitiesDetails.greenEnergyProvider")}
            fullWidth
            size="small"
          />
        </Grid>

        {/* Green Energy Sources */}
        <Grid size={{ xs: 12 }}>
          <p className="mb-1 text-[12px] text-[#000000]">
            Green Energy Sources
          </p>
          <p className="text-[10px]">Select one or more sources.</p>
          <FormControl fullWidth size="small">
            <InputLabel>Green Energy Sources</InputLabel>
            <Select
              multiple
              name="greenEnergySources"
              value={form.values.utilitiesDetails.greenEnergySources}
              onChange={(e) => {
                const {
                  target: { value },
                } = e;

                form.setFieldValue(
                  "utilitiesDetails.greenEnergySources",
                  typeof value === "string" ? value.split(",") : value,
                );
              }}
            >
              {greenEnergyOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Existing Services Fields */}
      {form.values.utilitiesDetails.services.map((_, index) => (
        <Grid
          container
          spacing={2}
          key={index}
          sx={{ mb: 2, alignItems: "center" }}
        >
          {/* Service Type */}
          <Grid size={{ xs: 6 }}>
            <p className="mb-1 text-[12px] text-[#000000] mt-4">Service Type</p>
            <FormControl fullWidth size="small">
              <Autocomplete
                options={serviceTypeOptions}
                getOptionLabel={(option) => option}
                value={form.values.utilitiesDetails.services[index].type}
                onChange={(_, newValue) =>
                  form.setFieldValue(
                    `utilitiesDetails.services.${index}.type`,
                    newValue,
                  )
                }
                renderInput={(params) => (
                  <TextField {...params} size="small" fullWidth />
                )}
              />
            </FormControl>
          </Grid>

          {/* Service Provided */}
          <Grid size={{ xs: 6 }}>
            <p className="mb-1 text-[12px] text-[#000000] mt-4">
              Is Service Provided?
            </p>
            <Select
              name={`utilitiesDetails.services.${index}.provided`}
              value={
                form.values.utilitiesDetails.services[index].provided
                  ? "Yes"
                  : "No"
              }
              onChange={(e) =>
                form.setFieldValue(
                  `utilitiesDetails.services.${index}.provided`,
                  e.target.value === "Yes",
                )
              }
              fullWidth
              size="small"
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </Grid>

          {/* Provider Name */}
          <Grid size={{ xs: 6 }}>
            <p className="mb-1 text-[12px] text-[#000000]">Provider Name</p>
            <TextField
              label="Enter provider name"
              value={form.values.utilitiesDetails.services[index].providerName}
              name={`utilitiesDetails.services.${index}.providerName`}
              {...form.getInputProps(
                `utilitiesDetails.services.${index}.providerName`,
              )}
              fullWidth
              size="small"
            />
          </Grid>

          {/* Service Charge */}
          <Grid size={{ xs: 6 }}>
            <p className="mb-1 text-[12px] text-[#000000]"> Service Charge</p>
            <TextField
              label="Enter service charge"
              value={form.values.utilitiesDetails.services[index].serviceCharge}
              name={`utilitiesDetails.services.${index}.serviceCharge`}
              {...form.getInputProps(
                `utilitiesDetails.services.${index}.serviceCharge`,
              )}
              fullWidth
              size="small"
              type="number"
            />
          </Grid>

          {/* Frequency */}
          <Grid size={{ xs: 6 }}>
            <p className="mb-1 text-[12px] text-[#000000]">Frequency</p>
            <TextField
              label="Enter Frequency"
              value={form.values.utilitiesDetails.services[index].frequency}
              name={`utilitiesDetails.services.${index}.frequency`}
              {...form.getInputProps(
                `utilitiesDetails.services.${index}.frequency`,
              )}
              fullWidth
              size="small"
            />
          </Grid>

          {/* Delete Button */}
          {index > 0 && (
            <Grid size={{ xs: 6 }} sx={{ textAlign: "right" }}>
              <IconButton
                onClick={() => handleRemoveService(index)}
                sx={{
                  mt: 1,
                  color: "#DF593D",
                }}
              >
                <RemoveCircleOutline />
              </IconButton>
            </Grid>
          )}
        </Grid>
      ))}

      {/* Add Service Button */}
      <Button
        startIcon={<AddCircleOutline />}
        onClick={handleAddService}
        sx={{
          mt: 1,
          backgroundColor: "#EFFCF7",
          color: "#26a69a",
          "&:hover": { backgroundColor: "#DFF5E4" },
        }}
      >
        Add Service
      </Button>
    </Box>
  );
}
