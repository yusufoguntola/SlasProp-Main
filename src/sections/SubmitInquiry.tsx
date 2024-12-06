import { useForm, yupResolver } from "@mantine/form";
import {
  Button,
  CardMedia,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { object, string } from "yup";

const schema = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email format").required("Email is required"),
  mobileNo: string().required("Mobile number is required"),
  optionalNo: string(),
  message: string().required("Message is required"),
});

export function SubmitInquiry() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      mobileNo: "",
      optionalNo: "",
      message: "",
    },
    validate: yupResolver(schema),
  });

  const handleSubmit = () => {};

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        py: 4,
      }}
    >
      <CardMedia
        component="img"
        image="/assets/inquiry-image.png"
        alt="Inquiry Image"
        sx={{
          maxWidth: { xs: "100%", md: "45%" },
          objectFit: "cover",
          borderRadius: "8px",
          mb: { xs: 2, md: 0 },
        }}
      />

      <Container sx={{ py: 2, flex: 1 }}>
        <Typography
          variant="h6"
          sx={{
            color: "grey",
            textTransform: "uppercase",
            fontSize: "14px",
            fontFamily: "Arial",
          }}
        >
          Submit Inquiry
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 1 }}>
          How can we be of help?
        </Typography>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            sx={{ my: 4 }}
          >
            <TextField
              type="text"
              variant="standard"
              label="Name"
              {...form.getInputProps("name")}
              fullWidth
              required
              error={!!form.errors.name}
              helperText={form.errors.name ? form.errors.name : ""}
            />
            <TextField
              type="email"
              variant="standard"
              label="Email"
              {...form.getInputProps("email")}
              fullWidth
              required
              error={!!form.errors.email}
              helperText={form.errors.email}
            />
          </Stack>

          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            sx={{ marginBottom: 4 }}
          >
            <TextField
              type="text"
              variant="standard"
              label="Mobile Number"
              {...form.getInputProps("mobileNo")}
              fullWidth
              required
              error={!!form.errors.mobileNo}
              helperText={form.errors.mobileNo}
            />
            <TextField
              type="text"
              variant="standard"
              label="Optional Number"
              {...form.getInputProps("optionalNo")}
              fullWidth
            />
          </Stack>

          <TextField
            fullWidth
            variant="standard"
            label="Message"
            {...form.getInputProps("message")}
            margin="normal"
            required
            multiline
            rows={4}
            error={!!form.errors.message}
            helperText={form.errors.message}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              bgcolor: "#26a69a",
              color: "white",
              px: 4,
              py: 2,
              mt: 4,
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#26a69a" },
            }}
          >
            Submit Inquiry
          </Button>
        </form>
      </Container>
    </Container>
  );
}
