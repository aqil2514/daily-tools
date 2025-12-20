export type CompoundMode = "once" | "monthly-contribution";

export interface CompoundInterestInput {
  principal: number;
  rate: number;
  periods: number;
  frequency: number;
  mode: CompoundMode;
}

export interface CompoundInterestInputForm {
  principal: number;
  rate: string;
  periods: number;
  frequency: number;
  mode: CompoundMode;
}

export const defaultValues: CompoundInterestInputForm = {
  frequency: 1,
  periods: 1,
  principal: 1000000,
  rate: "10",
  mode: "once",
};
