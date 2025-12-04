"use client";
import React, { createContext, useContext, useState } from "react";

interface ImageToPDFSetting {
  pageOrientation: "portrait" | "landscape";
  pageSize: "a4" | "fit" | "us-letter";
  pageMargin: number;
  mergeAllImages: boolean;
}

interface ImageToPDFContextTypes {
  settings: ImageToPDFSetting;
  updateSetting: <K extends keyof ImageToPDFSetting>(
    key: K,
    value: ImageToPDFSetting[K]
  ) => void;
  resetSetting: () => void;

  images: string[];
  addImage: (url: string) => void;
  resetImage: () => void;
  deleteImage: (url: string) => void;
  reorderImages: (from: number, to: number) => void;
}

const ImageToPDFContext = createContext<ImageToPDFContextTypes>(
  {} as ImageToPDFContextTypes
);

interface ImageToPDFProviderProps {
  children: React.ReactNode;
}

export const defaultSetting: ImageToPDFSetting = {
  mergeAllImages: true,
  pageMargin: 0,
  pageOrientation: "portrait",
  pageSize: "a4",
};

export function ImageToPDFProvider({ children }: ImageToPDFProviderProps) {
  const [settings, setSettings] = useState<ImageToPDFSetting>(defaultSetting);
  const [images, setImages] = useState<string[]>([]);

  //   >>>>> Setting Helper <<<<<
  const updateSetting = <K extends keyof ImageToPDFSetting>(
    key: K,
    value: ImageToPDFSetting[K]
  ) => {
    setSettings({ ...settings, [key]: value });
  };

  const resetSetting = () => setSettings(defaultSetting);

  //   >>>>> Images Helper <<<<<
  const addImage = (url: string) => setImages((prev) => [...prev, url]);
  const resetImage = () => setImages([]);
  const deleteImage = (url: string) =>
    setImages((prev) => prev.filter((image) => image !== url));
  const reorderImages = (from: number, to: number) =>
    setImages((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(from, 1);
      updated.splice(to, 0, moved);
      return updated;
    });

  //    >>>>> Context Value <<<<<
  const values: ImageToPDFContextTypes = {
    images,
    addImage,
    deleteImage,
    resetImage,
    reorderImages,

    settings,
    updateSetting,
    resetSetting,
  };

  return (
    <ImageToPDFContext.Provider value={values}>
      {children}
    </ImageToPDFContext.Provider>
  );
}

export const useImageToPDF = () => useContext(ImageToPDFContext);
