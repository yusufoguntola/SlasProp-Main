import axios from "axios";
<<<<<<< HEAD
=======
import { useAuthStore } from "../stores/useAuthStore";
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c

export const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL ||
    "https://slas-prop.ganafsmas.com/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
<<<<<<< HEAD
    const token = localStorage.getItem("token")?.replace(/^"|"$/g, "").trim(); // Remove surrounding quotes and trim whitespace

    if (token) {
      console.log("there is token======", token);
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("No token found, proceeding without authorization.");
=======
    const { token } = useAuthStore.getState();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c
    }
    return config;
  },
  (error) => Promise.reject(error)
);
<<<<<<< HEAD

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
=======
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c
