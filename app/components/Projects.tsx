"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
import { useLang } from "../context/LangContext";

gsap.registerPlugin(ScrollTrigger);

/* ─── Real project data — case study format ─────────────────────────── */
const projects = [
  {
    id: "burger-loin",
    featured: true,
    title: "Burger Loin",
    tagline: "Modern UMKM Website & Online Ordering System",
    problem:
      "A local street burger vendor in Sudiang, Makassar lacked any online presence, forcing customers to place orders through direct phone calls. There was no way to reach new customers, showcase the menu, or streamline the ordering workflow.",
    solution:
      "Designed and built a complete brand website from scratch — featuring an interactive menu, WhatsApp Business ordering integration, delivery area calculation, and a mobile-first layout optimised for low-bandwidth connections common in the area.",
    description:
      "A modern website for a local street burger vendor built with pure HTML5, CSS3, and vanilla JavaScript. Features a brand-aligned visual identity (#BURGERLOKALINDONESIA), an online ordering system with pickup/delivery flow, WhatsApp Business API integration, and a shipping-fee calculator scoped to the Sudiang service area.",
    stack: ["HTML5", "CSS3", "JavaScript ES6", "Responsive Design", "WhatsApp Business API"],
    outcome: "Instant online ordering via WhatsApp — Sudiang area customers can now order in under 60 seconds.",
    color: "#C23028",
    demo: "https://burger-loin-ebon.vercel.app/",
    source: "https://github.com/asrapul/Burger-Loin",
    gradient: "linear-gradient(135deg, rgba(194,48,40,0.2) 0%, rgba(255,193,7,0.08) 100%)",
    date: "June 2025",
    image: "/burgerloin_mockup.png",
  },
];

/* ─── Component ──────────────────────────────────────────────────────── */
export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".projects-title", start: "top 82%" },
      });

      gsap.from(".project-card-featured", {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".project-card-featured", start: "top 80%" },
      });

      gsap.from(".case-study-col", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".case-study-cols", start: "top 78%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects">
      <div className="container">
        {/* Header */}
        <div className="projects-title" style={{ marginBottom: "3.5rem" }}>
          <span className="section-label">{t.projects.label}</span>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h2 className="text-h2">
              {t.projects.headline}{" "}
              <span style={{ color: "var(--accent-light)" }}>{t.projects.headline_accent}</span>
            </h2>
          </div>
        </div>

        {/* Projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {projects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <a
            href="https://github.com/asrapul"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            id="view-all-projects"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .featured-card-inner {
            flex-direction: column !important;
          }
          .featured-card-visual {
            flex: none !important;
            width: 100% !important;
            min-height: 260px !important;
          }
          .case-study-cols {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── Featured Project Card ──────────────────────────────────────────── */
function FeaturedProjectCard({ project }: { project: typeof projects[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    gsap.to(card, {
      rotateX: ((y - cy) / cy) * -2,
      rotateY: ((x - cx) / cx) * 2,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1200,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "power3.out",
    });
    gsap.to(imageRef.current, { scale: 1, duration: 0.5, ease: "power2.out" });
  };

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, { scale: 1.03, duration: 0.5, ease: "power2.out" });
  };

  return (
    <div
      ref={cardRef}
      className="project-card-featured"
      id={project.id}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        handleMouseLeave();
        if (cardRef.current) {
          cardRef.current.style.borderColor = "var(--border)";
          cardRef.current.style.boxShadow = "none";
        }
      }}
      onMouseEnter={() => {
        handleMouseEnter();
        if (cardRef.current) {
          cardRef.current.style.borderColor = "var(--border-hover)";
          cardRef.current.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)";
        }
      }}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition: "border-color 0.35s, box-shadow 0.35s",
      }}
    >
      {/* Inner — horizontal split layout */}
      <div
        className="featured-card-inner"
        style={{ display: "flex", flexDirection: "row", minHeight: "420px" }}
      >
        {/* Visual / Mockup */}
        <div
          ref={imageRef}
          className="featured-card-visual"
          style={{
            flex: "0 0 48%",
            background: project.gradient,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Grid lines */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Featured badge */}
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              padding: "0.3rem 0.75rem",
              background: "var(--accent)",
              borderRadius: "100px",
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "var(--bg-primary)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              zIndex: 2,
              boxShadow: "0 4px 16px rgba(255,255,255,0.15)",
            }}
          >
            ★ Featured Project
          </div>

          {/* Browser mockup */}
          <div className="browser-mockup-container">
            <div className="browser-shell">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="browser-dot dot-red" />
                  <span className="browser-dot dot-yellow" />
                  <span className="browser-dot dot-green" />
                </div>
                <div className="browser-address">burger-loin-ebon.vercel.app</div>
              </div>
              <div className="browser-screen">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 48vw"
                  className="browser-image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            justifyContent: "center",
          }}
        >
          {/* Title */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.35rem" }}>
              <h3 style={{ fontFamily: "'Rolide', 'Syne', sans-serif", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                {project.title}
              </h3>
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 500 }}>
                {project.date}
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", color: project.color, fontWeight: 600, letterSpacing: "0.01em" }}>
              {project.tagline}
            </p>
          </div>

          {/* Case Study Columns */}
          <div
            className="case-study-cols"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              borderTop: "1px solid var(--border)",
              paddingTop: "1.25rem",
            }}
          >
            <div className="case-study-col">
              <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.45rem" }}>
                The Problem
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.65, fontFamily: "var(--font-body)" }}>
                {project.problem}
              </p>
            </div>
            <div className="case-study-col">
              <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.45rem" }}>
                The Solution
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.65, fontFamily: "var(--font-body)" }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Outcome pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.35rem 0.85rem",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "100px",
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
              alignSelf: "flex-start",
              fontFamily: "var(--font-body)",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block", flexShrink: 0 }} />
            {project.outcome}
          </div>

          {/* Tech stack */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {project.stack.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "0.25rem 0.65rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  borderRadius: "100px",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  fontWeight: 500,
                  fontFamily: "var(--font-body)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "0.75rem", paddingTop: "0.25rem" }}>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              id={`${project.id}-demo`}
              className="btn btn-primary"
              style={{ padding: "0.6rem 1.4rem", fontSize: "0.85rem" }}
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              id={`${project.id}-source`}
              className="btn btn-outline"
              style={{ padding: "0.6rem 1.4rem", fontSize: "0.85rem" }}
            >
              <FiGithub size={14} />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
