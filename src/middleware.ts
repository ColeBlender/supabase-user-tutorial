import { NextResponse, type NextRequest } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const path = new URL(request.url).pathname;
  const unprotectedPaths = ["/admin/login", "/admin/create-account"];

  if (path.startsWith("/admin")) {
    const user = await getUser(request, response);
    const isUnprotectedPath = unprotectedPaths.some((up) =>
      path.startsWith(up),
    );

    if (user && isUnprotectedPath) {
      return NextResponse.redirect(new URL("/admin", request.url));
    } else if (!user && !isUnprotectedPath) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/admin/:path*", // Apply middleware to all paths under /admin
  ],
};

async function getUser(request: NextRequest, response: NextResponse) {
  const supabaseClient = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    },
  );

  const user = (await supabaseClient.auth.getUser()).data.user;

  return user;
}
