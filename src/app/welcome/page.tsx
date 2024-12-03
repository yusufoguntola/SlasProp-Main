"use client";

import { Suspense } from "react";

import { ImageCardWelcome } from "@/components/ImageCardWelcome";
import { ImageCardWelcomeSearched } from "@/components/ImageCardWelcomeSearched";
import { useSearch } from "@/hooks/use-search";
import { NavBarContainer } from "@/sections/NavBarContainer";
import { WelcomeImageContiner } from "@/sections/WelcomeImageContainer";

export default function WelcomePage() {
  const { search } = useSearch();

  return (
    <Suspense fallback={<div>Loading.......</div>}>
      <NavBarContainer />
      <WelcomeImageContiner />
      {search ? <ImageCardWelcomeSearched /> : <ImageCardWelcome />}
    </Suspense>
  );
}
