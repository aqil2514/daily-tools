import { useMemo } from "react";
import { useLocale } from "next-intl";

import { toolsRegistry } from "@/features/tools/registry";
import { buildSearchIndex } from "@/features/search/utils/build-search-index";
import { createToolSearchEngine } from "@/features/search/utils/create-search-engine";
import { groupByCategory } from "@/features/search/utils/group-by-category";
import { ToolCategoryName } from "@/@types/tools/index";

const BROWSE_LIMIT = 50;

export function useToolSearch(
  query: string,
  category: ToolCategoryName | "all"
) {
  const locale = useLocale() as "en" | "id";

  const index = useMemo(
    () => buildSearchIndex(toolsRegistry, locale),
    [locale]
  );

  const engine = useMemo(
    () => createToolSearchEngine(index),
    [index]
  );

  const isSearchMode = Boolean(query.trim());

  /**
   * 1️⃣ SEARCH MODE
   * query ada → pakai Fuse
   */
  const searchedResults = useMemo(() => {
    if (!isSearchMode) return [];
    return engine.search(query).map((r) => r.item);
  }, [isSearchMode, query, engine]);

  /**
   * 2️⃣ BROWSE MODE
   * query kosong → ambil dari index langsung
   */
  const browseResults = useMemo(() => {
    if (isSearchMode) return [];

    let items = index;

    // filter category jika bukan all
    if (category !== "all") {
      items = items.filter((t) => t.category === category);
    }

    // limit hanya untuk ALL
    if (category === "all") {
      items = items.slice(0, BROWSE_LIMIT);
    }

    return items;
  }, [isSearchMode, index, category]);

  /**
   * 3️⃣ Gabungkan hasil
   */
  const finalResults = useMemo(() => {
    const base = isSearchMode ? searchedResults : browseResults;

    if (category === "all") return base;

    return base.filter((t) => t.category === category);
  }, [isSearchMode, searchedResults, browseResults, category]);

  const groupedResults = useMemo(
    () => groupByCategory(finalResults),
    [finalResults]
  );

  return {
    groupedResults,
    hasResults: finalResults.length > 0,
    isSearchMode,
  };
}
