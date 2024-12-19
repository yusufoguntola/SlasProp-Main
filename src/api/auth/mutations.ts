import { deleteCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import { builder } from "@/builder";
import { COOKIES } from "@/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function parseJwt(token: string) {
  try {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
  } catch (error) {
    return null;
  }
}

export function useLogin() {
  return useMutation({
    mutationKey: builder.user.$get(),
    mutationFn: builder.$use.user.login,
    onSuccess(data) {
      const { access_token, name, username, role } = data.data.data;

      const user = parseJwt(access_token);

      const user_type = role ? "admin" : "user";

      const cookie_options = {
        expires: new Date(user.exp),
        maxAge: user.exp,
        path: "/",
        sameSite: "lax" as const,
      };

      setCookie(
        COOKIES.user,
        JSON.stringify({ id: user.id, name, username, user_type, role }),
        cookie_options,
      );
      setCookie(COOKIES.token, access_token, cookie_options);
    },
  });
}

export function useRegister() {
  return useMutation({
    mutationKey: builder.user.register.$get(),
    mutationFn: builder.$use.user.register,
  });
}
export function useActivateAccount() {
  return useMutation({
    mutationKey: builder.user.activate_account.$get(),
    mutationFn: builder.$use.user.activate_account,
  });
}
export function useResendActivationOTP() {
  return useMutation({
    mutationKey: builder.user.resend_activation_otp.$get(),
    mutationFn: builder.$use.user.resend_activation_otp,
  });
}

export function useLogout() {
  const qc = useQueryClient();
  const { replace } = useRouter();

  return () => {
    qc.cancelQueries().then(() => qc.clear());
    deleteCookie(COOKIES.user);
    deleteCookie(COOKIES.token);

    replace("/");
  };
}

export function useForgotPassword() {
  return useMutation({
    mutationKey: builder.user.request_password_reset.$get(),
    mutationFn: builder.$use.user.request_password_reset,
  });
}

export function useResetAccount() {
  return useMutation({
    mutationKey: builder.user.reset_account.$get(),
    mutationFn: builder.$use.user.reset_account,
  });
}
