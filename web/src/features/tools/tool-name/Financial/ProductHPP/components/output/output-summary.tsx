"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { CostBreakdownSection } from "./cost-breakdown-section";
import { PricingSummarySection } from "./pricing-summary-section";
import { PriceSimulationSection } from "./price-simulation-section";

import { useLocale } from "next-intl";
import { outputSummaryI18n } from "../../i18n/output/output-summary";

export function OutputSummarySection() {
  const locale = useLocale();
  const t = outputSummaryI18n[locale];

  return (
    <Card className="border rounded-xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {t.title}
        </CardTitle>

        <CardDescription className="text-sm text-muted-foreground">
          {t.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <CostBreakdownSection />
        <PricingSummarySection />
        <PriceSimulationSection />
      </CardContent>
    </Card>
  );
}
