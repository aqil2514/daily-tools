import { ToolCard } from "@/components/tools/tool-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FinancialSetting } from "./financial-setting";
import OverviewTab from "./overview";
import TransactionsTab from "./transactions";
import SummaryTab from "./summary";
import ChartTab from "./chart";
import { useTranslations } from "next-intl";

export function FinancialSimulatorComponent() {
  const t = useTranslations("tools-registry.financial.financial-simulator")
  return (
    <ToolCard>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="overview">{t("overview")}</TabsTrigger>
          <TabsTrigger value="transactions">{t("transaction")}</TabsTrigger>
          <TabsTrigger value="chart">{t("chart")}</TabsTrigger>
          <TabsTrigger value="summary">{t("summary")}</TabsTrigger>
          <TabsTrigger value="setting">{t("setting")}</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>

        {/* Transactions Tab */}
        <TabsContent value="transactions">
          <TransactionsTab />
        </TabsContent>

        {/* Chart Tab */}
        <TabsContent value="chart">
          <ChartTab />
        </TabsContent>

        {/* Summary Tab */}
        <TabsContent value="summary">
          <SummaryTab />
        </TabsContent>

        {/* Setting Tab */}
        <TabsContent value="setting">
          <FinancialSetting />
        </TabsContent>
      </Tabs>
    </ToolCard>
  );
}
