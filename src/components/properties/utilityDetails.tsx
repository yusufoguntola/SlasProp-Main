import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import {
  Box,
  Button, FormControl, Grid,
  IconButton, InputLabel, MenuItem,
  Select, SelectChangeEvent, TextField
} from "@mui/material";

// Define the service interface for better type safety
interface Service {
  type: string;
  provided: boolean;
  providerName: string;
  serviceCharge: number;
  frequency: string;
}

interface UtilityDetailsFormProps {
  formData: {
    services: Service[];
    isGreenEnergyPowered: boolean;
    greenEnergyProvider: string;
    greenEnergySources: string[];
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: keyof Service
  ) => void;

  
  handleAddService: () => void;
  handleRemoveService: (index: number) => void;
  handleUtilityDropdownChange: (e: SelectChangeEvent<string>) => void;
  handleUtilityEngergySourceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUtilityGreenEnergyProviderInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
}

export default function UtilityDetailsForm({
  formData,
  handleInputChange,
  handleAddService,
  handleRemoveService,
  // handleDropdownChange,
  handleUtilityEngergySourceChange,
  handleUtilityGreenEnergyProviderInputChange,
 handleUtilityDropdownChange,

}: UtilityDetailsFormProps) {
 



  return (
    <Box sx={{ mt: 2 }}>
      {/* Green Energy Fields */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {/* Is Green Energy Powered */}
        <Grid item xs={6}>
       
          <FormControl fullWidth size="small" sx={{ my: 1 }}>
            <InputLabel>   Is Green Energy Powered?</InputLabel>
            <Select
              name="isGreenEnergyPowered"
              value={String(formData.isGreenEnergyPowered)} // Ensure value is a string
              onChange={ handleUtilityDropdownChange}
              label="is GreenEnergy Powered ?"
            >
              <MenuItem value="true">True</MenuItem>
              <MenuItem value="false">False</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Green Energy Provider */}
        <Grid item xs={6}>
          <TextField
            label="Green Energy Provider"
            name="greenEnergyProvider"
            value={formData.greenEnergyProvider}
             onChange={handleUtilityGreenEnergyProviderInputChange}
            fullWidth
            size="small"
          />
        </Grid>

        {/* Green Energy Sources */}
        <Grid item xs={12}>
        <TextField
  label="Green Energy Sources (comma-separated)"
  name="greenEnergySources"
  value={formData.greenEnergySources.join(", ")} // Convert array to string for display
  onChange={handleUtilityEngergySourceChange}
  fullWidth
  size="small"
/>





        </Grid>
      </Grid>

      {/* Existing Services Fields */}
      {formData.services.map((service, index) => (
        <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
          {/* Service Type */}
          <Grid item xs={6}>
            <TextField
              label="Service Type"
              name="type"
              value={service.type}
              onChange={(e) =>
                handleInputChange(e, index, "type" as keyof Service)
              }
              fullWidth
              size="small"
            />
          </Grid>

          {/* Service Provided */}
          <Grid item xs={6}>
            <Select
              value={service.provided ? "Yes" : "No"}
              onChange={(e) =>
                handleInputChange(
                  {
                    target: {
                      name: "provided",
                      value: e.target.value === "Yes" ? true : false,
                    },
                  } as unknown as React.ChangeEvent<HTMLInputElement>,
                  index,
                  "provided" as keyof Service
                )
              }
              fullWidth
              size="small"
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </Grid>

          {/* Service Provider Name */}
          <Grid item xs={6}>
            <TextField
              label="Provider Name"
              name="providerName"
              value={service.providerName}
              onChange={(e) =>
                handleInputChange(e, index, "providerName" as keyof Service)
              }
              fullWidth
              size="small"
            />
          </Grid>

          {/* Service Charge */}
          <Grid item xs={6}>
            <TextField
              label="Service Charge"
              name="serviceCharge"
              value={service.serviceCharge}
              onChange={(e) =>
                handleInputChange(e, index, "serviceCharge" as keyof Service)
              }
              fullWidth
              size="small"
              type="number"
            />
          </Grid>

          {/* Service Frequency */}
          <Grid item xs={6}>
            <TextField
              label="Frequency"
              name="frequency"
              value={service.frequency}
              onChange={(e) =>
                handleInputChange(e, index, "frequency" as keyof Service)
              }
              fullWidth
              size="small"
            />
          </Grid>
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

      {/* Optional Remove Service Button (if applicable) */}
      {formData.services.length > 1 && (
        <IconButton
          onClick={() => handleRemoveService(formData.services.length - 1)}
          sx={{
            mt: 1,
            color: "#DF593D",
          }}
        >
          <RemoveCircleOutline />
        </IconButton>
      )}
    </Box>
  );
}
