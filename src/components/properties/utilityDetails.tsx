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
import { useFormContext } from "./form-context";

// Define the service interface for better type safety
interface Service {
  type: string;
  provided: boolean;
  providerName: string;
  serviceCharge: string;
  frequency: string;
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

export default function UtilityDetailsForm() {
  const { setFieldValue, values } = useFormContext();

  // Handle change for dropdown values (e.g., 'Is Green Energy Powered')
  const handleUtilityDropdownChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFieldValue(`utilitiesDetails.${name}`, value === "true");
  };

  // Handle change for energy sources
  const handleUtilityEngergySourceChange = (e: SelectChangeEvent<string[]>) => {
    const greenEnergySources = e.target.value as string[];
    setFieldValue("utilitiesDetails.greenEnergySources", greenEnergySources);
  };

  // Handle input changes for green energy provider
  const handleUtilityGreenEnergyProviderInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFieldValue(`utilitiesDetails.${name}`, value);
  };

  // Add a new service to the services array
  const handleAddService = () => {
    const newService = {
      type: "",
      provided: true,
      providerName: "",
      serviceCharge: "",
      frequency: "",
    };
    setFieldValue("utilitiesDetails.services", [
      ...values.utilitiesDetails.services,
      newService,
    ]);
  };

  // Remove a service from the services array
  const handleRemoveService = (index: number) => {
    const updatedServices = values.utilitiesDetails.services.filter(
      (_, i) => i !== index
    );
    setFieldValue("utilitiesDetails.services", updatedServices);
  };

  return (
    <Box sx={{ mt: 2, width: "100%" }}>
      {/* Green Energy Fields */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {/* Is Green Energy Powered */}
        <Grid item xs={6}>
          <p className='text-[12px] text-[#000000]'>
            Is it Green Energy Powered?
          </p>
          <FormControl fullWidth size='small' sx={{ my: 1 }}>
            <Select
              name='isGreenEnergyPowered'
              value={String(values.utilitiesDetails.isGreenEnergyPowered)} // Ensure value is a string
              onChange={handleUtilityDropdownChange}
              label='Is Green Energy Powered?'
            >
              <MenuItem value='true'>Yes</MenuItem>
              <MenuItem value='false'>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Green Energy Provider */}
        <Grid item xs={6}>
          <p className='mb-2 text-[12px] text-[#000000]'>
            Green Energy Provider
          </p>
          <TextField
            label='Enter Green Energy Provider'
            name='greenEnergyProvider'
            value={values.utilitiesDetails.greenEnergyProvider}
            onChange={handleUtilityGreenEnergyProviderInputChange}
            fullWidth
            size='small'
          />
        </Grid>

        {/* Green Energy Sources */}
        <Grid item xs={12}>
          <p className='mb-1 text-[12px] text-[#000000]'>
            Green Energy Sources
          </p>
          <p className='text-[10px]'>Select one or more sources.</p>
          <FormControl fullWidth size='small'>
            <InputLabel>Green Energy Sources</InputLabel>
            <Select
              multiple
              name='greenEnergySources'
              value={values.utilitiesDetails.greenEnergySources}
              onChange={handleUtilityEngergySourceChange}
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
      {values.utilitiesDetails.services.map((service, index) => (
        <Grid
          container
          spacing={2}
          key={index} // It's better to use the index for key here as type might not be unique
          sx={{ mb: 2, alignItems: "center" }}
        >
          {/* Service Type */}
          <Grid item xs={6}>
            <p className='mb-1 text-[12px] text-[#000000] mt-4'>Service Type</p>
            <FormControl fullWidth size='small'>
              <InputLabel>Service Type</InputLabel>
              <Select
                value={service.type}
                onChange={(e) => {
                  setFieldValue(
                    `utilitiesDetails.services[${index}]?.type`,
                    e.target.value
                  );
                }}
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
            <p className='mb-1 text-[12px] text-[#000000] mt-4'>
              Is Service Provided?
            </p>
            <Select
              value={service.provided ? "Yes" : "No"}
              onChange={(e) => {
                console.log(values.utilitiesDetails.services[index].provided);
              }}
              fullWidth
              size='small'
            >
              <MenuItem value='Yes'>Yes</MenuItem>
              <MenuItem value='No'>No</MenuItem>
            </Select>
          </Grid>

          {/* Provider Name */}
          <Grid item xs={6}>
            <p className='mb-1 text-[12px] text-[#000000]'>Provider Name</p>
            <TextField
              label='Enter provider name'
              name='providerName'
              value={service.providerName}
              onChange={(e) =>
                setFieldValue(
                  `utilitiesDetails.services[${index}].providerName`,
                  e.target.value
                )
              }
              fullWidth
              size='small'
            />
          </Grid>

          {/* Service Charge */}
          <Grid item xs={6}>
            <p className='mb-1 text-[12px] text-[#000000]'>Service Charge</p>
            <TextField
              label='Enter service charge'
              name='serviceCharge'
              value={service.serviceCharge}
              onChange={(e) =>
                setFieldValue(
                  `utilitiesDetails.services[${index}].serviceCharge`,
                  e.target.value
                )
              }
              fullWidth
              size='small'
              type='number'
            />
          </Grid>

          {/* Frequency */}
          <Grid item xs={6}>
            <p className='mb-1 text-[12px] text-[#000000]'>Frequency</p>
            <TextField
              label='Enter Frequency'
              name='frequency'
              value={service.frequency}
              onChange={(e) =>
                setFieldValue(
                  `utilitiesDetails.services[${index}].frequency`,
                  e.target.value
                )
              }
              fullWidth
              size='small'
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
