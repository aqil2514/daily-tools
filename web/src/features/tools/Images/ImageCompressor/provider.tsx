"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ImageCompressorContextTypes {
  quality: number;
  setQuality: Dispatch<SetStateAction<number>>;
  previewUrl: string;
  setPreviewUrl: Dispatch<SetStateAction<string>>;
  compressedUrl: string;
  setCompressedUrl: Dispatch<SetStateAction<string>>;
  fileMime: string;
  setFileMime: Dispatch<SetStateAction<string>>;
}

const ImageCompressorContext = createContext<ImageCompressorContextTypes>(
  {} as ImageCompressorContextTypes
);

interface ImageCompressorProviderProps {
  children: React.ReactNode;
}

export function ImageCompressorProvider({
  children,
}: ImageCompressorProviderProps) {
  const [quality, setQuality] = useState<number>(80);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [compressedUrl, setCompressedUrl] = useState<string>("");
  const [fileMime, setFileMime] = useState<string>("");

  const value: ImageCompressorContextTypes = {
    quality,
    setQuality,
    compressedUrl,
    previewUrl,
    setCompressedUrl,
    setPreviewUrl,
    fileMime,
    setFileMime,
  };

  return (
    <ImageCompressorContext.Provider value={value}>
      {children}
    </ImageCompressorContext.Provider>
  );
}

export const useImageCompressor = () => useContext(ImageCompressorContext);
