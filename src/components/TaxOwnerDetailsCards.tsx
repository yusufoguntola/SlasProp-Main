import { Box } from "@mui/material";
import OwnerDetails from "./OwnerDetails";
import TaxDetails from "./TaxDetails";

const TaxOwnerDetailsCard = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <TaxDetails property={props.property} />
      <OwnerDetails property={props.property} />
    </Box>
  );
};

export default TaxOwnerDetailsCard;
