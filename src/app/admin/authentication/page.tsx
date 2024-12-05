"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { object, string } from "yup";

import { useLogin } from "@/api/auth/mutations";
import { showToast } from "@/utils/toast";
import { useForm, yupResolver } from "@mantine/form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";

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

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const { replace } = useRouter();

  const form = useForm({
    initialValues: {
      username: "",
      type: "admin" as const,
      password: "",
    },
    validate: yupResolver(schema),
  });
  const { mutate, isPending } = useLogin();

  async function handleSubmit(values: typeof form.values) {
    mutate(values, {
      onSuccess: (resp) => {
        const role = resp.data.data.role?.name.toLowerCase();
        showToast("success", <p>Login Successful!</p>);
        replace(`/admin/restricted-path/${role}`);
      },
      onError: () => {
        showToast("error", <p> Login Failed! Please try again. </p>);
      },
    });
  }

  return (
    <form
      className="bg-white rounded-sm max-w-lg w-full flex flex-col gap-2 p-4"
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <p style={{ color: "#26a69a", fontSize: 15 }}>
        Enter your login details to sign in.
      </p>

      <FormControl>
        <FormLabel sx={{ fontSize: 13 }}>Username</FormLabel>
        <TextField
          {...form.getInputProps("username")}
          size="small"
          margin="normal"
          sx={{ color: "grey" }}
          error={!!form.errors.username}
          helperText={form.errors.username}
        />
      </FormControl>

      <FormControl>
        <FormLabel sx={{ fontSize: 13 }}>Password</FormLabel>
        <TextField
          type={showPassword ? "text" : "password"}
          {...form.getInputProps("password")}
          size="small"
          margin="normal"
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
          error={!!form.errors.password}
          helperText={form.errors.password}
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
          width: "150px",
          marginX: "auto",
        }}
      >
        {isPending ? "Submitting..." : "Login"}
      </Button>
    </form>
  );
}
