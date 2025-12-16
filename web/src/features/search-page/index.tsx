"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/molecules/section-header";

import { SearchInput } from "./components/SearchInput";
import { SearchResults } from "./components/SearchResults";
import { CategoryChips } from "./components/CategoryChips";
import { useToolSearch } from "./hooks/use-tool-search";
import { useQueryParams } from "@/hooks/useQueryParams";
import { ToolCategoryName } from "@/@types/tools/index";
import { useTranslations } from "next-intl";

export default function SearchPage() {
  const queryParams = useQueryParams();
  const t = useTranslations("SearchPage")

  // ===== INIT QUERY (sekali) =====
  const initialQueryRef = useRef<string | null>(null);
  if (initialQueryRef.current === null) {
    initialQueryRef.current = queryParams.get("q") ?? "";
  }
  const [query, setQuery] = useState(initialQueryRef.current);

  // ===== INIT CATEGORY (sekali) =====
  const initialCategoryRef = useRef<ToolCategoryName | "all">("all");
  if (queryParams.get("category")) {
    initialCategoryRef.current =
      (queryParams.get("category") as ToolCategoryName) ?? "all";
  }
  const [category, setCategory] = useState<ToolCategoryName | "all">(
    initialCategoryRef.current
  );

  const { groupedResults } = useToolSearch(query, category);

  // ===== SYNC QUERY → URL =====
  useEffect(() => {
    const currentQ = queryParams.get("q") ?? "";
    if (query !== currentQ) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      query ? queryParams.set("q", query) : queryParams.remove("q");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // ===== SYNC CATEGORY → URL =====
  useEffect(() => {
    const currentCat = queryParams.get("category") ?? "all";
    if (category === currentCat) return;

    if (category === "all") {
      queryParams.remove("category");
    } else {
      queryParams.set("category", category);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div className="space-y-8">
      <SectionHeader
        title={t("title")}
        description={t("subtitle")}
      />

      <SearchInput
        value={query}
        onChange={setQuery}
        placeholder={t("placeholder")}
      />

      <CategoryChips value={category} onChange={setCategory} />

      <SearchResults groupedResults={groupedResults} />
    </div>
  );
}
