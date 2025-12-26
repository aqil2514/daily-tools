import { useEffect } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export function useWarnUnsavedChanges<T extends FieldValues>(
  form: UseFormReturn<T>
) {
  const { isDirty, isSubmitting } = form.formState;

  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (!isDirty || isSubmitting) return;

      e.preventDefault();
      e.returnValue = ""; // REQUIRED
    };

    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [isDirty, isSubmitting]);
}
