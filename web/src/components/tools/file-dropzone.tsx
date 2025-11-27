"use client";

import { useRef } from "react";

interface FileDropzoneProps {
  accept?: string;
  label?: string;
  onSelect: (file: File) => void;
}

export function FileDropzone({ accept, label, onSelect }: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) onSelect(f);
  }

  return (
    <div
      className="border border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-accent/50 transition"
      onClick={() => inputRef.current?.click()}
    >
      <p className="text-muted-foreground">
        {label ?? "Klik untuk upload file"}
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
