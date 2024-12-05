import { Box, Typography } from "@mui/material";

export type OwnerDetailsProps = Partial<Property["owner"]>;

export function OwnerDetails({ firstName, lastName }: OwnerDetailsProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", pb: 2, ml: 2 }}>
      <Typography
        sx={{
          backgroundColor: "#26a69a",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          py: 1.5,
          px: 2,
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        Owner's Details
      </Typography>

      <Box
        sx={{
          display: "flex",
          pt: 2,
          px: 3,
          border: "2px solid #26a69a",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", mr: 3, mb: 2 }}>
          <Typography
            sx={{
              color: "#26a69a",
              fontSize: "14px",
              fontWeight: "bold",
              mb: 1,
              textAlign: "left",
            }}
          >
            {firstName || "First Name"}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
          <Typography
            sx={{
              color: "gray",
              fontSize: "14px",
              fontWeight: "bold",
              mb: 1,
              textAlign: "left",
            }}
          >
            {lastName || "Last Name"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
