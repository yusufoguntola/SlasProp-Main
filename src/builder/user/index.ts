import { axiosInstance } from "@/axios";

const login = async (payload: LoginPayload) => {
  return axiosInstance.post<{
    message: string;
    data: {
      access_token: string;
      name: string;
      username: string;
    };
  }>("/auth/login", payload);
};

const register = (payload: SignupPayload) => {
  return axiosInstance.post("/auth/register", payload);
};
const activate_account = (payload: { token: string; otp: string }) => {
  return axiosInstance.post("/auth/activate", payload);
};
const resend_activation_otp = (payload: { email: string }) => {
  return axiosInstance.post("/auth/activate/resend-otp", payload);
};

export const user = {
  login,
  register,
  activate_account,
  resend_activation_otp,
};
