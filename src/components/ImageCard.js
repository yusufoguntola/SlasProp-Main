
import React from "react";
import { CardMedia } from "@mui/material";
import sampleImage from '../assets/land-image.jpg';

const ImageCard = ()=>{
   return (
            <CardMedia
                component="img"
                image={sampleImage}
                onLoad={() => console.log("this is loading")}
                onError={() => console.log("this is error")}
                alt="This is a land image"
                sx={{
                marginTop:"-50px",
                objectFit: "cover",
                filter: "brightness(80%)"
                }}
            />

   )
}

export default ImageCard