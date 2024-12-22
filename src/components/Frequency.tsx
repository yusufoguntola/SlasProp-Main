import {
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  type SelectProps,
} from "@mui/material";

interface Option {
  value: string | number;
  label: string;
}

const frequencies: Array<Option> = [
  { value: "Daily", label: "Daily" },
  { value: "Weekly", label: "Weekly" },
  { value: "Monthly", label: "Monthly" },
  { value: "Quarterly", label: "Quarterly" },
];

export default function Frequency({
  label,
  options = frequencies,
  ...props
}: SelectProps & { options?: Array<Option> }) {
  return (
    <FormControl fullWidth>
      <FormLabel sx={{ fontSize: "12px", mb: 0.5 }}>{label}</FormLabel>
      <Select {...props}>
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
