import { axiosInstance } from "@/axios";

const get = () => {
  return axiosInstance
    .get<NotificationData[]>("/notification")
    .then((res) => res.data);
};

const mark_as_read = (payload: { id: string }) => {
  return axiosInstance.post("/auth/register", payload);
};

export const notification = {
  get,
  mark_as_read,
};
