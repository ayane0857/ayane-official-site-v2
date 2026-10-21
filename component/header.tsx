"use client";

import { useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (nextLocale: "ja" | "en") => {
    router.replace(pathname, { locale: nextLocale });
  };
  return (
    <header className="flex items-center justify-between gap-3 px-4 py-4 sm:px-8">
      {/* ナビゲーションメニュー */}
      <nav>
        <ul className="flex items-center gap-3 sm:gap-6">
          <li>
            <Link
              href="/"
              className="text-base underline-offset-4 transition-colors hover:underline hover:text-gray-600 sm:text-2xl sm:underline-offset-8"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-base underline-offset-4 transition-colors hover:underline hover:text-gray-600 sm:text-2xl sm:underline-offset-8"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="text-base underline-offset-4 transition-colors hover:underline hover:text-gray-600 sm:text-2xl sm:underline-offset-8"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-base underline-offset-4 transition-colors hover:underline hover:text-gray-600 sm:text-2xl sm:underline-offset-8"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex shrink-0 items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => changeLanguage("ja")}
          className={`text-base text-[#545454] transition-colors sm:text-xl ${
            locale !== "ja" && "hover:text-[#CFCFCF]"
          }`}
        >
          JA
        </button>

        <span className="text-base font-light text-[#545454] sm:text-xl">/</span>

        <button
          type="button"
          onClick={() => changeLanguage("en")}
          className={`text-base text-[#545454] transition-colors sm:text-xl ${
            locale !== "en" && "hover:text-[#CFCFCF]"
          }`}
        >
          EN
        </button>
      </div>
    </header>
  );
}
