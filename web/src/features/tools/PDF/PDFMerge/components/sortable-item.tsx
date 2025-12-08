"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { Trash2, FileText, GripVertical } from "lucide-react";
import { usePDFMerge } from "../store/provider";

export function SortableItem({
  id,
  index,
  file,
}: {
  id: string;
  index: number;
  file: File;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const { removeFile } = usePDFMerge();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
        flex items-center gap-3 p-3 
        border rounded-lg bg-muted/30
        hover:bg-muted/50 cursor-grab
      "
      {...attributes}
      {...listeners}
    >
      {/* Drag Handle */}
      <GripVertical className="text-muted-foreground shrink-0" />

      {/* PDF Icon */}
      <FileText className="text-primary shrink-0" />

      {/* File Info */}
     <div className="flex-1 min-w-0">
  <p className="font-medium truncate">{file.name}</p>
  <p className="text-xs text-muted-foreground">
    {(file.size / 1024).toFixed(1)} KB
  </p>
</div>

      {/* Delete */}
      <Button
        variant="destructive"
        size="icon"
        onClick={() => removeFile(index)}
      >
        <Trash2 size={16} />
      </Button>
    </div>
  );
}
