import { useTranslations } from "next-intl";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { FiArrowUpRight, FiGithub, FiMail, FiInstagram } from "react-icons/fi";

type Props = PageProps<"/[locale]/contact">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Contact" });
  const siteUrl = "https://ayane0857.net";
  const localizedUrl = `${siteUrl}/contact`;
  const languages = Object.fromEntries(
    routing.locales.map((supportedLocale) => [
      supportedLocale,
      `${siteUrl}/${supportedLocale}/contact`,
    ]),
  );
  const title = `AYANE.HOME - ${t("MetaTitle")}`;
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

const contacts = [
  {
    name: "Email",
    account: "info@ayane0857.com",
    descriptionKey: "EmailText",
    href: "mailto:info@ayane0857.com",
    Icon: FiMail,
  },
  {
    name: "GitHub",
    account: "@ayane0857",
    descriptionKey: "GitHubText",
    href: "https://github.com/ayane0857",
    Icon: FiGithub,
  },
  {
    name: "Instagram",
    account: "@ayane0857",
    descriptionKey: "InstagramText",
    href: "https://www.instagram.com/ayane0857/",
    Icon: FiInstagram,
  },
];

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4 px-4 py-4 sm:px-8 lg:px-16">
        <h1 className="text-4xl font-bold sm:text-5xl">Contact</h1>
        <p className="max-w-2xl whitespace-pre-line text-lg text-neutral-600 sm:text-xl dark:text-zinc-400">
          {t("ContactText")}
        </p>
      </div>
      <section className="flex flex-col gap-6 px-4 sm:px-8 lg:px-16">
        <header className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            {t("ChooseMethod")}
          </h2>

          <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl dark:text-zinc-400">
            {t("MethodText")}
          </p>
        </header>

        <div className="flex flex-col gap-8">
          {contacts.map(({ name, account, descriptionKey, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-44 items-center gap-4 rounded-3xl bg-neutral-100 p-5 text-neutral-900 transition-colors light:hover:bg-neutral-200/70 focus-visible:outline-2 focus-visible:outline-offset-2 light:focus-visible:outline-neutral-900 sm:gap-5 sm:p-6 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600 dark:focus-visible:outline-zinc-300"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white dark:bg-zinc-600">
                <Icon className="size-7 text-neutral-900 sm:size-9 dark:text-zinc-100" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xl leading-tight">{name}</span>

                <span className="mt-1 block break-all text-base text-neutral-600 sm:text-lg dark:text-zinc-400">
                  {account}
                </span>

                <span className="mt-3 block text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-zinc-400">
                  {t(descriptionKey)}
                </span>
              </span>

              <FiArrowUpRight
                aria-hidden="true"
                className="size-6 shrink-0 text-neutral-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-zinc-400"
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
