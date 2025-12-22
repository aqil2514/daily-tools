"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { BasicInfo } from "./sections/basic-info";
import { IngredientsSection } from "./sections/ingredients";
import { PackagingSection } from "./sections/packaging";
import { AdditionalCostSection } from "./sections/additional-cost";
import { OutputSummarySection } from "./output/output-summary";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SampleHppData } from "./sample-hpp-data";
import { ProductHPPProvider, useProductHPP } from "../store/provider";
import { Button } from "@/components/ui/button";

export function ProductHpp() {
  return (
    <ProductHPPProvider>
      <InnerTemplate />
    </ProductHPPProvider>
  );
}

const InnerTemplate = () => {
  const { resetAll } = useProductHPP();
  return (
    <ToolCard>
      <SampleHppData />

      <Tabs defaultValue="input" className="w-full">
        {/* TABS HEADER */}
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="input">Input</TabsTrigger>
          <TabsTrigger value="output">Output</TabsTrigger>
        </TabsList>

        {/* =========================
            TAB: INPUT
        ========================== */}
        <TabsContent value="input" className="space-y-6 pt-6">
          <Button onClick={resetAll} variant={"outline"}>
            Reset All
          </Button>
          <BasicInfo />
          <IngredientsSection />
          <PackagingSection />
          <AdditionalCostSection />
        </TabsContent>

        {/* =========================
            TAB: OUTPUT
        ========================== */}
        <TabsContent value="output" className="pt-6">
          <OutputSummarySection />
        </TabsContent>
      </Tabs>
    </ToolCard>
  );
};
