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

const profile_get = async () => {
  return axiosInstance
    .get<{
      data: Profile;
    }>("/account/profile")
    .then((res) => res.data.data);
};

const profile_edit = async (payload: Partial<Profile>) => {
  return axiosInstance.put<{
    message: string;
  }>("/account/profile", payload);
};

const change_password = async (payload: {
  password: string;
  newPassword: string;
}) => {
  return axiosInstance.post<{
    message: string;
  }>("/account/change-password", payload);
};

export const user = {
  login,
  register,
  activate_account,
  resend_activation_otp,
  profile_get,
  profile_edit,
  change_password,
};
