import { Box } from "@mui/material";

import { OwnerDetails, type OwnerDetailsProps } from "./OwnerDetails";
import { TaxDetails, type TaxDetailsProps } from "./TaxDetails";

export interface TaxOwnerDetailsCardProps {
  taxDetails: TaxDetailsProps;
  ownerDetails: OwnerDetailsProps;
}

export function TaxOwnerDetailsCard({
  taxDetails,
  ownerDetails,
}: TaxOwnerDetailsCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
      }}
    >
      <TaxDetails {...taxDetails} />
      <OwnerDetails {...ownerDetails} />
    </Box>
  );
}
