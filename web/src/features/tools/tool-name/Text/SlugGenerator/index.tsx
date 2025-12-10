import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { SlugGenerator } from "./components/slug-generator";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["slug-generator"];

  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />
      <SlugGenerator />
    </div>
  );
}
