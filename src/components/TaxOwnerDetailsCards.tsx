import { PropertiesData } from "@/types";
import { Box } from "@mui/material";
import { OwnerDetails } from "./OwnerDetails";
import { TaxDetails } from "./TaxDetails";

const TaxOwnerDetailsCard = ({ property }: { property: PropertiesData }) => {
  const { OwnerDetail } = property;
  return (
    <Box sx={{ display: "flex" }}>
      <TaxDetails property={property} />
      <OwnerDetails property={OwnerDetail} />
    </Box>
  );
};

export default TaxOwnerDetailsCard;
