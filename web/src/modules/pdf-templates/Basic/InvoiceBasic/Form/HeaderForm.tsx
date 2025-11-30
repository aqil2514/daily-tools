import { UseFormReturn } from "react-hook-form";
import { InvoiceBasicSchemaType } from "../schema";

import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

interface HeaderFormProps {
  form: UseFormReturn<InvoiceBasicSchemaType>;
}

export function HeaderForm({ form }: HeaderFormProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="header.date"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="header.documentNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Invoice Number</FormLabel>
            <FormControl>
              <Input placeholder="INV-0001" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
