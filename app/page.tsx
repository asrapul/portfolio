"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLang } from "./context/LangContext";

gsap.registerPlugin(ScrollTrigger);

// Centralized project data (also used on detail pages)
const projectsData = [
  {
    id: "burger-loin",
    icon: "/burger-loin-logo.png",
    color: "#C23028",
    gradient: "linear-gradient(135deg, rgba(194,48,40,0.25) 0%, rgba(255,193,7,0.1) 100%)",
    stack: ["HTML5", "CSS3", "JavaScript ES6", "Responsive Design", "WhatsApp Business API"],
    demo: "https://burger-loin-ebon.vercel.app/",
    source: "https://github.com/asrapul/Burger-Loin",
    date: "June 2025",
    image: "/burgerloin_mockup.png",
  },
  {
    id: "tk-mitra-bunda",
    icon: "/tk-mitra-bunda-logo.png",
    color: "#27c93f",
    gradient: "linear-gradient(135deg, rgba(39,201,63,0.2) 0%, rgba(0,0,0,0) 100%)",
    stack: ["Next.js 16", "Tailwind CSS v4", "Supabase", "html5-qrcode", "React Hooks"],
    demo: "#", // Replace with real URL if available
    source: "#", // Replace with real URL if available
    date: "August 2026",
    image: "/tk-mitra-bunda-logo.png", // Temporarily use logo for mockup if no mockup image is provided
  }
];

export default function LandingPage() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { t, lang } = useLang();

  // Translations for the landing page
  const copy = {
    en: {
      headline: "Projects",
      sub: "Here are the projects I have built — each one crafted with purpose, performance, and real-world impact in mind. Click any project to explore the details.",
      hire: "Hire me",
      portfolio: "Continue to Portfolio",
      viewProject: "View Project",
    },
    id: {
      headline: "Proyek",
      sub: "Berikut adalah proyek-proyek yang telah saya bangun — masing-masing dirancang dengan tujuan, performa, dan dampak nyata. Klik proyek untuk melihat detailnya.",
      hire: "Hire me",
      portfolio: "Lanjut ke Portofolio",
      viewProject: "Lihat Proyek",
    },
  };
  const c = copy[lang as keyof typeof copy] || copy.en;

  // Project card titles & descriptions from locales
  const getProjectTranslation = (id: string) => {
    // @ts-ignore
    return t.projects.items?.find((item: any) => item.id === id);
  };

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.6, ease: "power3.out" });
    };
    window.addEventListener("mousemove", moveCursor);

    const ctx = gsap.context(() => {
      gsap.from(".landing-headline", { y: 40, opacity: 0, duration: 1, ease: "power3.out", delay: 0.1 });
      gsap.from(".landing-sub", { y: 30, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.25 });
      gsap.from(".landing-ctas", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.38 });
      gsap.from(".project-grid-item", {
        y: 40, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.08, delay: 0.45,
        clearProps: "transform,opacity",
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />

      <Navbar variant="landing" />

      <main id="main-content" style={{ paddingTop: "110px", minHeight: "85vh", paddingBottom: "6rem" }}>
        <div className="container" style={{ maxWidth: "860px" }}>

          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <h1
              className="landing-headline"
              style={{
                fontFamily: "'Rolide', 'Syne', sans-serif",
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
            >
              {c.headline}
            </h1>
            <p
              className="landing-sub"
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "560px",
              }}
            >
              {c.sub}
            </p>

            {/* CTAs */}
            <div
              className="landing-ctas"
              style={{ display: "flex", gap: "0.85rem", marginTop: "2rem", flexWrap: "wrap", alignItems: "center" }}
            >
              <Link
                href="/portfolio#contact"
                className="btn btn-primary"
                style={{ padding: "0.7rem 1.8rem", fontSize: "0.9rem" }}
              >
                {c.hire}
              </Link>
              <Link
                href="/portfolio"
                className="btn btn-outline"
                style={{ padding: "0.7rem 1.8rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                {c.portfolio}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "var(--border)", marginBottom: "2.5rem" }} />

          {/* Project Grid */}
          <div className="grid gap-6 project-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))" }}>
            {projectsData.map((project) => {
              const translated = getProjectTranslation(project.id);
              const title = translated?.title || "Untitled Project";
              const description = translated?.description || "";

              return (
                <ProjectGridCard
                  key={project.id}
                  project={project}
                  title={title}
                  description={description}
                  viewLabel={c.viewProject}
                />
              );
            })}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

/* ─── Project Grid Card ──────────────────────────────────────────────── */
function ProjectGridCard({
  project,
  title,
  description,
  viewLabel,
}: {
  project: typeof projectsData[0];
  title: string;
  description: string;
  viewLabel: string;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleEnter = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      background: "rgba(255,255,255,0.04)",
      duration: 0.25,
      ease: "power2.out",
    });
  };
  const handleLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      background: "var(--bg-card)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Trim description to max 9 words
  const words = description.split(" ");
  const shortDesc = words.length > 9 ? words.slice(0, 9).join(" ") + "…" : description;

  return (
    <Link
      ref={cardRef}
      href={`/projects/${project.id}`}
      className="project-grid-item bg-neutral-900 rounded-2xl py-6 pr-6 pl-10 flex items-center gap-6 hover:bg-neutral-800/80 transition-colors"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ textDecoration: "none", minHeight: "110px", maxHeight: "130px", height: "120px" }}
    >
      {/* Icon / Thumbnail */}
      <div
        className="relative w-14 h-14 rounded-full flex items-center justify-center shrink-0 overflow-hidden bg-black"
      >
        <Image
          src={project.icon}
          alt={title}
          fill
          sizes="64px"
          className="object-contain p-2"
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div 
          className="text-base text-white mb-2 truncate tracking-wide"
          style={{ fontFamily: "'Rolide', 'Syne', sans-serif" }}
        >
          {title}
        </div>
        <p className="text-sm text-neutral-400 leading-relaxed m-0 line-clamp-2" style={{ lineHeight: "1.6" }}>
          {shortDesc}
        </p>
      </div>

      {/* Hover arrow */}
      <div
        className="grid-card-arrow"
        style={{
          position: "absolute",
          top: "1.1rem",
          right: "1.1rem",
          color: "var(--text-muted)",
          opacity: 0,
          transition: "opacity 0.2s, transform 0.2s",
          transform: "translate(-4px, 4px)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>

      <style>{`
        .project-grid-item:hover .grid-card-arrow {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>
    </Link>
  );
}
