import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useFormContext } from "./form-context";

const HoaAndFinancialDetailsForm: React.FC = () => {
  const form = useFormContext();

  const fields = [
    {
      label: "Enter HOA Name",
      name: "hoaAndFinancialDetails.name",
      header: "HOA Name",
    },
    {
      label: "Enter Due Frequency",
      name: "hoaAndFinancialDetails.dueFrequency",
      header: "Due Frequency",
    },
    {
      label: "Enter Due Amount",
      name: "hoaAndFinancialDetails.dueAmount",
      header: "Due Amount",
    },
    {
      label: "Enter Mortgage Provider",
      name: "hoaAndFinancialDetails.mortgageProvider",
      header: "Mortgage Provider",
    },
    {
      label: "Enter Outstanding Balance",
      name: "hoaAndFinancialDetails.outstandingBalance",
      header: "Outstanding Balance",
    },
    {
      label: "Enter Monthly Payment",
      name: "hoaAndFinancialDetails.monthlyPayment",
      header: "Monthly Payment",
    },
    {
      label: "Enter Mortgage End Date",
      name: "hoaAndFinancialDetails.mortgageEndDate",
      header: "Mortgage End Date",
    },
    {
      label: "Enter Other Financial Details",
      name: "hoaAndFinancialDetails.otherFinancialDetails",
      header: "Other Financial Details",
    },
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    form.setFieldValue(name, value);
  };

  const handleDropdownChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    if (name) {
      form.setFieldValue(name, value === "true");
    }
  };

  return (
    <Box sx={{ mt: 3, width: "100%" }}>
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid item xs={12} sm={6} key={field.name}>
            <Typography variant='body2' color='textSecondary' sx={{ mb: 0.5 }}>
              {field.header}
            </Typography>
            <TextField
              label={field.label}
              size='small'
              name={field.name}
              value={
                form.values.hoaAndFinancialDetails[
                  field?.name.split(
                    "."
                  )[1] as keyof typeof form.values.hoaAndFinancialDetails
                ]
              }
              onChange={handleInputChange}
              fullWidth
              type={
                ["monthlyPayment", "outstandingBalance", "dueAmount"].includes(
                  field.name.split(".")[1]
                )
                  ? "number"
                  : field.name.split(".")[1] === "mortgageEndDate"
                  ? "date"
                  : "text"
              }
              sx={{ my: 1 }}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant='body2' color='textSecondary' sx={{ mb: 0.5 }}>
            Has Due?
          </Typography>
          <FormControl fullWidth size='small' sx={{ my: 1 }}>
            <InputLabel>Has Due</InputLabel>
            <Select
              name='hoaAndFinancialDetails.hasDue'
              value={String(form.values.hoaAndFinancialDetails.hasDue)}
              onChange={handleDropdownChange}
              label='Has Due'
            >
              <MenuItem value='true'>Yes</MenuItem>
              <MenuItem value='false'>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='body2' color='textSecondary' sx={{ mb: 0.5 }}>
            Property in Mortgage?
          </Typography>
          <FormControl fullWidth size='small' sx={{ my: 1 }}>
            <InputLabel>Property in Mortgage</InputLabel>
            <Select
              name='hoaAndFinancialDetails.isPropertyInMortgage'
              value={String(
                form.values.hoaAndFinancialDetails.isPropertyInMortgage
              )}
              onChange={handleDropdownChange}
              label='Property in Mortgage'
            >
              <MenuItem value='true'>Yes</MenuItem>
              <MenuItem value='false'>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HoaAndFinancialDetailsForm;
