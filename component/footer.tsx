import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const linkClass = "text-lg text-[#222] underline-offset-2 hover:underline";

export async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="flex w-full flex-col gap-12 px-8 pt-24 pb-12 text-[#545454]">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div>
          <Link href="/" className="text-4xl font-medium">
            ayane.home
          </Link>
          <p className="mt-3 text-base whitespace-pre-line">
            {t("FooterText")}
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">
          <nav className="flex flex-col gap-4">
            <p className="text-sm text-[#545454]">Pages</p>
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
            <p className="text-sm text-[#545454]">More</p>
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

      <div className="flex items-center gap-12 border-t border-[#CFCFCF] pt-10 text-base">
        <p>© <CopyrightYear /> Ayane</p>
      </div>
    </footer>
  );
}
