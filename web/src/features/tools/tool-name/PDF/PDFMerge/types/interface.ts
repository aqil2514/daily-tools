export interface PdfMergeSettings {
  outputName: string;
}

export interface PdfMergeState {
  files: File[];
  settings: PdfMergeSettings;
  error: string | null;
  isMerging: boolean;

  addFiles: (files: File[]) => void;
  removeFile: (index: number) => void;
  reorderFiles: (from: number, to: number) => void;
  clear: () => void;

  setSettings: (partial: Partial<PdfMergeSettings>) => void;
  setError: (msg: string | null) => void;
  setIsMerging: (state: boolean) => void;
}
