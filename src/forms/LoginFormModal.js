import React from "react";
import { useState } from "react";

import {
  TextField,
  Button,
  IconButton,
  Link,
  InputAdornment,
  Container,
  Dialog,
  FormLabel,
} from "@mui/material";
import { DialogContent, DialogActions } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import SignUpFormModal from "./SignUpModal";
import { useAuth } from "../hooks/useAuth";
import { OptionContext } from "../App";
import useLoginStore from "../stores/Store";
import { usePostUserLogin } from "../hooks/api/mutations";

const LoginFormModal = () => {
  const myOption = React.useContext(OptionContext);
  const { login } = useAuth();
  const { mutateAsync: logIn } = usePostUserLogin();

  // Zustand state and actions
  const { formData, errors, setFormData, setErrors, resetForm } =
    useLoginStore();

  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    resetForm(); // Reset form state when modal closes
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { userID: "", password: "" };

    if (!formData.userID) {
      newErrors.userID = "User ID is required";
      valid = false;
    }

    // Password strength check
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 6 characters with at least one uppercase and one lowercase letter";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  console.log({ formData });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before proceeding
    if (validateForm()) {
      try {
        // Attempt login using mutateAsync from the usePostUserLogin hook
        const response = await logIn(formData); // Pass the formData to the mutation

        // Assuming the response contains a token on success, store it as needed
        if (response.token) {
          // Store token in localStorage or in state as needed
          localStorage.setItem("token", response.token);
          console.log("Login successfuls");

          // You can also update your Zustand state or other app-wide states
          myOption.setOption(false); // Close the modal after login
        } else {
          console.error("Token not found in response");
        }
      } catch (error) {
        // Handle login errors
        console.error(
          "Login failed:",
          error.response?.data?.error || error.message
        );
        ErrorToast(
          "Login failed",
          error.response?.data?.error || "An error occurred"
        );
      }
    } else {
      console.log("Login validation failed");
    }
  };

  return (
    <>
      <Button
        color="inherit"
        style={{ textTransform: "capitalize" }}
        onClick={handleOpen}>
        Sign In / Login
        <ArrowCircleRightOutlinedIcon
          style={{ color: "#26a69a", paddingLeft: 4 }}
        />
      </Button>
      <Dialog
        open={open}
        sx={{
          maxWidth: "500px",
          left: "28%",
        }}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}>
        <Container sx={{ borderBottom: 1 }}>
          <DialogActions>
            <p
              style={{
                display: "inline-block",
                width: "250px",
                fontFamily: "monospace",
                fontSize: 17,
                fontWeight: "bold",
                marginRight: "auto",
              }}>
              Login
            </p>
            <Button onClick={handleClose} sx={{ marginRight: -4 }}>
              <ClearIcon
                sx={{
                  color: "red",
                  fontSize: 20,
                  fontWeight: "bold",
                }}></ClearIcon>
            </Button>
          </DialogActions>
        </Container>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          <p style={{ color: "#26a69a", fontSize: 15 }}>
            Enter your login details to sign in.
          </p>
          <FormLabel sx={{ fontSize: 13 }}>User ID</FormLabel>
          <TextField
            name="userID"
            size="small"
            onChange={handleChange}
            error={Boolean(errors.userID)}
            helperText={errors.userID}
            margin="normal"
            sx={{ color: "grey", mb: 1.5 }}
          />
          <FormLabel sx={{ fontSize: 13 }}>Password</FormLabel>
          <TextField
            type={showPassword ? "text" : "password"}
            name="password"
            size="small"
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Link
            href="#"
            variant="body2"
            style={{
              textDecoration: "none",
              color: "red",
              fontWeight: "bold",
              marginLeft: "auto",
            }}>
            Forgot Password?
          </Link>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <DialogActions>
              <Button
                type="submit"
                variant="contained"
                size="medium"
                sx={{
                  mt: 2,
                  backgroundColor: "#26a69a",
                  "&:hover": { backgroundColor: "#26a69a" },
                  borderRadius: "16px",
                  boxShadow: "10px 10px 5px #269d91 inset",
                  width: "150px",
                }}>
                Login
              </Button>
            </DialogActions>
          </Container>
          <SignUpFormModal />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginFormModal;
