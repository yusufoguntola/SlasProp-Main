import { builder } from "@/builder";
import { useMutation } from "@tanstack/react-query";

export function useInitiatePayment() {
  return useMutation({
    mutationKey: builder.payments.initiate_payment.$get(),
    mutationFn: builder.$use.payments.initiate_payment,
  });
}
