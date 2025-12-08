"use client";

import { CloudDownload, UploadCloud } from "lucide-react";
import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface UploadPDFProps {
  onFilesSelected: (files: File[]) => void;
}

export function UploadPDF({ onFilesSelected }: UploadPDFProps) {
  const t = useTranslations("atoms.upload-pdf");
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

    const pdfFiles = files.filter((file) => file.type === "application/pdf");
    if (pdfFiles.length > 0) {
      onFilesSelected(pdfFiles);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files).filter(
      (f) => f.type === "application/pdf"
    );

    if (fileArray.length > 0) {
      onFilesSelected(fileArray);
    }

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

          <p className="mt-4">
            {isDragActive ? t("drop") : t("uploadOrDrop")}
          </p>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept="application/pdf"
        multiple
        onChange={handleFileChange}
      />
    </div>
  );
}
