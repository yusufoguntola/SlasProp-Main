import { axiosInstance } from "@/axios";

const login = async (payload: LoginPayload) => {
  return axiosInstance.post<
    | {
        message: string;
        data: LoggedInUser & { access_token: string };
      }
    | { message: string; token: string }
  >("/auth/login", payload);
};

const register = (payload: SignupPayload) => {
  return axiosInstance.post<{ message: string; data: { token: string } }>(
    "/auth/register",
    payload,
  );
};
const activate_account = (payload: { token: string; otp: string }) => {
  return axiosInstance.post("/auth/activate", payload);
};
const resend_activation_otp = (payload: { email: string }) => {
  return axiosInstance.post<{ message: string; token: string }>(
    "/auth/activate/resend-otp",
    payload,
  );
};

const profile_get = async () => {
  return axiosInstance
    .get<{
      data: Profile;
    }>("/account/profile")
    .then((res) => res.data.data);
};

const profile_edit = async (payload: Partial<Profile>) => {
  return axiosInstance.put<{
    message: string;
  }>("/account/profile", payload);
};

const change_password = async (payload: {
  password: string;
  newPassword: string;
}) => {
  return axiosInstance.post<{
    message: string;
  }>("/account/change-password", payload);
};

const upload_image = async (files: FileList) => {
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  return axiosInstance.post("/uploads", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const request_password_reset = (payload: { email: string }) =>
  axiosInstance.post<{ message: string; token: string }>(
    "/auth/password/request",
    payload,
  );

const reset_account = (payload: {
  token: string;
  otp: string;
  password: string;
}) => axiosInstance.post<{ message: string }>("/auth/password/reset", payload);

const enquiry_form = (payload: EnquiryForm) =>
  axiosInstance.post<{ message: string }>("/inquiries", payload);

export const user = {
  login,
  register,
  activate_account,
  resend_activation_otp,
  profile_get,
  profile_edit,
  change_password,
  upload_image,
  request_password_reset,
  reset_account,
  enquiry_form,
};
