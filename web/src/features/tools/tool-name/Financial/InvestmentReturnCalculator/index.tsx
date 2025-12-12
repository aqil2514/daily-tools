import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { InvestmentReturnCalculator } from "./components/investment-return-calculator";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["investment-return-calculator"];
  return (
    <div>
      <SectionHeader
        title={tool.seo!.metadata.title[locale]}
        description={tool.seo!.metadata.description[locale]}
      />
      <InvestmentReturnCalculator />
    </div>
  );
}
