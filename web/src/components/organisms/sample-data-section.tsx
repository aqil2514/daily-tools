"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale } from "next-intl";
import { toast } from "sonner";

interface Props<TData, T extends Record<string, TData>> {
  sampleData: T;
  onSelected: (sample: TData, key: keyof T) => void;
}

export function SampleDataComponent<TData, T extends Record<string, TData>>({
  sampleData,
  onSelected,
}: Props<TData, T>) {
  const locale = useLocale();
  const sampleKeys = Object.keys(sampleData) as (keyof T)[];

  const selectHandler = (key: keyof T) => {
    onSelected(sampleData[key], key);
    toast.success(locale === "en" ? "Sample data is loaded" : "Data sampel berhasil dimuat")
  };

  return (
    <div className="w-full">
      {/* ===== MOBILE — ACCORDION ===== */}
      <div className="block md:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="sample">
            <AccordionTrigger>Sample Data</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-4">
                {sampleKeys.map((key, i) => (
                  <Button
                    key={String(key)}
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => selectHandler(key)}
                  >
                    Sample {i + 1}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* ===== DESKTOP — HORIZONTAL ===== */}
      <div className="hidden md:block">
        <ScrollArea>
          <div className="flex gap-4 p-4 items-center">
            {sampleKeys.map((key, i) => (
              <Button
                key={String(key)}
                variant="outline"
                onClick={() => selectHandler(key)}
              >
                Sample {i + 1}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
