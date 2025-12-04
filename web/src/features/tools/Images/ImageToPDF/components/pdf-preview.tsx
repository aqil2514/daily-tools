import { X } from "lucide-react";
import { useImageToPDF } from "../provider";

export function PDFPreview() {
  const { images, deleteImage } = useImageToPDF();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2">
      {images.map((url, index) => (
        <div
          key={url}
          className="
            group relative rounded-xl border bg-white shadow-sm
            hover:shadow-md transition overflow-hidden
          "
        >
          {/* Thumbnail */}
          <img
            src={url}
            alt={`preview-${index}`}
            className="w-full h-40 object-cover bg-muted"
          />

          {/* Order index badge */}
          <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md">
            {index + 1}
          </div>

          {/* Delete button */}
          <button
            onClick={() => deleteImage(url)}
            className="
              absolute top-2 right-2 opacity-0 
              group-hover:opacity-100 transition 
              bg-black/50 hover:bg-black/70 text-white p-1 rounded-md
            "
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
