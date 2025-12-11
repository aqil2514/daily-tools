import CurrencyInput from "react-currency-input-field";

export function CurrencyField({ value, onValueChange, id, placeholder }: {
  value: number | undefined;
  onValueChange: (value: number) => void;
  id?: string;
  placeholder?: string;
}) {
  return (
    <CurrencyInput
      id={id}
      placeholder={placeholder}
      intlConfig={{ locale: "id-ID", currency: "IDR" }}
      value={value}
      decimalsLimit={2}
      onValueChange={(val) => onValueChange(Number(val) || 0)}
      className="
        flex h-10 w-full rounded-md border border-input bg-background px-3 py-2
        text-sm ring-offset-background file:border-0 file:bg-transparent 
        file:text-sm file:font-medium placeholder:text-muted-foreground 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
        focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
      "
    />
  );
}
