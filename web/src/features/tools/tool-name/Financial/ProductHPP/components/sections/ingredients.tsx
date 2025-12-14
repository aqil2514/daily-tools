"use client";

import { useState } from "react";
import { useProductHPP } from "../../store/provider";
import { IngredientItem } from "../../types/input";
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
import { CurrencyField } from "@/components/molecules/input/currency-field";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { useLocale } from "next-intl";
import { ingredientsI18n } from "../../i18n/sections/ingredients";

export function IngredientsSection() {
  const locale = useLocale();
  const t = ingredientsI18n[locale];

  const { ingredients, addIngredient, updateIngredient, removeIngredient } =
    useProductHPP();

  const [error, setError] = useState("");

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<IngredientItem | null>(null);

  const [form, setForm] = useState({
    name: "",
    purchasePrice: 0,
    purchaseQuantity: 1,
    usage: 1,
    unit: "gram",
  });

  const resetForm = () => {
    setForm({
      name: "",
      purchasePrice: 0,
      purchaseQuantity: 1,
      usage: 1,
      unit: "gram",
    });
    setEditing(null);
    setError("");
  };

  const handleSave = () => {
    if (editing) {
      updateIngredient(editing.id, form);
    } else {
      addIngredient({
        id: nanoid(),
        ...form,
      });
    }
    resetForm();
    setOpen(false);
  };

  const startEdit = (item: IngredientItem) => {
    setEditing(item);
    setForm({
      name: item.name,
      purchasePrice: item.purchasePrice,
      purchaseQuantity: item.purchaseQuantity,
      usage: item.usage,
      unit: item.unit || "gram",
    });
    setOpen(true);
  };

  const calcCost = (item: IngredientItem) => {
    if (!item.purchaseQuantity || item.purchaseQuantity === 0) return 0;
    return (item.purchasePrice / item.purchaseQuantity) * item.usage;
  };

  const totalIngredientCost = ingredients.reduce(
    (acc, item) => acc + calcCost(item),
    0
  );

  return (
    <>
      {/* INGREDIENT CARD */}
      <Card className="border rounded-xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{t.cardTitle}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {t.cardDescription}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 overflow-visible!">
          {/* BUTTON ADD */}
          <div>
            <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
              <Plus size={16} className="mr-1" /> {t.addButton}
            </Button>
          </div>

          {/* LIST TABLE */}
          <div className="w-full overflow-x-auto">
            <table className="min-w-[750px] w-full text-sm">
              <thead className="bg-muted/40">
                <tr>
                  <th className="p-2 text-left whitespace-nowrap">
                    {t.table.name}
                  </th>
                  <th className="p-2 text-left whitespace-nowrap">
                    {t.table.purchasePrice}
                  </th>
                  <th className="p-2 text-left whitespace-nowrap">
                    {t.table.purchaseQty}
                  </th>
                  <th className="p-2 text-left whitespace-nowrap">
                    {t.table.usage}
                  </th>
                  <th className="p-2 text-left whitespace-nowrap">
                    {t.table.cost}
                  </th>
                  <th className="p-2 text-left whitespace-nowrap">
                    {t.table.actions}
                  </th>
                </tr>
              </thead>

              <tbody>
                {ingredients.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-4 text-muted-foreground"
                    >
                      {t.empty}
                    </td>
                  </tr>
                )}

                {ingredients.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">
                      Rp {item.purchasePrice.toLocaleString()}
                    </td>
                    <td className="p-2">
                      {item.purchaseQuantity} {item.unit}
                    </td>
                    <td className="p-2">
                      {item.usage} {item.unit}
                    </td>
                    <td className="p-2 font-medium">
                      Rp {calcCost(item).toLocaleString()}
                    </td>
                    <td className="p-2 flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => startEdit(item)}
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeIngredient(item.id)}
                      >
                        <X size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TOTAL */}
          <div className="text-right text-sm font-medium">
            {t.totalLabel}
            <span className="font-semibold text-foreground">
              {" "}
              Rp {totalIngredientCost.toLocaleString()}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* DIALOG FORM */}
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
            <div className="space-y-1">
              <Label>{t.fields.nameLabel}</Label>
              <Input
                placeholder={t.fields.namePlaceholder}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* UNIT SELECT */}
            <div className="space-y-1">
              <Label>{t.fields.unitLabel}</Label>
              <Select
                value={form.unit}
                onValueChange={(val) => setForm({ ...form, unit: val })}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t.fields.unitPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gram">gram</SelectItem>
                  <SelectItem value="ml">ml</SelectItem>
                  <SelectItem value="pcs">pcs</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* PURCHASE PRICE */}
            <div className="space-y-1">
              <Label>{t.fields.priceLabel}</Label>
              <CurrencyField
                value={form.purchasePrice}
                onValueChange={(v) => setForm({ ...form, purchasePrice: v })}
                placeholder="0"
              />
            </div>

            {/* PURCHASE QTY */}
            <div className="space-y-1">
              <Label>
                {t.fields.purchaseQtyLabel} ({form.unit})
              </Label>
              <Input
                type="number"
                min={1}
                value={form.purchaseQuantity}
                onChange={(e) =>
                  setForm({ ...form, purchaseQuantity: e.target.valueAsNumber })
                }
              />
            </div>

            {/* USAGE FIELD */}
            <div className="space-y-1">
              <Label>
                {t.fields.usageLabel} ({form.unit})
              </Label>
              <Input
                type="number"
                min={1}
                value={form.usage}
                onChange={(e) => {
                  const value = e.target.valueAsNumber;

                  if (value > form.purchaseQuantity) {
                    setError(
                      t.fields.errorUsageExceeded(
                        form.purchaseQuantity,
                        form.unit
                      )
                    );
                    return;
                  }

                  setError("");
                  setForm({ ...form, usage: value });
                }}
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
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
