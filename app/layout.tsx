import { Viewport, Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FadeInObserver from "@/components/fade-in-observer";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const KakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#D58F99",
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: {
    default: "メインページ | 彩音のサイト",
    template: "%s | 彩音のサイト",
  },
  twitter: {
    card: "summary",
    site: "@ayane0857_",
    images: [
      {
        url: "https://ayane0857.net/ayane-logo.png",
        width: 128,
        height: 128,
        alt: "彩音のアイコン",
      },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "彩音のサイト",
    images: [
      {
        url: "https://ayane0857.net/ayane-logo.png",
        width: 128,
        height: 128,
        alt: "彩音のアイコン",
      },
    ],
  },
  alternates: { canonical: "https://ayane0857.net/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics gaId="G-XN8KR4DZ8E" />
      </head>
      <body className={`${KakuGothicNew.className} antialiased`}>
        <Header />
        {children}
        <FadeInObserver />
        <Footer />
      </body>
    </html>
  );
}
