import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "@/data/language";

export const routing = defineRouting({
  locales,
  defaultLocale,
});
