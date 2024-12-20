import { builder } from "@/builder";
import { useMutation } from "@tanstack/react-query";

export function useInitiatePayment() {
  return useMutation({
    mutationKey: builder.payments.initiate_payment.$get(),
    mutationFn: builder.$use.payments.initiate_payment,
  });
}

export function useVerifyPayment() {
  return useMutation({
    mutationKey: builder.payments.verify_payment.$get(),
    mutationFn: builder.$use.payments.verify_payment,
  });
}
