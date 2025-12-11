"use client";

import { useState } from "react";
import { useProductHPP } from "../../store/provider";
import { PackagingItem } from "../../types/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X, Plus, Pencil } from "lucide-react";
import { nanoid } from "nanoid";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CurrencyField } from "@/components/atoms/currency-field";

import { useLocale } from "next-intl";
import { packagingI18n } from "../../i18n/sections/packaging";

export function PackagingSection() {
  const locale = useLocale();
  const t = packagingI18n[locale];

  const { packaging, addPackaging, updatePackaging, removePackaging } =
    useProductHPP();

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<PackagingItem | null>(null);

  const [form, setForm] = useState({
    name: "",
    unitPrice: 0,
    quantityPerProduct: 1,
  });

  const resetForm = () => {
    setForm({
      name: "",
      unitPrice: 0,
      quantityPerProduct: 1,
    });
    setEditing(null);
  };

  const handleSave = () => {
    if (editing) {
      updatePackaging(editing.id, form);
    } else {
      addPackaging({
        id: nanoid(),
        ...form,
      });
    }
    resetForm();
    setOpen(false);
  };

  const startEdit = (item: PackagingItem) => {
    setEditing(item);
    setForm({
      name: item.name,
      unitPrice: item.unitPrice,
      quantityPerProduct: item.quantityPerProduct,
    });
    setOpen(true);
  };

  const calcCost = (item: PackagingItem) =>
    item.unitPrice * item.quantityPerProduct;

  const totalPackagingCost = packaging.reduce(
    (acc, item) => acc + calcCost(item),
    0
  );

  return (
    <>
      <Card className="border rounded-xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{t.cardTitle}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {t.cardDescription}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Add button */}
          <div>
            <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
              <Plus size={16} className="mr-1" /> {t.addButton}
            </Button>
          </div>

          {/* Table */}
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/40">
                <tr>
                  <th className="p-2 text-left">{t.table.name}</th>
                  <th className="p-2 text-left">{t.table.unitPrice}</th>
                  <th className="p-2 text-left">{t.table.qtyPerProduct}</th>
                  <th className="p-2 text-left">{t.table.cost}</th>
                  <th className="p-2 text-left">{t.table.actions}</th>
                </tr>
              </thead>

              <tbody>
                {packaging.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center py-4 text-muted-foreground"
                    >
                      {t.empty}
                    </td>
                  </tr>
                )}

                {packaging.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">
                      Rp {item.unitPrice.toLocaleString()}
                    </td>
                    <td className="p-2">{item.quantityPerProduct}</td>
                    <td className="p-2 font-medium">
                      Rp {calcCost(item).toLocaleString()}
                    </td>
                    <td className="p-2 flex gap-2">
                      <Button variant="ghost" size="icon" onClick={() => startEdit(item)}>
                        <Pencil size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => removePackaging(item.id)}>
                        <X size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total */}
          <div className="text-right text-sm font-medium">
            {t.totalLabel}
            <span className="font-semibold"> Rp {totalPackagingCost.toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      {/* Dialog */}
      <Dialog
        open={open}
        onOpenChange={(val) => {
          setOpen(val);
          if (!val) resetForm();
        }}
      >
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {editing ? t.dialogEditTitle : t.dialogAddTitle}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            {/* NAME */}
            <div className="space-y-1 md:col-span-2">
              <Label>{t.fields.nameLabel}</Label>
              <Input
                placeholder={t.fields.namePlaceholder}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <p className="text-xs text-muted-foreground">
                {t.fields.nameDescription}
              </p>
            </div>

            {/* PRICE */}
            <div className="space-y-1">
              <Label>{t.fields.unitPriceLabel}</Label>
              <CurrencyField
                value={form.unitPrice}
                onValueChange={(v) => setForm({ ...form, unitPrice: v })}
                placeholder="0"
              />
              <p className="text-xs text-muted-foreground">
                {t.fields.unitPriceDescription}
              </p>
            </div>

            {/* QTY PER PRODUCT */}
            <div className="space-y-1">
              <Label>{t.fields.qtyLabel}</Label>
              <Input
                type="number"
                min={1}
                value={form.quantityPerProduct}
                onChange={(e) =>
                  setForm({
                    ...form,
                    quantityPerProduct: e.target.valueAsNumber,
                  })
                }
              />
              <p className="text-xs text-muted-foreground">
                {t.fields.qtyDescription}
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={handleSave} disabled={!form.name}>
              {t.fields.saveButton}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
