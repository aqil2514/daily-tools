"use client";

import React, { createContext, useContext, useState } from "react";
import { PDFTemplateKey } from "@/modules/pdf-templates/type";

export interface PDFGeneratorContextType<TPDFData = unknown> {
  templateKey: PDFTemplateKey;
  setTemplateKey: React.Dispatch<React.SetStateAction<PDFTemplateKey>>;

  pdfData: TPDFData | null;
  setPdfData: React.Dispatch<React.SetStateAction<TPDFData | null>>;
}

const PDFGeneratorContext = createContext<PDFGeneratorContextType | undefined>(
  undefined
);

interface PDFGeneratorProviderProps {
  children: React.ReactNode;
}

export function PDFGeneratorProvider({ children }: PDFGeneratorProviderProps) {
  const [templateKey, setTemplateKey] = useState<PDFTemplateKey>("none");
  const [pdfData, setPdfData] = useState<unknown | null>(null);

  return (
    <PDFGeneratorContext.Provider
      value={{
        templateKey,
        setTemplateKey,
        pdfData,
        setPdfData,
      }}
    >
      {children}
    </PDFGeneratorContext.Provider>
  );
}

// Custom Hook with generic type
export function usePDFGenerator<TPDFData = unknown>() {
  const context = useContext(
    PDFGeneratorContext as React.Context<PDFGeneratorContextType<TPDFData> | undefined>
  );

  if (!context) {
    throw new Error("usePDFGenerator must be used inside a PDFGeneratorProvider");
  }

  return context;
}
