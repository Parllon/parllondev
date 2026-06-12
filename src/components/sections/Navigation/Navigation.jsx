// src/components/sections/Navigation/Navigation.jsx
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navData } from "@/data/content";
import "./Navigation.css";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (target) => {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.nav
      className={`nav${scrolled ? " nav--scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__container">
        <button className="nav__brand" onClick={toTop}>
          {navData.brand}
        </button>

        {/* Desktop */}
        <div className="nav__links">
          {navData.links.map((item) => (
            <button
              key={item.id}
              className="nav__link"
              onClick={() => scrollTo(item.target)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Toggle mobile */}
        <button
          className="nav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="nav-mobile"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="nav-mobile"
            className="nav__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="nav__mobile-inner">
              {navData.links.map((item) => (
                <button
                  key={item.id}
                  className="nav__mobile-link"
                  onClick={() => scrollTo(item.target)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
