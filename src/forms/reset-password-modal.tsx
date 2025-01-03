"use client";

import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";

import { useResetAccount } from "@/api/auth/mutations";
import { showToast } from "@/utils/toast";
import { useForm, yupResolver } from "@mantine/form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
  type TextFieldProps,
} from "@mui/material";
import { object, ref, string } from "yup";

const schema = object({
  otp: string().required().length(6, "OTP is required"),
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
});

export function ResetPasswordModal({
  resetPasswordIsOpen,
  resetPasswordClose,
  token,
}: {
  resetPasswordIsOpen: boolean;
  resetPasswordClose: () => void;
  token: string;
}) {
  const form = useForm<{
    otp: string;
    password: string;
    confirmPassword: string;
  }>({
    initialValues: {
      otp: "",
      password: "",
      confirmPassword: "",
    },
    validate: yupResolver(schema),
  });

  const { isPending, mutate } = useResetAccount();

  const handleSubmit = (values: typeof form.values) =>
    mutate(
      {
        token,
        ...values,
      },
      {
        onSuccess: (resp) => {
          showToast("success", resp.data.message);
          form.reset();
          resetPasswordClose();
        },
      },
    );

  return (
    <Dialog
      open={resetPasswordIsOpen}
      onClose={resetPasswordClose}
      fullWidth
      maxWidth="xs"
    >
      <DialogContent>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.onSubmit(handleSubmit)}
        >
          <FormControl>
            <FormLabel sx={{ fontSize: 13, mb: 2 }}>
              Enter OTP sent to your mail
            </FormLabel>
            <MuiOtpInput
              length={6}
              value={form.values.otp}
              fontSize={12}
              onChange={(value) => form.setFieldValue("otp", value)}
              TextFieldsProps={{
                error: !!form.errors.otp,
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel sx={{ fontSize: 13 }}>Password</FormLabel>
            <PasswordField
              {...form.getInputProps("password")}
              size="small"
              margin="normal"
              error={!!form.errors.password}
              helperText={form.errors.password}
            />
          </FormControl>
          <FormControl>
            <FormLabel sx={{ fontSize: 13 }}>Confirm Password</FormLabel>
            <PasswordField
              {...form.getInputProps("confirmPassword")}
              size="small"
              margin="normal"
              error={!!form.errors.confirmPassword}
              helperText={form.errors.confirmPassword}
            />
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            size="medium"
            disabled={isPending}
            sx={{
              mt: 2,
              backgroundColor: "#26a69a",
              "&:hover": { backgroundColor: "#26a69a" },
              borderRadius: "16px",
              boxShadow: "10px 10px 5px #269d91 inset",
              marginX: "auto",
            }}
          >
            {isPending ? "Reseting..." : "Reset Password"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const PasswordField = (props: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      {...props}
      type={showPassword ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword((val) => !val)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
