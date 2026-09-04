import { CheckCircle2, AlertTriangle, Info, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const Icon =
    toast.type === "error"
      ? AlertTriangle
      : toast.type === "info"
      ? Info
      : CheckCircle2;

  return (
    <div className={`toast toast-${toast.type || "success"}`}>
      <div className="toast-icon">
        <Icon size={20} />
      </div>

      <div className="toast-content">
        <strong>{toast.title}</strong>
        <span>{toast.message}</span>
      </div>

      <button onClick={onClose}>
        <X size={17} />
      </button>
    </div>
  );
}