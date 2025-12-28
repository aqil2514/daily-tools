"use client";

import { useLocale } from "next-intl";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CsvDelimiterSelectProps {
  value?: string;
  onChange: (value?: string) => void;
}

export function CsvDelimiterSelect({
  value,
  onChange,
}: CsvDelimiterSelectProps) {
  const locale = useLocale();
  const isID = locale === "id";

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">
        {isID ? "Pemisah" : "Delimiter"}
      </span>

      <Select
        value={value ?? "auto"}
        onValueChange={(v) => onChange(v === "auto" ? undefined : v)}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="auto">
            {isID ? "Otomatis" : "Auto detect"}
          </SelectItem>
          <SelectItem value=",">Comma (,)</SelectItem>
          <SelectItem value=";">Semicolon (;)</SelectItem>
          <SelectItem value="\t">Tab (\\t)</SelectItem>
          <SelectItem value="|">Pipe (|)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
