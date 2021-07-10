import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toastState, toastSetter] = useState({ trigger: false });

  function toastDispatch(type, message) {
    switch (type) {
      case "RESET":
        toastSetter({ trigger: false });
        break;
      default:
        toastSetter({ trigger: true, type, message });
        break;
    }
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
