import { UseFormReturn } from "react-hook-form";
import { InvoiceBasicSchemaType } from "../schema";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

interface TermsFormProps {
  form: UseFormReturn<InvoiceBasicSchemaType>;
}

export function TermsForm({ form }: TermsFormProps) {
  return (
    <div className="space-y-4">
      {/* Terms text */}
      <FormField
        control={form.control}
        name="terms.terms"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Terms</FormLabel>
            <FormControl>
              <Input placeholder="Payment terms..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Due date */}
      <FormField
        control={form.control}
        name="terms.dueDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Due Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
