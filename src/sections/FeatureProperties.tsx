"use client";

import { useGetFeaturedProperties } from "@/api/properties/queries";
import { FeaturePropertyCard } from "@/components/FeaturePropertyCard";
import { PropertiesShimmer } from "@/components/PropertiesShimmer";
import { Box, Container, Typography } from "@mui/material";

const LoadingState = () => {
  return new Array(3)
    .fill("_")
    .map((_, idx) => <PropertiesShimmer key={idx} />);
};

export function FeatureProperties() {
  const { data, status } = useGetFeaturedProperties();

  const State = {
    error: <LoadingState />,
    pending: <LoadingState />,
    success: (
      <>
        {data?.data.data.map((el) => (
          <FeaturePropertyCard key={el.id} {...el} />
        ))}
      </>
    ),
  };

  return (
    <Container
      sx={{
        mt: 6,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F8F8F8",
        maxWidth: "100%",
      }}
    >
      <Box sx={{ textAlign: "center", mt: 10, px: 2 }}>
        <Box
          sx={{
            margin: "auto",
            width: { xs: "90%", md: "30%" },
            borderLeft: "3px solid #DF593D",
            borderRight: "3px solid #DF593D",
            py: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "16px", md: "18px" }, color: "#555" }}
          >
            Our Featured
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: { xs: "22px", md: "26px" },
              color: "#DF593D",
            }}
          >
            Properties
          </Typography>
        </Box>
        <Typography
          sx={{
            margin: "auto",
            width: { xs: "90%", md: "60%" },
            fontSize: { xs: "12px", md: "14px" },
            mt: 3,
            color: "#666",
            lineHeight: 1.6,
          }}
        >
          Explore Prime Listings On SlasProp - Where Luxury Meets Functionality.
          Your Dream Property Is Just A Click Away.
        </Typography>
      </Box>
      <Container
        className="grid gap-6 py-8"
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
          gridAutoRows: "1fr",
        }}
      >
        {State[status]}
      </Container>
    </Container>
  );
}
