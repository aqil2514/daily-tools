/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { PasswordGeneratorSettings } from "../types/interface";
import { defaultPasswordSettings } from "../default-setting";

interface PasswordState {
  settings: PasswordGeneratorSettings;
}

type PasswordAction =
  | { type: "SET_SETTING"; key: keyof PasswordGeneratorSettings; value: any }
  | { type: "RESET" };

const PasswordContext = createContext<{
  state: PasswordState;
  setSetting: (key: keyof PasswordGeneratorSettings, value: any) => void;
  resetSettings: () => void;
} | null>(null);

// Reducer
function passwordReducer(state: PasswordState, action: PasswordAction): PasswordState {
  switch (action.type) {
    case "SET_SETTING":
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.key]: action.value,
        },
      };

    case "RESET":
      return { settings: defaultPasswordSettings };

    default:
      return state;
  }
}

// Provider
export function PasswordGeneratorProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(passwordReducer, {
    settings: defaultPasswordSettings,
  });

  const setSetting = (key: keyof PasswordGeneratorSettings, value: any) => {
    dispatch({ type: "SET_SETTING", key, value });
  };

  const resetSettings = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <PasswordContext.Provider value={{ state, setSetting, resetSettings }}>
      {children}
    </PasswordContext.Provider>
  );
}

// Hook
export function usePasswordGenerator() {
  const context = useContext(PasswordContext);
  if (!context) {
    throw new Error("usePasswordGenerator must be used inside <PasswordProvider>");
  }
  return context;
}
