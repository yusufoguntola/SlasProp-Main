import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  type SelectChangeEvent,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

// Define the prop types using TypeScript interfaces
interface PropertyTypeSelectorProps {
  propertyType: string; // Selected property type
  setPropertyType: (type: string) => void; // Function to set property type
  propertySubType: string; // Selected property subtype
  setPropertySubType: (subType: string) => void; // Function to set property subtype
}

const schema = yup.object({
  propertyType: yup.string().required("Property type is required"),
  propertySubType: yup.string().when("propertyType", {
    is: (type: string) => type !== "",
    then: (schema) => schema.required("Property subtype is required"),
  }),
});

export default function PropertyTypeSelector({
  propertyType,
  setPropertyType,
  propertySubType,
  setPropertySubType,
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

  // Correct the event type here
  const handleTypeChange = (e: SelectChangeEvent<string>) => {
    setPropertyType(e.target.value); // No need to cast now, already inferred as string
    setPropertySubType(""); // Reset subtype when type changes
  };

  const {
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      propertyType: "",
      propertySubType: "",
    },
  });

  return (
    <>
      <Stack
        spacing={4}
        direction={{ xs: "column", sm: "row" }}
        alignItems='flex-start'
        gap={2}
      >
        {/* Property Type */}
        <FormControl
          sx={{
            minWidth: { xs: "100%", sm: 300 },
            backgroundColor: "transparent",
            borderRadius: 1,
            flex: 1,
          }}
          size='small'
          error={!!errors.propertyType}
        >
          <FormLabel
            sx={{
              color: "black",
              fontSize: "14px",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            Property Type
          </FormLabel>
          <Controller
            name='propertyType'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                value={propertyType}
                onChange={(e) => {
                  handleTypeChange(e);
                  field.onChange(e);
                }}
                displayEmpty
                sx={{
                  "& .MuiSelect-select": { padding: "10px" },
                  fontSize: "14px",
                }}
              >
                <MenuItem value=''>
                  <span style={{ color: "#888" }}>Select type of property</span>
                </MenuItem>
                {Object.keys(subTypes).map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <FormHelperText>{errors.propertyType?.message}</FormHelperText>
        </FormControl>

        {/* Property SubType */}
        <FormControl
          sx={{
            backgroundColor: "transparent",
            borderRadius: 1,
            flex: 1,
          }}
          size='small'
          error={!!errors.propertySubType}
        >
          <FormLabel
            sx={{
              color: "black",
              fontSize: "14px",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            Property SubType
          </FormLabel>
          <Controller
            name='propertySubType'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                value={propertySubType}
                onChange={(e) => {
                  setPropertySubType(e.target.value);
                  field.onChange(e);
                }}
                displayEmpty
                sx={{
                  "& .MuiSelect-select": { padding: "10px" },
                  fontSize: "14px",
                }}
              >
                <MenuItem value=''>
                  <span style={{ color: "#888" }}>
                    Select sub property type
                  </span>
                </MenuItem>
                {subTypes[propertyType]?.map((subType) => (
                  <MenuItem key={subType} value={subType}>
                    {subType}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <FormHelperText>{errors.propertySubType?.message}</FormHelperText>
        </FormControl>
      </Stack>
    </>
  );
}
