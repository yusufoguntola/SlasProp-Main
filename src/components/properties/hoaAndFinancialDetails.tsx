import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";

interface HoaAndFinancialDetailsProps {
  formData: {
    name: string;
    hasDue: boolean;
    dueFrequency: string;
    dueAmount: number;
    isPropertyInMortgage: boolean;
    mortgageProvider: string;
    outstandingBalance: number;
    monthlyPayment: number;
    mortgageEndDate: string;
    otherFinancialDetails: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDropdownChange: (e: SelectChangeEvent<string>) => void;
}

const HoaAndFinancialDetailsForm: React.FC<HoaAndFinancialDetailsProps> = ({
  formData,
  handleInputChange,
  handleDropdownChange,
}) => {
  const fields = [
    { label: "HOA Name", name: "name", value: formData.name },
    {
      label: "Due Frequency",
      name: "dueFrequency",
      value: formData.dueFrequency,
    },
    { label: "Due Amount", name: "dueAmount", value: formData.dueAmount },
    {
      label: "Mortgage Provider",
      name: "mortgageProvider",
      value: formData.mortgageProvider,
    },
    {
      label: "Outstanding Balance",
      name: "outstandingBalance",
      value: formData.outstandingBalance,
    },
    {
      label: "Monthly Payment",
      name: "monthlyPayment",
      value: formData.monthlyPayment,
    },
    {
      label: "Mortgage End Date",
      name: "mortgageEndDate",
      value: formData.mortgageEndDate,
    },
    {
      label: "Other Financial Details",
      name: "otherFinancialDetails",
      value: formData.otherFinancialDetails,
    },
  ];

  return (
    <Box sx={{ mt: 2, width: "600px" }}>
      <Grid container spacing={2}>
        {fields.map((field, index) => (
          <Grid item xs={6} key={index}>
            <TextField
              label={field.label}
              size="small"
              name={field.name}
              value={
                field.name === "mortgageEndDate" ? field.value : field.value
              } // handle date type if needed
              onChange={handleInputChange}
              fullWidth
              sx={{ my: 1 }}
              type={field.name === "mortgageEndDate" ? "date" : "text"} // Add date type for mortgageEndDate
            />
          </Grid>
        ))}
      </Grid>

      {/* Dropdown Fields */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <FormControl fullWidth size="small" sx={{ my: 1 }}>
            <InputLabel>Has Due</InputLabel>
            <Select
              name="hasDue"
              value={String(formData.hasDue)} // Ensure value is a string
              onChange={handleDropdownChange}
              label="Has Due"
            >
              <MenuItem value="true">True</MenuItem>
              <MenuItem value="false">False</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth size="small" sx={{ my: 1 }}>
            <InputLabel>Property in Mortgage</InputLabel>
            <Select
              name="isPropertyInMortgage"
              value={String(formData.isPropertyInMortgage)} // Ensure value is a string
              onChange={handleDropdownChange}
              label="Property in Mortgage"
            >
              <MenuItem value="true">True</MenuItem>
              <MenuItem value="false">False</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HoaAndFinancialDetailsForm;
