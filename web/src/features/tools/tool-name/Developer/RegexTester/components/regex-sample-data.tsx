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

export interface RegexSampleItem {
  pattern: string;
  text: string;
}

interface Props<T extends Record<string, RegexSampleItem>> {
  sampleData: T;
  setPattern: Dispatch<SetStateAction<string>>;
  setText: Dispatch<SetStateAction<string>>;
}

export function RegexSampleDataComponent<
  T extends Record<string, RegexSampleItem>
>({
  sampleData,
  setPattern,
  setText,
}: Props<T>) {
  const sampleKeys = Object.keys(sampleData);

  const handleSelect = (key: string) => {
    const sample = sampleData[key];
    setPattern(sample.pattern);
    setText(sample.text);
  };

  return (
    <div className="w-full mb-3">
      {/* ===== MOBILE VERSION (Accordion) ===== */}
      <div className="block md:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="regex-sample">
            <AccordionTrigger>Sample Patterns</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {sampleKeys.map((key, index) => (
                  <Button
                    key={key}
                    variant="outline"
                    onClick={() => handleSelect(key)}
                    className="justify-start w-full"
                  >
                    Sample {index + 1}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* ===== DESKTOP VERSION (Horizontal Scroll) ===== */}
      <div className="hidden md:block">
        <ScrollArea>
          <div className="flex gap-3 p-3 items-center">
            {sampleKeys.map((key, index) => (
              <Button
                key={key}
                variant="outline"
                onClick={() => handleSelect(key)}
              >
                Sample {index + 1}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
