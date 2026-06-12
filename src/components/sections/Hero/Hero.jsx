// src/components/sections/Hero/Hero.jsx
import Reveal from "@/components/ui/Reveal/Reveal";
import Button from "@/components/ui/Button/Button";
import { heroData, heroStats } from "@/data/content";
import "./Hero.css";

export default function Hero() {
  const scrollTo = (target) => {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero__container">
        {/* Foto de perfil */}
        <Reveal direction="none" duration={0.8}>
          <div className="hero__avatar">
            <div className="hero__avatar-ring">
              <img
                src={heroData.image.src}
                alt={heroData.image.alt}
                width="256"
                height="256"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </Reveal>

        {/* Badge de disponibilidade */}
        <Reveal delay={0.1}>
          <span className="hero__badge">
            <i className="hero__badge-dot" aria-hidden="true" />
            {heroData.badge}
          </span>
        </Reveal>

        {/* Título */}
        <Reveal delay={0.2}>
          <h1 className="hero__title">
            <span>{heroData.role.prefix}</span>
            <span className="hero__title-highlight">
              {heroData.role.highlight}
            </span>
          </h1>
        </Reveal>

        {/* Tagline */}
        <Reveal delay={0.3}>
          <p className="hero__tagline">{heroData.tagline}</p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.4}>
          <div className="hero__actions">
            {heroData.actions.map((action) => (
              <Button
                key={action.id}
                variant={action.variant}
                icon={action.icon}
                iconPosition={action.id === "portfolio" ? "right" : "left"}
                onClick={() => scrollTo(action.target)}
              >
                {action.label}
              </Button>
            ))}
          </div>
        </Reveal>

        {/* Estatísticas */}
        <Reveal delay={0.55}>
          <div className="hero__stats">
            {heroStats.map((stat) => (
              <div key={stat.id} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
