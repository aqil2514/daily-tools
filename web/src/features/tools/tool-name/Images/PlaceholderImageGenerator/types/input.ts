export type PlaceholderTextPosition = "center" | "top" | "bottom" | "";
export type PlaceholderFormat = "png" | "jpg" | "svg" | "";

export interface PlaceholderInputState {
  width: string;
  height: string;

  backgroundColor: string;
  textColor: string;

  text: string;

  fontSize: string;
  textPosition: PlaceholderTextPosition;

  borderRadius: string;

  format: PlaceholderFormat;
}

export const DEFAULT_STATE: PlaceholderInputState = {
  width: "",
  height: "",

  backgroundColor: "#E5E7EB",
  textColor: "#111827",

  text: "",

  fontSize: "",
  textPosition: "",

  borderRadius: "",

  format: "",
};
