import { Card, CardMedia, CardActionArea, CardContent, Typography} from "@mui/material";
import React from "react";


const KeyFeatureCard = (props) => {

    return (
        <Card sx={{ border:'1px solid grey',
                    mb:3,
                    px:2,
                    py:1,
                    maxWidth:"80%"
                    }}
                >
            <CardActionArea component='span' sx={{display:"flex"}}>
                <CardMedia
                    component="img"
                    image={props.keyFeature.imageUrl.default}          
                    sx={{maxWidth:"70px"}}
                    alt="property-image"
                />
                <CardContent>
                <Typography gutterBottom sx={{fontWeight:"bold"}}>
                    {props.keyFeature.heading}
                </Typography>
                <Typography sx={{fontSize:"12px"}}>
                    {props.keyFeature.desc}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
    )

}

export default KeyFeatureCard