"use client";

import { axiosInstance } from "@/axios";
import { DetailsBox } from "@/components/DetailsBox";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";
import { ImageGallery } from "@/components/ImageGallery.tsx";

function PropertyDetailWrapper({ id }: { id: string }) {
  const { data } = useQuery({
    queryKey: ["properties", id],
    queryFn: () => axiosInstance.get(`/properties/${id}`),
  });

  const property = data?.data.data as Property;

  return (
    <Box sx={{ marginLeft: { xs: 0, md: "23%" } }}>
      <ImageGallery {...property} /> <DetailsBox property={property} />
    </Box>
  );
}

export default PropertyDetailWrapper;
