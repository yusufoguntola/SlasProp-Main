import { axiosInstance } from "@/axios";

const get = () => {
  return axiosInstance
    .get<ApiResponse<NotificationData[]>>("/notifications")
    .then((res) => res.data);
};

const mark_as_read = (payload: { nids: string[] }) => {
  return axiosInstance.post("/notifications", payload);
};

export const notification = {
  get,
  mark_as_read,
};
