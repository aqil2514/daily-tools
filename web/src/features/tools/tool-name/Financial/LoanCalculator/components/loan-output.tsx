import { FileText, Table } from "lucide-react";
import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { i18nLoanOutput } from "../i18n/loan-output";
import { SummaryTabContent } from "./loan-output-tabs/summary-tab-content";
import { ScheduleTabContent } from "./loan-output-tabs/schedule-tab-content";

export function LoanOutput() {
  const locale = useLocale();
  const t = i18nLoanOutput[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">{t.title}</SubHeading>

      <Tabs defaultValue="summary" className="mt-6">
        {/* Tabs Header */}
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="summary">
            <FileText className="w-4 h-4 mr-2" />
            {t.summary}
          </TabsTrigger>

          <TabsTrigger value="schedule">
            <Table className="w-4 h-4 mr-2" />
            Tabel Cicilan
          </TabsTrigger>
        </TabsList>

        <SummaryTabContent />

        <ScheduleTabContent />
      </Tabs>
    </ToolCard>
  );
}
