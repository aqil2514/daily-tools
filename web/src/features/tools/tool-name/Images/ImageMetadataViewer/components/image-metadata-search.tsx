"use client";

import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";

import { i18nImageMetadataSearch } from "../i18n/image-metadata-search";

interface Props {
  meta: {
    query: string;
    setQuery: (v: string) => void;
    showImportantOnly: boolean;
    setShowImportantOnly: (v: boolean) => void;
  };
}

export function ImageMetadataSearch({ meta }: Props) {
  const locale = useLocale();
  const t = i18nImageMetadataSearch[locale];

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder={t.search.placeholder}
          value={meta.query}
          onChange={(e) => meta.setQuery(e.target.value)}
          className="w-full max-w-sm rounded-md border px-3 py-2 text-sm"
        />

        {meta.query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => meta.setQuery("")}
          >
            {t.search.clear}
          </Button>
        )}
      </div>

      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input
          type="checkbox"
          checked={meta.showImportantOnly}
          onChange={(e) =>
            meta.setShowImportantOnly(e.target.checked)
          }
          className="h-4 w-4"
        />
        <span className="text-muted-foreground">
          {t.importantOnly}
        </span>
      </label>
    </div>
  );
}
