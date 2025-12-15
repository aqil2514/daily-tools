export const IMAGE_TOOLS = [
  "image-converter",
  "image-resizer",
  "image-cropper",
  "image-rotate",
  "image-to-pdf",
] as const;

export type ImageToolName = typeof IMAGE_TOOLS[number];
