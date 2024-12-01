import Link from "next/link";
import { useRouter } from "next/navigation";
import { object, string } from "yup";

import { useLogin } from "@/api/use-login";
import { useLocalStorage } from "@/hooks/use-local-storage";
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

import { SignUpModal } from "./sign-up-modal";

const schema = object({
  username: string().required(),
  password: string()
    .required()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])/,
      "Password must contain at least one uppercase and one lowercase letter"
    ),
});

export function LoginModal() {
  const setOption = useOptionStore((state) => state.setOption);
  const { mutate: login } = useLogin();
  const [, setToken] = useLocalStorage<string>("token");
  const { push } = useRouter();

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
      type: "user",
      showPassword: false,
    },
    validate: yupResolver(schema),
  });

  const { loginIsOpen, loginToggle, loginClose } = useMaterialMenu("login");

  async function handleSubmit({ showPassword, ...values }: typeof form.values) {
    login(values, {
      onSuccess: (response) => {
        setToken(response.data.data.access_token);
        showToast("success", <p>Login Successful!</p>);
        push("/dashboard");
      },
      onError: () => {
        showToast("error", <p> Login Failed! Please try again. </p>);
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
        onClick={loginToggle}>
        Sign In / Login
        <ArrowCircleRightOutlined
          style={{ color: "#26a69a", paddingLeft: 4 }}
        />
      </Button>

      <Dialog
        open={loginIsOpen}
        maxWidth="lg"
        onClose={closeLoginModal}
        PaperProps={{
          component: "form",
          onSubmit: form.onSubmit(handleSubmit),
        }}>
        <Container sx={{ borderBottom: 1 }}>
          <DialogActions>
            <p className="inline-block font-mono mr-auto w-64 font-bold">
              Login
            </p>
            <Button onClick={closeLoginModal}>
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
                          !form.values.showPassword
                        );
                      }}>
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

          <Link
            href="#"
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

          <SignUpModal />
        </DialogContent>
      </Dialog>
    </>
  );
}
