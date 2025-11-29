"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

export interface UploadImageRef {
  open: () => void;
  reset: () => void;
  getFile: () => File | null;
}

interface Props {
  label?: string;
  onUploadChange?: (file: File | null) => void;
}

export const UploadImage = forwardRef<UploadImageRef, Props>(
  ({ label = "Upload Image", onUploadChange }, ref) => {
    const [file, setFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Expose functions to parent
    useImperativeHandle(ref, () => ({
      open: () => {
        inputRef.current?.click();
      },
      reset: () => {
        setFile(null);
        if (inputRef.current) {
          inputRef.current.value = ""; // reset file input
        }
      },
      getFile: () => file,
    }));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0] ?? null;
      setFile(f);
      onUploadChange?.(f);
    };

    return (
      <div className="w-full relative">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          {label}
        </label>

        <div
          className={`
            border border-dashed rounded-xl p-6 
            flex flex-col items-center justify-center gap-3
            cursor-pointer transition
            ${
              file
                ? "border-green-500 bg-green-50"
                : "border-slate-300 hover:bg-slate-50"
            }
          `}
        >
          <UploadCloud
            className={`h-10 w-10 ${
              file ? "text-green-600" : "text-slate-500"
            }`}
          />

          {file ? (
            <p className="text-sm text-green-600 font-semibold">{file.name}</p>
          ) : (
            <>
              <p className="text-sm text-slate-600">
                <span className="font-medium">Click to upload</span> or drag &
                drop
              </p>
              <p className="text-xs text-slate-400">PNG, JPG, JPEG — max 5MB</p>
            </>
          )}

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
      </div>
    );
  }
);

UploadImage.displayName = "UploadImage";
