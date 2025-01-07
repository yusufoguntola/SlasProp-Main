interface LoginPayload {
  username: string;
  password: string;
  type: "user" | "admin";
}

interface SignupPayload {
  email: string;
  username: string;
  lastName: string;
  firstName: string;
  password: string;
  phoneNumber: string;
}

interface Profile {
  email: string;
  firstName: string;
  imageUrl: string;
  lastName: string;
  phoneNumber: string;
  username: string;
}

interface EnquiryForm {
  name: string;
  email: string;
  mobileNumber: string;
  otherNumber: string;
  message: string;
}
