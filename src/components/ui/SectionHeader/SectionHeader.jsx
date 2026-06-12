// src/components/ui/SectionHeader/SectionHeader.jsx
import "./SectionHeader.css";

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
}) {
  return (
    <header className={`section-header section-header--${align}`}>
      {eyebrow && (
        <span className="section-header__eyebrow">
          <i className="section-header__eyebrow-dot" aria-hidden="true" />
          {eyebrow}
        </span>
      )}

      <h2 className="section-header__title">
        {title}{" "}
        {highlight && (
          <span className="section-header__highlight">{highlight}</span>
        )}
      </h2>

      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </header>
  );
}
