"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { usePDFMerge } from "../store/provider";
import { SubHeading } from "@/components/atoms/text/subHeading";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { SortableItem } from "./sortable-item";
import { Plus } from "lucide-react";
import { useRef } from "react";

export function PDFPreview() {
  const t = useTranslations("tools-pdf.pdf-merge");

  const { files, reorderFiles, addFiles, clear } = usePDFMerge();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = Number(active.id);
    const newIndex = Number(over.id);

    reorderFiles(oldIndex, newIndex);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const pdfFiles = Array.from(e.target.files).filter(
      (f) => f.type === "application/pdf"
    );

    if (pdfFiles.length > 0) addFiles(pdfFiles);

    e.target.value = "";
  };

  return (
    <ToolCard>
      <div className="flex items-center justify-between">
        <SubHeading>{t("title")}</SubHeading>

        <div className="flex gap-4">
          <Button variant={"destructive"} onClick={clear}>Reset</Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
          >
            <Plus className="mr-2 h-4 w-4" /> {t("addFile")}
          </Button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="application/pdf"
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>

      <Separator className="my-4" />

      {files.length === 0 ? (
        <p className="text-muted-foreground text-sm">{t("empty")}</p>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={files.map((_, i) => String(i))}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-3">
              {files.map((file, index) => (
                <SortableItem
                  key={index}
                  id={String(index)}
                  index={index}
                  file={file}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </ToolCard>
  );
}
