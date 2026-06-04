"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    category: "Languages",
    icon: "💻",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Dart", "Golang"],
  },
  {
    category: "Frontend",
    icon: "⚡",
    skills: ["React.js", "Next.js", "Flutter", "Tailwind CSS"],
  },
  {
    category: "Backend & Database",
    icon: "🛠",
    skills: ["Node.js", "REST API", "MySQL", "PostgreSQL"],
  },
  {
    category: "Tools & Workflow",
    icon: "🔧",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
];

const otherSkills = [
  "Responsive Web Design",
  "UI/UX Design",
  "API Integration",
  "Basic Cyber Security",
  "Network Administration",
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-title", {
        y: 30, opacity: 0, duration: 0.9, ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });
      gsap.from(".skill-group", {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);

    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{ background: "var(--bg-secondary)", position: "relative" }}
    >
      {/* Top border fade */}
      <div
        style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--border), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--border), transparent)",
        }}
      />

      <div className="container">
        {/* Header */}
        <div className="skills-title" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label" style={{ justifyContent: "center" }}>
            Expertise
          </span>
          <h2 className="text-h2" style={{ marginBottom: "1rem" }}>
            My <span style={{ color: "var(--accent-light)" }}>Tech Stack</span>
          </h2>
          <p
            className="text-body"
            style={{ maxWidth: 480, margin: "0 auto", color: "var(--text-muted)" }}
          >
            Teknologi dan tools yang saya gunakan untuk membangun aplikasi web
            yang modern, responsif, dan berkualitas tinggi.
          </p>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.25rem",
          }}
          className="skills-grid"
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="skill-group card"
              style={{ padding: "2rem" }}
            >
              {/* Group header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: 40, height: 40,
                    borderRadius: "10px",
                    background: "var(--accent-dim)",
                    border: "1px solid rgba(108,99,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    flexShrink: 0,
                  }}
                >
                  {group.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other skills row */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Also skilled in:
          </span>
          {otherSkills.map((t) => (
            <span
              key={t}
              style={{
                padding: "0.25rem 0.7rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border)",
                borderRadius: "100px",
                fontSize: "0.78rem",
                color: "var(--text-muted)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
