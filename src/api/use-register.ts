import { builder } from "@/builder";
import { useMutation } from "@tanstack/react-query";

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
