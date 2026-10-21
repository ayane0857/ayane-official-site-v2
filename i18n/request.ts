import { getRequestConfig } from "next-intl/server";
import { locale as getRootLocale } from "next/root-params";
import { routing } from "./routing";

export default getRequestConfig(async () => {
  const requestedLocale = await getRootLocale();
  const locale =
    routing.locales.find((supportedLocale) => supportedLocale === requestedLocale) ??
    routing.defaultLocale;

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
