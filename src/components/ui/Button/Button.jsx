// src/components/ui/Button/Button.jsx
import { Loader2 } from "lucide-react";
import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  href,
  icon: Icon,
  iconPosition = "left",
  loading = false,
  fullWidth = false,
  disabled = false,
  className = "",
  ...props
}) {
  const classes = [
    "btn",
    `btn--${variant}`,
    fullWidth ? "btn--full" : "",
    loading ? "btn--loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && (
        <Loader2 size={18} className="btn__spinner" aria-hidden="true" />
      )}
      {!loading && Icon && iconPosition === "left" && (
        <Icon size={18} strokeWidth={2.4} aria-hidden="true" />
      )}
      <span>{children}</span>
      {!loading && Icon && iconPosition === "right" && (
        <Icon size={18} strokeWidth={2.4} aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      disabled={loading || disabled}
      {...props}
    >
      {content}
    </button>
  );
}
