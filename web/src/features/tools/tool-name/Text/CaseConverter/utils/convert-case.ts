import { toCapitalize } from "./to-capitalize";
import { toInverseCase } from "./to-inverse-case";
import { toLower } from "./to-lower";
import { toSentenceCase } from "./to-sentence-case";
import { toTitleCase } from "./to-title-case";
import { toUpper } from "./to-upper";

export type CaseMode =
  | "upper"
  | "lower"
  | "title"
  | "sentence"
  | "capitalize"
  | "inverse";

export function convertCase(text: string, mode: CaseMode): string {
  switch (mode) {
    case "upper":
      return toUpper(text);
    case "lower":
      return toLower(text);
    case "title":
      return toTitleCase(text);
    case "sentence":
      return toSentenceCase(text);
    case "capitalize":
      return toCapitalize(text);
    case "inverse":
      return toInverseCase(text);
    default:
      return text;
  }
}
