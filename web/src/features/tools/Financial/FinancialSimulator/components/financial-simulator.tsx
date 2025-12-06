import { ToolCard } from "@/components/tools/tool-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FinancialSetting } from "./financial-setting";
import OverviewTab from "./overview";
import TransactionsTab from "./transactions";
import SummaryTab from "./summary";
import ChartTab from "./chart";

export function FinancialSimulatorComponent() {
  return (
    <ToolCard>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="chart">Chart</TabsTrigger>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="setting">Setting</TabsTrigger>
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
