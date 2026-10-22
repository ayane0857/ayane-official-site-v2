import { Suspense } from "react";
import Image from "next/image";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { portfolios } from "@/data/Portfolio";

type Props = PageProps<"/[locale]/portfolio/[id]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const portfolio = portfolios.find((item) => String(item.id) === id);

  if (!portfolio) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Portfolio" });
  const siteUrl = "https://ayane0857.net";
  const localizedUrl = `${siteUrl}/${locale}/portfolio/${id}`;
  const languages = Object.fromEntries(
    routing.locales.map((supportedLocale) => [
      supportedLocale,
      `${siteUrl}/${supportedLocale}/portfolio/${id}`,
    ]),
  );
  const title = `ayane.home - ${t(`${portfolio.id}.title`)}`;
  const description = t(`${portfolio.id}.description`);

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

export function generateStaticParams() {
  return portfolios.map((portfolio) => ({ id: String(portfolio.id) }));
}

const portfolioLinks = [
  { key: "site", label: "Website" },
  { key: "github", label: "GitHub" },
  { key: "utaloader", label: "Utaloader" },
  { key: "slides", label: "Slides" },
] as const;

export default function PortfolioDetail({
  params,
}: PageProps<"/[locale]/portfolio/[id]">) {
  return (
    <Suspense fallback={<PortfolioDetailFallback />}>
      <PortfolioContent params={params} />
    </Suspense>
  );
}

function PortfolioDetailFallback() {
  return (
    <main className="flex flex-col gap-10 px-4 pb-12 sm:gap-14 sm:px-8 sm:pb-16 lg:px-16">
      <div className="h-8 w-28 animate-pulse rounded-full bg-neutral-100" />
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(200px,0.42fr)] lg:gap-14">
        <div className="flex flex-col gap-4">
          <div className="h-4 w-24 animate-pulse rounded bg-neutral-100" />
          <div className="h-10 w-3/4 animate-pulse rounded bg-neutral-100" />
          <div className="h-20 max-w-xl animate-pulse rounded bg-neutral-100" />
        </div>
        <div className="aspect-[16/10] w-full max-w-xs animate-pulse rounded-3xl bg-neutral-100 md:max-w-sm" />
      </div>
    </main>
  );
}

async function PortfolioContent({
  params,
}: {
  params: PageProps<"/[locale]/portfolio/[id]">["params"];
}) {
  const { id } = await params;
  const portfolio = portfolios.find((item) => String(item.id) === id);

  if (!portfolio) notFound();

  const t = await getTranslations("Portfolio");
  const title = t(`${portfolio.id}.title`);
  const description = t(`${portfolio.id}.description`);
  const date = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
  }).format(new Date(`${portfolio.timestmp}T00:00:00`));
  const links = portfolioLinks
    .flatMap(({ key, label }) => {
      const value = portfolio.links[key];
      const hrefs = Array.isArray(value) ? value : value ? [value] : [];

      return hrefs.map((href, index) => ({
        id: `${key}-${index}`,
        key,
        label: key === "site" && hrefs.length > 1 ? `${label} ${index + 1}` : label,
        href,
      }));
    });

  return (
    <main className="flex flex-col gap-10 pb-12 sm:gap-14 sm:pb-16">
      <div className="px-4 pt-2 sm:px-8 lg:px-16">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          <FiArrowLeft aria-hidden="true" />
          Portfolio
        </Link>
      </div>

      <section className="grid items-center gap-8 px-4 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(200px,0.42fr)] lg:gap-14 lg:px-16">
        <header className="flex min-w-0 flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-neutral-500">{date}</p>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="max-w-3xl whitespace-pre-line text-lg leading-relaxed text-[#545454] sm:text-xl">
              {description}
            </p>
          </div>

          {portfolio.tags.length > 0 && (
            <ul aria-label="Technologies" className="flex flex-wrap gap-2">
              {portfolio.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-[#f1f1f1] px-4 py-1.5 text-sm text-neutral-700"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </header>

        <div
          className="relative mx-auto aspect-[16/10] w-full max-w-xs overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-700 via-neutral-900 to-black md:mx-0 md:max-w-sm"
          aria-label={title}
        >
          {portfolio.links.image && (
            <Image
              src={portfolio.links.image}
              alt={title}
              fill
              priority
              sizes="(min-width: 768px) 28vw, (min-width: 640px) 24rem, calc(100vw - 2rem)"
              className="object-cover"
            />
          )}
        </div>
      </section>

      {links.length > 0 && (
        <section
          className="flex flex-col gap-5 px-4 sm:px-8 lg:px-16"
          aria-labelledby="portfolio-links-heading"
        >
          <h2
            id="portfolio-links-heading"
            className="text-xl font-semibold sm:text-2xl"
          >
            Portfolio links
          </h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {links.map(({ id, key, label, href }) => (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-36 items-center gap-4 rounded-3xl bg-neutral-100 p-5 text-neutral-900 transition-colors hover:bg-neutral-200/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:gap-5 sm:p-6"
                >
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white">
                    {key === "github" ? (
                      <FiGithub
                        aria-hidden="true"
                        className="size-7 text-neutral-900 sm:size-9"
                      />
                    ) : (
                      <FiExternalLink
                        aria-hidden="true"
                        className="size-7 text-neutral-900 sm:size-9"
                      />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xl leading-tight">{label}</span>
                    <span className="mt-2 block break-all text-sm text-neutral-500 sm:text-base">
                      {href}
                    </span>
                  </span>
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="size-6 shrink-0 text-neutral-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
