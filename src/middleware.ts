import { type NextRequest, NextResponse } from "next/server";
import { COOKIES } from "./constants";

export async function middleware(request: NextRequest) {
  const user = request.cookies.get(COOKIES.user);

  const is_admin_path = request.url.startsWith("/admin/restricted-path");

  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ADMIN PATH PROTECTION
  if (JSON.parse(user.value).user_type !== "admin" && is_admin_path) {
    const url = request.nextUrl.clone();

    url.search = `next=${url.pathname}`;
    url.pathname = "/admin/authentication";

    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/restricted-path/:path*"],
};
