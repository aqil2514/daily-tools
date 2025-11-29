import { ToolName } from "@/@types/Tools";
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
  "pdf-compress":"PDF Compress",
  "qr-generator":"QR Generator"
};

const componentMapper: Record<ToolName, React.ComponentType> = {
  "image-converter": dynamic(() => import("@/featured/tools/Images/ImageConverter")),
  "image-resizer": dynamic(() => import("@/featured/tools/Images/ImageResizer")),
  "image-compressor": dynamic(() => import("@/featured/tools/Images/ImageCompressor")),
  "image-cropper": dynamic(() => import("@/featured/tools/Images/ImageCropper")),
  "image-rotate": dynamic(() => import("@/featured/tools/Images/ImageRotate")),
  "image-to-pdf": dynamic(() => import("@/featured/tools/Images/ImageToPDF")),
  "pdf-merge": dynamic(() => import("@/featured/tools/PDF/PDFMerge")),
  "pdf-split": dynamic(() => import("@/featured/tools/PDF/PDFSplit")),
  "pdf-compress": dynamic(() => import("@/featured/tools/PDF/PDFCompress")),
  "qr-generator": dynamic(() => import("@/featured/tools/QR/QRGenerator")),
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
