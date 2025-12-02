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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { onNumberChange } from "@/utils/onNumberChange";

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
      <FormField
        control={form.control}
        name="currency"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Currency</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD ($)</SelectItem>
                  <SelectItem value="IDR">IDR (Rp)</SelectItem>
                  <SelectItem value="EUR">EUR (€)</SelectItem>
                  <SelectItem value="JPY">JPY (¥)</SelectItem>
                  <SelectItem value="GBP">GBP (£)</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`tax`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tax</FormLabel>
            <FormControl>
              <Input
                type="number"
                {...field}
                onChange={onNumberChange(field.onChange)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

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
                  <Input type="number" {...field} onChange={onNumberChange(field.onChange)} />
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
                  <Input type="number" {...field} onChange={onNumberChange(field.onChange)} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {fields.length > 1 && (
            <Button
              onClick={() => remove(index)}
              variant="destructive"
              size={"icon"}
            >
              <Trash />
            </Button>
          )}
        </div>
      ))}

      {fields.length < 10 && (
        <Button
          onClick={() => append({ description: "", quantity: 1, price: 0 })}
          type="button"
        >
          Add Item
        </Button>
      )}
    </div>
  );
}
