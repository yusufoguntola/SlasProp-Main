import { SearchLoader } from "@/components/SearchLoader";
import { CardMedia, Container, Typography } from "@mui/material";

import sampleImage from "../assets/aerial-view.png";

export function WelcomeImageContiner() {
  return (
    <div className="image-container">
      <CardMedia
        component="img"
        image={sampleImage.src}
        onLoad={() => console.log("this is loading")}
        onError={() => console.log("this is error")}
        alt="This is a land image"
        sx={{
          marginTop: "-50px",
          objectFit: "cover",
          maxHeight: "250px",
          filter: "brightness(70%)",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          top: {
            lg: "37%",
            md: "33%",
            sm: "30%",
            xs: "23%",
          },
          fontSize: "25px",
          left: "5%",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Welcome To SlasProp
      </Typography>

      <Typography
        sx={{
          position: "absolute",
          top: {
            lg: "44%",
            md: "40%",
            sm: "36%",
            xs: "28%",
          },
          fontSize: "12px",
          left: "5%",
          color: "white",
        }}
      >
        Where Innovation meets Real Estate. You property adventure starts here.
      </Typography>

      <Container
        sx={{
          position: "absolute",
          top: {
            lg: "52%",
            md: "48%",
            sm: "42%",
            xs: "38%",
          },
          left: "3.25%",
          color: "white",
          zIndex: 1300,
        }}
      >
        <SearchLoader />
      </Container>
    </div>
  );
}
