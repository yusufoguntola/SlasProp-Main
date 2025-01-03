import { useState } from "react";
import { boolean, object, ref, string } from "yup";

import { useRegister } from "@/api/auth/mutations";
import { showToast } from "@/utils/toast";
import { useForm, yupResolver } from "@mantine/form";
import { Clear, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid2 as Grid,
  IconButton,
  InputAdornment,
  TextField,
  checkboxClasses,
} from "@mui/material";

import { EnterOTP } from "./EnterOTP";

const schema = object({
  userID: string().required().min(1, "First name is required"),
  lastName: string().required().min(1, "Last name is required"),
  username: string().required().min(2, "Username is required"),
  password: string()
    .required()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])/,
      "Password must contain at least one uppercase and one lowercase letter",
    ),
  confirmPassword: string()
    .required()
    .oneOf([ref("password"), ""], "Passwords must match"),
  acceptTermsConditions: boolean()
    .oneOf([true], "Accept terms and conditions")
    .required(),
  phoneNumber: string().required(),
  email: string().email().required(),
});

export function SignUpModal({
  dialogIsOpen,
  dialogClose,
}: {
  dialogIsOpen: boolean;
  dialogClose: () => void;
}) {
  const register = useRegister();
  const [otp, setOtp] = useState({
    token: "",
    opened: false,
    email: "",
  });

  const form = useForm({
    initialValues: {
      userID: "",
      lastName: "",
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

  const closeSignupModal = () => {
    dialogClose();
    form.reset();
  };

  function handleSubmit(data: typeof form.values) {
    const payload = {
      email: data.email,
      username: data.username,
      password: data.password,
      phoneNumber: data.phoneNumber,
      firstName: data.userID,
      lastName: data.lastName,
    };

    register.mutate(payload, {
      onSuccess: (response, variables) => {
        setOtp({
          token: response.data.data.token,
          opened: true,
          email: variables.email,
        });

        dialogClose();
        showToast("success", <p>{response.data.message}</p>);
        form.reset();
      },
    });
  }

  return (
    <>
      <Dialog
        open={dialogIsOpen}
        onClose={closeSignupModal}
        PaperProps={{
          component: "form",
          onSubmit: form.onSubmit(handleSubmit),
        }}
      >
        <Container sx={{ borderBottom: 1 }}>
          <DialogActions>
            <p
              style={{
                display: "inline-block",
                fontFamily: "monospace",
                fontSize: 17,
                fontWeight: "bold",
                marginRight: "auto",
              }}
            >
              Create New Account
            </p>
            <Button onClick={closeSignupModal} sx={{ marginRight: -4 }}>
              <Clear sx={{ color: "red", fontSize: 20, fontWeight: "bold" }} />
            </Button>
          </DialogActions>
        </Container>

        <DialogContent>
          <p style={{ color: "#26a69a", fontSize: 15 }}>
            Provide the following information to create an account.
          </p>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormLabel>First Name</FormLabel>
              <TextField
                fullWidth
                id="firstName"
                name="UserID"
                size="small"
                {...form.getInputProps("userID")}
                autoComplete="given-name"
                error={Boolean(form.errors.userID)}
                helperText={form.errors.userID}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormLabel>Last Name</FormLabel>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                size="small"
                {...form.getInputProps("lastName")}
                autoComplete="family-name"
                error={Boolean(form.errors.lastName)}
                helperText={form.errors.lastName}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormLabel>User Name</FormLabel>
              <TextField
                autoComplete="nickname"
                name="userName"
                fullWidth
                id="userName"
                size="small"
                {...form.getInputProps("username")}
                error={Boolean(form.errors.username)}
                helperText={form.errors.username}
                type="text"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormLabel>Phone Number</FormLabel>
              <TextField
                fullWidth
                id="phoneNumber"
                name="phoneNumber"
                autoComplete="tel"
                {...form.getInputProps("phoneNumber")}
                size="small"
                type="tel"
                error={Boolean(form.errors.phoneNumber)}
                helperText={form.errors.phoneNumber}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <FormLabel>Email Address</FormLabel>
              <TextField
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                {...form.getInputProps("email")}
                size="small"
                type="email"
                error={Boolean(form.errors.email)}
                helperText={form.errors.email}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <FormLabel>Password</FormLabel>
              <TextField
                fullWidth
                name="password"
                type={form.values.showPassword ? "text" : "password"}
                id="password"
                size="small"
                autoComplete="new-password"
                margin="none"
                {...form.getInputProps("password")}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
                error={Boolean(form.errors.password)}
                helperText={form.errors.password}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormLabel>Confirm Password</FormLabel>
              <TextField
                fullWidth
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                id="password"
                size="small"
                autoComplete="confirmPassword"
                margin="none"
                {...form.getInputProps("confirmPassword")}
                slotProps={{
                  input: {
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
                  },
                }}
                error={Boolean(form.errors.confirmPassword)}
                helperText={form.errors.confirmPassword}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="acceptTermsConditions"
                    {...form.getInputProps("acceptTermsConditions", {
                      type: "checkbox",
                    })}
                    sx={{
                      [`&, &.${checkboxClasses.checked}`]: {
                        color: "#26a69a",
                      },
                    }}
                  />
                }
                label="I accept all terms and conditions"
              />
              <FormHelperText
                error={Boolean(form.errors.acceptTermsConditions)}
              >
                {form.errors.acceptTermsConditions}
              </FormHelperText>
            </Grid>
          </Grid>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <DialogActions>
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
              >
                {register.isPending ? "Creating..." : "Create Account"}
              </Button>
            </DialogActions>
          </Container>
        </DialogContent>
      </Dialog>

      <EnterOTP
        onClose={() => {
          setOtp({ opened: false, token: "", email: "" });
          dialogClose();
        }}
        {...otp}
      />
    </>
  );
}
