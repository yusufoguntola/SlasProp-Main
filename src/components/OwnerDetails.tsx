import { Box, Typography } from "@mui/material";

export type OwnerDetailsProps = Partial<Property["owner"]>;

export function OwnerDetails({ firstName, lastName }: OwnerDetailsProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", pb: 2, ml: 2 }}>
      <Typography
        sx={{
          backgroundColor: "#26a69a",
          color: "white",
          fontSize: "12px",
          fontWeight: "bold",
          py: 1.5,
          px: 2,
          textAlign: "center",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        Owner's Details
      </Typography>

      <Box
        sx={{
          py: 1,
          px: 3,
          border: "2px solid #26a69a",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {firstName || ""} {lastName || ""}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
