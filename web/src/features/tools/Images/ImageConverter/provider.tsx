"use client";
import { ImageItem, ImageSource } from "@/@types/Images";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ImageConverterContextType {
  items: ImageItem[];
  setItems: Dispatch<SetStateAction<ImageItem[]>>;
  sourceMedia: ImageSource;
  setSourceMedia: Dispatch<SetStateAction<ImageSource>>;
  convertedUrl: string;
  setConvertedUrl: Dispatch<SetStateAction<string>>;
  outputFormat: string;
  setOutputFormat: Dispatch<SetStateAction<string>>;
}

const ImageConverterContext = createContext<ImageConverterContextType>(
  {} as ImageConverterContextType
);

interface ImageConverterProviderProps {
  children: React.ReactNode;
}

export function ImageConverterProvider({
  children,
}: ImageConverterProviderProps) {
  const [items, setItems] = useState<ImageItem[]>([]);
  const [sourceMedia, setSourceMedia] = useState<ImageSource>("file");
  const [convertedUrl, setConvertedUrl] = useState<string>("");
  const [outputFormat, setOutputFormat] = useState<string>("");

  const values: ImageConverterContextType = {
    items,
    setItems,
    setSourceMedia,
    sourceMedia,
    convertedUrl,
    setConvertedUrl,
    outputFormat,
    setOutputFormat,
  };
  return (
    <ImageConverterContext.Provider value={values}>
      {children}
    </ImageConverterContext.Provider>
  );
}

export const useImageConverter = () => useContext(ImageConverterContext);
