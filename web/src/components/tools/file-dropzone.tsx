"use client";

import { useRef, useState } from "react";

interface FileDropzoneProps {
  accept?: string;
  label?: string;
  onSelect: (file: File) => void;
}

export function FileDropzone({ accept, label, onSelect }: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) onSelect(f);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const f = e.dataTransfer.files?.[0];
    if (f) onSelect(f);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }

  return (
    <div
      className={[
        "border border-dashed rounded-lg p-6 text-center cursor-pointer transition",
        "hover:bg-accent/50",
        isDragging ? "bg-accent/25 border-primary" : "",
      ].join(" ")}
      onClick={() => inputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <p className="text-muted-foreground">
        {isDragging
          ? "Lepaskan untuk upload file"
          : label ?? "Klik atau drag file ke sini"}
        </p>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
}
