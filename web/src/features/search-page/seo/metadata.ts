import { Metadata } from "next";
import { Locale } from "next-intl";

export const searchMetadata: Record<
  Locale,
  Metadata
> = {
  en: {
    title: "Search Online Tools | Flowtooly",
    description:
      "Search and explore free online tools for developers, finance, images, PDF, text, and more. All tools work directly in your browser.",
    alternates: {
      canonical: "/search",
    },
    robots: {
      index: true,
      follow: true,
    },
  },

  id: {
    title: "Cari Tools Online Gratis | Flowtooly",
    description:
      "Cari dan jelajahi berbagai tools online gratis untuk developer, keuangan, gambar, PDF, teks, dan lainnya. Semua berjalan langsung di browser.",
    alternates: {
      canonical: "/search",
    },
    robots: {
      index: true,
      follow: true,
    },
  },
};
