"use client";

import { ImageCardWelcome } from "@/components/ImageCardWelcome";
import { ImageCardWelcomeSearched } from "@/components/ImageCardWelcomeSearched";
import { useSearch } from "@/hooks/use-search";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { NavBarContainer } from "@/sections/NavBarContainer";
import { WelcomeImageContiner } from "@/sections/WelcomeImageContainer";
import { Suspense } from "react";

export default function WelcomePage() {
  const { search } = useSearch();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProtectedRoute>
        <NavBarContainer />
        <WelcomeImageContiner />
        {search ? <ImageCardWelcomeSearched /> : <ImageCardWelcome />}
      </ProtectedRoute>
    </Suspense>
  );
}
