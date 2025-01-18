"use client";

import dynamic from "next/dynamic";

import { Container } from "@mui/material";

import { Filters } from "./filters";
import PropertyList from "./list";

const DensityMap = dynamic(() => import("@/components/DensityMap"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Properties() {
  return (
    <Container>
      <div className="my-6 md:my-12 lg:my-20 ">
        <Filters />
        <div className="flex w-full gap-6 md:gap-8">
          <div className="lg:flex-1">
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
