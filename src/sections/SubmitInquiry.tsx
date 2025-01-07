import { object, string } from "yup";

import { useSubmitEnquiryForm } from "@/api/profile/mutations";
import { showToast } from "@/utils/toast";
import { useForm, yupResolver } from "@mantine/form";
import {
  Button,
  CardMedia,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const schema = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email format").required("Email is required"),
  mobileNumber: string().required("Mobile number is required"),
  optionalNumber: string(),
  message: string().required("Message is required"),
});

export function SubmitInquiry() {
  const form = useForm<EnquiryForm>({
    initialValues: {
      name: "",
      email: "",
      mobileNumber: "",
      otherNumber: "",
      message: "",
    },
    validate: yupResolver(schema),
  });

  const { mutate, isPending } = useSubmitEnquiryForm();

  const handleSubmit = (values: EnquiryForm) =>
    mutate(values, {
      onSuccess: (resp) => {
        form.reset();
        showToast("success", resp.data.message);
      },
    });

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
              error={!!form.errors.name}
              helperText={form.errors.name ? form.errors.name : ""}
            />
            <TextField
              type="email"
              variant="standard"
              label="Email"
              {...form.getInputProps("email")}
              fullWidth
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
              {...form.getInputProps("mobileNumber")}
              fullWidth
              error={!!form.errors.mobileNumber}
              helperText={form.errors.mobileNumber}
            />
            <TextField
              type="text"
              variant="standard"
              label="Optional Number"
              {...form.getInputProps("otherNumber")}
              fullWidth
            />
          </Stack>

          <TextField
            fullWidth
            variant="standard"
            label="Message"
            {...form.getInputProps("message")}
            margin="normal"
            multiline
            rows={4}
            error={!!form.errors.message}
            helperText={form.errors.message}
          />

          <Button
            variant="contained"
            type="submit"
            disabled={isPending}
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
            {isPending ? "Submitting..." : " Submit Inquiry"}
          </Button>
        </form>
      </Container>
    </Container>
  );
}
