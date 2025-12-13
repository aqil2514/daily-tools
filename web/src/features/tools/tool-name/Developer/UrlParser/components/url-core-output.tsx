"use client";

import { ParsedUrlCore } from "../types/output";
import { ToolCard } from "@/components/tools/tool-card";
import { SubHeading } from "@/components/atoms/subHeading";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useLocale } from "next-intl";
import { urlCoreOutputI18n } from "../i18n/core-output";

interface Props {
  core: ParsedUrlCore;
}

export function UrlCoreOutput({ core }: Props) {
  const locale = useLocale();
  const t = urlCoreOutputI18n[locale];

  const items = Object.entries(core);

  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value);
  };

  return (
    <ToolCard>
      <SubHeading className="mt-0">{t.title}</SubHeading>

      <div className="space-y-2 text-sm">
        {items.map(([key, value]) => (
          <div
            key={key}
            className="flex items-center justify-between gap-4 border-b last:border-none pb-2"
          >
            <span className="font-mono text-muted-foreground">
              {t.fields[key as keyof typeof t.fields] ?? key}
            </span>

            <div className="flex items-center gap-2">
              <span className="font-mono break-all">
                {value || t.emptyValue}
              </span>

              {value && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(value)}
                >
                  <Copy size={14} />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </ToolCard>
  );
}
