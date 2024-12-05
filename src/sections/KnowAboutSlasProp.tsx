import { KeyFeatures } from "@/components/KeyFeatures";
import { Container, Typography } from "@mui/material";

export function KnowAboutSlasProp() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold" }}>
        Know About SlasProp
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "#26a69a",
          my: 2,
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        Revolutionizing Real Estate with SlasProp: Redefining Your Property
        Adventure.
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          my: 3,
          fontSize: "14px",
          maxWidth: "90%",
          margin: "auto",
        }}
        component={"p"}
      >
        Step into the future of real estate with SlasProp—a dynamic fusion of
        innovation and property expertise. Beyond a conventional listing and
        registry system, SlasProp promises an immersive and streamlined approach
        to your property endeavors.
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          my: 3,
          fontSize: "14px",
          maxWidth: "90%",
          margin: "auto",
        }}
        component={"p"}
      >
        Embark on a journey where property transactions become more than just
        deals; they become memorable experiences. Whether you're buying,
        selling, or simply exploring, SlasProp transforms each interaction into
        a secure, transparent, and efficient encounter.
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          my: 3,
          fontSize: "14px",
          maxWidth: "90%",
          margin: "auto",
        }}
        component={"p"}
      >
        What makes SlasProp exceptional? We leverage the power of blockchain,
        ensuring unmatched security and efficiency. No longer bound by paperwork
        complexities or obscured processes, SlasProp introduces a future where
        property transactions are swift, secure, and tailored to your
        preferences.
      </Typography>

      <KeyFeatures />
    </Container>
  );
}
