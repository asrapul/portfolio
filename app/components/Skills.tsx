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
import { useLang } from "../context/LangContext";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from(".skills-title-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // Scroll-driven animation for icons (grayscale to color & opacity)
      gsap.fromTo(
        ".tech-icon-item",
        {
          filter: "grayscale(100%)",
          opacity: 0.4,
        },
        {
          filter: "grayscale(0%)",
          opacity: 1,
          duration: 0.8,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    const refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => {
      ctx.revert();
      clearTimeout(refreshTimeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{ background: "var(--bg-secondary)", position: "relative", padding: "8rem 0" }}
    >
      {/* Top and Bottom border fade */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />

      {/* Floating grid background */}
      <div className="grid-pattern" style={{ opacity: 0.4 }} />

      <div className="container">
        {/* Header */}
        <div className="skills-title" style={{ textAlign: "center", marginBottom: "5rem" }}>
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

        {/* Tech Stack Icons Wrapper */}
        <div
          ref={containerRef}
          className="tech-icons-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.5rem 3rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {techStack.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="tech-icon-item"
              title={name}
              style={{ color }}
            >
              <Icon size={56} className="tech-icon-svg" />
              <span className="tech-icon-tooltip">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tech-icon-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 5.5rem;
          height: 5.5rem;
          border-radius: var(--radius-md);
          background: transparent;
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.3s ease;
          position: relative;
          cursor: pointer;
        }
        .tech-icon-item:hover {
          transform: translateY(-8px) scale(1.15);
          background: rgba(255, 255, 255, 0.03);
        }
        .tech-icon-tooltip {
          position: absolute;
          bottom: -28px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.75rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          transform: translateY(-4px);
          white-space: nowrap;
          z-index: 10;
        }
        .tech-icon-item:hover .tech-icon-tooltip {
          opacity: 1;
          transform: translateY(0);
        }
        .tech-icon-svg {
          transition: filter 0.3s ease;
        }
        .tech-icon-item:hover .tech-icon-svg {
          filter: drop-shadow(0 0 12px currentColor);
        }

        @media (max-width: 640px) {
          .tech-icons-container {
            gap: 1.5rem 2rem !important;
          }
          .tech-icon-item {
            width: 4.5rem;
            height: 4.5rem;
          }
          .tech-icon-svg {
            width: 42px !important;
            height: 42px !important;
          }
        }
      `}</style>
    </section>
  );
}
