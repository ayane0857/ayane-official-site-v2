import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      "https://ayane0857.net/ja/sitemap.xml",
      "https://ayane0857.net/en/sitemap.xml",
    ],
  };
}
