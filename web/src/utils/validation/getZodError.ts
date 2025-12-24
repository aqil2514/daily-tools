import { FieldErrors, FieldValues } from "react-hook-form";

export function getZodError<T extends FieldValues>(
  errors: FieldErrors<T>,
  fields: keyof T
) {
  console.log(errors);
  console.log(fields);
}
