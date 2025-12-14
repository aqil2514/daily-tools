"use client";

import { ParsedUrlInsights } from "../types/output";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { SubHeading } from "@/components/atoms/subHeading";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "next-intl";
import { urlInsightsOutputI18n } from "../i18n/insights-output";

interface Props {
  insights: ParsedUrlInsights;
}

export function UrlInsightsOutput({ insights }: Props) {
  const locale = useLocale();
  const t = urlInsightsOutputI18n[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">{t.title}</SubHeading>

      <div className="flex flex-wrap gap-2 text-sm">
        <Badge variant={insights.isHttps ? "default" : "secondary"}>
          {insights.isHttps ? t.https : t.http}
        </Badge>

        {insights.hasCustomPort && <Badge>{t.customPort}</Badge>}
        {insights.hasAuth && <Badge>{t.auth}</Badge>}

        {insights.trackingParams.map((param) => (
          <Badge key={param} variant="outline">
            {param}
          </Badge>
        ))}
      </div>
    </ToolCard>
  );
}
