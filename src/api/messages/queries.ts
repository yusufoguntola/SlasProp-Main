import { builder } from "@/builder";
import { useQuery } from "@tanstack/react-query";

export function useGetConversations() {
  return useQuery({
    queryKey: builder.messaging.conversations.$get(),
    queryFn: builder.$use.messaging.conversations,
  });
}

export function useGetMessages(conversationId: PermId) {
  return useQuery({
    queryKey: builder.messaging.messages.$get(conversationId),
    queryFn: () => builder.$use.messaging.messages({ conversationId }),
    enabled: !!conversationId,
  });
}
