import { builder } from "@/builder";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationKey: builder.user.$get(),
    mutationFn: builder.$use.user.login,
  });
}
