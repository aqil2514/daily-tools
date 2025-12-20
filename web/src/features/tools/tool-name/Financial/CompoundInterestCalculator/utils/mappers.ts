import { parsePercent } from "@/utils/parser/parse-percent";
import {
  CompoundInterestInput,
  CompoundInterestInputForm,
} from "../type/input";

export function mapToCompoundInterest(
  raw: CompoundInterestInputForm
): CompoundInterestInput {
  return {
    ...raw,
    rate: parsePercent(raw.rate) ?? 0,
  };
}
