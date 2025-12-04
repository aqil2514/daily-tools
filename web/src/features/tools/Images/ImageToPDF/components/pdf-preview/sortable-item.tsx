import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { X } from "lucide-react";

export function SortableItem({
  id,
  url,
  index,
  onDelete,
}: {
  id: string;
  url: string;
  index: number;
  onDelete: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="
        group relative rounded-xl border bg-white shadow-sm
        hover:shadow-md transition overflow-hidden cursor-move
      "
    >
      {/* Thumbnail */}
      <img src={url} alt={`preview-${index}`} className="w-full h-40 object-cover bg-muted" />

      {/* Urutan */}
      <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md">
        {index + 1}
      </div>

      {/* Delete button */}
      <button
        onClick={onDelete}
        className="
        absolute top-2 right-2 opacity-0 
        group-hover:opacity-100 transition 
        bg-black/50 hover:bg-black/70 text-white p-1 rounded-md
      "
      >
        <X size={16} />
      </button>
    </div>
  );
}