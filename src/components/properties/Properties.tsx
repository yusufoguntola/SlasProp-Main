import { useForm } from "@mantine/form";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

// Define the prop types using TypeScript interfaces

export default function PropertyTypeSelector() {
  const form = useForm();
  const subTypes: { [key: string]: string[] } = {
    Residential: [
      "Multifamily",
      "Houses",
      "Mobile homes",
      "Single-family home",
      "Townhouses",
      "Duplex",
      "Villa",
      "Apartment",
      "Detached house",
      "Condominium",
      "Cabins",
      "Assisted Living",
      "Co-ops",
    ],
    Commercial: [
      "Office",
      "Retail",
      "Malls",
      "Hotel and hospitality",
      "REITs",
      "Mixed-use property",
      "Self-storage",
      "Development property",
    ],
    Industrial: [
      "Warehouses",
      "Manufacturing facilities",
      "Data Centres",
      "Distribution centres",
    ],
    Land: ["Raw Land", "Subdivided Land", "Infill Land"],
    "Special purpose": [
      "Religious buildings",
      "Private Schools",
      "Hospitals",
      "Theatres",
      "Museums",
      "Campgrounds",
      "Libraries",
      "Government buildings",
    ],
  };

  return (
    <>
      <Stack
        spacing={4}
        direction={{ xs: "column", sm: "row" }}
        alignItems='flex-start'
        gap={2}
      >
        {/* Property Type Dropdown */}
        <FormControl
          sx={{
            minWidth: { xs: "100%", sm: 300 },
            backgroundColor: "transparent",
            borderRadius: 1,
            flex: 1,
          }}
          size='small'
          error={!!form.errors.propertyType}
        >
          <FormLabel
            sx={{
              color: "black",
              fontSize: "13px",
              mb: 1,
            }}
          >
            Property Type
          </FormLabel>
          <Select
            displayEmpty
            {...form.getInputProps("propertyType")}
            onChange={(event) => {
              form.setFieldValue("propertyType", event.target.value);
              form.setFieldValue("propertySubType", "");
            }}
          >
            <MenuItem value='' disabled>
              <em>Select type of property</em>
            </MenuItem>
            {Object.keys(subTypes).map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
          {form.errors.propertyType && (
            <FormHelperText>{form.errors.propertyType}</FormHelperText>
          )}
        </FormControl>
        <FormControl
          sx={{
            backgroundColor: "transparent",
            borderRadius: 1,
            flex: 1,
            minWidth: { xs: "100%", sm: 300 },
          }}
          size='small'
          error={!!form.errors.propertySubType}
        >
          <FormLabel
            sx={{
              color: "black",
              fontSize: "13px",

              mb: 1,
            }}
          >
            Property SubType
          </FormLabel>
          <Select
            displayEmpty
            disabled={!form.values.propertyType}
            {...form.getInputProps("propertySubType")}
          >
            <MenuItem value='' disabled>
              <FormLabel sx={{ color: "black", fontSize: "14px" }}>
                Select sub property type
              </FormLabel>
            </MenuItem>
            {subTypes[form.getValues().propertyType]?.map((subType) => (
              <MenuItem key={subType} value={subType}>
                {subType}
              </MenuItem>
            ))}
          </Select>
          {form.errors.propertySubType && (
            <FormHelperText>{form.errors.propertySubType}</FormHelperText>
          )}
        </FormControl>
      </Stack>
    </>
  );
}
