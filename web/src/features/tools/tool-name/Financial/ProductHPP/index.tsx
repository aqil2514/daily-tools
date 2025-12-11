"use client";

import { useLocale } from "next-intl";
import { ProductHPPProvider } from "./store/provider";
import { toolsRegistry } from "@/features/tools/registry";
import { SectionHeader } from "@/components/molecules/section-header";
import { ProductHpp } from "./components/product-hpp";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["product-hpp-calculator"];
  return (
    <ProductHPPProvider>
      <div>
        <SectionHeader
          title={tool.title[locale]}
          description={tool.description[locale]}
        />
        <ProductHpp />
      </div>
    </ProductHPPProvider>
  );
}
