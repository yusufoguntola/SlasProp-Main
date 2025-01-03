import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface KeyFeatureCardProps {
  id: number;
  imageUrl: string;
  heading: string;
  desc: string;
}

export function KeyFeatureCard(keyFeature: KeyFeatureCardProps) {
  return (
    <Card sx={{ border: "1px solid grey" }}>
      <CardActionArea component="span" sx={{ display: "flex", px: 2, py: 1 }}>
        <CardMedia
          component="img"
          image={keyFeature.imageUrl}
          sx={{ maxWidth: "70px" }}
          alt="property-image"
        />
        <CardContent>
          <Typography gutterBottom sx={{ fontWeight: "bold" }}>
            {keyFeature.heading}
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>{keyFeature.desc}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
