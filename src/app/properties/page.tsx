"use client";

import dynamic from "next/dynamic";

import { Footer } from "@/sections/Footer";
import { NavBarContainer } from "@/sections/NavBarContainer";
import { Box, Typography } from "@mui/material";

import PropertyList from "./list";

const DensityMap = dynamic(() => import("@/components/DensityMap"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Properties() {
  return (
    <>
      <NavBarContainer />
      <Box
        className="image-container"
        sx={{
          position: "relative",
          height: "400px",
          backgroundImage: 'url("/assets/aerial-view.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "-50px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "5%",
            transform: "translateY(-50%)",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "2.2rem",
              color: "#fff",
              fontWeight: "bold",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
            }}
          >
            Welcome To SlasProp
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: {
                lg: "1.25rem",
                md: "1rem",
                sm: "0.875rem",
                xs: "0.75rem",
              },
              color: "#fff",
              mt: 2,
              textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
              maxWidth: "70%",
            }}
          >
            Where Innovation meets Real Estate. Your property adventure starts
            here.
          </Typography>
        </Box>
      </Box>
      <div className="container my-6 md:my-12 lg:my-20">
        <div className="flex w-full gap-6 md:gap-8 lg:gap-16">
          <div className="lg:flex-[0.75]">
            <DensityMap />
          </div>
          <div className="lg:flex-1">
            <PropertyList />
          </div>
        </div>
      </div>
      {/* <ImageCardWelcomeSearched /> */}
      <Footer />
    </>
  );
}
