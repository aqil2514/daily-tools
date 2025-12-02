/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { UploadImage, UploadImageRef } from "@/components/atoms/upload-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQueryParams } from "@/hooks/useQueryParams";
import { convertToTransparentPNG } from "@/utils/convertToTransparentPNG";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function QRSettings() {
  const { get } = useQueryParams();

  const includeImage = get("include-image");

  return (
    <div className="space-y-4">
      <QRSetting />
      {includeImage && <QRImageSetting />}
    </div>
  );
}

const QRSetting = () => {
  const { get, set, removeMany, setMany } = useQueryParams();
  const paramSize = Number(get("size"));
  const paramFgColor = get("fg-color");
  const paramBgColor = get("bg-color");
  const paramLevel = get("level");
  const paramIncludeImage = get("include-image");

  const [size, setSize] = useState<number>(paramSize === 0 ? 260 : paramSize);
  const [fgColor, setFgColor] = useState<string>(paramFgColor ?? "#FFFFFF");
  const [bgColor, setBgColor] = useState<string>(paramBgColor ?? "#000000");
  const [level, setLevel] = useState<string>(paramLevel ?? "M");
  const [includeImage, setIncludeImage] = useState<boolean>(
    paramIncludeImage === "true" ? true : false
  );

  useEffect(() => {
    if (!paramSize) return setSize(260);
  }, [paramSize]);
  return (
    <>
      <div className="space-y-2">
        <label className="text-sm font-medium">Ukuran: {size}px</label>
        <input
          type="range"
          min={100}
          max={600}
          value={size}
          onMouseUp={() => set("size", String(size))}
          onChange={(e) => setSize(e.target.valueAsNumber)}
          className="w-full"
        />
      </div>

      {/* Colors */}
      <div className="flex gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">Foreground</label>
          <input
            type="color"
            value={paramFgColor ?? "#FFFFFF"}
            onBlur={() => set("fg-color", fgColor)}
            onChange={(e) => setFgColor(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Background</label>
          <input
            type="color"
            onBlur={() => set("bg-color", bgColor)}
            value={paramBgColor ?? "#000000"}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>
      </div>

      {/* Level */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Error Correction</label>
        <select
          value={level}
          onChange={(e) => {
            setLevel(e.target.value as "L" | "M" | "Q" | "H");
            set("level", e.target.value);
          }}
          className="border rounded-md p-2 text-sm"
        >
          <option value="L">L (Low)</option>
          <option value="M">M (Medium)</option>
          <option value="Q">Q (Quartile)</option>
          <option value="H">H (High)</option>
        </select>
      </div>

      <div className="flex gap-0.5 items-center">
        <input
          type="checkbox"
          id="include-image"
          checked={includeImage}
          onChange={() => {
            setIncludeImage(!includeImage);
            if (!includeImage) {
              setMany({
                "include-image": "true",
                "image-qr-height": "48",
                "image-qr-width": "48",
              });
            } else {
              removeMany([
                "include-image",
                "image-qr-url",
                "image-qr-height",
                "image-qr-width",
              ]);
            }
          }}
        />
        <label htmlFor="include-image">Include Image</label>
      </div>
    </>
  );
};

// const QRImageSetting = () => {
//   const { get, set } = useQueryParams();
//   const uploadRef = useRef<UploadImageRef>(null);

//   // Ambil dari URL
//   const paramWidth = get("image-qr-width");
//   const paramHeight = get("image-qr-height");
//   const paramOpacity = get("image-qr-opacity");
//   const paramImage = get("image-qr-url");

//   // State utama
//   const [imageUrl, setImageUrl] = useState<string>(paramImage ?? "");
//   const [width, setWidth] = useState<number>(Number(paramWidth ?? 24));
//   const [height, setHeight] = useState<number>(Number(paramHeight ?? 24));
//   const [opacity, setOpacity] = useState<number>(Number(paramOpacity ?? 1));

//   // Sync image URL to query param
//   useEffect(() => {
//     set("image-qr-url", "");
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Sync width & height to query param
//   useEffect(() => {
//     set("image-qr-width", String(width));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [width]);

//   useEffect(() => {
//     set("image-qr-height", String(height));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [height]);

//   useEffect(() => {
//     set("image-qr-opacity", String(opacity));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [opacity]);

//   return (
//     <>
//       <UploadImage
//         ref={uploadRef}
//         onUploadChange={async (file) => {
//           if (file) {
//             const url = file.type.includes("png")
//               ? await convertToTransparentPNG(file)
//               : URL.createObjectURL(file);
//             setImageUrl(url);
//             set("image-qr-url", url);
//           }
//         }}
//       />

//       {imageUrl && (
//         <Image width={64} height={64} src={imageUrl} alt="Preview" />
//       )}

//       {imageUrl && (
//         <>
//           <div className="grid grid-cols-3 gap-4 mt-4">
//             <div className="flex flex-col gap-1">
//               <label htmlFor="image-qr-width">Width</label>
//               <Input
//                 value={width}
//                 onChange={(e) => setWidth(Number(e.target.value))}
//                 type="number"
//                 id="image-qr-width"
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label htmlFor="image-qr-height">Height</label>
//               <Input
//                 value={height}
//                 onChange={(e) => setHeight(Number(e.target.value))}
//                 type="number"
//                 id="image-qr-height"
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label htmlFor="image-qr-opacity">Opacity</label>
//               <Input
//                 max={1}
//                 min={0}
//                 step={0.1}
//                 value={opacity}
//                 onChange={(e) => setOpacity(Number(e.target.value))}
//                 type="number"
//                 id="image-qr-opacity"
//               />
//             </div>
//           </div>

//           <Button
//             variant={"destructive"}
//             className="mt-4"
//             onClick={() => {
//               uploadRef.current?.reset();
//               setImageUrl("");
//               setWidth(24);
//               setHeight(24);
//             }}
//           >
//             Delete Image
//           </Button>
//         </>
//       )}
//     </>
//   );
// };

const QRImageSetting = () => {
  const { get, set, remove } = useQueryParams();
  const uploadRef = useRef<UploadImageRef>(null);

  // Parameter
  const paramWidth = get("image-qr-width");
  const paramHeight = get("image-qr-height");
  const paramOpacity = get("image-qr-opacity");

  // States
  const [imageUrl, setImageUrl] = useState<string>("");
  const [width, setWidth] = useState<number>(Number(paramWidth ?? 24));
  const [height, setHeight] = useState<number>(Number(paramHeight ?? 24));
  const [opacity, setOpacity] = useState<number>(Number(paramOpacity ?? 1));

  // Sumber image: upload atau url
  const [source, setSource] = useState<"upload" | "url">("upload");
  const [imageUrlInput, setImageUrlInput] = useState("");

  // Hapus param blob pada refresh
  useEffect(() => {
    remove("image-qr-url");
  }, []);

  // Sync values
  useEffect(() => set("image-qr-width", String(width)), [width]);
  useEffect(() => set("image-qr-height", String(height)), [height]);
  useEffect(() => set("image-qr-opacity", String(opacity)), [opacity]);

  // Jika input URL berubah
  useEffect(() => {
    if (source === "url" && imageUrlInput.trim().length > 0) {
      setImageUrl(imageUrlInput);
      set("image-qr-url", imageUrlInput);
    }
  }, [imageUrlInput, source]);

  return (
    <>
      {/* PILIH SUMBER */}
      <div className="flex gap-3 mb-4">
        <Button
          variant={source === "upload" ? "default" : "outline"}
          onClick={() => {
            setSource("upload");
            setImageUrl("");
            remove("image-qr-url");
          }}
        >
          Upload
        </Button>

        <Button
          variant={source === "url" ? "default" : "outline"}
          onClick={() => {
            setSource("url");
            uploadRef.current?.reset();
            setImageUrl("");
          }}
        >
          From URL
        </Button>
      </div>

      {/* INPUT BERDASARKAN SUMBER */}

      {source === "upload" && (
        <UploadImage
          ref={uploadRef}
          onUploadChange={async (file) => {
            if (!file) return;

            const isPNG = file.type.includes("png");
            const url = isPNG
              ? await convertToTransparentPNG(file)
              : URL.createObjectURL(file);

            setImageUrl(url);
            set("image-qr-url", url);
          }}
        />
      )}

      {source === "url" && (
        <div className="flex flex-col gap-2">
          <label>Image URL</label>
          <Input
            type="text"
            placeholder="https://domain.com/logo.png"
            value={imageUrlInput}
            onChange={(e) => setImageUrlInput(e.target.value)}
          />
        </div>
      )}

      {/* PREVIEW */}
      {imageUrl && (
        <Image width={64} height={64} src={imageUrl} alt="Preview" className="mt-4" />
      )}

      {/* SETTINGS */}
      {imageUrl && (
        <>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="image-qr-width">Width</label>
              <Input
                value={width}
                type="number"
                id="image-qr-width"
                onChange={(e) => setWidth(Number(e.target.value))}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="image-qr-height">Height</label>
              <Input
                value={height}
                type="number"
                id="image-qr-height"
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="image-qr-opacity">Opacity</label>
              <Input
                value={opacity}
                max={1}
                min={0}
                step={0.1}
                type="number"
                id="image-qr-opacity"
                onChange={(e) => setOpacity(Number(e.target.value))}
              />
            </div>
          </div>

          <Button
            variant="destructive"
            className="mt-4"
            onClick={() => {
              uploadRef.current?.reset();
              setImageUrl("");
              setImageUrlInput("");
              setWidth(24);
              setHeight(24);
              remove("image-qr-url");
            }}
          >
            Delete Image
          </Button>
        </>
      )}
    </>
  );
};