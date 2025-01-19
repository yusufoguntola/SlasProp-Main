import { axiosInstance } from "@/axios";

const get = async () => {
  const res =
    await axiosInstance.get<ApiResponse<NotificationData[]>>("/notifications");
  return res.data;
};

const mark_as_read = (payload: { nids: string[] }) => {
  return axiosInstance.post("/notifications", payload);
};

export const notification = {
  get,
  mark_as_read,
};
