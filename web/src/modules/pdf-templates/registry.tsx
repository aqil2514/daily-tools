import dynamic from "next/dynamic";
import { PDFTemplateKey, PDFTemplateRegistry } from "./type";

export const pdfTemplateRegistry: Record<PDFTemplateKey, PDFTemplateRegistry> =
  {
    none: {
      description: "Pilih template",
      key: "none",
      name: "No Template",
      Form: dynamic(() => import("./NoneTemplate/Form")),
      Preview: dynamic(() => import("./NoneTemplate/Preview")),
    },
    "basic-invoice": {
      name: "Basic Invoice",
      description: "Basic Invoice PDF Generator",
      key: "basic-invoice",
      Form: dynamic(() => import("./Basic/InvoiceBasic/Form")),
      Preview: dynamic(() => import("./Basic/InvoiceBasic/Preview")),
    },
  };
