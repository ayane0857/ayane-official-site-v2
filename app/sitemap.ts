import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const siteUrl = "https://ayane0857.net";

/**
 * Expose each locale sitemap from the root sitemap so crawlers can discover
 * the localized URL lists from `/sitemap.xml`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${siteUrl}/${locale}/sitemap.xml`,
  }));
}
