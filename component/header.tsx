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
    <header className="flex items-center justify-between px-8 py-4">
      {/* ナビゲーションメニュー */}
      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/"
              className="text-2xl underline-offset-8 transition-colors hover:underline hover:text-gray-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-2xl underline-offset-8 transition-colors hover:underline hover:text-gray-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="text-2xl underline-offset-8 transition-colors hover:underline hover:text-gray-600"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-2xl underline-offset-8 transition-colors hover:underline hover:text-gray-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => changeLanguage("ja")}
          className={`text-xl text-[#545454] transition-colors ${
            locale !== "ja" && "hover:text-[#CFCFCF]"
          }`}
        >
          JA
        </button>

        <span className="text-xl font-light text-[#545454]">/</span>

        <button
          type="button"
          onClick={() => changeLanguage("en")}
          className={`text-xl text-[#545454] transition-colors ${
            locale !== "en" && "hover:text-[#CFCFCF]"
          }`}
        >
          EN
        </button>
      </div>
    </header>
  );
}
