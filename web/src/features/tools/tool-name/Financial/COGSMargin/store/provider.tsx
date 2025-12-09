"use client";

import React, { createContext, useContext, useState } from "react";
import { CogsMarginItem } from "../types/interface";

interface CogsMarginContextType {
  items: CogsMarginItem[];
  highlightedItem: CogsMarginItem | null;

  addItem: (item: CogsMarginItem) => void;
  updateItem: (index: number, changes: Partial<CogsMarginItem>) => void;
  deleteItem: (index: number) => void;
  clearItem: () => void;

  highlightItem: (item: CogsMarginItem) => void;
  clearHighlight: () => void;

  editingItemIndex: number | null;
  startEdit: (index: number) => void;
  stopEdit: () => void;
}

const CogsMarginContext = createContext<CogsMarginContextType | null>(null);

export function CogsMarginProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CogsMarginItem[]>([]);
  const [highlightedItem, setHighlightedItem] = useState<CogsMarginItem | null>(
    null
  );
  const [editingItemIndex, setEditingItemIndex] = useState<number | null>(null);

  const startEdit = (index: number) => {
    setEditingItemIndex(index);
  };

  const stopEdit = () => {
    setEditingItemIndex(null);
  };

  const addItem = (item: CogsMarginItem) => {
    setItems((prev) => [...prev, item]);
  };

  const updateItem = (index: number, changes: Partial<CogsMarginItem>) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, ...changes } : item))
    );
  };

  const deleteItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const clearItem = () => setItems([]);

  const highlightItem = (item: CogsMarginItem) => {
    setHighlightedItem(item);
  };

  const clearHighlight = () => {
    setHighlightedItem(null);
  };

  const values: CogsMarginContextType = {
    items,
    highlightedItem,

    addItem,
    updateItem,
    deleteItem,
    clearItem,

    highlightItem,
    clearHighlight,

    editingItemIndex,
    startEdit,
    stopEdit,
  };

  return (
    <CogsMarginContext.Provider value={values}>
      {children}
    </CogsMarginContext.Provider>
  );
}

export const useCogsMargin = () => {
  const ctx = useContext(CogsMarginContext);
  if (!ctx)
    throw new Error("useCogsMargin must be used inside a CogsMarginProvider");
  return ctx;
};
