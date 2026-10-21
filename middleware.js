import { NextResponse } from "next/server";

const hasClerkKeys = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY
);

let customMiddleware = () => NextResponse.next();

if (hasClerkKeys) {
  try {
    const { clerkMiddleware, createRouteMatcher } = require("@clerk/nextjs/server");
    const isPublicRoute = createRouteMatcher([
      "/",
      "/states(.*)",
      "/sign-in(.*)",
      "/sign-up(.*)",
    ]);

    customMiddleware = clerkMiddleware(async (auth, req) => {
      if (!isPublicRoute(req)) {
        await auth.protect();
      }
    });
  } catch (err) {
    console.warn("Clerk middleware initialization skipped:", err.message);
  }
}

export default function middleware(req, event) {
  return customMiddleware(req, event);
}

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
