import {
  Box,
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
} from "@mui/material";
import type React from "react";

interface HoaAndFinancialDetailsProps {
  formData: {
    name: string;
    hasDue: boolean;
    dueFrequency: string;
    dueAmount: string;
    isPropertyInMortgage: boolean;
    mortgageProvider: string;
    outstandingBalance: string;
    monthlyPayment: string;
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
    {
      label: "Enter HOA Name",
      name: "name",
      value: formData.name,
      header: "HOA Name",
    },
    {
      label: "Enter Due Frequency",
      name: "dueFrequency",
      value: formData.dueFrequency,
      header: "Due Frequency",
    },
    {
      label: "Enter Due Amount",
      name: "dueAmount",
      value: formData.dueAmount,
      header: "Due Amount",
    },
    {
      label: " Enter Mortgage Provider",
      name: "mortgageProvider",
      value: formData.mortgageProvider,
      header: "Mortgage Provider",
    },
    {
      label: "Enter Outstanding Balance",
      name: "outstandingBalance",
      value: formData.outstandingBalance,
      header: "Outstanding Balance",
    },
    {
      label: "Enter Monthly Payment",
      name: "monthlyPayment",
      value: formData.monthlyPayment,
      header: "Monthly Payment",
    },
    {
      label: "Enter Mortgage End Date",
      name: "mortgageEndDate",
      value: formData.mortgageEndDate,
      header: "Mortgage End Date",
    },
    {
      label: "Enter Other Financial Details",
      name: "otherFinancialDetails",
      value: formData.otherFinancialDetails,
      header: "Other Financial Details",
    },
  ];

  return (
    <Box sx={{ mt: 2, width: "100%" }}>
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid size={{ xs: 6 }} key={field.value}>
            <p className="mb-1 text-[12px] text-[#000000]">{field.header}</p>
            {/* <TextField
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
            /> */}

            <TextField
              label={field.label}
              size="small"
              name={field.name}
              value={field.value}
              onChange={handleInputChange}
              fullWidth
              sx={{ my: 1 }}
              type={
                ["monthlyPayment", "outstandingBalance", "dueAmount"].includes(
                  field.name,
                )
                  ? "number"
                  : field.name === "mortgageEndDate"
                    ? "date"
                    : "text"
              }
            />
          </Grid>
        ))}
      </Grid>

      {/* Dropdown Fields */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid size={{ xs: 6 }}>
          <p className="mb-1 text-[12px] text-[#000000]">Has Due?</p>
          <FormControl fullWidth size="small" sx={{ my: 1 }}>
            <InputLabel>Has Due</InputLabel>
            <Select
              name="hasDue"
              value={String(formData.hasDue)} // Ensure value is a string
              onChange={handleDropdownChange}
              label="Has Due"
            >
              <MenuItem value="true">Yes</MenuItem>
              <MenuItem value="false">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <p className="mb-1 text-[12px] text-[#000000]">
            Property in Mortgage?
          </p>
          <FormControl fullWidth size="small" sx={{ my: 1 }}>
            <InputLabel>Property in Mortgage</InputLabel>
            <Select
              name="isPropertyInMortgage"
              value={String(formData.isPropertyInMortgage)} // Ensure value is a string
              onChange={handleDropdownChange}
              label="Property in Mortgage"
            >
              <MenuItem value="true">Yes</MenuItem>
              <MenuItem value="false">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HoaAndFinancialDetailsForm;
