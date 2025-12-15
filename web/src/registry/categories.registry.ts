import {
  Calculator,
  ImageIcon,
  FileText,
  QrCode,
  Code,
  Text,
  Sigma,
  Calendar1,
} from "lucide-react";

import {
  ToolCategoryName,
  ToolCategoryDefinition,
} from "@/@types/tools/categories";

export const CATEGORY_REGISTRY: Record<
  ToolCategoryName,
  ToolCategoryDefinition
> = {
  developer: {
    name: "developer",
    title: { en: "Developer", id: "Developer" },
    Icon: Code,
  },
  financial: {
    name: "financial",
    title: { en: "Financial", id: "Keuangan" },
    Icon: Calculator,
  },
  image: {
    name: "image",
    title: { en: "Image", id: "Gambar" },
    Icon: ImageIcon,
  },
  pdf: {
    name: "pdf",
    title: { en: "PDF", id: "PDF" },
    Icon: FileText,
  },
  qr: {
    name: "qr",
    title: { en: "QR", id: "QR Code" },
    Icon: QrCode,
  },
  text: {
    name: "text",
    title: { en: "Text", id: "Teks" },
    Icon: Text,
  },
  math: {
    name: "math",
    title: { en: "Math", id: "Matematika" },
    Icon: Sigma,
  },
  utility: {
    name: "utility",
    title: { en: "Utility", id: "Utilitas" },
    Icon: Calendar1,
  },
};
