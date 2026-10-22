import { useTranslations } from "next-intl";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { portfolios } from "@/data/Portfolio";
import PortfolioCard from "@/component/portfoliocard";

type Props = PageProps<"/[locale]/portfolio">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Portfolio" });
  const siteUrl = "https://ayane0857.net";
  const localizedUrl = `${siteUrl}/${locale}/portfolio`;
  const languages = Object.fromEntries(
    routing.locales.map((supportedLocale) => [
      supportedLocale,
      `${siteUrl}/${supportedLocale}/portfolio`,
    ]),
  );
  const title = `ayane.home - ${t("MetaTitle")}`;
  const description = t("MetaDescription");

  return {
    title,
    description,
    openGraph: {
      type: "website",
      url: localizedUrl,
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: localizedUrl,
      languages,
    },
  };
}

export default function Portfolio() {
  const t = useTranslations("Portfolio");

  const sorted = [...portfolios].sort((a, b) =>
    b.timestmp.localeCompare(a.timestmp),
  );

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4 px-4 py-4 sm:px-8 lg:px-16">
        <h1 className="text-4xl font-bold sm:text-5xl">Portfolio</h1>
        <p className="max-w-2xl whitespace-pre-line text-lg text-[#545454] sm:text-xl">
          {t("TitleText")}
        </p>
      </div>

      <section
        aria-label={t("TitleText")}
        className="grid grid-cols-1 gap-6 px-4 pb-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-8 lg:px-16"
      >
        {sorted.map((portfolio) => (
          <PortfolioCard
            key={portfolio.id}
            portfolio={portfolio}
            title={t(`${portfolio.id}.title`)}
            viewLabel={t("View")}
          />
        ))}
      </section>
    </div>
  );
}
