"use client";

import { createContext, useContext, useState } from "react";
import { PdfSplitState, PdfSplitSetting } from "../types/interface";

const defaultSetting: PdfSplitSetting = {
  outputName: "split-result",
};

const PdfSplitContext = createContext<PdfSplitState | null>(null);

export function PdfSplitProvider({ children }: { children: React.ReactNode }) {
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const [setting, setSetting] = useState<PdfSplitSetting>(defaultSetting);

  const resetSetting = () => setSetting(defaultSetting);

  return (
    <PdfSplitContext.Provider
      value={{
        file,
        totalPages,
        setting,
        setFile,
        setTotalPages,
        setSetting,
        resetSetting,
      }}
    >
      {children}
    </PdfSplitContext.Provider>
  );
}

export function usePdfSplit() {
  const ctx = useContext(PdfSplitContext);
  if (!ctx) throw new Error("usePdfSplit must be used inside provider");
  return ctx;
}
