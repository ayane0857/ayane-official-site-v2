import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Exclude framework and API paths without accidentally matching names like
  // `/apiary` or `/trpc-info`.
  matcher: "/((?!(?:api|trpc|_next|_vercel)(?:/|$)|.*\\..*).*)",
};
