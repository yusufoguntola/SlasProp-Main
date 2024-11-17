import { useForm, yupResolver } from "@mantine/form";
import { Clear, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  checkboxClasses,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { boolean, object, ref, string } from "yup";

import { useMaterialMenu } from "@/hooks/use-material-menu";

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

export function SignUpModal() {
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

  const { dialogClose, dialogIsOpen, dialogToggle } = useMaterialMenu("dialog");

  function handleSubmit() {}

  return (
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
        onClick={dialogToggle}
      >
        Don't have an account? Sign Up
      </Button>

      <Dialog
        open={dialogIsOpen}
        onClose={dialogClose}
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
            <Button onClick={dialogClose} sx={{ marginRight: -4 }}>
              <Clear sx={{ color: "red", fontSize: 20, fontWeight: "bold" }} />
            </Button>
          </DialogActions>
        </Container>

        <DialogContent>
          <p style={{ color: "#26a69a", fontSize: 15 }}>
            Provide the following information to create an account.
          </p>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormLabel>Your Name</FormLabel>
              <TextField
                autoComplete="given-name"
                name="userName"
                required
                fullWidth
                id="userName"
                size="small"
                {...form.getInputProps("userName")}
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
                type={form.values.showPassword ? "text" : "password"}
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
            <Grid item xs={12}>
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
                Create Account
              </Button>
            </DialogActions>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
}
