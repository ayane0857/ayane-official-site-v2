import type { Metadata } from "next";
import { headers } from "next/headers";
import { Suspense } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Header from "@/component/header";
import Footer from "@/component/footer";
import ThemeProvider from "@/component/theme-provider";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import "./[locale]/globals.css";

type Locale = (typeof routing.locales)[number];

export const metadata: Metadata = {
  title: "404 - Page Not Found | ayane.home",
  robots: { index: false, follow: false },
};

export const instant = false;

async function getNotFoundLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const requestLocale = requestHeaders.get("x-next-intl-locale");

  return routing.locales.includes(requestLocale as Locale)
    ? (requestLocale as Locale)
    : routing.defaultLocale;
}

async function LocalizedNotFound({ locale }: { locale: Locale }) {
  const [messages, t] = await Promise.all([
    getMessages({ locale }),
    getTranslations({ locale, namespace: "NotFound" }),
  ]);

  return (
    <div lang={locale} className="flex min-h-screen flex-col gap-12">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header />
        <main className="flex min-h-[45vh] flex-col items-center justify-center gap-4 px-4 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-neutral-500 dark:text-zinc-400">
            404
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">{t("Title")}</h1>
          <p className="max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-zinc-400">
            {t("Description")}
          </p>
          <Link
            href="/"
            className="mt-3 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors light:hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 light:focus-visible:outline-neutral-900 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600 dark:focus-visible:outline-zinc-300"
          >
            {t("ReturnHome")}
          </Link>
        </main>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}

export default async function GlobalNotFound() {
  const locale = await getNotFoundLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Suspense fallback={null}>
            <LocalizedNotFound locale={locale} />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
