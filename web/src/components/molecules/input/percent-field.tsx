import CurrencyInput from "react-currency-input-field";

interface Props {
  id: string;
  value: string;
  decimal?: number;
  onValueChange: (value: string, numberValue?: number) => void;
}

export function PercentField({ value, decimal = 2, id, onValueChange }: Props) {
  return (
    <CurrencyInput
      id={id}
      value={value}
      inputMode="decimal"
      suffix="%"
      allowDecimals
      decimalsLimit={decimal}
      decimalSeparator="."
      groupSeparator=""
      disableGroupSeparators
      onValueChange={(val, _, values) => {
        onValueChange(val ?? "", values?.float ?? undefined);
      }}
      className="
        flex h-10 w-full rounded-md border border-input bg-background px-3 py-2
        text-sm ring-offset-background placeholder:text-muted-foreground
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        focus-visible:ring-offset-2
      "
    />
  );
}
