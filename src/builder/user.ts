import { axiosInstance } from "@/axios";

export const login = (params: {
  username: string;
  password: string;
  type: string;
}) => {
  return axiosInstance
    .post<{
      message: string;
      data: {
        access_token: string;
        name: string;
        username: string;
      };
    }>("/auth/login", params)
    .then(({ data }) => data);
};

export const register = (params: {
  email: string;
  username: string;
  lastName: string;
  firstName: string;
  password: string;
  phoneNumber: string;
}) => {
  return axiosInstance.post("/auth/register", params);
};
export const activate_account = (params: { token: string; otp: string }) => {
  return axiosInstance.post("/auth/activate", params);
};
export const resend_activation_otp = (params: { email: string }) => {
  return axiosInstance.post("/auth/activate/resend-otp", params);
};

export const user = {
  login,
  register,
  activate_account,
  resend_activation_otp,
};
