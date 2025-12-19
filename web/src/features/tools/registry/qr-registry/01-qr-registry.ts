import { ToolRegistryItem } from "@/@types/Tools";
import { QRToolName } from "@/@types/tools/qr";
import dynamic from "next/dynamic";
import qrGeneratorJsonLdSEO from "../../tool-name/QR/QRGenerator/seo/jsonld";
import qrGeneratorMetadataSEO from "../../tool-name/QR/QRGenerator/seo/metadata";

export const qrRegistry01: Record<QRToolName, ToolRegistryItem> = {
  "qr-generator": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/QR/QRGenerator")
    ),
    href: "/tools/qr-generator",
    category: "qr",

    title: {
      en: "QR Generator",
      id: "Generator QR",
    },

    seo: {
      jsonLd: qrGeneratorJsonLdSEO,
      metadata: qrGeneratorMetadataSEO,
    },
  },
};
