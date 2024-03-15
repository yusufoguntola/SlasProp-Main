import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import sampleImage from '../assets/property-image.jpg'
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const PropertyCard = (props) => {
     
    return (
            <Card sx={{ width: 390,
                        border:'1px solid #26a69a',
                        mb:3,
                        px:2,
                        py:1
                    }}
                >

            <CardActionArea sx={{display:"flex"}} component={Link} to={`/property-details/${props.property.taxID}`} state={{ property: props.property }}>
                <CardMedia
                    component="img"
                    image={sampleImage}          
                    height="150px"
                    sx={{maxWidth:"200px"}}
                    alt="property-image"
                />
                <CardContent>
                <Typography gutterBottom sx={{fontWeight:"bold", fontSize:'20px'}} component="div">
                    {props.property.type}
                </Typography>
                <Typography sx={{color:"#26a69a", fontSize:'12px'}}>
                    Location: {props.property.location}
                </Typography>
                <Typography sx={{color:"#DF593D"}}>
                    Reg No. {props.property.regNo}
                </Typography>
                <Typography  color="text.secondary" sx={{fontSize:'12px'}}>
                    {`Prop Tax ID: ${props.property.taxID}`}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        );
}

export default PropertyCard