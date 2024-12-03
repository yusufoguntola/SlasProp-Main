import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export function PropertyCard(property: Property) {
  return (
    <Card
      sx={{
        border: "1px solid #26a69a",
        borderRadius: 2,
        mb: 3,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          alignItems: "flex-start",
          p: 2,
        }}
        component={Link}
        href={`/properties/${property?.id}`}
      >
        {/* Property Image */}
        <CardMedia
          component='img'
          image={property.images[0]}
          height='150px'
          sx={{
            maxWidth: "200px",
            borderRadius: 2,
            objectFit: "cover",
            flexShrink: 0,
          }}
          alt='property-image'
        />

        {/* Property Details */}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            ml: 2,
          }}
        >
          {/* Property Type */}
          <Typography
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: "20px", lineHeight: 1.2 }}
            component='div'
          >
            {property?.propertyType}
          </Typography>

          {/* Location */}
          <Typography sx={{ color: "#26a69a", fontSize: "14px", mb: 1 }}>
            Location: {property?.address}
          </Typography>

          {/* Square Footage */}
          <Typography sx={{ color: "#DF593D", fontSize: "14px", mb: 1 }}>
            Square Footage: {property?.squareFootage}
          </Typography>

          {/* Property ID */}
          <Typography color='text.secondary' sx={{ fontSize: "12px" }}>
            Prop ID: {property?.propertyId}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
