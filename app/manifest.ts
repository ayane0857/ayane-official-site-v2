import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ayane.home - 彩音の公式サイト",
    short_name: "ayane.home",
    description:
      "2010年生まれの高校生エンジニア、彩音のポートフォリオサイトです。",
    start_url: "/ja/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/images/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
