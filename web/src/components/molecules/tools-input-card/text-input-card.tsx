"use client";

import { ChangeEvent, ReactNode } from "react";
import { Upload, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useLocale } from "next-intl";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { Button } from "@/components/ui/button";

export type FileAcceptTypeList =
  | ".csv"
  | ".json"
  | ".txt"
  | ".sql"
  | ".xml"
  | ".yaml"
  | ".yml"
  | "text/plain"
  | "text/csv"
  | "application/json"
  | "application/xml"
  | "application/sql"
  | "application/x-yaml";

interface TextInputCardProps {
  title: string;
  value: string;
  onChange: (value: string) => void;

  accept?: FileAcceptTypeList[];
  placeholder?: string;

  children?: ReactNode;
}

export function TextInputCard({
  title,
  value,
  onChange,
  accept = [".csv", ".json", ".txt"],
  placeholder,
  children,
}: TextInputCardProps) {
  const locale = useLocale();
  const isID = locale === "id";

  const texts = {
    upload: isID ? "Unggah" : "Upload",
    clear: isID ? "Hapus" : "Clear",
    clearedTitle: isID ? "Input dibersihkan" : "Input cleared",
    clearedDesc: isID
      ? "Semua teks telah dihapus."
      : "All input text has been cleared.",
    successTitle: isID ? "Berhasil diunggah" : "File uploaded",
    successDesc: (name: string) =>
      isID ? `${name} berhasil dimuat` : `${name} loaded successfully`,
    errorTitle: isID ? "Gagal membaca file" : "Failed to read file",
    errorDesc: isID
      ? "Silakan coba unggah ulang file."
      : "Please try uploading the file again.",
    defaultPlaceholder: isID
      ? "Tempel atau unggah data Anda di sini"
      : "Paste or upload your data here",
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const text = String(reader.result ?? "");
      onChange(text);

      toast.success(texts.successTitle, {
        description: texts.successDesc(file.name),
      });
    };

    reader.onerror = () => {
      toast.error(texts.errorTitle, {
        description: texts.errorDesc,
      });
    };

    reader.readAsText(file);
    e.target.value = "";
  };

  const handleClear = () => {
    if (!value) return;

    onChange("");
    toast.info(texts.clearedTitle, {
      description: texts.clearedDesc,
    });
  };

  return (
    <ToolCard>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">{title}</h2>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={handleClear}
            disabled={!value}
          >
            <Trash2 size={16} />
            {texts.clear}
          </Button>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <label>
              <Upload size={16} />
              {texts.upload}
              <input
                type="file"
                accept={accept.join(",")}
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </Button>
        </div>
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? texts.defaultPlaceholder}
        className="
          w-full
          h-[300px]
          p-3
          rounded-md
          border
          bg-background
          text-sm
          font-mono
          resize-none
          focus-visible:ring-1
          focus-visible:ring-ring
        "
      />

      {/* 👇 SLOT TAMBAHAN */}
      {children && <div className="mt-3 flex flex-wrap gap-3">{children}</div>}
    </ToolCard>
  );
}
