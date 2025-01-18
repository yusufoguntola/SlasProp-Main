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
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 4,
            borderBottom: "1px solid lightgray",
            pb: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            List Of Properties
          </Typography>
        </Box>

        <Box
          className="grid gap-6 py-8"
          sx={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(380px, 100%), 1fr))",
            gridAutoRows: "1fr",
            mt: 4,
          }}
        >
          {PROPERTIES.map((property) => (
            <PropertiesShimmer key={property.id} />
          ))}
        </Box>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid lightgray",
          pb: 2,
          width: "100%",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
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
            <AddCircleOutline /> &nbsp;Add New Listing
          </IconButton>
        </Link>
      </Box>

      {data?.data.data.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
            gap: 2,
          }}
        >
          <Image
            src="/assets/Empty.jpg"
            alt="Empty state"
            width={200}
            height={200}
          />
          <Typography>You have not created any listing</Typography>
        </Box>
      ) : (
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 w-full">
          {data?.data.data.map((property) => (
            <MyPropertyCard key={property.id} {...property} />
          ))}
        </Box>
      )}
    </Container>
  );
}
