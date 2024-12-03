import { CardMedia } from "@mui/material";

export function ImageCardWelcome() {
  return (
    <CardMedia
      component="img"
      image="/assets/land-view.png"
      alt="This is a land image"
      sx={{
        objectFit: "cover",
        marginTop: "-90px",
        height: "450px",
      }}
    />
  );
}
