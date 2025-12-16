"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Search } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { toolsRegistry } from "@/features/tools/registry";
import { buildSearchIndex } from "@/features/search/utils/build-search-index";
import { createToolSearchEngine } from "@/features/search/utils/create-search-engine";
import { SearchResultGroup } from "@/features/search/components/SearchResultGroup";
import { groupByCategory } from "@/features/search/utils/group-by-category";
import { flattenResults } from "@/features/search/utils/flatten-results";
import { useCommandShortcut } from "@/hooks/use-command-shortcut";

interface SearchSheetProps {
  compact?: boolean;
}

export function SearchSheet({ compact = false }: SearchSheetProps) {
  const locale = useLocale() as "en" | "id";
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations("search");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveIndex(0);
  }, [query]);

  const searchIndex = useMemo(
    () => buildSearchIndex(toolsRegistry, locale),
    [locale]
  );

  const fuse = useMemo(
    () => createToolSearchEngine(searchIndex),
    [searchIndex]
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).map((r) => r.item);
  }, [query, fuse]);

  const groupedResults = useMemo(() => groupByCategory(results), [results]);

  const flatResults = useMemo(
    () => flattenResults(groupedResults),
    [groupedResults]
  );

  useEffect(() => {
    itemRefs.current = [];
  }, [results]);

  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (el) {
      el.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  useCommandShortcut(() => {
    setOpen((v) => !v);
  });

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [open]);

  let startIndex = 0;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {compact ? (
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="gap-2 text-muted-foreground"
          >
            <Search className="h-4 w-4" />
            <span>{t("trigger")}</span>
            <kbd className="ml-2 rounded border bg-muted px-1.5 text-[10px]">
              ⌘K
            </kbd>
          </Button>
        )}
      </SheetTrigger>

      <SheetContent side="top" className="h-[60vh] overflow-hidden px-4 pb-6">
        <SheetHeader>
          <SheetTitle>{t("title")}</SheetTitle>
        </SheetHeader>

        <div className="mt-6">
          <Input
            autoFocus
            ref={inputRef}
            placeholder={t("placeholder")}
            value={query}
            className="h-12 text-base"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (!flatResults.length) return;

              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActiveIndex((i) =>
                  i + 1 >= flatResults.length ? 0 : i + 1
                );
              }

              if (e.key === "ArrowUp") {
                e.preventDefault();
                setActiveIndex((i) =>
                  i - 1 < 0 ? flatResults.length - 1 : i - 1
                );
              }

              if (e.key === "Enter") {
                e.preventDefault();
                const tool = flatResults[activeIndex];
                if (tool) {
                  setOpen(false);
                  window.location.href = tool.href;
                }
              }
            }}
          />
        </div>

        <ScrollArea
          ref={scrollAreaRef}
          className="mt-6 h-[calc(60vh-140px)] pr-2"
        >
          {query && results.length === 0 && (
            <div className="px-3 py-6 text-sm text-muted-foreground">
              {t("empty")}
            </div>
          )}

          <div className="space-y-4">
            {Object.entries(groupedResults).map(([category, tools]) => {
              const groupStart = startIndex;
              startIndex += tools.length;

              return (
                <SearchResultGroup
                  key={category}
                  category={category}
                  tools={tools}
                  activeIndex={activeIndex}
                  startIndex={groupStart}
                  onHover={setActiveIndex}
                  onSelect={() => setOpen(false)}
                  setItemRef={(index, el) => {
                    itemRefs.current[index] = el;
                  }}
                />
              );
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
