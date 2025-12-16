"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { TOOL_CATEGORIES, ToolCategoryName } from "@/@types/tools/categories";
import { CATEGORY_REGISTRY } from "@/registry/categories.registry";

interface CategoryChipsProps {
  value: ToolCategoryName | "all";
  onChange: (value: ToolCategoryName | "all") => void;
}

export function CategoryChips({ value, onChange }: CategoryChipsProps) {
  const locale = useLocale();

  /**
   * 🔑 Ref untuk tiap chip (all + categories)
   */
  const itemRefs = useRef<
    Record<ToolCategoryName | "all", HTMLButtonElement | null>
  >({
    all: null,
  } as Record<ToolCategoryName | "all", HTMLButtonElement | null>);

  /**
   * 🔥 Auto scroll ke active chip
   */
  useEffect(() => {
    const el = itemRefs.current[value];
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [value]);

  return (
    <ScrollArea className="w-full">
      <div className="flex w-max gap-2 pb-2">
        {/* ALL */}
        <Button
          ref={(el) => {
            itemRefs.current.all = el;
          }}
          size="sm"
          variant={value === "all" ? "default" : "outline"}
          className="shrink-0"
          onClick={() => onChange("all")}
        >
          All
        </Button>

        {/* CATEGORIES */}
        {TOOL_CATEGORIES.map((cat) => (
          <Button
            key={cat}
            ref={(el) => {
              itemRefs.current[cat] = el;
            }}
            size="sm"
            variant={value === cat ? "default" : "outline"}
            className="shrink-0"
            onClick={() => {
              onChange(value === cat ? "all" : cat);
            }}
          >
            {CATEGORY_REGISTRY[cat].title[locale]}
          </Button>
        ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
