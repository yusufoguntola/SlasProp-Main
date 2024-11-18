import { ArrowForward, LocationOn } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface MyPropertyCardProps {
  imageUrl: string | StaticImageData;
  price: string;
  location: string;
  desc: string;
}

export function MyPropertyCard(property: MyPropertyCardProps) {
  return (
    <Box
      sx={{
        borderBottom: "1px solid lightgray",
        pb: 4,
        mt: 4,
        display: "flex",
      }}>
      <Image
        src={property.imageUrl}
        height={150}
        width={200}
        alt="land image"
      />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
        <Button
          sx={{
            backgroundColor: "green",
            color: "white",
            "&:hover": { backgroundColor: "green" },
            borderRadius: "16px",
            fontSize: "8px",
            maxWidth: "70px",
            px: 2.5,
          }}>
          Active
        </Button>
        <Typography
          sx={{
            mt: 0.5,
            fontStyle: "italic",
            color: "#26a69a",
            fontWeight: "bold",
          }}>
          {property.price}
        </Typography>
        <Typography sx={{ fontSize: "9px", color: "grey" }}>
          <LocationOn sx={{ color: "#DF593D", fontSize: "14px" }} />
          {property.location}
        </Typography>
        <Typography sx={{ mt: 0.5, fontSize: "14px", fontWeight: "bold" }}>
          Description
        </Typography>
        <Typography sx={{ mt: 0.5, fontSize: "9px", color: "grey" }}>
          {property.desc}
        </Typography>
        <IconButton
          size="small"
          sx={{
            backgroundColor: "white",
            color: "#DF593D",
            "&:hover": { backgroundColor: "white" },
            fontSize: "10px",
            fontWeight: "bold",
            mt: 2,
            maxWidth: "90px",
            mx: -1,
          }}>
          View Details{" "}
          <ArrowForward sx={{ fontSize: "12px", color: "#DF593D", ml: 0.5 }} />
        </IconButton>
      </Box>
    </Box>
  );
}
