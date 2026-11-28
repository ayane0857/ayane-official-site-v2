"use client";

import { Menu } from "@base-ui/react/menu";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { languages, locales, type LanguageLocale } from "@/data/language";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { FiCheck, FiChevronDown, FiGlobe, FiMoon, FiSun } from "react-icons/fi";

const subscribeToMount = () => () => undefined;
const getMountedSnapshot = () => true;
const getServerMountedSnapshot = () => false;

export default function Header() {
  const locale = useLocale();
  const currentLanguage =
    languages.find((language) => language.locale === locale) ?? languages[0];
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToMount,
    getMountedSnapshot,
    getServerMountedSnapshot,
  );

  const changeLanguage = (nextLocale: LanguageLocale) => {
    const pathname = window.location.pathname.replace(
      new RegExp(`^/(?:${locales.join("|")})(?=/|$)`),
      "",
    );
    const destination = `/${nextLocale}${pathname || "/"}${window.location.search}${window.location.hash}`;
    window.location.assign(destination);
  };
  return (
    <header
      role="banner"
      className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-3 px-4 py-4 sm:flex sm:flex-row sm:flex-nowrap sm:gap-0 sm:px-8"
    >
      <Link href="/" className="font-bold text-lg">
        AYANE.HOME
      </Link>
      <nav className="col-span-2 row-start-2 justify-self-center sm:col-auto sm:row-auto sm:ml-auto sm:justify-self-auto">
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3">
          <li>
            <Link
              href="/"
              className="text-base underline-offset-4 transition-colors light:hover:text-neutral-600 hover:underline sm:text-xl sm:underline-offset-8 dark:hover:text-zinc-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-base underline-offset-4 transition-colors light:hover:text-neutral-600 hover:underline sm:text-xl sm:underline-offset-8 dark:hover:text-zinc-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="text-base underline-offset-4 transition-colors light:hover:text-neutral-600 hover:underline sm:text-xl sm:underline-offset-8 dark:hover:text-zinc-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-base underline-offset-4 transition-colors light:hover:text-neutral-600 hover:underline sm:text-xl sm:underline-offset-8 dark:hover:text-zinc-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="relative z-10 col-start-2 row-start-1 flex items-center gap-4 sm:ml-6 sm:gap-6">
        <Menu.Root>
          <Menu.Trigger
            aria-label="Change language"
            className="group flex h-9 touch-manipulation cursor-pointer items-center gap-1.5 rounded-full border border-neutral-100 px-3 text-sm font-medium tracking-wide text-neutral-900 transition-[background-color,border-color,color,transform] light:hover:border-neutral-300 light:hover:bg-neutral-100 light:hover:text-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 light:focus-visible:outline-neutral-900 sm:h-10 sm:px-3.5 dark:border-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-zinc-100 dark:focus-visible:outline-zinc-300"
          >
            <FiGlobe className="text-base" aria-hidden="true" />
            <span>{currentLanguage.shortLabel}</span>
            <FiChevronDown
              className="text-xs transition-transform duration-200 group-data-popup-open:rotate-180"
              aria-hidden="true"
            />
          </Menu.Trigger>
          <Menu.Portal>
            <Menu.Positioner
              className="z-10 outline-hidden"
              sideOffset={10}
              align="end"
            >
              <Menu.Popup className="flex min-w-40 flex-col gap-1 rounded-2xl border border-neutral-100 bg-white p-2 text-neutral-900 shadow-[0_12px_30px_rgba(84,84,84,0.14)] outline-hidden transition-[scale,opacity] duration-150 ease-out data-ending-style:scale-[0.96] data-ending-style:opacity-0 data-starting-style:scale-[0.96] data-starting-style:opacity-0 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
                {languages.map((language) => {
                  const isCurrentLanguage = locale === language.locale;

                  return (
                    <Menu.Item
                      key={language.locale}
                      onClick={() => changeLanguage(language.locale)}
                      className={`flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] light:focus-visible:outline-neutral-900 sm:text-lg ${
                        isCurrentLanguage
                          ? "bg-neutral-100 font-medium text-neutral-900 dark:bg-zinc-800 dark:text-zinc-100"
                          : "light:hover:bg-neutral-100 light:hover:text-neutral-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                      }`}
                    >
                      <span>{language.label}</span>
                      {isCurrentLanguage && (
                        <FiCheck className="text-sm" aria-hidden="true" />
                      )}
                    </Menu.Item>
                  );
                })}
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>
        <button
          type="button"
          aria-label={
            mounted && resolvedTheme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          aria-pressed={mounted && resolvedTheme === "dark"}
          title={
            mounted && resolvedTheme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          onClick={() =>
            setTheme(resolvedTheme === "dark" ? "light" : "dark")
          }
          className="flex size-9 touch-manipulation cursor-pointer items-center justify-center rounded-full border border-neutral-200 text-neutral-800 transition-colors light:hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 light:focus-visible:outline-neutral-900 sm:size-10 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:focus-visible:outline-zinc-300"
        >
          {mounted && resolvedTheme === "dark" ? (
            <FiSun aria-hidden="true" />
          ) : (
            <FiMoon aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}
