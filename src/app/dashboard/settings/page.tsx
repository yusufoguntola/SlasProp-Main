"use client";

import { useForm, yupResolver } from "@mantine/form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { boolean, object, ref, string } from "yup";

const schema = object({
  userID: string().required(),
  password: string()
    .required()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])/,
      "Password must contain at least one uppercase and one lowercase letter"
    ),
  confirmPassword: string()
    .required()
    .oneOf([ref("password"), ""], "Passwords must match"),
  acceptTermsConditions: boolean()
    .oneOf([true], "Accept terms and conditions")
    .required(),
  phoneNumber: string().required(),
  email: string().email().required(),
  username: string().required(),
});

export default function Settings() {
  const form = useForm({
    initialValues: {
      userID: "",
      acceptTermsConditions: false,
      password: "",
      phoneNumber: "",
      email: "",
      username: "",
      showPassword: false,
      confirmPassword: "",
      showConfirmPassword: false,
    },
    validate: yupResolver(schema),
  });

  const { showPassword, showConfirmPassword } = form.values;

  function handleShowPassword() {
    form.setFieldValue("showPassword", !showPassword);
  }

  function handleShowConfirmPassword() {
    form.setFieldValue("showConfirmPassword", !showConfirmPassword);
  }

  function handleSubmit() {}

  return (
    <Container sx={{ minHeight: 500 }}>
      <Box
        sx={{
          display: "flex",
          marginLeft: "30%",
          mt: 4,
          borderBottom: "1px solid lightgray",
          pb: 2,
        }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
          Edit Profile
        </Typography>
      </Box>

      <Box sx={{ ml: "30%", mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormLabel>Your Name</FormLabel>
            <TextField
              autoComplete="given-name"
              name="username"
              required
              fullWidth
              id="username"
              size="small"
              {...form.getInputProps("username")}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel>User ID</FormLabel>
            <TextField
              required
              fullWidth
              id="user ID"
              name="UserID"
              size="small"
              {...form.getInputProps("userID")}
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel>Email Address</FormLabel>
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              {...form.getInputProps("email")}
              size="small"
              type="email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel>Phone Number</FormLabel>
            <TextField
              required
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              autoComplete="email"
              {...form.getInputProps("phoneNumber")}
              size="small"
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel>Password</FormLabel>
            <TextField
              required
              fullWidth
              name="password"
              type={showPassword ? "text" : "password"}
              id="password"
              size="small"
              autoComplete="new-password"
              margin="normal"
              {...form.getInputProps("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel>Confirm Password</FormLabel>
            <TextField
              required
              fullWidth
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              id="password"
              size="small"
              autoComplete="confirmPassword"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowConfirmPassword}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Container sx={{ display: "flex", justifyContent: "right", mt: 4 }}>
          <Button
            type="submit"
            variant="contained"
            size="medium"
            onSubmit={handleSubmit}
            sx={{
              backgroundColor: "#26a69a",
              "&:hover": { backgroundColor: "#26a69a" },
              borderRadius: "16px",
              boxShadow: "10px 10px 5px #269d91 inset",
            }}>
            Update Profile
          </Button>
        </Container>
      </Box>
    </Container>
  );
}
