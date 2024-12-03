"use client";

import { useEffect, useState } from "react";

import { usePassword, useUpdateProfile } from "@/api/profile/mutations";
import { useGetProfile } from "@/api/profile/queries";
import { showToast } from "@/utils/toast";
import { useForm, yupResolver } from "@mantine/form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormLabel,
  Grid2 as Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { object, ref, string } from "yup";
import ProfilePhoto from "./ProfilePhoto";

const passwordSchema = object({
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])/,
      "Password must contain at least one uppercase and one lowercase letter"
    ),
  confirmPassword: string()
    .required("Confirm password is required")
    .oneOf([ref("password"), ""], "Passwords must match"),
});

export default function Settings() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { data: user } = useGetProfile();
  const { mutate: updateProfile, isPending } = useUpdateProfile();
  const { mutate, isPending: isChanging } = usePassword();

  const profileForm = useForm<Partial<Profile>>({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      imageUrl: "",
    },
  });

  useEffect(() => {
    if (!user) return;

    profileForm.initialize({
      firstName: user.firstName ?? "",
      lastName: user.lastName ?? "",
      phoneNumber: user.phoneNumber ?? "",
      email: user.email ?? "",
      imageUrl: user.imageUrl ?? "",
    });
  }, [user]);

  const passwordForm = useForm({
    initialValues: {
      password: "",
      newPassword: "",
    },
    validate: yupResolver(passwordSchema),
  });

  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  return (
    <Container sx={{ minHeight: 500 }}>
      <Box
        sx={{
          display: "flex",
          marginLeft: "30%",
          mt: 4,
          borderBottom: "1px solid lightgray",
          pb: 2,
        }}
      >
        <Typography variant='h6' sx={{ fontWeight: "bold", flexGrow: 1 }}>
          Edit Profile
        </Typography>
      </Box>

      <Box sx={{ ml: "30%", mt: 4 }}>
        <ProfilePhoto form={profileForm} fieldName='imageUrl' />
      </Box>

      <form
        onSubmit={profileForm.onSubmit((values) => {
          updateProfile(values, {
            onSuccess: () => {
              profileForm.resetDirty();
              showToast("success", "Profile Updated Successfully");
            },
          });
        })}
      >
        <Box sx={{ ml: "30%", mt: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>First Name</FormLabel>
              <TextField
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                size='small'
                {...profileForm.getInputProps("firstName")}
                autoFocus
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>Last Name</FormLabel>
              <TextField
                required
                fullWidth
                id='lastName'
                name='lastName'
                size='small'
                {...profileForm.getInputProps("lastName")}
                autoComplete='family-name'
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>Email Address</FormLabel>
              <TextField
                required
                fullWidth
                id='email'
                name='email'
                autoComplete='email'
                {...profileForm.getInputProps("email")}
                size='small'
                type='email'
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>Phone Number</FormLabel>
              <TextField
                required
                fullWidth
                id='phoneNumber'
                name='phoneNumber'
                autoComplete='tel'
                {...profileForm.getInputProps("phoneNumber")}
                size='small'
                type='number'
              />
            </Grid>
          </Grid>

          <Container sx={{ display: "flex", justifyContent: "right", mt: 4 }}>
            <Button
              type='submit'
              variant='contained'
              size='medium'
              sx={{
                backgroundColor: "#26a69a",
                "&:hover": { backgroundColor: "#26a69a" },
                borderRadius: "16px",
                boxShadow: "10px 10px 5px #269d91 inset",
              }}
              disabled={!profileForm.isDirty() || isPending}
            >
              {isPending ? (
                <CircularProgress size={24} color='inherit' />
              ) : (
                "Update Profile"
              )}
            </Button>
          </Container>
        </Box>
      </form>

      {/* Password Form */}
      <form
        onSubmit={passwordForm.onSubmit((values) => {
          mutate(values, {
            onSuccess: () => {
              showToast("success", "Password Updated Successfully");
            },
            onError: () => {
              showToast("error", "Profile Updated Successfully");
            },
          });
        })}
      >
        <Box sx={{ ml: "30%", mt: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>Current Password</FormLabel>
              <TextField
                required
                fullWidth
                name='password'
                type={showPassword ? "text" : "password"}
                id='password'
                size='small'
                autoComplete='new-password'
                margin='normal'
                {...passwordForm.getInputProps("password")}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <FormLabel>New Password</FormLabel>
              <TextField
                required
                fullWidth
                name='newPassword'
                type={showConfirmPassword ? "text" : "password"}
                id='newPassword'
                size='small'
                autoComplete='new-password'
                margin='normal'
                {...passwordForm.getInputProps("newPassword")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
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
              type='submit'
              variant='contained'
              size='medium'
              sx={{
                backgroundColor: "#26a69a",
                "&:hover": { backgroundColor: "#26a69a" },
                borderRadius: "16px",
                boxShadow: "10px 10px 5px #269d91 inset",
              }}
              disabled={isChanging}
            >
              {isChanging ? (
                <CircularProgress size={24} color='inherit' />
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
