import { builder } from "@/builder";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateProperty() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: builder.$use.properties.create_listing,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: builder.properties.$get() });
    },
  });
}
export function useRegisterProperty() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: builder.$use.properties.register,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: builder.properties.list_registered.$get(),
      });
    },
  });
}

export function useCreatePropertyRequest() {
  const qc = useQueryClient();

  return useMutation({
    mutationKey: builder.properties.requests.create.$get(),
    mutationFn: builder.$use.properties.requests.create,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: builder.properties.requests.$get(),
      });
      qc.invalidateQueries({
        queryKey: builder.properties.$get(),
      });
    },
  });
}
