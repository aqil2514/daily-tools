import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { InvoiceBasicSchemaType } from "../schema";

interface Props {
  prefix: "from" | "to";
  form: UseFormReturn<InvoiceBasicSchemaType>;
}

export function IdentityForm({ prefix, form }: Props) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name={`${prefix}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`${prefix}.email`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`${prefix}.address1`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address 1</FormLabel>
            <FormControl>
              <Input placeholder="Address line 1" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`${prefix}.address2`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address 2</FormLabel>
            <FormControl>
              <Input placeholder="Address line 2" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
