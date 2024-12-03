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
