import { getCookie } from "cookies-next";

import { COOKIES } from "@/constants";

export function useIsAuthenticated() {
  const user = getCookie(COOKIES.user);

  return !!user;
}

export function useGetUserDetails() {
  const user = getCookie(COOKIES.user);

  if (!user) return null;

  return JSON.parse(user as string) as User;
}
