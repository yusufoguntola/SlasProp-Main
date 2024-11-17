import { CardMedia } from "@mui/material";

import sampleImage from "@/assets/land-view.png";

export function ImageCardWelcome() {
  return (
    <CardMedia
      component="img"
      image={sampleImage.src}
      onLoad={() => console.log("this is loading")}
      onError={() => console.log("this is error")}
      alt="This is a land image"
      sx={{
        objectFit: "cover",
        marginTop: "-90px",
        height: "450px",
      }}
    />
  );
}
