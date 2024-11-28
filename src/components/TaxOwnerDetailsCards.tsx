<<<<<<< HEAD
import { Box } from "@mui/material";

import { OwnerDetails } from "./OwnerDetails";
import { PropertyCardProps } from "./PropertyCard";
import { TaxDetails } from "./TaxDetails";

export interface TaxOwnerDetailsCardProps {
  taxDetails: PropertyCardProps["taxDetails"];
  ownerDetails: PropertyCardProps["ownerDetails"];
}

export function TaxOwnerDetailsCard({
  taxDetails,
  ownerDetails,
}: TaxOwnerDetailsCardProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <TaxDetails {...taxDetails} />
      <OwnerDetails {...ownerDetails} />
    </Box>
  );
}
=======
import { Box } from "@mui/material";

import { OwnerDetails } from "./OwnerDetails";
import { PropertyCardProps } from "./PropertyCard";
import { TaxDetails } from "./TaxDetails";

export interface TaxOwnerDetailsCardProps {
  taxDetails: PropertyCardProps["taxDetails"];
  ownerDetails: PropertyCardProps["ownerDetails"];
}

export function TaxOwnerDetailsCard({
  taxDetails,
  ownerDetails,
}: TaxOwnerDetailsCardProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <TaxDetails {...taxDetails} />
      <OwnerDetails {...ownerDetails} />
    </Box>
  );
}
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c
