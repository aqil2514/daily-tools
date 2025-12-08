export type SplitMode = "range" | "page";
export type RangeMode = "custom-ranges" | "fixed-ranges";
export type PageMode = "extract-all" | "select-page";

export interface RangeItem {
  from: number;
  to: number;
}

export interface PdfSplitSetting {
  outputName: string;
}

export interface PdfSplitState {
  file: File | null;
  totalPages: number | null;
  setting: PdfSplitSetting;

  setFile: (file: File | null) => void;
  setTotalPages: (pages: number | null) => void;
  setSetting: (state: PdfSplitSetting) => void;

  resetSetting: () => void;
}
