import { QRToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";

export const qrRegistry: Record<QRToolName, ToolRegistryItem> = {
  "qr-generator": {
    Component: dynamic(() => import("@/features/tools/QR/QRGenerator")),
    href: "/tools/qr-generator",
    title: "QR Generator",
    description: "Create your own QR code instantly.",
    category: "qr",
    keywords: [
      "qr generator",
      "generate qr code",
      "qr maker",
      "create qr",
      "qr code tool",
    ],
  },
};

export const qrToolNames = Object.keys(qrRegistry) as QRToolName[];