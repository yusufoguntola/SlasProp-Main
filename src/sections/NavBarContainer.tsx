"use client";

import { Container } from "@mui/material";

import { NavigationBar } from "@/components/NavigationBar";
import { MainBar } from "@/components/MainBar";

export function NavBarContainer() {
  return (
    <Container>
      <MainBar />
      <NavigationBar />
    </Container>
  );
}
