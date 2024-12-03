import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL ||
    "https://slas-prop.ganafsmas.com/api/v1",
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = getCookie(COOKIES.token);

    // console.log("token", token);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzMzMjA2MTk0LCJleHAiOjE3MzMzNzg5OTR9.fJKqbusyqOaz96odqlObPUOIrkEE_qDGemUAkU6aKMM";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("No token found, proceeding without authorization.");
    }
    return config;
  },
  (error) => Promise.reject(error)
);
