"use client";
import { ToolCard } from "@/components/tools/tool-card";
import { COGSForm } from "./cogs-form";
import { COGSItem } from "./cogs-item";
import { COGSDetailDialog } from "./cogs-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useCogsMargin } from "../store/provider";
import { useTranslations } from "next-intl";

export function COGSMarginComponent() {
  const { clearItem, items } = useCogsMargin();
  const t = useTranslations();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ToolCard>
          <div className="flex justify-between">
            <p className="text-lg font-medium mb-3">List Item</p>

            {items.length > 0 && (
              <Button variant={"outline"} onClick={clearItem}>
                Reset
              </Button>
            )}
          </div>

          <ScrollArea className="h-96">
            <COGSItem />
          </ScrollArea>
        </ToolCard>
        <ToolCard>
          <p className="text-lg font-medium mb-3">
            {t("tools-registry.financial.cogs-margin-tool.form.section-title")}
          </p>
          <COGSForm />
        </ToolCard>
      </div>

      <COGSDetailDialog />
    </>
  );
}
