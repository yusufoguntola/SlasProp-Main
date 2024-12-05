import { Box, Typography } from "@mui/material";

export type OwnerDetailsProps = Partial<Property["owner"]>;

export function OwnerDetails(ownerDetails: OwnerDetailsProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", pb: 2, ml: 2 }}>
      <Typography
        sx={{
          backgroundColor: "#26a69a",
          color: "white",
          fontSize: "12px",
          fontWeight: "bold",
          p: 1,
          textAlign: "center",
        }}
      >
        Owners Details
      </Typography>
      <Box sx={{ display: "flex", pt: 1, px: 2, border: "2px solid #26a69a" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              mb: 1,
              color: "#26a69a",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {ownerDetails?.firstName}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", ml: 2, flexDirection: "column" }}>
          <Typography
            sx={{ mb: 1, color: "gray", fontSize: "12px", fontWeight: "bold" }}
          >
            {ownerDetails?.lastName}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
