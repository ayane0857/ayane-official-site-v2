"use client";

import { Button } from "@base-ui/react/button";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Header() {
  const locale = useLocale();
  const changeLanguage = (nextLocale: "ja" | "en") => {
    const pathname = window.location.pathname.replace(
      /^\/(?:ja|en)(?=\/|$)/,
      "",
    );
    const destination = `/${nextLocale}${pathname || "/"}${window.location.search}${window.location.hash}`;
    window.location.assign(destination);
  };
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-4 sm:flex-nowrap sm:px-8">
      <Link href="/" className="font-bold text-lg">
        AYANE.HOME
      </Link>
      <div className="flex flex-col items-end gap-2">
        <nav>
          <ul className="flex items-center gap-3 sm:gap-6">
            <li>
              <Link
                href="/"
                className="text-base underline-offset-4 transition-colors hover:underline hover:text-gray-600 sm:text-xl sm:underline-offset-8"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-base underline-offset-4 transition-colors hover:underline hover:text-gray-600 sm:text-xl sm:underline-offset-8"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="text-base underline-offset-4 transition-colors hover:underline hover:text-gray-600 sm:text-xl sm:underline-offset-8"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-base underline-offset-4 transition-colors hover:underline hover:text-gray-600 sm:text-xl sm:underline-offset-8"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex shrink-0 items-center justify-center gap-2">
          <Button
            type="button"
            onClick={() => changeLanguage("ja")}
            className={`text-base text-[#545454] transition-colors sm:text-xl cursor-pointer ${
              locale !== "ja" && "hover:text-[#CFCFCF]"
            }`}
          >
            JA
          </Button>

          <span className="text-base font-light text-[#545454] sm:text-xl">
            /
          </span>

          <Button
            type="button"
            onClick={() => changeLanguage("en")}
            className={`text-base text-[#545454] transition-colors sm:text-xl cursor-pointer ${
              locale !== "en" && "hover:text-[#CFCFCF]"
            }`}
          >
            EN
          </Button>
        </div>
      </div>
    </header>
  );
}
