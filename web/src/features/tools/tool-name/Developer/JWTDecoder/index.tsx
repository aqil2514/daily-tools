import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { JWTDecoder } from "./components/jwt-decoder";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["jwt-decoder"];
  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />
      <JWTDecoder />
    </div>
  );
}
