"use client";

import { Header } from "./header";
import { CategoryList } from "./category-list";
import { useState } from "react";
import { CategoryContent } from "./category-content";
import { sidebarSections } from "../registry";
import { useLocale } from "next-intl";
import { SearchResults } from "./search-result";

export default function ToolsTemplate() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [search, setSearch] = useState("");
  const locale = useLocale();

  const allTools = sidebarSections.flatMap((section) => section.sectionItem);

  const filteredTools = search.trim()
    ? allTools.filter((tool) => {
        const localeTitle = tool.title[locale];
        const localeDesc = tool.description[locale];

        return (
          localeTitle.toLowerCase().includes(search.toLowerCase()) ||
          localeDesc.toLowerCase().includes(search.toLowerCase()) ||
          tool.keywords[locale].some((kw) =>
            kw.toLowerCase().includes(search.toLowerCase())
          )
        );
      })
    : [];

  return (
    <div className="space-y-4 pb-20">
      <Header search={search} setSearch={setSearch} />

      {search.length > 0 && <SearchResults tools={filteredTools} />}

      {search.length === 0 && (
        <>
          <CategoryList
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <CategoryContent
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </>
      )}
    </div>
  );
}
