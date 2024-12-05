import axios from "axios";
import queryString from "query-string";

import { getCookie } from "cookies-next";

import { COOKIES } from "@/constants";

export const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL ||
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
