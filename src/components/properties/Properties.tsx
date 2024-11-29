import {
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material"; // Import SelectChangeEvent

// Define the prop types using TypeScript interfaces
interface PropertyTypeSelectorProps {
  propertyType: string; // Selected property type
  setPropertyType: (type: string) => void; // Function to set property type
  propertySubType: string; // Selected property subtype
  setPropertySubType: (subType: string) => void; // Function to set property subtype
}

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

      <Stack spacing={6} direction="row" sx={{ my: 1,  }}>
        {/* Property Type Dropdown */}
        <FormControl sx={{ mx: 2, minWidth: 320 }} size="small">
          <Select
            value={propertyType || ""}
            onChange={handleTypeChange}
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
              value={propertySubType || ""}
              onChange={(e: SelectChangeEvent<string>) =>
                setPropertySubType(e.target.value)
              }
              displayEmpty
            >
              <MenuItem value="">
           
                 <FormLabel sx={{ color: "black", fontSize: "14px" }}>
         Select sub property type
        </FormLabel>
              </MenuItem>
              {subTypes[propertyType]?.map((subType) => (
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
