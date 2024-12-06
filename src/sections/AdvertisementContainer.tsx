import { Box, Container, Typography } from "@mui/material";

export function AdvertisementContainer() {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ backgroundColor: "lightgrey", py: "6%", px: "16%" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Advertisement will come here
        </Typography>
      </Box>
    </Container>
  );
}
