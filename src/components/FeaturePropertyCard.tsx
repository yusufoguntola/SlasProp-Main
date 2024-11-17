import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface FeaturePropertyCardProps {
  id: number;
  imageUrl: string;
  heading: string;
  desc: string;
  area: string;
  price: string;
}

export function FeaturePropertyCard(property: FeaturePropertyCardProps) {
  return (
    <Card sx={{ border: "1px solid #black" }}>
      <CardActionArea
        component="span"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <CardMedia
          component="img"
          image={property.imageUrl}
          sx={{ maxWidth: "250px", height: "150px" }}
          alt="property-image"
        />
        <CardContent>
          <Button
            size="small"
            sx={{
              backgroundColor: "#DF593D",
              color: "white",
              "&:hover": { backgroundColor: "#DF593D" },
              width: 50,
              borderRadius: 4,
              fontSize: "8px",
              position: "absolute",
              marginTop: "-25px",
              marginLeft: "-30px",
            }}
          >
            Featured
          </Button>
          <Typography
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: "14px", marginLeft: "-30px" }}
          >
            {property.heading}
          </Typography>
          <Typography
            sx={{ color: "black", fontSize: "10px", marginLeft: "-30px" }}
          >
            {property.desc}
          </Typography>
          <Box
            sx={{
              display: "flex",
              marginLeft: "-30px",
              borderTop: "1px solid lightgrey",
              borderBottom: "1px solid lightgrey",
              mt: 2,
              py: 1,
            }}
          >
            <Typography sx={{ borderRight: "1px solid lightgrey", pr: 2 }}>
              {property.area}
            </Typography>
            <Typography sx={{ pl: 2, color: "#26a69a" }}>
              {property.price}
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              backgroundColor: "white",
              color: "#DF593D",
              "&:hover": { backgroundColor: "white" },
              fontSize: "10px",
              fontWeight: "bold",
              mt: 2,
              textAlign: "center",
            }}
          >
            View Details
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
