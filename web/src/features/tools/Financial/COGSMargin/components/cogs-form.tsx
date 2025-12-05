"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import CurrencyInput from "react-currency-input-field";
import { cn } from "@/lib/utils";
import { useCogsMargin } from "../store/provider";
import { useTranslations } from "next-intl";

const cogsSchema = z.object({
  packAmount: z.number().min(1),
  qtyPerPack: z.number().min(1),
  pricePerPack: z.number().min(1),
  sellingPrice: z.number().min(1),
  itemName: z.string(),
  additionalInformation: z.string(),
});

type CogsSchemaType = z.infer<typeof cogsSchema>;

const defaultValues: CogsSchemaType = {
  additionalInformation: "",
  itemName: "",
  packAmount: 0,
  pricePerPack: 0,
  qtyPerPack: 0,
  sellingPrice: 0,
};

const currencyInputClassname = cn(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
);

export function COGSForm() {
  const t = useTranslations("tools-registry.financial.cogs-margin-tool");
  const { addItem } = useCogsMargin();
  const form = useForm<CogsSchemaType>({
    defaultValues,
    resolver: zodResolver(cogsSchema),
  });

  function onSubmit(values: CogsSchemaType) {
    addItem(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <ScrollArea className="h-96 px-7 my-4">
          <FormField
            control={form.control}
            name="itemName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">{t("form.fields.item-name")}</FormLabel>
                <FormControl>
                  <Input placeholder="Item Name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="packAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">{t("form.fields.pack-amount")}</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => {
                      const num = e.target.valueAsNumber;
                      field.onChange(isNaN(num) ? 0 : num);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="qtyPerPack"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">{t("form.fields.qty-per-pack")}</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => {
                      const num = e.target.valueAsNumber;
                      field.onChange(isNaN(num) ? 0 : num);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pricePerPack"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">{t("form.fields.price-per-pack")}</FormLabel>
                <FormControl>
                  <CurrencyInput
                    className={currencyInputClassname}
                    prefix="RP. "
                    value={field.value}
                    onValueChange={(val) => {
                      field.onChange(val ? Number(val) : 0);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sellingPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">{t('form.fields.selling-price')}</FormLabel>
                <FormControl>
                  <CurrencyInput
                    className={currencyInputClassname}
                    prefix="RP. "
                    value={field.value}
                    onValueChange={(val) => {
                      field.onChange(val ? Number(val) : 0);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="additionalInformation"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">{t("form.fields.additional-info")}</FormLabel>
                <FormControl>
                  <Textarea placeholder="Informasi Tambahan" {...field} />
                </FormControl>
                <FormDescription>
                  {t("form.fields.additional-info-desc")}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </ScrollArea>

        <Button type="submit">{t("form.submit")}</Button>
      </form>
    </Form>
  );
}
