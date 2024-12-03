import { Box, Button, CardMedia, Container, Typography } from "@mui/material";

export function JoinUs() {
  return (
    <Container sx={{ display: "flex", py: 6, backgroundColor: "#F3FAFA" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", pl: 4, pr: 20 }}>
          Explore our current job openings and start your journey
        </Typography>
        <Typography
          component="p"
          sx={{ pl: 4, pr: 20, mt: 2, fontSize: "14px" }}
        >
          Are you ready to embark on a fulfilling career journey? At SlasProp,
          we believe in fostering talent, creativity, and innovation. Join our
          dynamic team, where your skills are valued, and your aspirations are
          supported.
        </Typography>
        <Button
          sx={{
            bgcolor: "#26a69a",
            color: "white",
            px: 4,
            py: 2,
            ml: 4,
            my: 2,
            maxWidth: "150px",
            borderRadius: "0px",
            "&:hover": { backgroundColor: "#52d6cf" },
          }}
        >
          Join Us
        </Button>
      </Box>

      <CardMedia
        component="img"
        image="/assets/join-us.png"
        alt="This is a join us image"
        sx={{
          objectFit: "fit",
          maxWidth: "35%",
        }}
      />
    </Container>
  );
}
