import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { UUIDGenerator } from "./components/uuid-generator";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["uuid-generator"];
  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />
      <UUIDGenerator />
    </div>
  );
}
