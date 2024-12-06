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

interface PropertyDetailsFormProps {
  form: UseFormReturnType<CreateProperty>;
}

const HoaAndFinancialDetailsForm = ({ form }: PropertyDetailsFormProps) => {
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
      label: " Enter Mortgage Provider",
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

  return (
    <Box sx={{ mt: 2, width: "100%" }}>
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid size={{ xs: 6 }} key={field.name}>
            <p className="mb-1 text-[12px] text-[#000000]">{field.header}</p>

            <TextField
              label={field.label}
              size="small"
              name={field.name}
              {...form.getInputProps(field.name)}
              fullWidth
              sx={{ my: 1 }}
              type={
                [
                  "hoaAndFinancialDetails.monthlyPayment",
                  "hoaAndFinancialDetails.outstandingBalance",
                  "hoaAndFinancialDetails.dueAmount",
                ].includes(field.name)
                  ? "number"
                  : field.name === "hoaAndFinancialDetails.mortgageEndDate"
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
              name="hoaAndFinancialDetails.hasDue"
              value={form.values.hoaAndFinancialDetails.hasDue} // Ensure value is a string
              onChange={(ev) =>
                form.setFieldValue(
                  "hoaAndFinancialDetails.hasDue",
                  ev.target.value === "true",
                )
              }
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
              name="hoaAndFinancialDetails.isPropertyInMortgage"
              value={form.values.hoaAndFinancialDetails.isPropertyInMortgage} // Ensure value is a string
              onChange={(ev) =>
                form.setFieldValue(
                  "hoaAndFinancialDetails.isPropertyInMortgage",
                  ev.target.value === "true",
                )
              }
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
