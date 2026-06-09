"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMapPin, FiBookOpen, FiMail, FiCheck } from "react-icons/fi";
import { useLang } from "../context/LangContext";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();

  const infoItems = [
    { icon: <FiMapPin size={13} />, text: t.about.location },
    { icon: <FiBookOpen size={13} />, text: t.about.school },
    { icon: <FiMail size={13} />, text: t.about.email },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label & heading stagger
      gsap.from(".about-label", {
        y: 20, opacity: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".about-label", start: "top 85%" },
      });
      gsap.from(".about-headline", {
        y: 30, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".about-headline", start: "top 85%" },
        delay: 0.1,
      });

      // Paragraphs stagger
      gsap.from(".about-para", {
        y: 24, opacity: 0, duration: 0.75, stagger: 0.12, ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".about-para", start: "top 83%" },
      });

      // Checklist items
      gsap.from(".about-check-item", {
        x: -20, opacity: 0, duration: 0.6, stagger: 0.09, ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".about-checklist", start: "top 82%" },
      });

      // Info pills
      gsap.from(".about-pill", {
        scale: 0.85, opacity: 0, duration: 0.5, stagger: 0.08, ease: "back.out(1.4)",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".about-pills", start: "top 85%" },
      });

      // Right column
      gsap.from(".about-right", {
        x: 40, opacity: 0, duration: 1, ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".about-right", start: "top 80%" },
      });

      // Stats
      gsap.from(".stat-item", {
        y: 20, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".stats-grid", start: "top 85%" },
      });
    }, sectionRef);

    const refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => { ctx.revert(); clearTimeout(refreshTimeout); };
  }, []);

  return (
    <section ref={sectionRef} id="about">
      <div className="container">
        {/* Stats row */}
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            marginBottom: "5rem",
          }}
        >
          {t.about.stats.map((s) => (
            <div
              key={s.label}
              className="stat-item"
              style={{
                padding: "2rem",
                background: "var(--bg-card)",
                textAlign: "center",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg-card-hover)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg-card)")}
            >
              <div
                style={{
                  fontFamily: "'Rolide', 'Syne', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: 700,
                  color: "var(--accent-light)",
                  letterSpacing: "0.01em",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500, fontFamily: "'Rolide', 'Syne', sans-serif" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main about layout */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}
          className="about-grid"
        >
          {/* Left */}
          <div className="about-left">
            <span className="section-label about-label">{t.about.label}</span>
            <h2
              className="about-headline"
              style={{
                fontFamily: "'Rolide', 'Syne', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "0.01em",
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
              }}
            >
              {t.about.headline}{" "}
              <span style={{ color: "var(--accent-light)" }}>{t.about.headline_accent}</span>
            </h2>

            <p
              className="about-para text-body-lg"
              style={{ marginBottom: "1.25rem", fontFamily: "'Rolide', 'Syne', sans-serif", fontSize: "1rem", lineHeight: 1.8 }}
            >
              {t.about.p1}
            </p>
            <p
              className="about-para text-body"
              style={{ marginBottom: "1.25rem", fontFamily: "'Rolide', 'Syne', sans-serif", fontSize: "0.95rem", lineHeight: 1.75 }}
            >
              {t.about.p2}
            </p>
            <p
              className="about-para text-body"
              style={{ marginBottom: "2rem", fontFamily: "'Rolide', 'Syne', sans-serif", fontSize: "0.95rem", lineHeight: 1.75 }}
            >
              {t.about.p3}
            </p>

            <div className="about-checklist" style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {(t.about.skills as string[]).map((item: string) => (
                <div
                  key={item}
                  className="about-check-item"
                  style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem", color: "var(--text-secondary)", fontFamily: "'Rolide', 'Syne', sans-serif" }}
                >
                  <span
                    style={{
                      width: 20, height: 20,
                      borderRadius: "50%",
                      background: "var(--accent-dim)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "var(--accent-light)",
                    }}
                  >
                    <FiCheck size={11} strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            {/* Info pills */}
            <div className="about-pills" style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", marginTop: "2rem" }}>
              {infoItems.map((item) => (
                <div
                  key={item.text}
                  className="about-pill"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.35rem 0.85rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "100px",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    fontFamily: "'Rolide', 'Syne', sans-serif",
                  }}
                >
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="about-right" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Profile image */}
            <div
              style={{
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                aspectRatio: "3/4",
                position: "relative",
              }}
            >
              <Image
                src="/asrapwolfcut.png"
                alt="Andi Asyraful Amal Ilham — Frontend Developer"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  height: "40%",
                  background: "linear-gradient(to top, rgba(10,10,15,0.85) 0%, transparent 100%)",
                  zIndex: 1,
                }}
              />
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem", zIndex: 2 }}>
                <div style={{ fontFamily: "'Rolide', 'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>
                  Andi Asyraful Amal Ilham
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "'Rolide', 'Syne', sans-serif" }}>
                  Frontend Developer · Makassar, Indonesia
                </div>
              </div>
            </div>

            {/* Quote card */}
            <div
              style={{
                padding: "1.5rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--accent)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  fontFamily: "'Rolide', 'Syne', sans-serif",
                }}
              >
                {t.about.quote}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .stat-item { padding: 1.25rem !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
