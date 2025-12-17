import { canonicalUrl } from "@/constants/seo";
import SearchPageTemplate from "@/features/search-page";
import { searchMetadata } from "@/features/search-page/seo/metadata";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as "en" | "id";
  return {
    ...searchMetadata[locale],
    robots: {
      follow: true,
      index: false,
    },
    alternates:{
      canonical: canonicalUrl(locale, "/search")
    }
  };
}

export default function SearchPage() {
  return <SearchPageTemplate />;
}
