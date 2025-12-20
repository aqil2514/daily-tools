"use client";

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
  useRef,
} from "react";

import { BMRInput } from "../types/input";
import { BMROutput } from "../types/output";
import { calculateBMRTDEE } from "../utils/calculate-bmr-tdee";

/* -----------------------------
 * State
 * ---------------------------- */

interface State {
  input: BMRInput | null;
  output: BMROutput | null;
  loading: boolean;
}

/* -----------------------------
 * Actions
 * ---------------------------- */

type Action =
  | { type: "SET_INPUT"; payload: BMRInput }
  | { type: "CALCULATE_START" }
  | { type: "CALCULATE_FINISH"; payload: BMROutput }
  | { type: "RESET" };

/* -----------------------------
 * Initial State
 * ---------------------------- */

const initialState: State = {
  input: null,
  output: null,
  loading: false,
};

/* -----------------------------
 * Reducer
 * ---------------------------- */

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        input: action.payload,
        loading: true,
      };

    case "CALCULATE_START":
      return {
        ...state,
        loading: true,
      };

    case "CALCULATE_FINISH":
      return {
        ...state,
        output: action.payload,
        loading: false,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

/* -----------------------------
 * Context
 * ---------------------------- */

const BMRTDEEContext = createContext<
  | {
      state: State;
      setInput: (input: BMRInput) => void;
      reset: () => void;
      isValid: boolean;
      loading: boolean;
    }
  | undefined
>(undefined);

/* -----------------------------
 * Provider
 * ---------------------------- */

const DEBOUNCE_DELAY = 300;
export function BMRTDEEProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const setInput = (input: BMRInput) => {
    dispatch({ type: "SET_INPUT", payload: input });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const valid = isValidInput(state.input);

  useEffect(() => {
    if (!valid) return;

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    dispatch({ type: "CALCULATE_START" });

    debounceRef.current = setTimeout(() => {
      const result = calculateBMRTDEE(state.input!);
      dispatch({ type: "CALCULATE_FINISH", payload: result });
    }, DEBOUNCE_DELAY);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [valid, state.input]);

  return (
    <BMRTDEEContext.Provider
      value={{
        state,
        setInput,
        reset,
        isValid: valid,
        loading: state.loading,
      }}
    >
      {children}
    </BMRTDEEContext.Provider>
  );
}

/* -----------------------------
 * Hook
 * ---------------------------- */

export function useBMRTDEE() {
  const context = useContext(BMRTDEEContext);

  if (!context) {
    throw new Error("useBMRTDEE must be used within BMRTDEEProvider");
  }

  return context;
}

function isValidInput(input: BMRInput | null): boolean {
  if (!input) return false;

  return (
    input.age > 0 &&
    input.height > 0 &&
    input.weight > 0 &&
    !!input.gender &&
    !!input.activityLevel
  );
}
