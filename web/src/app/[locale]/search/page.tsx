import SearchPageTemplate from "@/features/search-page";
import { searchMetadata } from "@/features/search-page/seo/metadata";
import { getLocale } from "next-intl/server";

export async function generateMetadata() {
  const locale = (await getLocale()) as "en" | "id";
  return searchMetadata[locale];
}


export default function SearchPage() {
  return <SearchPageTemplate />
}
