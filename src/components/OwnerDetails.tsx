import { Box, Typography } from "@mui/material";
import { PropertyCardProps } from "./PropertyCard";

type OwnerDetailsProps = PropertyCardProps["ownerDetails"];

export function OwnerDetails(ownerDetails) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid #26a69a",
        pb: 2,
        ml: 4,
      }}>
      <Typography
        sx={{
          backgroundColor: "#26a69a",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          py: 1.5,
          px: 1,
        }}>
        Owners Details
      </Typography>
      <Box sx={{ display: "flex", mt: 1 }}>
        <Box sx={{ display: "flex", ml: 2, flexDirection: "column" }}>
          {ownerDetails.initials.map((initial) => (
            <Typography
              sx={{
                mb: 1,
                color: "#26a69a",
                fontSize: "12px",
                fontWeight: "bold",
              }}>
              {initial}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: "flex", ml: 2, flexDirection: "column" }}>
          {ownerDetails.owner.map((owner) => (
            <Typography
              sx={{
                mb: 1,
                color: "gray",
                fontSize: "12px",
                fontWeight: "bold",
              }}>
              {owner}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: "flex", mx: 2.5, flexDirection: "column" }}>
          {ownerDetails.totalYears.map((totalYear) => (
            <Typography
              sx={{
                mb: 1.5,
                color: "#26a69a",
                fontSize: "10px",
                display: "flex",
              }}>
              {totalYear}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
