import React from "react";
import { Box } from "@mui/material";
import TaxDetails from "./TaxDetails";
import OwnerDetails from "./OwnerDetails";

const TaxOwnerDetailsCard = (props) => {

    return (
        <Box sx={{display:'flex'}}>
            <TaxDetails property= {props.property}/>
            <OwnerDetails property={props.property}/>
        </Box>
    
    )

}

export default TaxOwnerDetailsCard