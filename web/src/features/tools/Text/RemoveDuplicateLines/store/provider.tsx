import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { DedupeOptions } from "../types/inteface";

interface RemoveDuplicateLinesContextTypes {
  text: string;
  setText: (text: string) => void;

  settings: DedupeOptions;
  setSettings: Dispatch<SetStateAction<DedupeOptions>>;
}

const RemoveDuplicateLinesContext =
  createContext<RemoveDuplicateLinesContextTypes>(
    {} as RemoveDuplicateLinesContextTypes
  );

const defaultSetting: DedupeOptions = {
  caseSensitive: false,
  removeEmpty: false,
  trim: false,
};

export function RemoveDuplicateLinesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [text, setText] = useState<string>("");
  const [settings, setSettings] = useState<DedupeOptions>(defaultSetting);

  const values: RemoveDuplicateLinesContextTypes = {
    setText,
    text,
    setSettings,
    settings,
  };
  return (
    <RemoveDuplicateLinesContext.Provider value={values}>
      {children}
    </RemoveDuplicateLinesContext.Provider>
  );
}

export const useRemoveDuplicateLines = () =>
  useContext(RemoveDuplicateLinesContext);
