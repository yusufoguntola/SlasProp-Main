import { axiosInstance } from "@/axios";

const initiate_payment = ({ type }: { type: string }) =>
  axiosInstance.post("/payments", {
    type,
  });

export const payments = {
  initiate_payment,
};
