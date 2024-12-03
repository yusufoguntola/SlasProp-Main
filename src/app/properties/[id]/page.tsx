"use client"; // This directive is used to indicate client-side rendering for the component

import { use } from "react";

import { axiosInstance } from "@/axios";
import { DetailsBox } from "@/components/DetailsBox";
import { ImageGallery } from "@/components/ImageGallery";
import { NavBarContainer } from "@/sections/NavBarContainer";
import { useQuery } from "@tanstack/react-query";

export default function PropertyDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const { data } = useQuery({
    queryKey: ["search", id],
    queryFn: () => axiosInstance.get(`/search/${id}`),
  });

  return (
    <>
      <NavBarContainer />
      <ImageGallery /> {/* Pass the id to your ImageGallery component */}
      <DetailsBox property={data?.data.data} />
    </>
  );
}
