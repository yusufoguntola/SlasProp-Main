import { Box, CardMedia, Container, Typography } from "@mui/material";

import { KeyFeatureCard } from "./KeyFeatureCard";

const keyFeatures = [
  {
    id: 1,
    imageUrl: "/assets/blockchain.png",
    heading: "Blockchain Foundation",
    desc: "Your transactions, titles, and information enjoy an extra layer of security through blockchain, promoting trust and transparency.",
  },
  {
    id: 2,
    imageUrl: "/assets/user-interface.png",
    heading: "User-Friendly Interface",
    desc: "Seamlessly navigate through listings, transactions, and property details with our intuitive design.",
  },
  {
    id: 3,
    imageUrl: "/assets/accelerate-process.png",
    heading: "Accelerated Processes",
    desc: "SlasProp expedites every stage of your property journey, ensuring rapid and efficient transactions.",
  },
];

export function KeyFeatures() {
  return (
    <Container
      sx={{
        py: {
          xs: 4,
          md: 8,
        },
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, md: 8 },
          padding: 0,
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", maxWidth: "600px" }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#26a69a",
              mb: 2,
            }}
          >
            Discover The Key Features:
          </Typography>

          <Container
            className="grid gap-6 py-8"
            sx={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
              gridAutoRows: "1fr",
              padding: 0,
            }}
          >
            {keyFeatures.map((keyFeature) => (
              <KeyFeatureCard key={keyFeature.id} {...keyFeature} />
            ))}
          </Container>
        </Box>

        <CardMedia
          component="img"
          image="/assets/house.png"
          alt="Property image"
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            objectFit: "cover",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: { xs: "none", md: "block" },
          }}
        />
      </Container>

      <Typography
        sx={{
          textAlign: "center",
          px: 4,
          fontSize: "16px",
          maxWidth: "800px",
          margin: "auto",
          color: "#333",
          marginTop: 12,
        }}
      >
        Whether you're a first-time homebuyer, seasoned investor, or property
        enthusiast, SlasProp caters to your needs. Explore our platform, unveil
        exciting listings and embark on a property adventure where transactions
        are as thrilling as finding your dream home.
      </Typography>
    </Container>
  );
}
