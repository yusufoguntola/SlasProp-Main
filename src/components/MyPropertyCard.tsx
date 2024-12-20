"use client";

import Image from "next/image";
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
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        alignItems: "flex-start",
        backgroundColor: "#FAFAFA",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        border: "1px solid #E0E0E0",
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: "100%",
        }}
      >
        <Image
          src={propertyImage || "/assets/property-image.jpg"}
          alt="Property"
          width={300}
          height={500}
          className="w-full h-full object-cover grow"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          flex: {
            xs: 0,
            sm: 2,
          },
        }}
      >
        <Button
          sx={{
            backgroundColor: "#28A745",
            color: "white",
            "&:hover": { backgroundColor: "#218838" },
            borderRadius: "16px",
            fontSize: "10px",
            alignSelf: "flex-start",
            px: 2,
          }}
        >
          Active
        </Button>
        <Typography
          sx={{
            mt: 1,
            color: "#26a69a",
            fontWeight: "bold",
            fontSize: "18px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {property?.name}
        </Typography>
        <Typography
          sx={{
            mt: 0.5,
            color: "#26a69a",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          {currency}
          {formattedPrice}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "grey",
            mt: 0.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <LocationOn sx={{ color: "#DF593D", fontSize: "18px", mr: 0.5 }} />
          {`${property?.city}, ${property?.state}, ${property?.country}`}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            color: "grey",
            fontSize: "14px",
            lineHeight: "1.5",
            textOverflow: "ellipsis",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {property?.description}
        </Typography>
        <Link href={`/dashboard/my-properties/${property?.id}`} passHref>
          <IconButton
            size="small"
            sx={{
              backgroundColor: "#FFF3E0",
              color: "#DF593D",
              "&:hover": { backgroundColor: "#FFE0B2" },
              fontSize: "12px",
              fontWeight: "bold",
              mt: 2,
              alignSelf: "flex-start",
              px: 2,
              py: 0.5,
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          >
            View Details
            <ArrowForward
              sx={{ fontSize: "16px", color: "#DF593D", ml: 0.5 }}
            />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}
