export const languages = [
  { locale: "ja", label: "日本語", shortLabel: "JA", openGraphLocale: "ja_JP" },
  { locale: "en", label: "English", shortLabel: "EN", openGraphLocale: "en_US" },
] as const;

export const locales = languages.map((language) => language.locale) as [
  LanguageLocale,
  ...LanguageLocale[],
];

export const defaultLocale: LanguageLocale = "ja";

export type LanguageLocale = (typeof languages)[number]["locale"];
