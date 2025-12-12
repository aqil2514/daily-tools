import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { SavingsGoalCalculator } from "./components/savings-goal-calculator";

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
    </div>
  );
}
