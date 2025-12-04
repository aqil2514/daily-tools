import { X } from "lucide-react";
import { useImageToPDF } from "../../provider";
import { Button } from "@/components/ui/button";

import { AddImageDialog } from "./add-image-dialog";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  rectSwappingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import type { DragEndEvent } from "@dnd-kit/core";
import { SortableItem } from "./sortable-item";

export function PDFPreview() {
  const { images, deleteImage, resetImage, reorderImages } = useImageToPDF();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    if (active.id === over.id) return;

    const fromIndex = images.findIndex((i) => i === active.id);
    const toIndex = images.findIndex((i) => i === over.id);

    reorderImages(fromIndex, toIndex);
  };
  return (
    <div>
      <div className="flex gap-4 justify-between">
        <AddImageDialog />
        <Button variant={"destructive"} onClick={resetImage}>
          Reset
        </Button>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
      >
        <SortableContext items={images} strategy={rectSwappingStrategy}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2">
            {images.map((url, index) => (
              <SortableItem
                id={url}
                key={url}
                url={url}
                index={index}
                onDelete={() => deleteImage(url)}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
