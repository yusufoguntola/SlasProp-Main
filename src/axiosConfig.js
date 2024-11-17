import axios from "axios";
import { useAuthStore } from "./stores/AuthStore";

export const axiosInstance = axios.create({
  baseURL: "http://46.101.149.167:5001/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState(); // Access Zustand store directly

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
