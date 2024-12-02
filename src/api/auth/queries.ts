import { getCookie } from "cookies-next";

import { COOKIES } from "@/constants";

export function useIsAuthenticated() {
	const user = getCookie(COOKIES.user);

	return !!user;
}
