import { useRouter } from "next/navigation";
import { useState } from "react";
import { flushSync } from "react-dom";
import { object, string } from "yup";

import { useLogin } from "@/api/auth/mutations";
import { useMaterialMenu } from "@/hooks/use-material-menu";
import { useOptionStore } from "@/stores/useOptionStore";
import { showToast } from "@/utils/toast";
import { useForm, yupResolver } from "@mantine/form";
import {
  ArrowCircleRightOutlined,
  Clear,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";

import { EnterOTP } from "./EnterOTP";
import { ForgotPassword } from "./forgot-password-modal";
import { SignUpModal } from "./sign-up-modal";

const schema = object({
  username: string().required(),
  password: string()
    .required()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])/,
      "Password must contain at least one uppercase and one lowercase letter",
    ),
});

export function LoginModal() {
  const setOption = useOptionStore((state) => state.setOption);
  const { mutate: login, isPending } = useLogin();
  const { push } = useRouter();

  const [otp, setOtp] = useState({
    token: "",
    opened: false,
    email: "",
  });

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
      type: "user" as const,
      showPassword: false,
    },
    validate: yupResolver(schema),
  });

  const { loginIsOpen, loginToggle, loginClose } = useMaterialMenu("login");
  const { forgotPasswordOpen, forgotPasswordIsOpen, forgotPasswordClose } =
    useMaterialMenu("forgotPassword");
  const { dialogToggle, dialogIsOpen, dialogClose } = useMaterialMenu("dialog");

  async function handleSubmit({ showPassword, ...values }: typeof form.values) {
    login(values, {
      onSuccess: (response, variables) => {
        if ("token" in response.data) {
          const { token } = response.data;

          flushSync(() =>
            setOtp({
              token,
              opened: true,
              email: variables.username,
            }),
          );

          return;
        }
        showToast("success", <p>Login Successful!</p>);
        push("/dashboard");
      },
    });

    setOption(false);
  }

  const closeLoginModal = () => {
    loginClose();
    form.reset();
  };

  return (
    <>
      <Button
        color="inherit"
        style={{ textTransform: "capitalize" }}
        onClick={loginToggle}
      >
        Sign In / Login
        <ArrowCircleRightOutlined
          style={{ color: "#26a69a", paddingLeft: 4 }}
        />
      </Button>

      <form onSubmit={form.onSubmit(handleSubmit)} id="loginForm">
        <Dialog open={loginIsOpen} maxWidth="lg" onClose={closeLoginModal}>
          <Container sx={{ borderBottom: 1 }}>
            <DialogActions>
              <p className="inline-block font-mono mr-auto w-64 font-bold">
                Login
              </p>
              <Button onClick={closeLoginModal} className="px-0">
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

          <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#26a69a", fontSize: 15 }}>
              Enter your login details to sign in.
            </p>
            <FormLabel sx={{ fontSize: 13 }}>User ID</FormLabel>
            <TextField
              {...form.getInputProps("username")}
              size="small"
              margin="normal"
              sx={{ color: "grey", mb: 1.5 }}
              error={Boolean(form.errors.username)}
              helperText={form.errors.username}
            />
            <FormLabel sx={{ fontSize: 13 }}>Password</FormLabel>
            <TextField
              type={form.values.showPassword ? "text" : "password"}
              {...form.getInputProps("password")}
              size="small"
              margin="normal"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          form.setFieldValue(
                            "showPassword",
                            !form.values.showPassword,
                          );
                        }}
                      >
                        {form.values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              error={Boolean(form.errors.password)}
              helperText={form.errors.password}
            />

            <Button
              color="inherit"
              sx={{
                textTransform: "capitalize",
                color: "red",
                fontWeight: "bold",
                marginLeft: "auto",
              }}
              onClick={() => {
                forgotPasswordOpen();
              }}
            >
              Forgot Password?
            </Button>

            <Container sx={{ display: "flex", justifyContent: "center" }}>
              <DialogActions>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isPending}
                  size="medium"
                  form="loginForm"
                  sx={{
                    mt: 2,
                    backgroundColor: "#26a69a",
                    "&:hover": { backgroundColor: "#26a69a" },
                    borderRadius: "16px",
                    boxShadow: "10px 10px 5px #269d91 inset",
                    width: "150px",
                  }}
                >
                  {isPending ? "Submitting..." : "Login"}
                </Button>
              </DialogActions>
            </Container>
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
          </DialogContent>
        </Dialog>
      </form>

      <ForgotPassword
        forgotPasswordClose={forgotPasswordClose}
        forgotPasswordIsOpen={forgotPasswordIsOpen}
      />
      <SignUpModal dialogIsOpen={dialogIsOpen} dialogClose={dialogClose} />

      <EnterOTP
        onClose={() => setOtp({ email: "", opened: false, token: "" })}
        {...otp}
      />
    </>
  );
}
