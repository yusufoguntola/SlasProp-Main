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
  password: string;
  name: string;
}) => {
  return axiosInstance.post("/auth/register", params);
};

export const user = {
  login,
  register,
};
