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
  "qr-generator":"QR Generator",
  "pdf-generator":"PDF Generator"
};

const componentMapper: Record<ToolName, React.ComponentType> = {
  "image-converter": dynamic(() => import("@/features/tools/Images/ImageConverter")),
  "image-resizer": dynamic(() => import("@/features/tools/Images/ImageResizer")),
  "image-compressor": dynamic(() => import("@/features/tools/Images/ImageCompressor")),
  "image-cropper": dynamic(() => import("@/features/tools/Images/ImageCropper")),
  "image-rotate": dynamic(() => import("@/features/tools/Images/ImageRotate")),
  "image-to-pdf": dynamic(() => import("@/features/tools/Images/ImageToPDF")),
  "pdf-merge": dynamic(() => import("@/features/tools/PDF/PDFMerge")),
  "pdf-split": dynamic(() => import("@/features/tools/PDF/PDFSplit")),
  "pdf-compress": dynamic(() => import("@/features/tools/PDF/PDFCompress")),
  "pdf-generator": dynamic(() => import("@/features/tools/PDF/PDFGenerator")),
  "qr-generator": dynamic(() => import("@/features/tools/QR/QRGenerator")),
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
