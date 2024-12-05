"use client";

import Link from "next/link";

import { ArrowForward, LocationOn } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";

type MyPropertyCardProps = Partial<{
  name: string;
  city: string;
  country: string;
  state: string;
  images: string[] | undefined;
  price: string;
  location: string;
  description: string;
  propertyId: string;
  id: string | number;
}>;

export function MyPropertyCard(property: MyPropertyCardProps) {
  const formatAsPrice = (number: number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };
  const currency = "₦";
  const formattedPrice = formatAsPrice(
    Number.parseFloat(property?.price || "0"),
  );

  const propertyImage = property?.images?.[0];

  return (
    <Box
      sx={{
        borderBottom: "1px solid lightgray",
        pb: 4,
        mt: 4,
        display: "flex",
      }}
    >
      {/* <Image
				src={property?.images?.[0]}
				height={150}
				width={200}
				alt="land image"
			/> */}

      <img
        src={propertyImage || "/assets/property-image.jpg"}
        alt="land"
        height={170}
        width={200}
        className={"overflow-hidden rounded-lg"}
        style={{ height: "170px", width: "200px" }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
        <Button
          sx={{
            backgroundColor: "green",
            color: "white",
            "&:hover": { backgroundColor: "green" },
            borderRadius: "16px",
            fontSize: "8px",
            maxWidth: "70px",
            px: 2.5,
          }}
        >
          Active
        </Button>
        <Typography
          sx={{
            mt: 0.5,
            color: "#26a69a",
            fontWeight: "bold",
          }}
        >
          {property?.name}
        </Typography>
        <Typography
          sx={{
            mt: 0.5,
            color: "#26a69a",
            fontWeight: "bold",
          }}
        >
          {currency}
          {formattedPrice}
        </Typography>
        <Typography sx={{ fontSize: "10px", color: "grey", mt: 0.5 }}>
          <LocationOn sx={{ color: "#DF593D", fontSize: "14px", ml: -0.5 }} />
          {`${property?.city}${", "}${property?.state}${", "}${
            property?.country
          }`}
        </Typography>
        <Typography sx={{ mt: 0.5, color: "grey" }}>
          {property?.description}
        </Typography>
        <Link href={`/dashboard/my-properties/${property?.id}`}>
          <IconButton
            size="small"
            sx={{
              backgroundColor: "white",
              color: "#DF593D",
              "&:hover": { backgroundColor: "white" },
              fontSize: "10px",
              fontWeight: "bold",
              mt: 2,
              maxWidth: "90px",
              mx: -1,
            }}
          >
            View Details{" "}
            <ArrowForward
              sx={{ fontSize: "12px", color: "#DF593D", ml: 0.5 }}
            />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}
