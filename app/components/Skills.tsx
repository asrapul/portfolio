"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiNextdotjs, SiReact, SiTypescript, SiJavascript,
  SiTailwindcss, SiNodedotjs, SiMysql, SiPostgresql,
  SiGit, SiGithub, SiFigma, SiFlutter, SiDart,
  SiHtml5, SiCss, SiVercel, SiPostman, SiGo,
} from "react-icons/si";
import {
  FiMonitor, FiZap, FiTool, FiSettings, FiCode, FiServer,
  FiShield, FiLayout, FiGlobe,
} from "react-icons/fi";
import { useLang } from "../context/LangContext";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  // Languages
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Language" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Language" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Language" },
  { name: "CSS3", icon: SiCss, color: "#1572B6", category: "Language" },
  { name: "Dart", icon: SiDart, color: "#0175C2", category: "Language" },
  { name: "Go", icon: SiGo, color: "#00ADD8", category: "Language" },
  // Frontend
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", category: "Frontend" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  // Backend & DB
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Database" },
  // Tools
  { name: "Git", icon: SiGit, color: "#F05032", category: "Tool" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff", category: "Tool" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "Tool" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff", category: "Tool" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Tool" },
];

const otherSkills = [
  { icon: <FiLayout size={14} />, text: "Responsive Web Design" },
  { icon: <FiMonitor size={14} />, text: "UI/UX Design" },
  { icon: <FiGlobe size={14} />, text: "API Integration" },
  { icon: <FiShield size={14} />, text: "Basic Cyber Security" },
  { icon: <FiServer size={14} />, text: "Network Administration" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal char by char
      gsap.from(".skills-title-text", {
        y: 40, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });

      // Stagger tech cards
      gsap.from(".tech-card", {
        y: 50, opacity: 0, scale: 0.92,
        duration: 0.65, stagger: 0.05, ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".tech-grid", start: "top 78%" },
      });

      // Other skills
      gsap.from(".other-skill-pill", {
        opacity: 0, scale: 0.85, duration: 0.5, stagger: 0.07, ease: "back.out(1.4)",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".other-skills-row", start: "top 88%" },
      });
    }, sectionRef);

    const refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => { ctx.revert(); clearTimeout(refreshTimeout); };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{ background: "var(--bg-secondary)", position: "relative" }}
    >
      {/* Top border fade */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />

      {/* Floating grid background */}
      <div className="grid-pattern" style={{ opacity: 0.4 }} />

      <div className="container">
        {/* Header */}
        <div className="skills-title" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label skills-title-text" style={{ justifyContent: "center" }}>
            {t.skills.label}
          </span>
          <h2
            className="skills-title-text"
            style={{
              fontFamily: "'Rolide', 'Syne', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "0.01em",
              marginBottom: "1rem",
            }}
          >
            {t.skills.headline}{" "}
            <span style={{ color: "var(--accent-light)" }}>{t.skills.headline_accent}</span>
          </h2>
          <p
            className="skills-title-text text-body"
            style={{
              maxWidth: 480,
              margin: "0 auto",
              color: "var(--text-muted)",
              fontFamily: "'Rolide', 'Syne', sans-serif",
              fontSize: "0.95rem",
            }}
          >
            {t.skills.description}
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div
          className="tech-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
          }}
        >
          {techStack.map(({ name, icon: Icon, color, category }) => (
            <div
              key={name}
              className="tech-card"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = color;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = `0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px ${color}22`;
                const iconEl = el.querySelector(".tech-icon") as HTMLElement;
                if (iconEl) {
                  iconEl.style.transform = "scale(1.15) rotate(-5deg)";
                  iconEl.style.filter = `drop-shadow(0 0 12px ${color}66)`;
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                const iconEl = el.querySelector(".tech-icon") as HTMLElement;
                if (iconEl) {
                  iconEl.style.transform = "scale(1) rotate(0)";
                  iconEl.style.filter = "none";
                }
              }}
            >
              <div
                className="tech-icon"
                style={{
                  color,
                  fontSize: "1.75rem",
                  transition: "transform 0.35s var(--ease-out), filter 0.35s",
                  marginBottom: "0.65rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Icon size={32} />
              </div>
              <div
                style={{
                  fontFamily: "'Rolide', 'Syne', sans-serif",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "0.2rem",
                  lineHeight: 1.2,
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontFamily: "'Rolide', 'Syne', sans-serif",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </div>
            </div>
          ))}
        </div>

        {/* Other skills row */}
        <div
          className="other-skills-row"
          style={{
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "'Rolide', 'Syne', sans-serif" }}>
            {t.skills.also}
          </span>
          {otherSkills.map((s) => (
            <span
              key={s.text}
              className="other-skill-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.3rem 0.8rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border)",
                borderRadius: "100px",
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                fontFamily: "'Rolide', 'Syne', sans-serif",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
              }}
            >
              {s.icon}
              {s.text}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .tech-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: border-color 0.3s, transform 0.35s var(--ease-out), box-shadow 0.35s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .tech-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.02), transparent);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          border-radius: inherit;
        }
        .tech-card:hover::before { opacity: 1; }

        @media (max-width: 1024px) {
          .tech-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .tech-card { padding: 1.1rem 1rem; }
        }
      `}</style>
    </section>
  );
}
