import { object, string } from "yup";

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
  name: string().required(),
  email: string().email().required(),
  mobileNo: string().required(),
  optionalNo: string(),
  message: string().required(),
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

  return (
    <Container sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        image="/assets/inquiry-image.png"
        alt="This is a land image"
        sx={{
          maxWidth: "40%",
          objectFit: "fit",
        }}
      />

      <Container sx={{ py: 4 }}>
        <Typography
          variant="h6"
          sx={{
            color: "grey",
            textTransform: "uppercase",
            fontSize: "14px",
            fontFamily: "Arial",
          }}
        >
          Submit Enquiry
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 1 }}>
          How can we be of help?
        </Typography>
        <form>
          <Stack spacing={2} direction="row" sx={{ my: 4 }}>
            <TextField
              type="text"
              variant="standard"
              label="Name"
              {...form.getInputProps("name")}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="standard"
              label="Email"
              {...form.getInputProps("email")}
              fullWidth
              required
            />
          </Stack>

          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              type="text"
              variant="standard"
              label="Mobile Number"
              {...form.getInputProps("mobileNo")}
              fullWidth
              required
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
              borderRadius: "0px",
              "&:hover": { backgroundColor: "#26a69a" },
            }}
          >
            Submit Enquiry
          </Button>
        </form>
      </Container>
    </Container>
  );
}
