import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { CashCounterProvider } from "./store/provider";
import { CashCounterComponent } from "./components/cash-counter";
import { useLocale } from "next-intl";

export default function CashCounter() {
  const tool = toolsRegistry["cash-counter"];
  const locale = useLocale()
  return (
    <CashCounterProvider>
      <div>
        <SectionHeader title={tool.title[locale]} description={tool.description[locale]} />
        <CashCounterComponent />
      </div>
    </CashCounterProvider>
  );
}
