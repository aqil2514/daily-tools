export function onNumberChange(
  fieldOnChange: (value: number) => void
) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    if (value === "") {
      fieldOnChange(0);
      return;
    }

    const num = Number(value);

    if (isNaN(num)) {
      fieldOnChange(0);
      return;
    }

    fieldOnChange(num);
  };
}
