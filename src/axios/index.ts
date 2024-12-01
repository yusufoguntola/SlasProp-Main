import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL ||
    "https://slas-prop.ganafsmas.com/api/v1",
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")?.replace(/^"|"$/g, "").trim(); // Remove surrounding quotes and trim whitespace

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("No token found, proceeding without authorization.");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const { token } = useAuthStore.getState();

//     if (token) {

//       console.log('there is token======', token)
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
