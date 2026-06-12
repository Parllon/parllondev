// src/components/sections/Resume/Resume.jsx
import {
  Calendar,
  MapPin,
  GraduationCap,
  Award,
  CheckCircle2,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal/Reveal";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { resumeData } from "@/data/content";
import "./Resume.css";

export default function Resume() {
  const {
    eyebrow,
    title,
    highlight,
    subtitle,
    experienceTitle,
    experiences,
    educationTitle,
    education,
    certificationsTitle,
    certifications,
  } = resumeData;

  return (
    <section className="resume" id="curriculo">
      <div className="resume__container">
        <Reveal>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            highlight={highlight}
            subtitle={subtitle}
          />
        </Reveal>

        {/* ---- Timeline de experiência ---- */}
        <Reveal>
          <h3 className="resume__subtitle">
            <span className="resume__subtitle-icon">
              <Calendar size={20} strokeWidth={2} aria-hidden="true" />
            </span>
            {experienceTitle}
          </h3>
        </Reveal>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <Reveal key={exp.id} delay={0.1 * index}>
              <div className="timeline__item">
                <span
                  className={`timeline__dot${
                    exp.current ? " timeline__dot--current" : ""
                  }`}
                  aria-hidden="true"
                />

                <article className="timeline__card">
                  <div className="timeline__head">
                    <h4 className="timeline__role">{exp.role}</h4>
                    {exp.current && (
                      <span className="timeline__badge">Atual</span>
                    )}
                  </div>

                  <span className="timeline__company">{exp.company}</span>

                  <div className="timeline__meta">
                    <span className="timeline__meta-item">
                      <Calendar size={15} aria-hidden="true" />
                      {exp.period}
                    </span>
                    <span className="timeline__meta-item">
                      <MapPin size={15} aria-hidden="true" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="timeline__desc">{exp.description}</p>
                </article>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ---- Formação + Certificações ---- */}
        <div className="resume__bottom">
          <div className="resume__col">
            <Reveal>
              <h3 className="resume__subtitle">
                <span className="resume__subtitle-icon">
                  <GraduationCap size={20} strokeWidth={2} aria-hidden="true" />
                </span>
                {educationTitle}
              </h3>
            </Reveal>

            <div className="resume__cards">
              {education.map((edu, index) => (
                <Reveal key={edu.id} delay={0.1 * index}>
                  <article className="edu-card">
                    <div className="edu-card__top">
                      <h4 className="edu-card__course">{edu.course}</h4>
                      <span className="edu-card__period">{edu.period}</span>
                    </div>
                    <span className="edu-card__institution">
                      {edu.institution}
                    </span>
                    <p className="edu-card__desc">{edu.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="resume__col">
            <Reveal>
              <h3 className="resume__subtitle">
                <span className="resume__subtitle-icon">
                  <Award size={20} strokeWidth={2} aria-hidden="true" />
                </span>
                {certificationsTitle}
              </h3>
            </Reveal>

            <div className="resume__certs">
              {certifications.map((cert, index) => (
                <Reveal key={cert} delay={0.08 * index}>
                  <div className="cert-item">
                    <CheckCircle2
                      size={18}
                      className="cert-item__icon"
                      aria-hidden="true"
                    />
                    <span>{cert}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
