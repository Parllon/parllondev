// src/components/sections/About/About.jsx
import Reveal from "@/components/ui/Reveal/Reveal";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { aboutData } from "@/data/content";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__container">
        <Reveal>
          <SectionHeader
            eyebrow={aboutData.eyebrow}
            title={aboutData.title}
            highlight={aboutData.highlight}
          />
        </Reveal>

        <div className="about__grid">
          {/* Coluna de texto */}
          <Reveal direction="right" className="about__text">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="about__paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about__stack">
              {aboutData.stack.map((tech) => (
                <span key={tech} className="about__tag">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Grelha de skills */}
          <div className="about__skills">
            {aboutData.skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Reveal key={skill.id} direction="left" delay={0.1 * index}>
                  <article className="about__card">
                    <div className="about__card-icon">
                      <Icon size={26} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <h3 className="about__card-title">{skill.title}</h3>
                    <p className="about__card-desc">{skill.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
