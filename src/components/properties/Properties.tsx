import type { UseFormReturnType } from "@mantine/form";
import { FormControl, FormLabel, MenuItem, Select, Stack } from "@mui/material"; // Import SelectChangeEvent

// Define the prop types using TypeScript interfaces
interface PropertyTypeSelectorProps {
  form: UseFormReturnType<CreateProperty>;
}

export default function PropertyTypeSelector({
  form,
}: PropertyTypeSelectorProps) {
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
      <Stack spacing={38} direction="row" sx={{ my: 1, mt: 2 }}>
        <FormLabel sx={{ color: "black", fontSize: "12px" }}>
          Property Type
        </FormLabel>
        <FormLabel sx={{ color: "black", fontSize: "12px" }}>
          Property SubType
        </FormLabel>
      </Stack>

      <Stack spacing={6} direction="row" sx={{ my: 1 }}>
        {/* Property Type Dropdown */}
        <FormControl sx={{ mx: 2, minWidth: 320 }} size="small">
          <Select
            value={form.values.propertyType}
            onChange={(val) =>
              form.setFieldValue("propertyType", val.target.value)
            }
            displayEmpty
          >
            <MenuItem value="">
              <FormLabel sx={{ color: "black", fontSize: "14px" }}>
                Select type of property
              </FormLabel>
            </MenuItem>
            {Object.keys(subTypes).map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Property SubType Dropdown */}
        {/* {propertyType && ( */}
        <FormControl sx={{ mx: 2, minWidth: 320 }} size="small">
          <Select
            value={form.values.propertySubType}
            onChange={(e) =>
              form.setFieldValue("propertySubType", e.target.value)
            }
            displayEmpty
          >
            <MenuItem value="">
              <FormLabel sx={{ color: "black", fontSize: "14px" }}>
                Select sub property type
              </FormLabel>
            </MenuItem>
            {subTypes[form.values.propertyType]?.map((subType: string) => (
              <MenuItem key={subType} value={subType}>
                {subType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* )} */}
      </Stack>
    </>
  );
}
