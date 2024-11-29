import { Box, Container, Typography } from "@mui/material";

import { FeaturePropertyCard } from "@/components/FeaturePropertyCard";

const properties = [
  {
    id: 1,
    imageUrl: require("../assets/feature-property.png"),
    heading: "Lore Epsom Property",
    desc: "Dummy Description",
    area: "2 Acrs",
    price: "$850,000",
  },
  {
    id: 2,
    imageUrl: require("../assets/land-image.jpg"),
    heading: "Lore Epsom Property",
    desc: "Dummy Description",
    area: "2 Acrs",
    price: "$850,000",
  },
  {
    id: 3,
    imageUrl: require("../assets/feature-property.png"),
    heading: "Lore Epsom Property",
    desc: "Dummy Description",
    area: "2 Acrs",
    price: "$850,000",
  },
];

export function FeatureProperties() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: 6,
        backgroundColor: "#F8F8F8",
      }}
    >
      <Box
        sx={{
          margin: "auto",
          width: "20%",
          mt: 10,
          borderLeft: "1px solid lightgrey",
          borderRight: "1px solid lightgrey",
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Our Featured
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          properties
        </Typography>
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          margin: "auto",
          width: "50%",
          fontSize: "14px",
          mt: 2,
        }}
      >
        Explore Prime Listings On SlasProp - Where Luxury Meets Functionality,
        Your Dream Property Is Just A Click Away
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: "40px",
          py: 4,
        }}
      >
        {properties.map((property) => (
          <FeaturePropertyCard key={property.id} {...property} />
        ))}
      </Container>
    </Container>
  );
}
