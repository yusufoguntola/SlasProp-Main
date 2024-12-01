import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";
import { boolean, object, ref, string } from "yup";

import {
  useActivateAccount,
  useRegister,
  useResendActivationOTP,
} from "@/api/use-register";
import { useMaterialMenu } from "@/hooks/use-material-menu";
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

const schema = object({
  userID: string().required().min(1, "First name is required"),
  lastName: string().required().min(1, "Last name is required"),
  username: string().required().min(2, "Username is required"),
  password: string()
    .required()
    .min(8, "Password must be at least 8 characters")
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
});

export function SignUpModal() {
  const { mutate: register } = useRegister();
  const { mutate: activate_account } = useActivateAccount();
  const { mutate: resend_otp } = useResendActivationOTP();
  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(false);
  const [activationToken, setActivationToken] = useState("");
  const [email, setEmail] = useState("");

  // console.log({ otp, activationToken, email });

  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

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

  const { dialogClose, dialogIsOpen, dialogToggle } = useMaterialMenu("dialog");

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

    setEmail(data.email);
    register(payload, {
      onSuccess: (response) => {
        setActivationToken(response.data.data.token);

        setOpen(true);
        dialogClose();
        showToast("success", <p>{response.data.message}</p>);
      },
      onError: (error) => {
        if (error instanceof Error && error.message) {
          showToast("error", error.message);
        } else {
          showToast(
            "error",
            <p>User registration failed. Please try again.</p>
          );
        }
      },
    });
  }

  function handleActivateAccount() {
    activate_account(
      { token: activationToken, otp },
      {
        onSuccess: (response) => {
          showToast("success", <p>{response.data.message}</p>);
          closeSignupModal();
          setOpen(false);
        },
        onError: () => {
          showToast("error", "Failed to activate account");
        },
      }
    );
  }

  function handleResendOTP() {
    resend_otp(
      { email },
      {
        onSuccess: (response) => {
          showToast("success", <p>{response.data.message}</p>);
        },
        onError: (error) => {
          if (error instanceof Error && error.message) {
            showToast("error", error.message);
          } else {
            showToast("error", <p>Resend OTP failed. Please try again.</p>);
          }
        },
      }
    );
  }

  return (
    <>
      <>
        <Button
          color="inherit"
          sx={{
            textTransform: "capitalize",
            textDecoration: "none",
            mt: 1,
            textAlign: "center",
            color: "#26a69a",
            "&:hover": { backgroundColor: "white" },
          }}
          onClick={dialogToggle}>
          Don't have an account? Sign Up
        </Button>

        <Dialog
          open={dialogIsOpen}
          onClose={closeSignupModal}
          PaperProps={{
            component: "form",
            onSubmit: form.onSubmit(handleSubmit),
          }}>
          <Container sx={{ borderBottom: 1 }}>
            <DialogActions>
              <p
                style={{
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontSize: 17,
                  fontWeight: "bold",
                  marginRight: "auto",
                }}>
                Create New Account
              </p>
              <Button
                onClick={closeSignupModal}
                sx={{ marginRight: -4 }}>
                <Clear
                  sx={{ color: "red", fontSize: 20, fontWeight: "bold" }}
                />
              </Button>
            </DialogActions>
          </Container>

          <DialogContent>
            <p style={{ color: "#26a69a", fontSize: 15 }}>
              Provide the following information to create an account.
            </p>
            <Grid
              container
              spacing={2}>
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
                  error={Boolean(form.errors.acceptTermsConditions)}>
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
                  }}>
                  Create Account
                </Button>
              </DialogActions>
            </Container>
          </DialogContent>
        </Dialog>
      </>

      <Dialog
        open={open}
        maxWidth="xs"
        onClose={handleCloseModal}>
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
              Enter OTP
            </p>
            <Button onClick={handleCloseModal}>
              <Clear
                sx={{
                  color: "red",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              />
            </Button>
          </DialogActions>
        </Container>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p style={{ color: "#26a69a", fontSize: 15 }}>
            Enter the OTP sent to your email to complete this process.
          </p>
          <article
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
            }}>
            <MuiOtpInput
              length={6}
              value={otp}
              onChange={handleChange}
            />
            <button
              style={{
                paddingTop: 12,
                background: "#26a69a",
                width: "fit-content",
                padding: "10px",
                borderRadius: "5px",
                fontSize: 15,
                fontWeight: "bold",
                cursor: "pointer",
                border: "none",
              }}
              type="submit"
              disabled={otp.length < 6}
              onClick={() => handleActivateAccount()}>
              submit
            </button>
          </article>
          <button
            type="button"
            style={{
              color: "green",
              paddingBottom: "50px",
            }}
            onClick={handleResendOTP}>
            Resend Activation OTP
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}
