import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

function matchPathnamePattern(pathname: string): boolean {
  const pattern = /^\/([^/]*)\/(dashboard|apexians|chats|projects)$/;
  const match = pathname.match(pattern);

  return match !== null && match.length > 1;
}

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (
    req.nextUrl.pathname.startsWith("/onboarding") ||
    matchPathnamePattern(req.nextUrl.pathname)
  ) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  const emailLinkError = "Email link is invalid or has expired";
  if (
    req.nextUrl.searchParams.get("error_description") === emailLinkError &&
    req.nextUrl.pathname !== "/login"
  ) {
    return NextResponse.redirect(
      new URL(
        `/login?error_description=${req.nextUrl.searchParams.get(
          "error_description"
        )}`,
        req.url
      )
    );
  }

  if (["/login"].includes(req.nextUrl.pathname)) {
    if (session) {
      return NextResponse.redirect(new URL("/onboarding", req.url));
    }
  }
  return res;
}
