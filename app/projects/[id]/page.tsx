"use client";

import { useEffect, useRef, use } from "react";
import { gsap } from "gsap";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiArrowLeft } from "react-icons/fi";
import { useLang } from "../../context/LangContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TkMitraBundaContent from "./TkMitraBundaContent";

// ── Centralized project metadata (non-translated) ───────────────────────
const projectsMeta: Record<string, {
  id: string;
  stack: string[];
  color: string;
  demo: string;
  source: string;
  gradient: string;
  date: string;
  image: string;
  imgWidth: number;
  imgHeight: number;
  browserUrl: string;
}> = {
  "burger-loin": {
    id: "burger-loin",
    stack: ["HTML5", "CSS3", "JavaScript ES6", "Responsive Design", "WhatsApp Business API"],
    color: "#C23028",
    demo: "https://burger-loin-ebon.vercel.app/",
    source: "https://github.com/asrapul/Burger-Loin",
    gradient: "linear-gradient(135deg, rgba(194,48,40,0.2) 0%, rgba(255,193,7,0.08) 100%)",
    date: "June 2025",
    image: "/burger-loin/burgerloin_mockup.png",
    imgWidth: 1000,
    imgHeight: 1000,
    browserUrl: "burger-loin-ebon.vercel.app",
  },
  "tk-mitra-bunda": {
    id: "tk-mitra-bunda",
    stack: ["React 19", "Next.js App Router", "Tailwind CSS 4", "Supabase", "html5-qrcode"],
    color: "#27c93f",
    demo: "https://absensi-demo.vercel.app/",
    source: "No Code Source",
    gradient: "linear-gradient(135deg, rgba(39,201,63,0.2) 0%, rgba(0,0,0,0) 100%)",
    date: "August 2026",
    image: "/Dashboard-Absensi.png",
    imgWidth: 1920,
    imgHeight: 1080,
    browserUrl: "absensi-demo.vercel.app",
  },
};

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const { t, lang } = useLang();
  const cursorRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const meta = projectsMeta[unwrappedParams.id];
  if (!meta) notFound();

  // Get translation
  // @ts-ignore
  const translated = t.projects.items?.find((item: any) => item.id === unwrappedParams.id);
  const title = translated?.title || unwrappedParams.id;
  const description = translated?.description || "";

  // Page copy
  const copy = {
    en: { back: "Back to Projects", liveDemo: "Live Demo", sourceCode: "Source Code", techStack: "Tech Stack", overview: "Project Overview", target: "Target Audience", problem: "Problems Solved", features: "Key Features" },
    id: { back: "Kembali ke Proyek", liveDemo: "Live Demo", sourceCode: "Kode Sumber", techStack: "Teknologi", overview: "Ringkasan Proyek", target: "Target Pengguna", problem: "Masalah yang Diselesaikan", features: "Fitur Utama" },
  };
  const c = copy[lang as keyof typeof copy] || copy.en;

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.6, ease: "power3.out" });
    };
    window.addEventListener("mousemove", moveCursor);

    const ctx = gsap.context(() => {
      gsap.from(".detail-back", { x: -20, opacity: 0, duration: 0.6, ease: "power3.out", delay: 0.1 });
      gsap.from(".detail-title", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.2 });
      gsap.from(".detail-meta", { y: 20, opacity: 0, duration: 0.7, ease: "power3.out", delay: 0.35 });
      gsap.from(".detail-mockup", { y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.45, clearProps: "transform,opacity" });
      gsap.from(".detail-body > *", { y: 30, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.1, delay: 0.6, clearProps: "transform,opacity" });
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

      <main style={{ paddingTop: "110px", paddingBottom: "6rem" }}>
        <div className="container" style={{ maxWidth: "820px" }}>

          {/* Back link */}
          <Link
            href="/"
            className="detail-back"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              marginBottom: "2.5rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <FiArrowLeft size={15} />
            {c.back}
          </Link>

          {/* Title */}
          <div className="detail-title" style={{ marginBottom: "1.5rem" }}>
            <h1
              style={{
                fontFamily: "'Rolide', 'Syne', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem",
              }}
            >
              {title}
            </h1>
            <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{meta.date}</span>
          </div>

          {/* Action buttons + date */}
          <div className="detail-meta" style={{ display: "flex", gap: "0.75rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            <a
              href={meta.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: "0.6rem 1.4rem", fontSize: "0.875rem" }}
            >
              <FiExternalLink size={14} />
              {c.liveDemo}
            </a>
            {meta.source === "No Code Source" ? (
              <span
                className="btn btn-outline"
                style={{ padding: "0.6rem 1.4rem", fontSize: "0.875rem", opacity: 0.5, cursor: "not-allowed" }}
              >
                <FiGithub size={14} />
                No Code Source
              </span>
            ) : (
              <a
                href={meta.source}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: "0.6rem 1.4rem", fontSize: "0.875rem" }}
              >
                <FiGithub size={14} />
                {c.sourceCode}
              </a>
            )}
          </div>

          {/* Project Image */}
          <div
            className="detail-mockup"
            style={{
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              marginBottom: "3rem",
              position: "relative",
              width: "100%",
              border: "1px solid var(--border)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}
          >
            <Image
              src={meta.image}
              alt={title}
              width={meta.imgWidth}
              height={meta.imgHeight}
              sizes="(max-width: 820px) 100vw, 820px"
              className="transition-transform duration-500 hover:scale-105"
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>

          {/* Body content */}
          <div className="detail-body" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {unwrappedParams.id === "tk-mitra-bunda" ? (
              <TkMitraBundaContent />
            ) : (
              <>
                {/* Overview */}
                <div>
                  <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>
                    {c.overview}
                  </h2>
                  {translated?.overview ? (
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                      {translated.overview}
                    </p>
                  ) : (
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                      {description}
                    </p>
                  )}
                </div>

                {/* Target Audience (If available) */}
                {translated?.target && (
                  <div>
                    <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>
                      {c.target}
                    </h2>
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                      {translated.target}
                    </p>
                  </div>
                )}

                {/* Problems Solved (If available) */}
                {translated?.problem_solved && Array.isArray(translated.problem_solved) && (
                  <div>
                    <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>
                      {c.problem}
                    </h2>
                    <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                      {translated.problem_solved.map((prob: string, idx: number) => (
                        <li key={idx} style={{ marginBottom: "0.5rem" }}>{prob}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Features (If available) */}
                {translated?.features && Array.isArray(translated.features) && (
                  <div>
                    <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>
                      {c.features}
                    </h2>
                    <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {translated.features.map((feat: { title: string, desc: string }, idx: number) => (
                        <li key={idx} style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{feat.title}</span>
                          <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{feat.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>
                    {c.techStack}
                  </h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {meta.stack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "0.35rem 0.85rem",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid var(--border)",
                          borderRadius: "100px",
                          fontSize: "0.82rem",
                          color: "var(--text-muted)",
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
