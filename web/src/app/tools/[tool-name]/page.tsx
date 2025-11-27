import { ToolName } from "@/@types/Misc";
import { Metadata } from "next";
import dynamic from "next/dynamic";

interface Props {
  params: Promise<{ "tool-name": ToolName }>;
}

const titleMapper: Record<ToolName, string> = {
  "image-converter": "Image Converter",
  "image-resizer":"Image Resizer",
  "image-compressor":"Image Compressor",
  "image-cropper":"Image Cropper",
  "image-rotate":"Image Rotate",
  "image-to-pdf":"Image To PDF",
  "pdf-merge":"PDF Merge",
  "pdf-split":"PDF Split",
  "pdf-compress":"PDF Compress"
};

const componentMapper: Record<ToolName, React.ComponentType> = {
  "image-converter": dynamic(() => import("@/featured/tools/ImageConverter")),
  "image-resizer": dynamic(() => import("@/featured/tools/ImageResizer")),
  "image-compressor": dynamic(() => import("@/featured/tools/ImageCompressor")),
  "image-cropper": dynamic(() => import("@/featured/tools/ImageCropper")),
  "image-rotate": dynamic(() => import("@/featured/tools/ImageRotate")),
  "image-to-pdf": dynamic(() => import("@/featured/tools/ImageToPDF")),
  "pdf-merge": dynamic(() => import("@/featured/tools/PDFMerge")),
  "pdf-split": dynamic(() => import("@/featured/tools/PDFSplit")),
  "pdf-compress": dynamic(() => import("@/featured/tools/PDFCompress")),
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const toolName = (await params)["tool-name"];

  if (!(toolName in titleMapper)) {
    return {
      title: "Tools not found",
    };
  }

  return {
    title: titleMapper[toolName],
  };
}

export default async function ConvertCategoryPage({ params }: Props) {
  const toolName = (await params)["tool-name"];

  if (!(toolName in componentMapper)) {
    return <div>Tools not found</div>;
  }
  
  const ToolsComponent = componentMapper[toolName];

  return <ToolsComponent />;
}
