"use client";

import { axiosInstance } from "@/axios";
import { DetailsBox } from "@/components/DetailsBox";
import { ImageGallery } from "@/components/ImageGallery";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

function PropertyDetailWrapper({ id }: { id: string }) {
  const { data } = useQuery({
    queryKey: ["properties", id],
    queryFn: () => axiosInstance.get(`/properties/${id}`),
  });

  const property = data?.data.data as Property;

  return (
    <Box
      sx={{
        marginLeft: { xs: 0, md: "23%" },
        marginRight: { xs: 0, md: "10%" },
      }}
    >
      <ImageGallery property={property} /> <DetailsBox property={property} />
    </Box>
  );
}

export default PropertyDetailWrapper;
