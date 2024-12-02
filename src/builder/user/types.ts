interface LoginPayload {
  username: string;
  password: string;
  type: string;
}

interface SignupPayload {
  email: string;
  username: string;
  lastName: string;
  firstName: string;
  password: string;
  phoneNumber: string;
}
