import { builder } from "@/builder";
import { useQuery } from "@tanstack/react-query";

export function useGetProfile() {
  return useQuery({
    queryKey: builder.user.profile_get.$get(),
    queryFn: () => builder.$use.user.profile_get(),
    select: (data) => data,
  });
}
