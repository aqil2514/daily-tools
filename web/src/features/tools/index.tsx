"use client";

import { Header } from "./components/header";
import { CategoryList } from "./components/category-list";
import { useState } from "react";

export default function ToolsTemplate() {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="space-y-4 pb-20">
      <Header search={search} setSearch={setSearch} />

      <CategoryList />
    </div>
  );
}
