import { axiosInstance } from "@/axios";

const conversations = () =>
  axiosInstance.get<PostResponse<IConversation[]>>("/conversations");

const messages = (params = {}) =>
  axiosInstance.get<ApiResponse<IMessage[]>>("/messages", { params });

export const messaging = {
  conversations,
  messages,
};
