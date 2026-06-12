// src/components/ui/Toast/Toast.jsx
import { createContext, useContext, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import "./Toast.css";

const ToastContext = createContext(null);
const ICONS = { success: CheckCircle2, error: AlertCircle };
let idCounter = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({ title, description, variant = "success", duration = 4000 }) => {
      const id = ++idCounter;
      setToasts((prev) => [...prev, { id, title, description, variant }]);
      if (duration !== Infinity) setTimeout(() => dismiss(id), duration);
      return id;
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {createPortal(
        <div className="toast-viewport" aria-live="polite" aria-atomic="false">
          <AnimatePresence>
            {toasts.map((t) => {
              const Icon = ICONS[t.variant] ?? CheckCircle2;
              return (
                <motion.div
                  key={t.id}
                  role="status"
                  className={`toast toast--${t.variant}`}
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 24, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  layout
                >
                  <Icon size={20} className="toast__icon" aria-hidden="true" />
                  <div className="toast__content">
                    {t.title && <p className="toast__title">{t.title}</p>}
                    {t.description && (
                      <p className="toast__desc">{t.description}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    className="toast__close"
                    onClick={() => dismiss(t.id)}
                    aria-label="Fechar notificação"
                  >
                    <X size={16} aria-hidden="true" />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast deve ser usado dentro de <ToastProvider>");
  return ctx;
}
