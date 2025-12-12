import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { LoanCalculator } from "./components/loan-calculator";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["loan-calculator"];
  return (
    <div>
      <SectionHeader
        title={tool.seo!.metadata.title[locale]}
        description={tool.seo!.metadata.description[locale]}
      />
      <LoanCalculator />
    </div>
  );
}
