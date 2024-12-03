import { Box } from "@mui/material";

import { OwnerDetails } from "./OwnerDetails";
import { PropertyCardProps } from "./PropertyCard";

export interface TaxOwnerDetailsCardProps {
  // taxDetails: PropertyCardProps["taxDetails"];
  ownerDetails: PropertyCardProps["owner"];
}

export function TaxOwnerDetailsCard({
  // taxDetails,
  ownerDetails,
}: TaxOwnerDetailsCardProps) {
  return (
    <Box sx={{ display: "flex" }}>
      {/* <TaxDetails {...taxDetails} /> */}
      <OwnerDetails {...ownerDetails} />
    </Box>
  );
}
