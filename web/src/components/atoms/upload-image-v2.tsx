import { CloudDownload, UploadCloud } from "lucide-react";
import React, { useRef, useState } from "react";

interface UploadImageProps {
  onFilesSelected: (files: File[]) => void;
}

export function UploadImage({ onFilesSelected }: UploadImageProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const clickHandler = () => inputRef.current?.click();

  const dragEnterHandler = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const dragLeaveHandler = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length === 0) return;

    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    if (imageFiles.length > 0) {
      onFilesSelected(imageFiles);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    onFilesSelected(Array.from(files));
    e.target.value = "";
  };
  return (
    <div
      className="w-full"
      onClick={clickHandler}
      onDragOver={dragEnterHandler}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={dropHandler}
    >
      <div className="group w-full h-96 border-4 rounded-2xl border-dashed border-gray-500 hover:border-gray-400 duration-200 cursor-pointer flex items-center">
        <div className="w-full flex flex-col items-center justify-center text-gray-500 group-hover:text-gray-400 duration-200">
          {isDragActive ? (
            <CloudDownload size={128} />
          ) : (
            <UploadCloud size={128} />
          )}
          {isDragActive ? (
            <p>Drop File di sini</p>
          ) : (
            <p>Tambah atau Drop File ke Sini</p>
          )}
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
    </div>
  );
}
