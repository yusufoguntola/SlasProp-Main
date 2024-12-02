import { Box } from "@mui/material";

import { OwnerDetails, type OwnerDetailsProps } from "./OwnerDetails";
import { TaxDetails, type TaxDetailsProps } from "./TaxDetails";

export interface TaxOwnerDetailsCardProps {
	taxDetails: TaxDetailsProps;
	// taxDetails: PropertyCardProps["taxDetails"];
	// ownerDetails: PropertyCardProps["ownerDetails"];
	ownerDetails: OwnerDetailsProps;
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
