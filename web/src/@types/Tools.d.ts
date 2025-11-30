export type ToolName =
  | "image-converter"
  | "image-resizer"
  | "image-compressor"
  | "image-cropper"
  | "image-rotate"
  | "image-to-pdf"
  | "pdf-merge"
  | "pdf-split"
  | "pdf-compress"
  | "pdf-generator"
  | "qr-generator";


export interface ToolsListItemType {
  title: string;
  href: `/tools/${ToolName}`;
  description: string;
}