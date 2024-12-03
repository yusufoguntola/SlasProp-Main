import { builder } from "@/builder";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateProfile() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: builder.$use.user.profile_edit,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: builder.user.profile_get.$get(),
      });
    },
  });
}

export function usePassword() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: builder.$use.user.change_password,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: builder.user.profile_get.$get(),
      });
    },
  });
}
