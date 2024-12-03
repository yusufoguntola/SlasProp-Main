import { Box, Typography } from "@mui/material";

export interface TaxDetailsProps {
  year: number[];
  propertyTax: string[];
  taxAssessment: string[];
  status: string[];
}

export function TaxDetails(taxDetails: TaxDetailsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid #26a69a",
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
        Tax Details
      </Typography>
      <Box sx={{ display: "flex", mt: 1 }}>
        <Typography sx={{ fontSize: "12px", ml: 2, fontWeight: "bold" }}>
          Year
        </Typography>
        <Typography sx={{ fontSize: "12px", mx: 2, fontWeight: "bold" }}>
          Property Taxes
        </Typography>
        <Typography sx={{ fontSize: "12px", mr: 2, fontWeight: "bold" }}>
          Tax Assessment
        </Typography>
      </Box>

      <Box sx={{ display: "flex", mt: 1 }}>
        <Box sx={{ display: "flex", ml: 2, flexDirection: "column" }}>
          {taxDetails.year.map((year) => (
            <Typography sx={{ color: "grey", fontSize: "10px" }} key={year}>
              {year}
            </Typography>
          ))}
        </Box>
{/* 
        <Box sx={{ display: "flex", mx: 2.5, flexDirection: "column" }}>
          {taxDetails.propertyTax.map((propTax) => (
            <Typography sx={{ color: "grey", fontSize: "10px" }} key={propTax}>
              {propTax}
            </Typography>
          ))}
        </Box> */}
        {/* <Box sx={{ display: "flex", ml: 7, flexDirection: "column" }}>
          {taxDetails.taxAssessment.map((taxAs) => (
            <Typography sx={{ color: "grey", fontSize: "10px" }} key={taxAs}>
              {taxAs}{" "}
              <Typography
                component="span"
                sx={{ color: "#26a69a", fontSize: "10px", fontWeight: "bold" }}
              >
                +62.5%
              </Typography>
            </Typography>
          ))}
        </Box> */}
      </Box>
    </Box>
  );
}
