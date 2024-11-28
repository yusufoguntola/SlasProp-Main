<<<<<<< HEAD
import { CardMedia } from "@mui/material";

import sampleImage from "@/assets/land-image.jpg";

export function ImageCard() {
  return (
    <CardMedia
      component="img"
      image={sampleImage.src}
      onLoad={() => console.log("this is loading")}
      onError={() => console.log("this is error")}
      alt="This is a land image"
      sx={{
        marginTop: "-50px",
        objectFit: "cover",
        filter: "brightness(80%)",
      }}
    />
  );
}
=======
import { CardMedia } from "@mui/material";

import sampleImage from "@/assets/land-image.jpg";

export function ImageCard() {
  return (
    <CardMedia
      component="img"
      image={sampleImage.src}
      onLoad={() => console.log("this is loading")}
      onError={() => console.log("this is error")}
      alt="This is a land image"
      sx={{
        marginTop: "-50px",
        objectFit: "cover",
        filter: "brightness(80%)",
      }}
    />
  );
}
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c
