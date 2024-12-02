import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
} from "@mui/material";
import type React from "react";

// Define the service interface for better type safety
interface Service {
  type: string;
  provided: boolean;
  providerName: string;
  serviceCharge: string;
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
    field: keyof Service,
  ) => void;

  handleAddService: () => void;
  handleRemoveService: (index: number) => void;
  handleUtilityDropdownChange: (e: SelectChangeEvent<string>) => void;
  handleUtilityEngergySourceChange: (e: SelectChangeEvent<string[]>) => void;
  handleUtilityGreenEnergyProviderInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}

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

export default function UtilityDetailsForm({
  formData,
  handleInputChange,
  handleAddService,
  handleRemoveService,
  handleUtilityDropdownChange,
  handleUtilityEngergySourceChange,
  handleUtilityGreenEnergyProviderInputChange,
}: UtilityDetailsFormProps) {
  return (
    <Box sx={{ mt: 2, width: "100%" }}>
      {/* Green Energy Fields */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {/* Is Green Energy Powered */}
        <Grid item xs={6}>
          <p className="text-[12px] text-[#000000]">
            Is it Green Energy Powered?
          </p>
          <FormControl fullWidth size="small" sx={{ my: 1 }}>
            <Select
              name="isGreenEnergyPowered"
              value={String(formData.isGreenEnergyPowered)} // Ensure value is a string
              onChange={handleUtilityDropdownChange}
              label="Is Green Energy Powered?"
            >
              <MenuItem value="true">Yes</MenuItem>
              <MenuItem value="false">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Green Energy Provider */}
        <Grid item xs={6}>
          <p className="mb-2 text-[12px] text-[#000000]">
            Green Energy Provider
          </p>
          <TextField
            label="Enter Green Energy Provider"
            name="greenEnergyProvider"
            value={formData.greenEnergyProvider}
            onChange={handleUtilityGreenEnergyProviderInputChange}
            fullWidth
            size="small"
          />
        </Grid>

        {/* Green Energy Sources */}
        <Grid item xs={12}>
          <p className="mb-1 text-[12px] text-[#000000]">
            Green Energy Sources
          </p>
          <p className="text-[10px]">Select one or more sources.</p>
          <FormControl fullWidth size="small">
            <InputLabel>Green Energy Sources</InputLabel>
            <Select
              multiple
              name="greenEnergySources"
              value={formData.greenEnergySources}
              onChange={(e) =>
                handleUtilityEngergySourceChange(
                  e as SelectChangeEvent<string[]>,
                )
              }
              renderValue={(selected) => selected.join(", ")}
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
      {formData.services.map((service, index) => (
        <Grid
          container
          spacing={2}
          key={service.type}
          sx={{ mb: 2, alignItems: "center" }}
        >
          {/* Service Type */}
          <Grid item xs={6}>
            <p className="mb-1 text-[12px] text-[#000000] mt-4">Service Type</p>
            <FormControl fullWidth size="small">
              <InputLabel>Service Type</InputLabel>
              <Select
                value={service.type}
                onChange={(e) =>
                  handleInputChange(
                    {
                      target: {
                        name: "type",
                        value: e.target.value,
                      },
                    } as unknown as React.ChangeEvent<HTMLInputElement>,
                    index,
                    "type" as keyof Service,
                  )
                }
              >
                {serviceTypeOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Service Provided */}
          <Grid item xs={6}>
            <p className="mb-1 text-[12px] text-[#000000] mt-4">
              Is Service Provided?
            </p>
            <Select
              value={service.provided ? "Yes" : "No"}
              onChange={(e) =>
                handleInputChange(
                  {
                    target: {
                      name: "provided",
                      value: e.target.value === "Yes",
                    },
                  } as unknown as React.ChangeEvent<HTMLInputElement>,
                  index,
                  "provided" as keyof Service,
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
          <Grid item xs={6}>
            <p className="mb-1 text-[12px] text-[#000000]">Provider Name</p>
            <TextField
              label="Enter provider name"
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
            <p className="mb-1 text-[12px] text-[#000000]"> Service Charge</p>
            <TextField
              label="Enter service charge"
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

          {/* Frequency */}
          <Grid item xs={6}>
            <p className="mb-1 text-[12px] text-[#000000]">Frequency</p>
            <TextField
              label="Enter Frequency"
              name="frequency"
              value={service.frequency}
              onChange={(e) =>
                handleInputChange(e, index, "frequency" as keyof Service)
              }
              fullWidth
              size="small"
            />
          </Grid>

          {/* Delete Button */}
          {index > 0 && (
            <Grid item xs={6} sx={{ textAlign: "right" }}>
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
