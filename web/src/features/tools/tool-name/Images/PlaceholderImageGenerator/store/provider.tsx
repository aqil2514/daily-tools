"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { DEFAULT_STATE, PlaceholderInputState } from "../types/input";

interface PlaceholderContextValue {
  state: PlaceholderInputState;
  setState: React.Dispatch<React.SetStateAction<PlaceholderInputState>>;
}

const PlaceholderContext = createContext<PlaceholderContextValue | null>(null);

export function PlaceholderImageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, setState] = useState<PlaceholderInputState>(DEFAULT_STATE);

  return (
    <PlaceholderContext.Provider value={{ state, setState }}>
      {children}
    </PlaceholderContext.Provider>
  );
}

export function usePlaceholderImageContext() {
  const context = useContext(PlaceholderContext);

  if (!context) {
    throw new Error(
      "usePlaceholderImageContext must be used within PlaceholderImageProvider"
    );
  }

  return context;
}
