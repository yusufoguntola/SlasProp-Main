"use client";

import { useState } from "react";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Button, Container, Typography } from "@mui/material";

import { OwnerDetails } from "./OwnerDetails";

type DetailsBoxProps = {
  property: Property | null; // Change this to accept an array of properties
};

export function DetailsBox({ property }: DetailsBoxProps) {
  const [isInterior, setIsInterior] = useState(false);
  const [isPropDetails, setIsPropDetails] = useState(false);
  const [isConstDetails, setIsConstDetails] = useState(false);
  const [isUtil, setIsUtil] = useState(false);
  const [isComm, setIsComm] = useState(false);
  const [isHOA, setIsHOA] = useState(false);

  // const form = useForm({
  //   initialValues: {
  //     slider: true,
  //   },
  // });

  return (
    <>
      <Container
        sx={{ display: "flex", mt: 4, justifyContent: "space-between" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRight: "2px solid lightgray",
            maxHeight: "80px",
          }}
        >
          <Button
            sx={{
              backgroundColor: "green",
              color: "white",
              "&:hover": { backgroundColor: "green" },
              borderRadius: "16px",
              fontSize: "10px",
              maxWidth: "100px",
              px: 2.5,
            }}
          >
            Active
          </Button>
          <Typography
            sx={{
              mt: 0.5,
              fontStyle: "italic",
              color: "#26a69a",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {property?.price}
          </Typography>
          <Typography sx={{ color: "grey", mr: 6 }}>
            <LocationOnIcon sx={{ color: "#DF593D", fontSize: "14px" }} />
            {/* {property.location} */}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            ml: 4,
            py: 1,
            maxHeight: "80px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              py: 2,
              px: 4,
              mr: 2,
              border: "1px solid lightgray",
            }}
          >
            <Typography sx={{ color: "#26a69a", fontWeight: "bold" }}>
              {/* {property.beds} */}
            </Typography>
            <Typography sx={{ color: "black" }}>Beds</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              py: 2,
              px: 4,
              mr: 2,
              border: "1px solid lightgray",
            }}
          >
            <Typography sx={{ color: "#26a69a", fontWeight: "bold" }}>
              {/* {property.baths} */}
            </Typography>
            <Typography sx={{ color: "black" }}>Baths</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              py: 2,
              px: 4,
              border: "1px solid lightgray",
            }}
          >
            <Typography sx={{ color: "#26a69a", fontWeight: "bold" }}>
              {property?.squareFootage}
            </Typography>
            <Typography sx={{ color: "black" }}>Sqft</Typography>
          </Box>
        </Box>

        <OwnerDetails {...property?.owner} />
      </Container>

      <Container sx={{ mt: -2 }}>
        <Box sx={{ border: "1px solid lightgray", maxWidth: 600 }}>
          <Box sx={{ display: "flex", borderBottom: "1px solid lightgray" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRight: "1px solid lightgray",
                px: 4,
                py: 2,
              }}
            >
              <Typography sx={{ color: "gray", fontSize: 12 }}>Type</Typography>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                {property?.propertyType}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", px: 4, py: 2 }}
            >
              <Typography sx={{ color: "gray", fontSize: 12 }}>
                Built Year
              </Typography>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                {property?.constructionDetails.buildYear}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", borderBottom: "1px solid lightgray" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRight: "1px solid lightgray",
                px: 4,
                py: 2,
              }}
            >
              <Typography sx={{ color: "gray", fontSize: 12 }}>
                Total Area
              </Typography>
              <Typography
                sx={{ color: "black", fontWeight: "bold", mr: 14.75 }}
              >
                {property?.squareFootage} Sqft
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", px: 4, py: 2 }}
            >
              <Typography sx={{ color: "gray", fontSize: 12 }}>
                Garage
              </Typography>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                2 Attached
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", borderBottom: "1px solid lightgray" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRight: "1px solid lightgray",
                px: 4,
                py: 2,
              }}
            >
              <Typography sx={{ color: "gray", fontSize: 12 }}>
                Price
              </Typography>
              <Typography sx={{ color: "black", fontWeight: "bold", mr: 13 }}>
                $ 165 / Sqft
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", px: 4, py: 2 }}
            >
              <Typography sx={{ color: "gray", fontSize: 12 }}>
                Other Price
              </Typography>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                $55 quarterly HOA fee
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container sx={{ mt: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
            Description
          </Typography>
          <Typography sx={{ color: "grey", fontSize: 14, mt: 0.5 }}>
            {property?.description}
          </Typography>
        </Box>
      </Container>

      <Container sx={{ mt: 2, display: "flex", mb: 4 }}>
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
            Facts And Features
          </Typography>
          <Button
            sx={{
              mt: 2,
              pl: 2,
              backgroundColor: "#EFFCF7",
              textTransform: "capitalize",
              color: "#26a69a",
              justifyContent: "flex-start",
              width: "600px",
            }}
            onClick={() => {
              setIsInterior(!isInterior);
            }}
            endIcon={isInterior ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          >
            Interior Details
          </Button>
          <Button
            sx={{
              mt: 2,
              pl: 2,
              backgroundColor: "#EFFCF7",
              textTransform: "capitalize",
              color: "#26a69a",
              justifyContent: "flex-start",
              width: "600px",
            }}
            onClick={() => {
              setIsPropDetails(!isPropDetails);
            }}
            endIcon={
              isPropDetails ? <KeyboardArrowDown /> : <KeyboardArrowUp />
            }
          >
            Property Details
          </Button>
          <Button
            sx={{
              mt: 2,
              pl: 2,
              backgroundColor: "#EFFCF7",
              textTransform: "capitalize",
              color: "#26a69a",
              justifyContent: "flex-start",
              width: "600px",
            }}
            onClick={() => {
              setIsConstDetails(!isConstDetails);
            }}
            endIcon={
              isConstDetails ? <KeyboardArrowDown /> : <KeyboardArrowUp />
            }
          >
            Construction Details
          </Button>
          <Button
            sx={{
              mt: 2,
              pl: 2,
              backgroundColor: "#EFFCF7",
              textTransform: "capitalize",
              color: "#26a69a",
              justifyContent: "flex-start",
              width: "600px",
            }}
            onClick={() => {
              setIsUtil(!isUtil);
            }}
            endIcon={isUtil ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          >
            Utilities / Green Energy Details
          </Button>
          <Button
            sx={{
              mt: 2,
              pl: 2,
              backgroundColor: "#EFFCF7",
              textTransform: "capitalize",
              color: "#26a69a",
              justifyContent: "flex-start",
              width: "600px",
            }}
            onClick={() => {
              setIsComm(!isComm);
            }}
            endIcon={isComm ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          >
            Community and Neighborhood Details
          </Button>
          <Button
            sx={{
              mt: 2,
              pl: 2,
              backgroundColor: "#EFFCF7",
              textTransform: "capitalize",
              color: "#26a69a",
              justifyContent: "flex-start",
              width: "600px",
            }}
            onClick={() => {
              setIsHOA(!isHOA);
            }}
            endIcon={isHOA ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          >
            HOA and Financial Details
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 6,
            minWidth: 300,
          }}
        >
          {/* <OwnerDetails {...property.ownerDetails} /> */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid #26a69a",
              mt: 2,
              pb: 2,
            }}
          >
            <Typography
              sx={{
                backgroundColor: "#26a69a",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                py: 1.5,
                px: 1,
              }}
            >
              Listed By
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
            >
              <Typography
                sx={{
                  mt: 1,
                  color: "#26a69a",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {/* {property?.ownerDetails?.initials?.[0]} */}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "gray",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {/* {property?.ownerDetails?.owner?.[0]} */}
              </Typography>

              <Typography sx={{ mt: 1, color: "#26a69a", fontSize: "10px" }}>
                {/* {property?.ownerDetails?.totalYears?.[0]} */}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 2 }}>
            {/* <TaxDetails {...property.taxDetails} /> */}
          </Box>
        </Box>
      </Container>
    </>
  );
}
