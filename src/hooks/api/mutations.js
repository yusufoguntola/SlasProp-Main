import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../axiosConfig";

export const usePostUserLogin = () => {
  const mutationDetails = useMutation({
    mutationKey: ["post-admin-login"],
    mutationFn: (loginDetails) => {
      return axiosInstance.post("/auth/login", loginDetails);
    },
    onSuccess: () => {
      console.log("Login Successful", "You have successfully logged in");
    },
    onError: (error) => {
      const { response } = error;
      const errorMessage =
        response?.data?.error || "An unexpected error occurred.";
      console.log("Error", errorMessage);
    },
  });

  return mutationDetails;
};
