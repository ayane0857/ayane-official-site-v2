import { routing } from "@/i18n/routing";

const siteUrl = "https://ayane0857.net";

export function GET() {
  const sitemapEntries = routing.locales
    .map(
      (locale) =>
        `  <sitemap>\n    <loc>${siteUrl}/${locale}/sitemap.xml</loc>\n  </sitemap>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
