import { useLocale } from "next-intl";
import { toolsRegistry } from "@/features/tools/registry";
import { SectionHeader } from "@/components/molecules/section-header";
import { FinancialSimulatorComponent } from "./components/financial-simulator";
import { FinancialSimulatorProvider } from "./store/provider";

export default function FinancialSimulator() {
  const locale = useLocale();
  const tool = toolsRegistry["financial-simulator"];
  return (
    <FinancialSimulatorProvider>
      <div>
        <SectionHeader
          title={tool.title[locale]}
          description={tool.description[locale]}
        />
        <FinancialSimulatorComponent />
      </div>
    </FinancialSimulatorProvider>
  );
}
