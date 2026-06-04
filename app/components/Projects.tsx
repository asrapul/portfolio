"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "burger-loin",
    featured: true,
    title: "Burger Loin",
    tagline: "Website UMKM Modern & Sistem Pemesanan Online",
    description:
      "Website modern untuk UMKM gerobak burger keliling di Sudiang, Makassar. Menampilkan branding khas #BURGERLOKALINDONESIA dengan sistem pemesanan online, pickup/delivery dengan kalkulasi ongkir area, serta integrasi WhatsApp Business.",
    stack: ["HTML5", "CSS3", "JavaScript ES6", "Responsive Design", "WhatsApp API"],
    outcome: "Pemesanan online instan via WhatsApp (Sudiang Area)",
    color: "#C23028",
    demo: "https://burger-loin-ebon.vercel.app/",
    source: "https://github.com/asrapul/Burger-Loin",
    gradient: "linear-gradient(135deg, rgba(194,48,40,0.2) 0%, rgba(255,193,7,0.08) 100%)",
    emoji: "🍔",
    date: "15 Juni 2025",
    image: "/burgerloin_mockup.png",
  },
  {
    id: "proj-1",
    featured: false,
    title: "NexCommerce",
    tagline: "Full-stack e-commerce built for speed",
    description:
      "A modern e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard. Built to handle thousands of concurrent users without breaking a sweat.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind"],
    outcome: "↑ 40% faster checkout flow vs. legacy system",
    color: "#6c63ff",
    demo: "https://demo.example.com",
    source: "https://github.com",
    gradient: "linear-gradient(135deg, rgba(108,99,255,0.2) 0%, rgba(99,179,255,0.08) 100%)",
    emoji: "🛒",
    date: "Maret 2025",
  },
  {
    id: "proj-2",
    featured: false,
    title: "Focusly",
    tagline: "Pomodoro & task manager for deep work",
    description:
      "A minimalist productivity app combining Pomodoro timer, task management, and focus analytics. Designed to eliminate distraction and maximize deep work sessions.",
    stack: ["React", "Zustand", "Framer Motion", "IndexedDB"],
    outcome: "2k+ active users, 4.8/5 rating",
    color: "#4ade80",
    demo: "https://demo.example.com",
    source: "https://github.com",
    gradient: "linear-gradient(135deg, rgba(74,222,128,0.12) 0%, rgba(34,197,94,0.04) 100%)",
    emoji: "⏱",
    date: "Januari 2025",
  },
  {
    id: "proj-3",
    featured: false,
    title: "DevBoard",
    tagline: "Developer dashboard for GitHub insights",
    description:
      "A real-time GitHub analytics dashboard that visualizes contribution patterns, repository stats, and language distribution — with beautiful data visualizations.",
    stack: ["React", "D3.js", "GitHub API", "Supabase", "TailwindCSS"],
    outcome: "Featured in GitHub Trending — 500+ stars",
    color: "#f59e0b",
    demo: "https://demo.example.com",
    source: "https://github.com",
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(234,88,12,0.04) 100%)",
    emoji: "📊",
    date: "November 2024",
  },
  {
    id: "proj-4",
    featured: false,
    title: "Aetheria UI",
    tagline: "Open-source component library",
    description:
      "A handcrafted React component library with 40+ components, dark mode support, and full TypeScript typings. Built with accessibility and composability as first principles.",
    stack: ["React", "TypeScript", "Storybook", "Rollup", "CSS-in-JS"],
    outcome: "Used in 15+ production projects",
    color: "#e879f9",
    demo: "https://demo.example.com",
    source: "https://github.com",
    gradient: "linear-gradient(135deg, rgba(232,121,249,0.12) 0%, rgba(168,85,247,0.04) 100%)",
    emoji: "🎨",
    date: "September 2024",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

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

      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".projects-grid", start: "top 78%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects">
      <div className="container">
        {/* Header */}
        <div className="projects-title" style={{ marginBottom: "3.5rem" }}>
          <span className="section-label">Work</span>
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
              Selected{" "}
              <span style={{ color: "var(--accent-light)" }}>Projects</span>
            </h2>
            <p
              className="text-body"
              style={{ maxWidth: 360, textAlign: "right" }}
              id="projects-sub"
            >
              A curated selection of work I&apos;m proud of. Each project
              solves a real problem, built with intention.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.25rem",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
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
            View all on GitHub
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          #projects-sub { text-align: left !important; }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
    const rotateX = ((y - cy) / cy) * -4;
    const rotateY = ((x - cx) / cx) * 4;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 800,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, {
      scale: 1.04,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeaveImage = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const isFeatured = project.featured;
  const isLarge = index === 0;

  return (
    <div
      ref={cardRef}
      className={`project-card ${isLarge ? "project-card-large" : ""}`}
      id={project.id}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { handleMouseLeave(); handleMouseLeaveImage(); }}
      onMouseEnter={handleMouseEnter}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.35s, box-shadow 0.35s",
        transformStyle: "preserve-3d",
        willChange: "transform",
        gridColumn: isLarge ? "1 / -1" : "auto",
        display: "flex",
        flexDirection: isLarge ? undefined : "column",
      }}
    >
      {/* Visual area */}
      <div
        ref={imageRef}
        className={isLarge ? "project-card-image-large" : ""}
        style={{
          background: project.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: isLarge ? undefined : "180px",
          flex: isLarge ? undefined : "none",
          transition: "transform 0.5s",
          width: isLarge ? undefined : "100%",
        }}
      >
        {/* Grid lines in background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Main visual emoji/icon or mockup image */}
        {project.image ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes={isLarge ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 768px) 100vw, 30vw"}
              style={{ objectFit: isLarge ? "contain" : "cover", objectPosition: "center", padding: isLarge ? "1.5rem" : "0" }}
              priority={isLarge}
            />
          </div>
        ) : (
          <div
            style={{
              fontSize: isLarge ? "5rem" : "3.5rem",
              position: "relative",
              zIndex: 1,
              filter: "drop-shadow(0 0 24px rgba(255,255,255,0.1))",
            }}
          >
            {project.emoji}
          </div>
        )}

        {/* Featured badge */}
        {isFeatured && (
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
            ★ Featured
          </div>
        )}
      </div>

      {/* Content area */}
      <div
        style={{
          padding: "1.75rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.9rem",
          flex: 1,
        }}
      >
        {/* Title row */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.25rem" }}>
            <h3 className="text-h3" style={{ margin: 0 }}>
              {project.title}
            </h3>
            {project.date && (
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 500 }}>
                {project.date}
              </span>
            )}
          </div>
          <p style={{ fontSize: "0.85rem", color: project.color, fontWeight: 500 }}>
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-body" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
          {project.description}
        </p>

        {/* Outcome */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.35rem 0.75rem",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "100px",
            fontSize: "0.78rem",
            color: "var(--text-secondary)",
            alignSelf: "flex-start",
          }}
        >
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
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            marginTop: "auto",
            paddingTop: "0.5rem",
          }}
        >
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            id={`${project.id}-demo`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.5rem 1.1rem",
              background: "var(--accent)",
              borderRadius: "100px",
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "black",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent-light)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
            Live Demo
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            id={`${project.id}-source`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.5rem 1.1rem",
              background: "transparent",
              border: "1px solid var(--border-hover)",
              borderRadius: "100px",
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "var(--text-secondary)",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
