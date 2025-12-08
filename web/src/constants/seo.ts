import { Locale } from "next-intl";

export const SEO_CONFIG = {
  siteUrl: "https://flowtooly.vercel.app",
  defaultLocale: "en",
  locales: ["en", "id"],
};

export const canonicalUrl = (locale: Locale, path: string = "") =>
  `${SEO_CONFIG.siteUrl}/${locale}${path}`;

export function getHreflangs(pathname: string = "") {
  const { siteUrl, locales, defaultLocale } = SEO_CONFIG;

  const langs: Record<string, string> = {};
  locales.forEach((locale) => {
    langs[locale] = `${siteUrl}/${locale}${pathname}`;
  });

  // x-default → default locale
  langs["x-default"] = `${siteUrl}/${defaultLocale}${pathname}`;

  return langs;
}