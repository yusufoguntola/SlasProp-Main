import { getCookie } from "cookies-next";
import { useState } from "react";
import useWebSocket from "react-use-websocket";

import { builder } from "@/builder";
import { COOKIES } from "@/constants";
import { useQueryClient } from "@tanstack/react-query";

const WS_URL = "ws://api.slasprop.com";

export function useMessagingWS(receiverId: PermId) {
  const authToken = getCookie(COOKIES.token);

  const [newMessage, setMessage] = useState({
    type: "X05",
    content: { text: "", muid: "", receiverId },
  });

  const updateText = (value: string) =>
    setMessage((prev) => ({
      ...prev,
      content: { ...prev.content, text: value },
    }));
  const qc = useQueryClient();

  const { sendJsonMessage, sendMessage } = useWebSocket(WS_URL, {
    queryParams: { token: `${authToken}` },
    onMessage: (message) => {
      if (["X04", "X02"].includes(message.type)) {
        qc.invalidateQueries({
          queryKey: ["unread_message_count"],
        });
      }

      qc.invalidateQueries({
        queryKey: builder.messaging.$get(),
      });
    },
    onError: () => {
      console.error("error loading web socket");
    },
  });

  return {
    text: newMessage.content.text,
    updateText,
    sendJsonMessage,
    sendMessage,
  };
}
