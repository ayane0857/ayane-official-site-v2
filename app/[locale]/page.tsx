import PortfolioSlider from "@/component/portfolioslider";
import Socials from "@/component/socials";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { MdChevronRight } from "react-icons/md";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Home" });
  const siteUrl = "https://ayane0857.net";
  const localizedUrl = `${siteUrl}/${locale}/`;
  const languages = Object.fromEntries(
    routing.locales.map((supportedLocale) => [
      supportedLocale,
      `${siteUrl}/${supportedLocale}/`,
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

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col items-center justify-center gap-8 px-4 py-16 sm:px-8 sm:py-42 md:flex-row">
        <div className="w-full max-w-[180px] shrink-0 md:w-1/4 md:max-w-[280px]">
          <Image
            src="/images/avatar.png"
            alt="Avatar"
            width={400}
            height={400}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex w-full max-w-2xl flex-col gap-6 md:gap-8">
          <div>
            <p className="text-4xl font-bold sm:text-5xl">Ayane</p>
            <span className="text-xl text-[#545454]">Student / Engineer</span>
          </div>
          <p className="whitespace-pre-line text-lg sm:text-xl">
            {t("HeroText")}
          </p>
          <div>
            <p className="text-xl text-[#545454]">Tags</p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#f1f1f1] px-4 py-1">
                #UniPortfolio
              </span>
              <span className="rounded-full bg-[#f1f1f1] px-4 py-1">
                #Next.js
              </span>
              <span className="rounded-full bg-[#f1f1f1] px-4 py-1">
                #TypeScript
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold sm:text-3xl">Portfolio</p>
          <Link
            href="/portfolio"
            className="flex cursor-pointer items-center gap-2 text-[#545454]"
          >
            <p>{t("ViewPortfolio")}</p>
            <MdChevronRight size={24} />
          </Link>
        </div>
        <PortfolioSlider />
      </section>
      <section className="flex flex-col gap-6 px-4 sm:px-8 lg:px-16">
        <p className="text-2xl font-semibold sm:text-3xl">Socials</p>
        <Socials />
      </section>
    </div>
  );
}
