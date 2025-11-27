"use client";

import { useRef, useState } from "react";

interface FileDropzoneProps {
  accept?: string;
  label?: string;
  multiple?: boolean;
  onSelect: (files: File[]) => void;
}

export function FileDropzone({
  accept,
  label,
  multiple = false,
  onSelect,
}: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    onSelect(multiple ? Array.from(files) : [files[0]]);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (!files || files.length === 0) return;

    onSelect(multiple ? Array.from(files) : [files[0]]);
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
        multiple={multiple}
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
}
