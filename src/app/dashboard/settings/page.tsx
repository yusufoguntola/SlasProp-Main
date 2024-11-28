"use client"; // Ensures this is treated as a client-side component

import { UpdateProfile, UserResetPassword } from "@/builder/addProperty";
import { useForm, yupResolver } from "@mantine/form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { object, string } from "yup";
import ProfilePhoto from "./ProfilePhoto";

const profileSchema = object({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  phoneNumber: string().required("Phone number is required"),
  email: string().email("Invalid email").required("Email is required"),
});

// const passwordSchema = object({
//   password: string()
//     .required("Password is required")
//     .min(6, "Password must be at least 6 characters")
//     .matches(
//       /(?=.*[a-z])(?=.*[A-Z])/,
//       "Password must contain at least one uppercase and one lowercase letter"
//     ),
//   confirmPassword: string()
//     .required("Confirm password is required")
//     .oneOf([ref("password"), ""], "Passwords must match"),
// });

export default function Settings() {
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const profileForm = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    },
    validate: yupResolver(profileSchema),
  });

  const passwordForm = useForm({
    initialValues: {
      password: "",
     newPassword: "",
    },
    // validate: yupResolver(passwordSchema),
  });

  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  async function handleProfileSubmit(values: any) {
   
  try {
   setLoadingProfile(true);
      const response = await UpdateProfile(values); 
    console.log(response);
  setLoadingProfile(false);
  profileForm.reset(); 
      alert(response?.data?.message);

    } catch (err) {
      console.error("Error adding property:", err);
      // setError("Failed to add property. Please try again.");
    } finally {
      // setLoading(false); // Hide loading state
    }
    
  }



  async function handlePasswordSubmit(values: any) {

    try {
      setLoadingPassword(true);
      const response = await UserResetPassword(values);
       profileForm.reset(); 
      alert(response?.data?.message);
    } catch (err) {
      console.error("Error updating profile:", err);
    } finally {
      setLoadingPassword(false);
    }
  }

  return (
    <Container sx={{ minHeight: 500 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          marginLeft: "30%",
          mt: 4,
          borderBottom: "1px solid lightgray",
          pb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
          Edit Profile
        </Typography>
      </Box>

      {/* Profile Photo */}
      <Box sx={{ ml: "30%", mt: 4 }}>
        <ProfilePhoto form={profileForm} fieldName="imageUrl" />
      </Box>

      {/* Profile Form */}
      <form onSubmit={profileForm.onSubmit(handleProfileSubmit)}>
        <Box sx={{ ml: "30%", mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormLabel>First Name</FormLabel>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                size="small"
                {...profileForm.getInputProps("firstName")}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel>Last Name</FormLabel>
              <TextField
                required
                fullWidth
                id="lastName"
                name="lastName"
                size="small"
                {...profileForm.getInputProps("lastName")}
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
                {...profileForm.getInputProps("email")}
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
                autoComplete="tel"
                {...profileForm.getInputProps("phoneNumber")}
                size="small"
                type="number"
              />
            </Grid>
          </Grid>

          <Container sx={{ display: "flex", justifyContent: "right", mt: 4 }}>
            <Button
              type="submit"
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: "#26a69a",
                "&:hover": { backgroundColor: "#26a69a" },
                borderRadius: "16px",
                boxShadow: "10px 10px 5px #269d91 inset",
              }}
              disabled={loadingProfile}
            >
              {loadingProfile ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Update Profile"
              )}
            </Button>
          </Container>
        </Box>
      </form>

      {/* Password Form */}
      <form onSubmit={passwordForm.onSubmit(handlePasswordSubmit)}>
        <Box sx={{ ml: "30%", mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormLabel>Current Password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                size="small"
                autoComplete="new-password"
                margin="normal"
                {...passwordForm.getInputProps("password")}
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
              <FormLabel>New Password</FormLabel>
              <TextField
                required
                fullWidth
                name="newPassword"
                type={showConfirmPassword ? "text" : "password"}
                id="newPassword"
                size="small"
                autoComplete="new-password"
                margin="normal"
                {...passwordForm.getInputProps("newPassword")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowConfirmPassword}>
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
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
              sx={{
                backgroundColor: "#26a69a",
                "&:hover": { backgroundColor: "#26a69a" },
                borderRadius: "16px",
                boxShadow: "10px 10px 5px #269d91 inset",
              }}
              disabled={loadingPassword}
            >
              {loadingPassword ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Reset Password"
              )}
            </Button>
          </Container>
        </Box>
      </form>
    </Container>
  );
}
