import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormLabel,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import { useMaterialMenu } from "@/hooks/use-material-menu";
import { useForm } from "@mantine/form";

import Link from "next/link";
import sampleImage from "../assets/Logo.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  backgroundColor: "#e1f9fa",
  borderRadius: 4,
  p: 4,
};

export function SlasPayLogin() {
  const { navClose, navIsOpen, navToggle } = useMaterialMenu("nav");

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      showPassword: false,
    },
  });

  function handleShowPassword() {
    form.setFieldValue("showPassword", !form.values.showPassword);
  }

  return (
    <div>
      <Button
        onClick={navToggle}
        sx={{
          backgroundColor: "#DF593D",
          color: "white",
          ml: 2,
          width: "170px",
          "&:hover": { backgroundColor: "#DF593D" },
        }}
      >
        PAY NOW
      </Button>

      <Modal
        open={navIsOpen}
        onClose={navClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="img"
            sx={{
              height: 40,
              width: 100,
              borderRadius: 2,
            }}
            alt="Logo"
            src={sampleImage.src}
          />
          <Typography
            id="modal-modal-title"
            sx={{ ml: 1, fontSize: "16px", fontWeight: "bold" }}
          >
            Hi, Welcome Back!
            <Typography paragraph sx={{ fontSize: "14px", color: "gray" }}>
              Enter Your Details to Login
            </Typography>
          </Typography>
          <FormLabel sx={{ fontSize: 13, color: "#26a69a" }}>Email</FormLabel>
          <TextField
            name="email"
            fullWidth
            inputProps={{ style: { backgroundColor: "white", fontSize: 12 } }}
            size="small"
            label="Enter Your Email Address"
            margin="normal"
            sx={{ color: "grey" }}
            InputLabelProps={{ style: { fontSize: "12px" } }}
            {...form.getInputProps("email")}
          />
          <FormLabel sx={{ fontSize: 13, color: "#26a69a" }}>
            Password
          </FormLabel>

          <TextField
            type={form.values.showPassword ? "text" : "password"}
            name="password"
            size="small"
            fullWidth
            inputProps={{ style: { backgroundColor: "white", fontSize: 12 } }}
            InputLabelProps={{ style: { fontSize: "12px" } }}
            label="Enter Your Password"
            sx={{ fontSize: "10px" }}
            margin="normal"
            InputProps={{
              style: { backgroundColor: "white" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {form.values.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...form.getInputProps("password")}
          />

          <Link
            href="#"
            style={{
              textDecoration: "none",
              color: "red",
              fontWeight: "bold",
              marginLeft: "auto",
            }}
          >
            Forgot Password?
          </Link>

          <Button
            type="submit"
            variant="contained"
            size="medium"
            sx={{
              mt: 2,
              backgroundColor: "#26a69a",
              "&:hover": { backgroundColor: "#26a69a" },
              borderRadius: 1,
              boxShadow: "10px 10px 5px #269d91 inset",
              minWidth: "150px",
            }}
          >
            Login
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
