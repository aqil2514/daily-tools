import { ToolCard } from "@/components/tools/tool-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FinancialSetting } from "./financial-setting";
import OverviewTab from "./overview";
import TransactionsTab from "./transactions";
import SummaryTab from "./summary";
import ChartTab from "./chart";
import { useTranslations } from "next-intl";
import { FinancialSimulatorProvider } from "../store/provider";

export function FinancialSimulatorComponent() {
  return (
    <FinancialSimulatorProvider>
      <InnerTemplate />
    </FinancialSimulatorProvider>
  );
}

const InnerTemplate = () => {
  const t = useTranslations("tools-registry.financial.financial-simulator");
  return (
    <ToolCard>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList
          className="
    flex 
    w-full
    overflow-x-auto
    whitespace-nowrap
    no-scrollbar
    gap-2
    px-1
  "
        >
          <TabsTrigger value="overview" className="shrink-0">
            {t("overview")}
          </TabsTrigger>

          <TabsTrigger value="transactions" className="shrink-0">
            {t("transaction")}
          </TabsTrigger>

          <TabsTrigger value="chart" className="shrink-0">
            {t("chart")}
          </TabsTrigger>

          <TabsTrigger value="summary" className="shrink-0">
            {t("summary")}
          </TabsTrigger>

          <TabsTrigger value="setting" className="shrink-0">
            {t("setting")}
          </TabsTrigger>
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
};
