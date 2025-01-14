"use client";

import dynamic from "next/dynamic";

import { Container } from "@mui/material";

import PropertyList from "./list";

const DensityMap = dynamic(() => import("@/components/DensityMap"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Properties() {
  return (
    <Container sx={{ ml: { xs: 0, md: "340px", width: "100%" } }}>
      <div className="my-6 md:my-12 lg:my-20 ">
        <div className="flex w-full gap-6 md:gap-8 lg:gap-16">
          <div className="lg:flex-[0.75]">
            <DensityMap />
          </div>
          <div className="lg:flex-1">
            <PropertyList />
          </div>
        </div>
      </div>
    </Container>
  );
}
