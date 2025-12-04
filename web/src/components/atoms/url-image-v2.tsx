"use client";

import { useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { isValidImageURL } from "@/utils/validation/isValidImageUrl";

interface UrlImageSourceProps {
  onSelectImages: (urls: string[]) => void;
}

export function UrlImageSource({ onSelectImages }: UrlImageSourceProps) {
  const [urls, setUrls] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const addHandler = async () => {
    const value = inputRef.current?.value.trim();
    if (!value) return;

    const isValidImage = await isValidImageURL(value);
    
    if(!isValidImage) return alert("URL Gambar Tidak Valid")

    setUrls((prev) => [...prev, value]);

    if (inputRef.current) inputRef.current.value = "";
  };

  const deleteHandler = (index: number) => {
    setUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const resetHandler = () => {
    setUrls([]);
  };

  const sendToParent = () => {
    if (urls.length === 0) return;
    onSelectImages(urls);
  };

  return (
    <div className="space-y-4">
      {/* Input Section */}
      <div className="space-y-2">
        <Label htmlFor="image-url">Input Image URL</Label>

        <div className="flex gap-3">
          <Input
            ref={inputRef}
            id="image-url"
            placeholder="https://example.com/image.jpg"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addHandler();
              }
            }}
          />
          <Button variant="outline" onClick={addHandler}>
            Add Url
          </Button>
        </div>
      </div>

      {/* Preview List */}
      {urls.length > 0 && (
        <div className="space-y-2">
          <Label className="text-sm font-medium">Preview URL Images:</Label>

          <div className="flex gap-4 flex-wrap">
            {urls.map((url, i) => (
              <div
                key={i}
                className="relative w-32 h-32 rounded-lg border overflow-hidden bg-muted"
              >
                <img
                  src={url}
                  alt="image url preview"
                  className="w-full h-full object-cover"
                />

                {/* Delete Button */}
                <button
                  onClick={() => deleteHandler(i)}
                  className="
                    absolute top-1 right-1 bg-black/60 hover:bg-black/80
                    p-1 rounded-md text-white transition
                  "
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>

          {/* Reset Button */}
          <Button
            variant="destructive"
            size="sm"
            className="mt-2"
            onClick={resetHandler}
          >
            Reset Semua URL
          </Button>
        </div>
      )}

      {/* Final Submit */}
      <Button onClick={sendToParent} disabled={urls.length === 0}>
        Tambahkan Gambar
      </Button>
    </div>
  );
}
