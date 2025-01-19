import { builder } from "@/builder";
import { useQuery } from "@tanstack/react-query";

export const useGetNotifications = () => {
  return useQuery({
    queryKey: builder.notification.get.$get(),
    queryFn: builder.$use.notification.get,
  });
};
