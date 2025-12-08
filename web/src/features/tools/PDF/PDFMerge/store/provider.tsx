"use client";

import React, { createContext, useContext, useState } from "react";
import { PdfMergeState, PdfMergeSettings } from "../types/interface";

const PdfMergeContext = createContext<PdfMergeState | null>(null);

export function PdfMergeProvider({ children }: { children: React.ReactNode }) {
  const [files, setFiles] = useState<File[]>([]);
  const [settings, setSettingsState] = useState<PdfMergeSettings>({
    outputName: "merged.pdf",
  });
  const [error, setError] = useState<string | null>(null);
  const [isMerging, setIsMerging] = useState(false);

  // -------------------------------
  // File Actions
  // -------------------------------
  const addFiles = (newFiles: File[]) => {
    const pdfOnly = newFiles.filter((f) => f.type === "application/pdf");
    if (pdfOnly.length === 0) return;

    setFiles((prev) => [...prev, ...pdfOnly]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const reorderFiles = (from: number, to: number) => {
    setFiles((prev) => {
      const updated = [...prev];
      const movedItem = updated.splice(from, 1)[0];
      updated.splice(to, 0, movedItem);
      return updated;
    });
  };

  const clear = () => {
    setFiles([]);
    setError(null);
  };

  // -------------------------------
  // Settings Action
  // -------------------------------
  const setSettings = (partial: Partial<PdfMergeSettings>) => {
    setSettingsState((prev) => ({ ...prev, ...partial }));
  };

  // -------------------------------
  // Final Value
  // -------------------------------
  const value: PdfMergeState = {
    files,
    settings,
    error,
    isMerging,
    addFiles,
    removeFile,
    reorderFiles,
    clear,
    setSettings,
    setError,
    setIsMerging,
  };

  return (
    <PdfMergeContext.Provider value={value}>
      {children}
    </PdfMergeContext.Provider>
  );
}

export function usePDFMerge() {
  const ctx = useContext(PdfMergeContext);
  if (!ctx) throw new Error("usePDFMerge must be used inside PdfMergeProvider");
  return ctx;
}
