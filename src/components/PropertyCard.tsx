import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Link from "next/link";

export interface PropertyCardProps {
  id: string; 
  propertyType: string;
  propertyId: string; 
  images: string[]; 

  name: string;
  price: string;
  description: string;
  city: string;
  state: string;
  country: string;
  noOfBedrooms: string;
  address: string;
  squareFootage: string;
  amenities: string[];
  buildingMaterials: string[];
  architecturalStyle: string;
  condition: string;
  structuralFeatures: string[];
  buildYear: string;
  utilitiesDetails: {
    services: {
      type: string;
      provided: boolean;
      providerName: string;
      serviceCharge: string;
      frequency: string;
    }[];
    isGreenEnergyPowered: boolean;
    greenEnergyProvider: string;
    greenEnergySources: string[];
  };
  neighbourhoodDetails: {
    name: string;
    description: string;
    population: string;
    locatedInGatedEstate: boolean;
    proximityToPublicPlaces: {
      place: string;
      type: string;
      distance: string;
    }[];
  };

  hoaAndFinancialDetails: {
    name: string;
    hasDue: boolean;
    dueFrequency: string;
    dueAmount: string;
    isPropertyInMortgage: boolean;
    mortgageProvider: string;
    outstandingBalance: string;
    monthlyPayment: string;
    mortgageEndDate: string;
    otherFinancialDetails: string;
  };

  owner: {
    firstName: string;
    lastName: string;
    id: number;
    imageUrl: string | null;
  };
}




export function PropertyCard(property: PropertyCardProps) {
  return (
    <Card sx={{ width: 390, border: "1px solid #26a69a", mb: 3, px: 2, py: 1 }}>
      <CardActionArea
        sx={{ display: "flex" }}
        component={Link}
        href={`/properties/${property?.id}`}
      >
        <CardMedia
          component="img"
          image={property.images[0]}
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
            {property?.propertyType}
          </Typography>
          <Typography sx={{ color: "#26a69a", fontSize: "12px" }}>
            Location: {property?.address}
          </Typography>
          <Typography sx={{ color: "#DF593D" }}>
            Square Footage. {property?.squareFootage}
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: "12px" }}>
            {`Prop  ID: ${property?.propertyId}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}
