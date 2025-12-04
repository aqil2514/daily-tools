import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "../../registry";
import { CashCounterProvider } from "./store/provider";
import { CashCounterComponent } from "./components/cash-counter";

export default function CashCounter() {
  const tool = toolsRegistry["cash-counter"];
  return (
    <CashCounterProvider>
      <div>
        <SectionHeader title={tool.title} description={tool.description} />
        <CashCounterComponent />
      </div>
    </CashCounterProvider>
  );
}
