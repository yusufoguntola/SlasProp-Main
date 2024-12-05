import { Box, Typography } from "@mui/material";

export interface TaxDetailsProps {
  year: number[];
  propertyTax: string[];
  taxAssessment: string[];
  status: string[];
}

export function TaxDetails({
  year,
  propertyTax,
  taxAssessment,
  status,
}: TaxDetailsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid #26a69a",
        pb: 2,
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <Typography
        sx={{
          backgroundColor: "#26a69a",
          color: "white",
          fontSize: "18px",
          fontWeight: "bold",
          py: 1.5,
          px: 2,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          textAlign: "center",
        }}
      >
        Tax Details
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
          mt: 2,
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
          }}
        >
          Year
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
          }}
        >
          Property Taxes
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
          }}
        >
          Tax Assessment
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
          }}
        >
          Status
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
          mt: 1,
          px: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {year.map((yr) => (
            <Typography
              sx={{ color: "grey", fontSize: "12px", textAlign: "center" }}
              key={yr}
            >
              {yr}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {propertyTax.map((tax) => (
            <Typography
              sx={{ color: "grey", fontSize: "12px", textAlign: "center" }}
              key={tax}
            >
              {tax}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {taxAssessment.map((taxAs) => (
            <Typography
              sx={{ color: "grey", fontSize: "12px", textAlign: "center" }}
              key={taxAs}
            >
              {taxAs}{" "}
              <Typography
                component="span"
                sx={{
                  color: "#26a69a",
                  fontSize: "12px",
                  fontWeight: "bold",
                  display: "inline",
                }}
              >
                +62.5%
              </Typography>
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {status.map((stat) => (
            <Typography
              sx={{ color: "grey", fontSize: "12px", textAlign: "center" }}
              key={stat}
            >
              {stat}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
