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
    const localToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzMzMTU2MDU3LCJleHAiOjE3MzMzMjg4NTd9.PKNgl5NU5UxjMvPwHGBcS0NoA3jz2RCODBw6dIfoo70";

    console.log(localToken);
    if (localToken) {
      config.headers.Authorization = `Bearer ${localToken}`;
    } else {
      console.warn("No token found, proceeding without authorization.");
    }
    return config;
  },
  (error) => Promise.reject(error)
);
