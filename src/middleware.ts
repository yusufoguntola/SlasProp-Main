import { type NextRequest, NextResponse } from "next/server";
import { COOKIES } from "./constants";

export async function middleware(request: NextRequest) {
  const user = request.cookies.get(COOKIES.user);

  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/dashboard/:path*",
};
