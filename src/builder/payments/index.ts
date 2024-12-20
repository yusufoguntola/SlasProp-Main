import { axiosInstance } from "@/axios";

const initiate_payment = ({ type }: { type: string }) =>
  axiosInstance.post("/payments", {
    type,
  });

const verify_payment = (paymentRefId: string) =>
  axiosInstance.post(`/payments/verify/${paymentRefId}`);

export const payments = {
  initiate_payment,
  verify_payment,
};
