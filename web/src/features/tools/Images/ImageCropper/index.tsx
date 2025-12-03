import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "../../registry";
import { ImageCropperComp } from "./components/image-cropper";
import { ImageCropperProvider } from "./provider";

export default function ImageCropper() {
  const tool = toolsRegistry["image-cropper"];
  return (
    <ImageCropperProvider>

    <div>
      <SectionHeader title={tool.title} description={tool.description} />
      <ImageCropperComp />
    </div>
    </ImageCropperProvider>
  );
}
