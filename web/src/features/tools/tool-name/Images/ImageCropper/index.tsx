import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { ImageCropperComp } from "./components/image-cropper";
import { ImageCropperProvider } from "./provider";
import { useLocale } from "next-intl";

export default function ImageCropper() {
  const tool = toolsRegistry["image-cropper"];
  const locale = useLocale()
  return (
    <ImageCropperProvider>

    <div>
      <SectionHeader title={tool.title[locale]} description={tool.description[locale]} />
      <ImageCropperComp />
    </div>
    </ImageCropperProvider>
  );
}
