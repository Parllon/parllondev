// src/components/sections/Portfolio/Portfolio.jsx
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal/Reveal";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import Button from "@/components/ui/Button/Button";
import { portfolioData } from "@/data/content";
import "./Portfolio.css";

export default function Portfolio() {
  const { eyebrow, title, highlight, subtitle, projects, more } =
    portfolioData;

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">
        <Reveal>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            highlight={highlight}
            subtitle={subtitle}
          />
        </Reveal>

        <div className="portfolio__grid">
          {projects.map((project, index) => {
            const hasLinks = project.liveUrl || project.githubUrl;

            return (
              <Reveal key={project.id} delay={0.1 * index}>
                <article className="project-card">
                  {/* Media + overlay */}
                  <div className="project-card__media">
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.description}`}
                      loading="lazy"
                      decoding="async"
                    />

                    {hasLinks && (
                      <div className="project-card__overlay">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver demo de ${project.title}`}
                            className="project-card__action project-card__action--primary"
                          >
                            <ExternalLink size={18} aria-hidden="true" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver código de ${project.title} no GitHub`}
                            className="project-card__action"
                          >
                            <Github size={18} aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div className="project-card__body">
                    <div className="project-card__top">
                      <h3 className="project-card__title">{project.title}</h3>
                      <span className="project-card__category">
                        {project.category}
                      </span>
                    </div>

                    <p className="project-card__desc">{project.description}</p>

                    <div className="project-card__tech">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="project-card__tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="portfolio__more">
            <Button
              variant="secondary"
              href={more.url}
              target="_blank"
              rel="noopener noreferrer"
              icon={ArrowUpRight}
              iconPosition="right"
            >
              {more.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
