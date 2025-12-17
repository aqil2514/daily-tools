import { SEO_CONFIG } from "@/constants/seo";
import HomeTemplate from "@/features/home";
import { Metadata } from "next";
import { Locale } from "next-intl";
import { getLocale } from "next-intl/server";

const localeMetadata: Record<Locale, Metadata> = {
  en: {
    title: "Flowtooly – Free Online Utility Tools",
    description:
      "Flowtooly provides free online calculators, converters, and utility tools for developers, finance, math, images, PDFs, and more.",
    alternates: {
      canonical: `${SEO_CONFIG.siteUrl}/en`,
    },
  },
  id: {
    title: "Flowtooly – Alat Utility Online Gratis",
    description:
      "Flowtooly menyediakan kalkulator, konverter, dan utility tools online gratis untuk developer, keuangan, matematika, gambar, PDF, dan lainnya.",
    alternates: {
      canonical: `${SEO_CONFIG.siteUrl}/id`,
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return { ...localeMetadata[locale], robots: { index: true, follow: true } };
}

export default function HomePage() {
  return <HomeTemplate />;
}
