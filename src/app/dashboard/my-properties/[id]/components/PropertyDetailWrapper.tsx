"use client";

import { useGetSingleProperty } from "@/api/properties/queries";
import { DetailsBox } from "@/components/DetailsBox";
import { ImageGallery } from "@/components/ImageGallery";
import { Box } from "@mui/material";

function PropertyDetailWrapper({ id }: { id: string }) {
  const { data, status } = useGetSingleProperty(id);

  if (status !== "success") return <p>Loading...</p>;

  const property = data.data.data;

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
