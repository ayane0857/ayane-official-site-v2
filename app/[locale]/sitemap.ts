import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { routing } from "@/i18n/routing";
import { portfolios } from "@/data/Portfolio";

const siteUrl = "https://ayane0857.net";
type Locale = (typeof routing.locales)[number];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get("x-next-intl-locale");
  const locale: Locale = routing.locales.includes(requestedLocale as Locale)
    ? (requestedLocale as Locale)
    : routing.defaultLocale;

  const localizedUrl = (path: string, targetLocale: Locale) =>
    `${siteUrl}/${targetLocale}${path}`;
  const alternates = (path: string) => ({
    languages: Object.fromEntries(
      routing.locales.map((targetLocale) => [
        targetLocale,
        localizedUrl(path, targetLocale),
      ]),
    ),
  });

  const pages: MetadataRoute.Sitemap = [
    {
      url: localizedUrl("", locale),
      changeFrequency: "yearly",
      priority: 1,
      alternates: alternates(""),
    },
    {
      url: localizedUrl("/about", locale),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alternates("/about"),
    },
    {
      url: localizedUrl("/portfolio", locale),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: alternates("/portfolio"),
    },
    {
      url: localizedUrl("/contact", locale),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: alternates("/contact"),
    },
    ...portfolios.map((portfolio) => ({
      url: localizedUrl(`/portfolio/${portfolio.id}`, locale),
      lastModified: new Date(`${portfolio.timestmp}T00:00:00.000Z`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      alternates: alternates(`/portfolio/${portfolio.id}`),
    })),
  ];

  return pages;
}
