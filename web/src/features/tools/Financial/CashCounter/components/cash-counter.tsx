"use client";
import { ToolCard } from "@/components/tools/tool-card";
import { CashTable } from "./cash-table";
import { CashSummary } from "./cash-summary";
import { CashSettings } from "./cash-settings";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShortcutHint } from "./shortcut-hint";
import { useCashCounter } from "../store/provider";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function CashCounterComponent() {
  const { resetAll } = useCashCounter();
  const t = useTranslations("tools-registry.financial.cash-counter");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Table Section */}
      <ToolCard>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-gray-500 text-2xl font-semibold">
            {t("cash-table")}
          </p>

          <div className="flex gap-2 md:gap-4">
            <Button variant="outline" onClick={resetAll}>
              Reset
            </Button>
            <ShortcutHint />
          </div>
        </div>

        <CashTable />
      </ToolCard>

      {/* Summary Section */}
      <ToolCard>
        <p className="text-gray-500 text-2xl font-semibold">
          {t("summary")}
        </p>

        <CashSummary />

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="text-gray-500 text-2xl font-semibold">
                {t("setting")}
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <CashSettings />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ToolCard>
    </div>
  );
}
