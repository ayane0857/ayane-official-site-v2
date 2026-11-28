import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const linkClass = "text-lg text-neutral-800 underline-offset-2 hover:underline dark:text-zinc-200";

export async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer
      role="contentinfo"
      className="flex w-full flex-col gap-10 px-4 pt-12 pb-8 text-neutral-600 sm:px-8 sm:pt-16 sm:pb-10 dark:text-zinc-400"
    >
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div>
          <Link href="/" className="text-3xl font-medium">
            AYANE.HOME
          </Link>
          <p className="mt-3 text-base whitespace-pre-line">
            {t("FooterText")}
          </p>
        </div>

        <div className="flex gap-12 sm:gap-16 md:gap-24">
          <nav className="flex flex-col gap-4">
            <p className="text-sm text-neutral-600 dark:text-zinc-400">Pages</p>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className={linkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={linkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className={linkClass}>
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="flex flex-col gap-4">
            <p className="text-sm text-neutral-600 dark:text-zinc-400">More</p>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex items-center gap-12 border-t border-neutral-300 pt-10 text-base dark:border-zinc-700">
        <p>
          © <CopyrightYear /> Ayane
        </p>
      </div>
    </footer>
  );
}
