// src/components/sections/Footer/Footer.jsx
import Reveal from "@/components/ui/Reveal/Reveal";
import { footerData } from "@/data/content";
import "./Footer.css";

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <Reveal>
            <div className="footer__brand-block">
              <button className="footer__brand" onClick={toTop}>
                {footerData.brand}
              </button>
              <p className="footer__tagline">{footerData.tagline}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="footer__socials">
              {footerData.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="footer__social"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="footer__bottom">
            <p className="footer__copy">{footerData.copyright}</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
