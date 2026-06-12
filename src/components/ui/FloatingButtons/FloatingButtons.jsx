// src/components/ui/FloatingButtons/FloatingButtons.jsx
import { floatingButtons } from "@/data/content";
import "./FloatingButtons.css";

/**
 * Atalhos flutuantes fixos no canto inferior direito.
 * Conteúdo e ordem vêm de `floatingButtons` (src/data/content.js).
 */
export default function FloatingButtons() {
  return (
    <div className="fab" role="group" aria-label="Atalhos de contato">
      {floatingButtons.map(({ id, icon: Icon, label, href, color }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="fab__btn"
          style={{ "--fab-color": color }}
          aria-label={label}
        >
          <Icon size={26} className="fab__icon" aria-hidden="true" />
          <span className="fab__tooltip">{label}</span>
        </a>
      ))}
    </div>
  );
}
