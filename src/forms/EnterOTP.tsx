"use client";

import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";

import {
  useActivateAccount,
  useResendActivationOTP,
} from "@/api/auth/mutations";
import { showToast } from "@/utils/toast";
import { useForm } from "@mantine/form";
import { Clear } from "@mui/icons-material";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";

export function EnterOTP({
  token,
  opened,
  onClose,
  email,
}: {
  opened: boolean;
  onClose: () => void;
  token: string;
  email: string;
}) {
  const activateAccount = useActivateAccount();
  const resentOTP = useResendActivationOTP();

  const [activationToken, setToken] = useState(token);

  const { values, setFieldValue, reset } = useForm({
    initialValues: {
      otp: "",
    },
  });

  function handleActivateAccount() {
    activateAccount.mutate(
      { otp: values.otp, token: activationToken },
      {
        onSuccess: (response) => {
          showToast("success", <p>{response.data.message}</p>);
          onClose();

          reset();
        },
      },
    );
  }

  function handleResendOTP() {
    resentOTP.mutate(
      { email },
      {
        onSuccess: (response) => {
          showToast("success", <p>{response.data.message}</p>);
          setToken(response.data.token);
        },
      },
    );
  }

  return (
    <Dialog open={opened} maxWidth="xs" onClose={onClose}>
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
            }}
          >
            Enter OTP
          </p>
          <Button onClick={onClose}>
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
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <p style={{ color: "#26a69a", fontSize: 15 }}>
          Enter the OTP sent to your email to complete this process.
        </p>
        <article
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <MuiOtpInput
            length={6}
            value={values.otp}
            onChange={(value) => setFieldValue("otp", value)}
          />
          <button
            style={{
              paddingTop: 12,
              background: "#26a69a",

              padding: "10px",
              borderRadius: "5px",
              fontSize: 15,
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
            }}
            type="submit"
            disabled={values.otp.length < 6 || activateAccount.isPending}
            onClick={() => handleActivateAccount()}
          >
            {activateAccount.isPending ? "Activating..." : "Activate Account"}
          </button>
        </article>
        <button
          type="button"
          style={{
            color: "green",
            paddingBottom: "50px",
          }}
          disabled={resentOTP.isPending}
          onClick={handleResendOTP}
        >
          Resend Activation OTP
        </button>
      </DialogContent>
    </Dialog>
  );
}
