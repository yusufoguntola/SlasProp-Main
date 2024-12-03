import { axiosInstance } from "@/axios";
import { CreateProperty } from "./types";

const create = async (payload: CreateProperty) => {
  return axiosInstance.post<{
    message: string;
  }>("/properties", payload);
};

// for  Registering a property

export const RegisterProperty = async (payload: unknown) => {
  try {
    const response = await axiosInstance.post("/property-queries", payload);
    return response.data;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error; // You can throw the error again or return a custom message if needed
  }
};
// for profile update

export const UpdateProfile = async (payload: unknown) => {
  try {
    const response = await axiosInstance.put("/account/profile", payload);
    return response.data;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error; // You can throw the error again or return a custom message if needed
  }
};

// for profile update

export const UserResetPassword = async (payload: unknown) => {
  try {
    const response = await axiosInstance.post(
      "/account/change-password",
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error; // You can throw the error again or return a custom message if needed
  }
};

export const property = {
  create,
};
