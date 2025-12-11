"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useProductHPP } from "../store/provider";
import { SAMPLE_HPP_DATA } from "../data/sample-data";
import { ProductHPPState } from "../types/input";

export function SampleHppData() {
  const { setAllState } = useProductHPP();

  const applySample = (sample: ProductHPPState) => {
  setAllState(sample);
};

  return (
    <div className="w-full">
      {/* MOBILE */}
      <div className="block md:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="sample">
            <AccordionTrigger>Sample Data</AccordionTrigger>

            <AccordionContent>
              <div className="grid grid-cols-2 gap-4">
                {SAMPLE_HPP_DATA.map((sample, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    className="w-full"
                    onClick={() => applySample(sample.data)}
                  >
                    {sample.label}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <ScrollArea>
          <div className="flex gap-4 py-3">
            {SAMPLE_HPP_DATA.map((sample, i) => (
              <Button
                key={i}
                variant="outline"
                onClick={() => applySample(sample.data)}
              >
                {sample.label}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
