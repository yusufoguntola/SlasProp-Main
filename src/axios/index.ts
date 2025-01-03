import axios from "axios";
import { getCookie } from "cookies-next";
import queryString from "query-string";

import { COOKIES } from "@/constants";

export const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://slas-prop.ganafsmas.com/api/v1",
  timeout: 10000,
  paramsSerializer(params) {
    return queryString.stringify(params, {
      skipEmptyString: true,
      skipNull: true,
      arrayFormat: "comma",
    });
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie(COOKIES.token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("No token found, proceeding without authorization.");
    }
    return config;
  },
  (error) => Promise.reject(error),
);
