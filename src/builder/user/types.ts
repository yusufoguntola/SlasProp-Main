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

interface Profile {
  email: string;
  firstName: string;
  imageUrl: string;
  lastName: string;
  phoneNumber: string;
  username: string;
}
