import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Box } from '@mui/material';

const FeaturePropertyCard = (props) => {
     
    return (
            <Card sx={{ border:'1px solid #black'}}>
            <CardActionArea component='span' sx={{display:"flex", flexDirection:"column"}}>
                <CardMedia
                    component="img"
                    image={props.property.imageUrl.default}          
                    sx={{maxWidth:"250px", height:"150px"}}
                    alt="property-image"
                />
            <CardContent>
                <Button size='small' 
                        sx={{   backgroundColor:"#DF593D",
                                color:"white",
                                "&:hover": { backgroundColor: "#DF593D" },
                                width:50,
                                borderRadius:4,
                                fontSize:"8px",
                                position:"absolute",
                                marginTop:"-25px",
                                marginLeft:"-30px"                                
                            }}>
                    Featured
                </Button>
                <Typography gutterBottom sx={{fontWeight:"bold", fontSize:'14px',marginLeft:"-30px"}}>
                    {props.property.heading}
                </Typography>
                <Typography sx={{color:"black",fontSize:"10px",marginLeft:"-30px"}}>
                    {props.property.desc}
                </Typography>
                <Box  sx={{  display:"flex",
                            marginLeft:"-30px", 
                            borderTop:"1px solid lightgrey",
                            borderBottom:"1px solid lightgrey",
                            mt:2,
                            py:1,                            
                            }}>
                    <Typography sx={{borderRight:"1px solid lightgrey", pr:2}}>
                        {props.property.area}
                    </Typography>
                    <Typography sx={{pl:2, color:"#26a69a"}}>
                        {props.property.price}
                    </Typography>
                </Box>
                <Button size='small' sx={{  backgroundColor:"white", 
                                            color:"#DF593D",
                                            "&:hover": { backgroundColor: "white" },
                                            fontSize:"10px",
                                            fontWeight:"bold",
                                            mt:2, 
                                            textAlign:"center"
                                            }}>
                            View Details
                </Button>
                </CardContent>
            </CardActionArea>
            </Card>
        );
}

export default FeaturePropertyCard