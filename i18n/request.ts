import * as rootParams from "next/root-params";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    let paramValue: string | undefined;
    try {
      paramValue = await rootParams.locale();
    } catch {
      // Global not-found routes sit outside the [locale] segment.
    }

    locale = hasLocale(routing.locales, paramValue)
      ? paramValue
      : routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
