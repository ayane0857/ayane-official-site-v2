import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Header from "@/component/header";
import Footer from "@/component/footer";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { GoogleAnalytics } from "@next/third-parties/google";
import NextTopLoader from "nextjs-toploader";
import { LINE_Seed_JP } from "next/font/google";
import "./globals.css";

const LineFont = LINE_Seed_JP({ weight: "400", adjustFontFallback: false });

type Props = LayoutProps<"/[locale]">;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#e6c9ac",
  width: "device-width",
  initialScale: 1.0,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const siteUrl = "https://ayane0857.net";
  const localizedUrl = `${siteUrl}/`;
  const languages = Object.fromEntries(
    routing.locales.map((supportedLocale) => [
      supportedLocale,
      `${siteUrl}/${supportedLocale}`,
    ]),
  );

  return {
    title: {
      default: t("Title"),
      template: `%s | ${t("SiteName")}`,
    },
    description: t("Description"),
    twitter: {
      card: "summary",
      site: "@ayane0857_",
      images: [
        {
          url: `${siteUrl}/icon-512x512.png`,
          width: 128,
          height: 128,
          alt: t("ImageAlt"),
        },
      ],
    },
    openGraph: {
      type: "website",
      url: localizedUrl,
      locale: locale === "ja" ? "ja_JP" : "en_US",
      siteName: t("SiteName"),
      title: t("Title"),
      description: t("Description"),
      images: [
        {
          url: `${siteUrl}/icon-512x512.png`,
          width: 128,
          height: 128,
          alt: t("ImageAlt"),
        },
      ],
    },
    alternates: {
      canonical: localizedUrl,
      languages,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`flex min-h-screen flex-col root gap-12 ${LineFont.className}`}
      >
        <NextTopLoader height={2} showSpinner={false} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          <div role="main" className="flex-1">
            {children}
          </div>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </NextIntlClientProvider>
        <GoogleAnalytics gaId="G-XN8KR4DZ8E" />
      </body>
    </html>
  );
}
