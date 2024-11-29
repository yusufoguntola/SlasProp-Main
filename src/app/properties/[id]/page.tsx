"use client"; // This directive is used to indicate client-side rendering for the component

import { axiosInstance } from "@/axios";
import { DetailsBox } from "@/components/DetailsBox";
import { ImageGallery } from "@/components/ImageGallery";
import { PropertyCardProps } from "@/components/PropertyCard";
import { NavBarContainer } from "@/sections/NavBarContainer";
import { use, useEffect, useState } from "react";

export default function PropertyDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [property, setProperty] = useState<PropertyCardProps | null>(null);

  const { id } = use(params);

  const fetchRegisteredData = async () => {
    try {
      const response = await axiosInstance.get(`/search/${id}`);
      setProperty(response.data.data || null); // Assuming the response contains a single property object
    } catch (error) {
      console.error("Error fetching property:", error);
    }
  };

  useEffect(() => {
    fetchRegisteredData();
  }, []);

  return (
    <>
      <NavBarContainer />
      <ImageGallery /> {/* Pass the id to your ImageGallery component */}
      <DetailsBox property={property} />
    </>
  );
}
