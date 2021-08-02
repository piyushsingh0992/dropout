import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toastState, toastSetter] = useState({ trigger: false });

  function toastDispatch(type, message) {
    type === "RESET"
      ? toastSetter({ trigger: false })
      : toastSetter({ trigger: true, type, message });
  }

  return (
    <ToastContext.Provider value={{ toastState, toastDispatch }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
