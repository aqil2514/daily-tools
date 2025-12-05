import { SectionHeader } from "@/components/molecules/section-header";
import { useLocale } from "next-intl";
import { toolsRegistry } from "../../registry";
import { COGSMarginComponent } from "./components/cogs-margin";
import { CogsMarginProvider } from "./store/provider";

export default function COGSMargin() {
  const locale = useLocale();
  const tool = toolsRegistry["cogs-margin-tool"];
  return (
    <CogsMarginProvider>
      <div>
        <SectionHeader
          title={tool.title[locale]}
          description={tool.description[locale]}
        />
        <COGSMarginComponent />
      </div>
    </CogsMarginProvider>
  );
}
