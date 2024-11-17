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
