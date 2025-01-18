import { useState } from "react";
import { object, string } from "yup";

import { useForgotPassword } from "@/api/auth/mutations";
import { useModalState } from "@/hooks/use-modal-state";
import { useOptionStore } from "@/stores/useOptionStore";
import { showToast } from "@/utils/toast";
import { useForm, yupResolver } from "@mantine/form";
import { Clear } from "@mui/icons-material";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  FormLabel,
  TextField,
} from "@mui/material";

import { ResetPasswordModal } from "./reset-password-modal";

const schema = object({
  email: string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
});

export function ForgotPassword({
  forgotPasswordClose,
  forgotPasswordIsOpen,
}: {
  forgotPasswordClose: () => void;
  forgotPasswordIsOpen: boolean;
}) {
  const setOption = useOptionStore((state) => state.setOption);
  const { mutate: resetAccount, isPending } = useForgotPassword();
  const [token, setToken] = useState("");

  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: yupResolver(schema),
  });

  const { resetPasswordOpen, resetPasswordClose, resetPasswordIsOpen } =
    useModalState("resetPassword");

  async function handleSubmit({ ...values }: typeof form.values) {
    resetAccount(values, {
      onSuccess: (resp) => {
        const { token } = resp.data;
        if (token) {
          forgotPasswordClose();
          resetPasswordOpen();
          setToken(resp.data.token);
          form.reset();
        } else {
          showToast("error", "Invalid credentials, please try again!!");
        }
      },
    });

    setOption(false);
  }

  const closeModal = () => {
    forgotPasswordClose();
    form.reset();
  };

  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)} id="forgotPasswordForm">
        <Dialog open={forgotPasswordIsOpen} maxWidth="lg" onClose={closeModal}>
          <Container sx={{ borderBottom: 1 }}>
            <DialogActions>
              <p className="inline-block font-mono mr-auto w-64 font-bold">
                Login
              </p>
              <Button onClick={closeModal}>
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
              Enter your email to request password reset
            </p>
            <FormLabel sx={{ fontSize: 13 }}>Email Address</FormLabel>
            <TextField
              {...form.getInputProps("email")}
              size="small"
              margin="normal"
              sx={{ color: "grey", mb: 1.5 }}
              error={!!form.errors.email}
              helperText={form.errors.email}
            />

            <Container sx={{ display: "flex", justifyContent: "center" }}>
              <DialogActions>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isPending}
                  size="medium"
                  form="forgotPasswordForm"
                  sx={{
                    mt: 2,
                    backgroundColor: "#26a69a",
                    "&:hover": { backgroundColor: "#26a69a" },
                    borderRadius: "16px",
                    boxShadow: "10px 10px 5px #269d91 inset",
                    width: "150px",
                  }}
                >
                  {isPending ? "Reseting..." : "Reset"}
                </Button>
              </DialogActions>
            </Container>
          </DialogContent>
        </Dialog>
      </form>

      <ResetPasswordModal
        resetPasswordClose={resetPasswordClose}
        resetPasswordIsOpen={resetPasswordIsOpen}
        token={token ?? ""}
      />
    </>
  );
}
