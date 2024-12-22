import type { UseFormReturnType } from "@mantine/form";
import {
  Box,
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import Frequency from "../Frequency";

interface PropertyDetailsFormProps {
  form: UseFormReturnType<CreateProperty>;
}

const HoaAndFinancialDetailsForm = ({ form }: PropertyDetailsFormProps) => {
  const fields = [
    {
      label: "Enter HOA Name",
      name: "hoaAndFinancialDetails.name",
      header: "HOA Name",
      type: "text",
    },
    {
      label: "Select Due Frequency",
      name: "hoaAndFinancialDetails.dueFrequency",
      header: "Due Frequency",
      type: "select",
    },
    {
      label: "Enter Due Amount",
      name: "hoaAndFinancialDetails.dueAmount",
      header: "Due Amount",
      type: "number",
    },
    {
      label: "Enter Mortgage Provider",
      name: "hoaAndFinancialDetails.mortgageProvider",
      header: "Mortgage Provider",
      type: "text",
    },
    {
      label: "Enter Outstanding Balance",
      name: "hoaAndFinancialDetails.outstandingBalance",
      header: "Outstanding Balance",
      type: "number",
    },
    {
      label: "Enter Monthly Payment",
      name: "hoaAndFinancialDetails.monthlyPayment",
      header: "Monthly Payment",
      type: "number",
    },
    {
      label: "Enter Mortgage End Date",
      name: "hoaAndFinancialDetails.mortgageEndDate",
      header: "Mortgage End Date",
      type: "date",
    },
    {
      label: "Enter Other Financial Details",
      name: "hoaAndFinancialDetails.otherFinancialDetails",
      header: "Other Financial Details",
      type: "text",
    },
  ];

  return (
    <Box sx={{ mt: 2, width: "100%" }}>
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid size={{ xs: 6 }} key={field.name}>
            {field.type === "select" ? (
              <Frequency
                label={field.header}
                sx={{ my: 1 }}
                onChange={(ev) =>
                  form.setFieldValue(field.name, ev.target.value)
                }
                size="small"
              />
            ) : (
              <>
                <p className="mb-1 text-[12px] text-[#000000]">
                  {field.header}
                </p>

                <TextField
                  size="small"
                  placeholder={field.type === "date" ? "" : field.label}
                  name={field.name}
                  {...form.getInputProps(field.name)}
                  fullWidth
                  sx={{ my: 1 }}
                  type={field.type}
                />
              </>
            )}
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
              name="hoaAndFinancialDetails.hasDue"
              value={form.values.hoaAndFinancialDetails.hasDue ? "Yes" : "No"}
              onChange={(ev) =>
                form.setFieldValue(
                  "hoaAndFinancialDetails.hasDue",
                  ev.target.value === "Yes",
                )
              }
              label="Has Due"
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
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
              name="hoaAndFinancialDetails.isPropertyInMortgage"
              value={
                form.values.hoaAndFinancialDetails.isPropertyInMortgage
                  ? "Yes"
                  : "No"
              }
              onChange={(ev) =>
                form.setFieldValue(
                  "hoaAndFinancialDetails.isPropertyInMortgage",
                  ev.target.value === "Yes",
                )
              }
              label="Property in Mortgage"
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HoaAndFinancialDetailsForm;
