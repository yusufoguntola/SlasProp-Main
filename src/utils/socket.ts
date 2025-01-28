import { getCookie } from "cookies-next";
import useSocket from "react-use-websocket";

import { builder } from "@/builder";
import { COOKIES } from "@/constants";
import { useQueryClient } from "@tanstack/react-query";

export function useWebSocket() {
  const accessToken = getCookie(COOKIES.token);
  const ws = `wss://api.slasprop.com?token=${accessToken}`;

  const qc = useQueryClient();

  return useSocket(ws, {
    onMessage(event) {
      const data = JSON.parse(event.data);

      if (["X06", "X05"].includes(data.type)) {
        qc.invalidateQueries({ queryKey: builder.messaging.messages.$get() });
      }
    },
  });
}
