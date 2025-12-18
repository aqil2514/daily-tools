"use client";

import { ParsedUrlQuery } from "../types/output";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { SubHeading } from "@/components/atoms/text/subHeading";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useLocale } from "next-intl";
import { urlQueryOutputI18n } from "../i18n/query-output";

interface Props {
  query: ParsedUrlQuery;
}

export function UrlQueryOutput({ query }: Props) {
  const locale = useLocale();
  const t = urlQueryOutputI18n[locale];

  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value);
  };

  return (
    <ToolCard>
      <SubHeading className="mt-0">{t.title}</SubHeading>

      {query.params.length === 0 ? (
        <div className="text-sm text-muted-foreground">{t.empty}</div>
      ) : (
        <div className="space-y-2 text-sm">
          {query.params.map((param, index) => (
            <div
              key={`${param.key}-${index}`}
              className="grid grid-cols-[1fr_2fr_auto] gap-4 items-center border-b last:border-none pb-2"
            >
              <span className="font-mono text-muted-foreground">
                {param.key}
              </span>

              <span className="font-mono break-all">{param.value}</span>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(param.value)}
              >
                <Copy size={14} />
              </Button>
            </div>
          ))}
        </div>
      )}
    </ToolCard>
  );
}
