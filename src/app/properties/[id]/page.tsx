<<<<<<< HEAD
"use client";

import { useLocation } from "react-router";

import { DetailsBox } from "@/components/DetailsBox";
import { ImageGallery } from "@/components/ImageGallery";
import { NavBarContainer } from "@/sections/NavBarContainer";

export default function PropertyDetails() {
  const { state } = useLocation();

  return (
    <>
      <NavBarContainer />
      <ImageGallery />
      <DetailsBox {...state} />
    </>
  );
}
=======
"use client";

import { useLocation } from "react-router";

import { DetailsBox } from "@/components/DetailsBox";
import { ImageGallery } from "@/components/ImageGallery";
import { NavBarContainer } from "@/sections/NavBarContainer";

export default function PropertyDetails() {
  const { state } = useLocation();

  return (
    <>
      <NavBarContainer />
      <ImageGallery />
      <DetailsBox {...state} />
    </>
  );
}
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c
