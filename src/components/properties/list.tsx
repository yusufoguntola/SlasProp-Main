"use client";

import Image from "next/image";
import Link from "next/link";

import { useGetProperties } from "@/api/properties/queries";
import { PROPERTIES } from "@/constants/data";
import { AddCircleOutline } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";

import { MyPropertyCard } from "../MyPropertyCard";
import { PropertiesShimmer } from "../PropertiesShimmer";

export function PropertiesList() {
  const { data, isError, isLoading } = useGetProperties();

  if (isLoading || isError) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            marginLeft: "30%",
            mt: 4,
            borderBottom: "1px solid lightgray",
            pb: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
            List Of Properties
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", marginLeft: "30%", flexDirection: "column" }}
        >
          {PROPERTIES.map((property) => (
            <PropertiesShimmer key={property.id} />
          ))}
        </Box>
      </Container>
    );
  }
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          marginLeft: "30%",
          mt: 4,
          borderBottom: "1px solid lightgray",
          pb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
          List Of Properties
        </Typography>
        <Link href="/dashboard/add-property">
          <IconButton
            sx={{
              backgroundColor: "#DF593D",
              "&:hover": { backgroundColor: "#DF593D" },
              borderRadius: "16px",
              color: "white",
              fontSize: "12px",
              py: 1,
              px: 2,
            }}
          >
            <AddCircleOutline /> &nbsp;Add New Property
          </IconButton>
        </Link>
      </Box>

      <Box sx={{ display: "flex", marginLeft: "30%", flexDirection: "column" }}>
        <div className="hidden last:flex flex-col items-center min-h-[50dvh] justify-center gap-4">
          <Image
            src="/assets/Empty.jpg"
            alt="Empty state"
            width={200}
            height={200}
          />

          <Typography>You have not created any listing</Typography>
        </div>
        {data?.data.data.map((property) => (
          <MyPropertyCard key={property.id} {...property} />
        ))}
      </Box>
    </Container>
  );
}
