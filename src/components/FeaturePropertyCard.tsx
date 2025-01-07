import Link from "next/link";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export function FeaturePropertyCard({
  images,
  name,
  description,
  squareFootage,
  propertyId,
}: Property) {
  return (
    <Card
      sx={{
        border: "1px solid #DF593D",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          image={images[0]}
          sx={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
          alt="property-image"
        />
        <Button
          size="small"
          sx={{
            backgroundColor: "#DF593D",
            color: "white",
            position: "absolute",
            top: "10px",
            left: "10px",
            borderRadius: "4px",
            fontSize: "10px",
            padding: "4px 8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            textTransform: "uppercase",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#c14b31" },
          }}
        >
          Featured
        </Button>
        <CardContent
          sx={{
            padding: "16px",
            width: "100%",
          }}
        >
          <Typography
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#333",
              textAlign: "left",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              color: "#666",
              fontSize: "12px",
              textAlign: "left",
              marginBottom: "8px",
            }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #e0e0e0",
              borderBottom: "1px solid #e0e0e0",
              padding: "8px 0",
              marginTop: "8px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "#999",
                borderRight: "1px solid #e0e0e0",
                paddingRight: "8px",
              }}
            >
              Square Footage
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#26a69a",
                paddingLeft: "8px",
              }}
            >
              {squareFootage}
            </Typography>
          </Box>
          <Button
            size="small"
            href={`/properties/${propertyId}`}
            LinkComponent={Link}
            sx={{
              backgroundColor: "#fff",
              color: "#DF593D",
              fontSize: "12px",
              fontWeight: "bold",
              border: "1px solid #DF593D",
              borderRadius: "4px",
              marginTop: "16px",
              padding: "6px 12px",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: "#DF593D",
                color: "#fff",
              },
            }}
          >
            View Details
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
