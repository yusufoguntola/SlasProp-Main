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

export function ManagePropertyCard({
  imageUrl,
  heading,
  desc,
}: ManagePropertyCardProps) {
  return (
    <Card
      sx={{
        height: "280px",
        border: "1px solid black",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CardMedia
          component="img"
          image={imageUrl}
          sx={{
            maxWidth: "80%",
            height: "80px",
            objectFit: "contain",
            marginBottom: 2,
          }}
          alt="property-image"
        />
        <CardContent sx={{ textAlign: "center" }}>
          {" "}
          <Typography
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              textTransform: "uppercase",
              color: "#333",
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              color: "#555",
              fontSize: "14px",
            }}
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
