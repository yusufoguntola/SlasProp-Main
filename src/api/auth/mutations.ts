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
      const { access_token, name, username, ...rest } = data.data.data;

      const user = parseJwt(access_token);

      const cookie_options = {
        expires: new Date(user.exp),
        maxAge: user.exp,
        path: "/",
        sameSite: "lax" as const,
      };

      setCookie(
        COOKIES.user,
        JSON.stringify({ id: user.id, name, username, ...rest }),
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
    deleteCookie(COOKIES.user);

    replace("/");
  };
}
