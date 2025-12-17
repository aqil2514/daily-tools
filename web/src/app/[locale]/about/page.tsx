import { canonicalUrl, getHreflangs } from "@/constants/seo";
import { MDRender } from "@/components/templates/MdRender";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import path from "node:path";
import fs from "fs";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isId = locale === "id";

  return {
    title: isId
      ? "Tentang Flowtooly – Platform Tools Online Gratis"
      : "About Flowtooly – Free Online Utility Tools",

    description: isId
      ? "Tentang Flowtooly, platform tools online gratis untuk berbagai kebutuhan seperti kalkulator, konverter, dan utility tools."
      : "Learn more about Flowtooly, a free online tools platform providing calculators, converters, and utility tools.",

    alternates: {
      canonical: canonicalUrl(locale, "/about"),
      languages: getHreflangs("/about"),
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const filePath = path.join(
    process.cwd(),
    "content/about",
    `about.${locale}.md`
  );

  const content = fs.readFileSync(filePath, "utf-8");

  return <MDRender content={content} />;
}
