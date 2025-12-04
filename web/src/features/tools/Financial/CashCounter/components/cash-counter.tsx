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

export function CashCounterComponent() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ToolCard>
        <p className="text-gray-500 text-2xl font-semibold">Cash Table</p>

        <CashTable />
      </ToolCard>

      <ToolCard>
        <p className="text-gray-500 text-2xl font-semibold">Summary</p>

        <CashSummary />

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="text-gray-500 text-2xl font-semibold">Setting</p>
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
