import { UseFormReturn, useFieldArray } from "react-hook-form";
import { InvoiceBasicSchemaType } from "../schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Trash } from "lucide-react";

interface ItemListFormProps {
  form: UseFormReturn<InvoiceBasicSchemaType>;
}

export function ItemListForm({ form }: ItemListFormProps) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  return (
    <div className="space-y-4">
      {fields.map((item, index) => (
        <div
          key={item.id}
          className="border p-4 rounded-md grid grid-cols-3 gap-4 items-center"
        >
          <FormField
            control={form.control}
            name={`items.${index}.description`}
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Description" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={`items.${index}.quantity`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Qty</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={`items.${index}.price`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button onClick={() => remove(index)} variant="destructive" size={"icon"}>
            <Trash />
          </Button>
        </div>
      ))}

      <Button
        onClick={() => append({ description: "", quantity: 1, price: 0 })}
        type="button"
      >
        Add Item
      </Button>
    </div>
  );
}
