import { SectionHeader } from "@/components/molecules/section-header";
import { ImageConverter } from "./components/image-converter";
import { ImageConverterProvider } from "./provider";
import { toolsRegistry } from "../../registry";
import { useLocale } from "next-intl";

export default function ImageConverterTemplate() {
  const tool = toolsRegistry["image-converter"];
  const locale = useLocale()
  return (
    <ImageConverterProvider>
      <div className="mx-auto p-4">
        <SectionHeader
          title={tool.title[locale]}
          description={tool.description[locale]}
        />
        <ImageConverter />
      </div>
    </ImageConverterProvider>
  );
}
