import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface ManagePropertyCardProps {
  imageUrl: string;
  heading: string;
  desc: string;
}

export function ManagePropertyCard(property: ManagePropertyCardProps) {
  return (
    <Card
      sx={{ height: "280px", border: "1px solid #black", my: 4, px: 2, py: 2 }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          image={property.imageUrl}
          sx={{ maxWidth: "50%" }}
          alt="property-image"
        />
        <CardContent>
          <Typography
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {property.heading}
          </Typography>
          <Typography
            sx={{ color: "black", textAlign: "center", fontSize: "13px" }}
          >
            {property.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
