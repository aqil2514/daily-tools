"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  invoiceBasicSchema,
  invoiceBasicSchemaDefault,
  InvoiceBasicSchemaType,
} from "../schema";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { IdentityForm } from "./IdentityForm";
import { HeaderForm } from "./HeaderForm";
import { ItemListForm } from "./ItemListForm";
import { NotesForm } from "./NotesForm";
import { TermsForm } from "./TermsForm";
import { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePDFGenerator } from "@/features/tools/tool-name/PDF/PDFGenerator/provider";

export default function InvoiceBasicForm() {
  const { setPdfData } = usePDFGenerator<InvoiceBasicSchemaType>();
  const form = useForm<InvoiceBasicSchemaType>({
    resolver: zodResolver(invoiceBasicSchema),
    defaultValues: invoiceBasicSchemaDefault,
  });

  useEffect(() => {
    setPdfData(invoiceBasicSchemaDefault);
  }, [setPdfData]);

  function onSubmit(values: InvoiceBasicSchemaType) {
    const requiredLength = 10;

    // copy array item agar tidak mutasi form state
    const items = [...values.items];

    // tambahkan dummy row kosong sampai 10
    while (items.length < requiredLength) {
      items.push({
        description: "",
        quantity: 0,
        price: 0,
      });
    }

    const fixedItems = items.slice(0, requiredLength);

    setPdfData({
      ...values,
      items: fixedItems,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs defaultValue="from" className="w-full">
          <TabsList className="grid grid-cols-6 w-full">
            <TabsTrigger value="header">Header</TabsTrigger>
            <TabsTrigger value="from">From</TabsTrigger>
            <TabsTrigger value="to">To</TabsTrigger>
            <TabsTrigger value="terms">Terms</TabsTrigger>
            <TabsTrigger value="items">Items</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>
          <ScrollArea className="h-80">
            {/* HEADER */}
            <TabsContent value="header" className="space-y-4 mt-4">
              <h2 className="text-lg font-semibold">Invoice Header</h2>
              <HeaderForm form={form} />
            </TabsContent>

            {/* FROM */}
            <TabsContent value="from" className="space-y-4 mt-4">
              <h2 className="text-lg font-semibold">From</h2>
              <IdentityForm prefix="from" form={form} />
            </TabsContent>

            {/* TO */}
            <TabsContent value="to" className="space-y-4 mt-4">
              <h2 className="text-lg font-semibold">To</h2>
              <IdentityForm prefix="to" form={form} />
            </TabsContent>

            {/* TERMS */}
            <TabsContent value="terms" className="space-y-4 mt-4">
              <h2 className="text-lg font-semibold">Terms</h2>
              <TermsForm form={form} />
            </TabsContent>

            {/* ITEMS */}
            <TabsContent value="items" className="space-y-4 mt-4">
              <h2 className="text-lg font-semibold">Invoice Items</h2>
              <ItemListForm form={form} />
            </TabsContent>

            {/* NOTES */}
            <TabsContent value="notes" className="space-y-4 mt-4">
              <h2 className="text-lg font-semibold">Notes</h2>
              <NotesForm form={form} />
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <Button type="submit" className="w-full mt-6">
          Submit Invoice
        </Button>
      </form>
    </Form>
  );
}
