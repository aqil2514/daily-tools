"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { SubHeading } from "@/components/atoms/text/subHeading";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AssetAllocationTable } from "./asset-allocation-table";
import { AssetAllocationPieChart } from "./asset-allocation-pie-chart";
import { useLocale } from "next-intl";
import { assetAllocationOutputI18n } from "../../i18n/output/asset-allocation-output";

export function AssetAllocationOutput() {
  const locale = useLocale();
  const t = assetAllocationOutputI18n[locale];

  return (
    <ToolCard>
      <div className="space-y-6">
        <div className="flex justify-between">
          <SubHeading className="mt-0">{t.heading}</SubHeading>
        </div>

        <Tabs defaultValue="table" className="w-full">
          <TabsList>
            <TabsTrigger value="table">{t.tabs.table}</TabsTrigger>
            <TabsTrigger value="chart">{t.tabs.chart}</TabsTrigger>
          </TabsList>

          <TabsContent value="table">
            <AssetAllocationTable />
          </TabsContent>

          <TabsContent value="chart">
            <AssetAllocationPieChart />
          </TabsContent>
        </Tabs>

        {/* DISCLAIMER */}
        <div className="pt-4 border-t text-xs text-muted-foreground">
          {t.disclaimer}
        </div>
      </div>
    </ToolCard>
  );
}
