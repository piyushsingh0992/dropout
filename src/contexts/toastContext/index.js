import { createContext, useContext, useReducer } from "react";
import { toastManager } from "./reducer";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toastState, toastDispatch] = useReducer(toastManager,{ trigger: false });

  return (
    <ToastContext.Provider value={{ toastState, toastDispatch }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
