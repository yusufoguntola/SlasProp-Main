import { Box, Button, CardMedia, Container, Typography } from "@mui/material";

export function JoinUs() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 6,
        px: 4,
        backgroundColor: "#F3FAFA",
      }}
    >
      <Container sx={{ maxWidth: "lg" }}>
        <Box sx={{ maxWidth: "600px" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#333",
              lineHeight: 1.3,
              mb: 2,
              fontSize: { xs: "28px", sm: "32px", md: "36px" },
            }}
          >
            Explore our current job openings and start your journey with us
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#555",
              fontSize: "16px",
              lineHeight: 1.7,
              mb: 3,
              fontWeight: 400,
            }}
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
              px: 6,
              py: 2,
              borderRadius: "50px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 1,
              "&:hover": {
                backgroundColor: "#52d6cf",
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              },
            }}
          >
            Join Us
          </Button>
        </Box>
      </Container>

      <CardMedia
        component="img"
        image="/assets/join-us.png"
        alt="Join us image"
        sx={{
          maxWidth: "40%",
          borderRadius: "10px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          objectFit: "cover",
          display: { xs: "none", md: "block" },
        }}
      />
    </Box>
  );
}
