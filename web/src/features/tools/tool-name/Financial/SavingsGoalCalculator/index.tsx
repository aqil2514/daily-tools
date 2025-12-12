import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { SavingsGoalCalculator } from "./components/savings-goal-calculator";
import { RelatedToolsSection } from "@/components/organisms/related-tools-section";
import { FAQSection } from "@/components/atoms/faq-section";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["savings-goal-calculator"];

  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />

      <SavingsGoalCalculator />

      {tool.seo && tool.seo.jsonLd.faq && (
        <FAQSection items={tool.seo.jsonLd.faq[locale]} />
      )}

      <RelatedToolsSection toolsName={tool.relatedTools} />
    </div>
  );
}
