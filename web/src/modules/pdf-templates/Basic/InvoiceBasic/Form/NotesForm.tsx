import { UseFormReturn } from "react-hook-form";
import { InvoiceBasicSchemaType } from "../schema";

import { Textarea } from "@/components/ui/textarea";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

interface NotesFormProps {
  form: UseFormReturn<InvoiceBasicSchemaType>;
}

export function NotesForm({ form }: NotesFormProps) {
  return (
    <FormField
      control={form.control}
      name="notes"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Notes</FormLabel>
          <FormControl>
            <Textarea placeholder="Notes..." {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
