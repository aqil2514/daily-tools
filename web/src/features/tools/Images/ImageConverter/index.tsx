import { SectionHeader } from "@/components/molecules/section-header";
import { ImageConverter } from "./components/image-converter";
import { ImageConverterProvider } from "./provider";

export default function ImageConverterTemplate() {
  return (
    <ImageConverterProvider>
      <div className="mx-auto p-4">
        <SectionHeader
          title="Image Converter"
          description="Convert your Image"
        />
        <ImageConverter />
      </div>
    </ImageConverterProvider>
  );
}
