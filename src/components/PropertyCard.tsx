import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import sampleImage from "../assets/property-image.jpg";

export interface PropertyCardProps {
  type: string;
  regNo: string;
  taxID: string;
  desc: string;
  area: number;
  beds: number;
  baths: number;
  price: string;
  location: string;
  status: string;
  taxDetails: {
    year: number[];
    propertyTax: string[];
    taxAssessment: string[];
    status: string[];
  };
  ownerDetails: {
    owner: string[];
    totalYears: string[];
    initials: string[];
  };
}

export function PropertyCard(property: PropertyCardProps) {
  return (
    <Card sx={{ width: 390, border: "1px solid #26a69a", mb: 3, px: 2, py: 1 }}>
      <CardActionArea
        sx={{ display: "flex" }}
        component={Link}
        to={`/property-details/${property.taxID}`}
        state={{ property: property }}
      >
        <CardMedia
          component="img"
          image={sampleImage.src}
          height="150px"
          sx={{ maxWidth: "200px" }}
          alt="property-image"
        />
        <CardContent>
          <Typography
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: "20px" }}
            component="div"
          >
            {property.type}
          </Typography>
          <Typography sx={{ color: "#26a69a", fontSize: "12px" }}>
            Location: {property.location}
          </Typography>
          <Typography sx={{ color: "#DF593D" }}>
            Reg No. {property.regNo}
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: "12px" }}>
            {`Prop Tax ID: ${property.taxID}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
