import { Metadata } from "next";
import { MetadataSEO } from "@/@types/metadata";

interface NextMetadataOptions {
  locale: "en" | "id";
  baseUrl: string;
}

export function toNextMetadata(
  data: MetadataSEO,
  opts: NextMetadataOptions
): Metadata {
  const { locale, baseUrl } = opts;

  const title = `${data.title[locale]} | Flowtooly`;
  const description = data.description[locale];
  const keywords = data.keywords?.[locale];
  const canonical = data.canonicalSlug ?? data.slug;

  const canonicalUrl = `${baseUrl}/${locale}/tools/${canonical}`;

  return {
    title,
    description,
    keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    // Additional structured meta
    other: {
      slug: data.slug,
      locale,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
