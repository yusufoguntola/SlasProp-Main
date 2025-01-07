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

export function useUploadImage() {
  return useMutation({
    mutationFn: builder.$use.user.upload_image,
  });
}

export function useSubmitEnquiryForm() {
  return useMutation({
    mutationKey: builder.user.enquiry_form.$get(),
    mutationFn: builder.$use.user.enquiry_form,
  });
}
