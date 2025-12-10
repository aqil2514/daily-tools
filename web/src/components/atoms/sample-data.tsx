"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dispatch, SetStateAction } from "react";

interface Props<T extends Record<string, string>> {
  setText: Dispatch<SetStateAction<string>>;
  sampleData: T;
}

export function SampleDataComponent<T extends Record<string, string>>({
  setText,
  sampleData,
}: Props<T>) {
  const sampleKeys = Object.keys(sampleData);

  return (
    <div className="w-full">
      {/* ===== MOBILE VERSION — ACCORDION ===== */}
      <div className="block md:hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="sample-accordion">
            <AccordionTrigger>Sample Data</AccordionTrigger>

            <AccordionContent>
              <div className="grid grid-cols-2 gap-4">
                {sampleKeys.map((sample, i) => (
                  <Button
                    variant="outline"
                    key={sample}
                    onClick={() => setText(sampleData[sample])}
                    className="w-full justify-start"
                  >
                    Sample {i + 1}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* ===== DESKTOP VERSION — HORIZONTAL SCROLL ===== */}
      <div className="hidden md:block">
        <ScrollArea>
          <div className="flex gap-4 p-4 items-center">
            {sampleKeys.map((sample, i) => (
              <Button
                variant="outline"
                key={sample}
                onClick={() => setText(sampleData[sample])}
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
