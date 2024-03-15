import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ManagePropertyCard = (props) => {
     
    return (
            <Card sx={{ height:"280px",
                        border:'1px solid #black',
                        my:4,
                        px:2,
                        py:2
                    }}
                >
            <CardActionArea sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <CardMedia
                    component="img"
                    image={props.property.imageUrl.default}          
                    sx={{maxWidth:"50%"}}
                    alt="property-image"
                />
                <CardContent>
                <Typography gutterBottom sx={{fontWeight:"bold", fontSize:'20px', textAlign:"center", textTransform:'uppercase'}}>
                    {props.property.heading}
                </Typography>
                <Typography sx={{color:"black", textAlign:"center", fontSize:"13px"}}>
                    {props.property.desc}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        );
}

export default ManagePropertyCard