"use client";

import { use } from "react";

import { useGetPublicSingleProperty } from "@/api/properties/queries";
import { DetailsBox } from "@/components/DetailsBox";
import { ImageGallery } from "@/components/ImageGallery";
import { NavBarContainer } from "@/sections/NavBarContainer";

export default function PropertyDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const { data, status } = useGetPublicSingleProperty(id);

  const property = data?.data.data;

  const Render = {
    error: <>Loading...</>,
    pending: <>Loading...</>,
    success: (
      <>
        <NavBarContainer />
        <ImageGallery property={property} />
        {/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
        <DetailsBox property={property!} />
      </>
    ),
  };

  return <>{Render[status]}</>;
}
