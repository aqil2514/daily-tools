"use client";

import { useMemo, useState } from "react";
import { ToolName } from "@/@types/Tools";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

interface Props {
  relatedTools: ToolName[];
}

const i18nText = {
  en: {
    placeholder: "Related tools",
    openInNewTab: "Open in new tab",
  },
  id: {
    placeholder: "Alat terkait",
    openInNewTab: "Buka di tab baru",
  },
} as const;

export function RelatedToolSelect({ relatedTools }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [openInNewTab, setOpenInNewTab] = useState(false);

  const tools = relatedTools
    .map((toolName) => toolsRegistry[toolName])
    .filter(Boolean);

  /**
   * Cari tool yang sesuai dengan halaman yang sedang dibuka
   * Contoh pathname:
   * /en/tools/geometry-circle
   */
  const currentValue = useMemo(() => {
    const current = tools.find((tool) =>
      pathname.endsWith(tool.href)
    );
    return current?.href;
  }, [pathname, tools]);

  function handleSelect(href: string) {
    if (openInNewTab) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
    }
  }

  return (
    <div className="w-full rounded-lg border bg-white p-4 space-y-3">
      {/* Select */}
      <Select
        value={currentValue}
        onValueChange={handleSelect}
      >
        <SelectTrigger className="w-full bg-white">
          <SelectValue
            placeholder={i18nText[locale].placeholder}
          />
        </SelectTrigger>

        <SelectContent className="bg-white w-(--radix-select-trigger-width)">
          {tools.map((tool) => (
            <SelectItem key={tool.href} value={tool.href}>
              {tool.title[locale]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Switch */}
      <div className="flex gap-4">
        <Label
          htmlFor="open-new-tab"
          className="text-sm text-muted-foreground cursor-pointer"
        >
          {i18nText[locale].openInNewTab}
        </Label>

        <Switch
          id="open-new-tab"
          checked={openInNewTab}
          onCheckedChange={setOpenInNewTab}
        />
      </div>
    </div>
  );
}
