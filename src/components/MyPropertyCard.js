import { Box, Button, IconButton, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from "react";

const MyPropertyCard =(props) =>{

    return (
        <Box sx={{borderBottom:"1px solid lightgray", pb:4,mt :4, display: 'flex'}}>
            <Box component="img"
                src={props.property.imageUrl.default}
                sx={{
                    height: 150,
                    width: 200,
                }}
            />
            <Box sx={{display:'flex', flexDirection:'column', ml:4 }}>
                <Button sx={{backgroundColor:'green', 
                            color:'white',
                            '&:hover': {backgroundColor: 'green'},
                            borderRadius:'16px',
                            fontSize:'8px',
                            maxWidth:"70px",
                            px:2.5
                            }}>
                    Active
                </Button>
                <Typography sx={{mt:0.5, fontStyle:"italic", color:"#26a69a", fontWeight:'bold'}}>
                    {props.property.price}
                </Typography>
                <Typography sx={{fontSize:"9px", color:'grey'}}>
                    <LocationOnIcon sx={{color:'#DF593D',fontSize:"14px"}}/>
                    {props.property.location}
                </Typography>
                <Typography sx={{mt:0.5, fontSize:"14px", fontWeight:'bold'}}>
                    Description
                </Typography>
                <Typography sx={{mt:0.5, fontSize:"9px", color:'grey'}}>
                {props.property.desc}
                </Typography>
                <IconButton size='small' sx={{  backgroundColor:"white", 
                                            color:"#DF593D",
                                            "&:hover": { backgroundColor: "white" },
                                            fontSize:'10px',
                                            fontWeight:"bold",
                                            mt:2, 
                                            maxWidth:"90px",
                                            mx:-1
                                            }}>
                            View Details <ArrowForwardIcon sx={{fontSize:"12px", color:'#DF593D', ml:0.5}}/>
                </IconButton>
            </Box>
        </Box>

    )
}

export default MyPropertyCard