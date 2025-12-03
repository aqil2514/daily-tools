"use client";
import { ImageUrl } from "@/@types/Images";
import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from "react";
import type { Point, Area } from "react-easy-crop";

interface CropState {
  crop: Point;
  zoom: number;
  aspect: number;
  rotation: number;
  cropShape: "rect" | "round";
  area: Area;
}

interface ImageCropperContextTypes {
  cropState: CropState;
  setCropState: React.Dispatch<SetStateAction<CropState>>;
  imageUrl: ImageUrl;
  setImageUrl: React.Dispatch<SetStateAction<ImageUrl>>;
}

const ImageCropperContext = createContext<ImageCropperContextTypes>(
  {} as ImageCropperContextTypes
);

interface ImageCropperProviderProps {
  children: React.ReactNode;
}

export const defaultCropState: CropState = {
  aspect: 1 / 1,
  crop: { x: 0, y: 0 },
  cropShape: "rect",
  rotation: 0,
  zoom: 1,
  area: {
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  },
};

export function ImageCropperProvider({ children }: ImageCropperProviderProps) {
  const [cropState, setCropState] = useState<CropState>(defaultCropState);
  const [imageUrl, setImageUrl] = useState<ImageUrl>({
    preview: "",
    result: "",
  });

  const values: ImageCropperContextTypes = {
    cropState,
    imageUrl,
    setCropState,
    setImageUrl,
  };

  return (
    <ImageCropperContext.Provider value={values}>
      {children}
    </ImageCropperContext.Provider>
  );
}

export const useImageCroper = () => useContext(ImageCropperContext);
