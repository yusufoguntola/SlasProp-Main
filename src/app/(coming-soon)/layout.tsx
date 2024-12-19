import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { NavBarContainer } from "@/sections/NavBarContainer";
import { Box, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "SLAS Properties | Coming Soon",
  description: "Hold on while we work on setting things up for this page",
  robots: "deny",
  openGraph: {
    type: "website",
    title: "SLAS Properties",
    description: "Hold on while we work on setting things up for this page",
  },
};

export default function Layout(_: PropsWithChildren) {
  return (
    <div>
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
            Coming Soon...
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
            We are working on setting things up for this page... Check back
            later.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
