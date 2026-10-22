import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Exclude framework and API paths without accidentally matching names like
  // `/apiary` or `/trpc-info`. Locale sitemap routes need the proxy despite
  // their `.xml` suffix so next-intl can provide the requested locale.
  matcher: [
    "/((?!(?:api|trpc|_next|_vercel)(?:/|$)|.*\\..*).*)",
    "/(ja|en)/sitemap.xml",
  ],
};
