"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "2+", label: "Years Learning" },
  { value: "10+", label: "Projects Built" },
  { value: "100%", label: "Passion Driven" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-left", {
        x: -40, opacity: 0, duration: 1, ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".about-left", start: "top 80%" },
      });
      gsap.from(".about-right", {
        x: 40, opacity: 0, duration: 1, ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".about-right", start: "top 80%" },
      });
      gsap.from(".stat-item", {
        y: 20, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".stats-grid", start: "top 85%" },
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
          {stats.map((s) => (
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
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: 800,
                  color: "var(--accent-light)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main about layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left */}
          <div className="about-left">
            <span className="section-label">About Me</span>
            <h2 className="text-h2" style={{ marginBottom: "1.5rem" }}>
              Building with purpose,{" "}
              <span style={{ color: "var(--accent-light)" }}>not just pixels.</span>
            </h2>
            <p className="text-body-lg" style={{ marginBottom: "1.25rem" }}>
              Saya adalah siswa Rekayasa Perangkat Lunak di SMK Telkom Makassar yang memiliki
              minat besar pada pengembangan web modern, software engineering, dan teknologi digital.
            </p>
            <p className="text-body" style={{ marginBottom: "1.25rem" }}>
              Saya aktif mempelajari React.js, Next.js, serta berbagai teknologi frontend untuk
              membangun aplikasi yang cepat, responsif, dan memiliki pengalaman pengguna yang baik.
            </p>
            <p className="text-body" style={{ marginBottom: "2rem" }}>
              Selain pengembangan web, saya juga tertarik pada cyber security, network administration,
              dan desain antarmuka. Tujuan saya adalah menjadi software engineer profesional yang mampu
              menciptakan produk digital yang memberikan dampak nyata bagi banyak orang.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                "Frontend Development (React, Next.js)",
                "UI/UX Design & Implementation",
                "Network Administration & Cyber Security",
                "Selalu belajar teknologi baru",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.95rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span
                    style={{
                      width: 18, height: 18,
                      borderRadius: "50%",
                      background: "var(--accent-dim)",
                      border: "1px solid var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--accent-light)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>

            {/* Info pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", marginTop: "2rem" }}>
              {[
                { icon: "📍", text: "Makassar, Indonesia" },
                { icon: "🎓", text: "SMK Telkom Makassar" },
                { icon: "✉️", text: "asyrafulamal06@gmail.com" },
              ].map((item) => (
                <div
                  key={item.text}
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
                  }}
                >
                  <span>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="about-right" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Profile image card */}
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
              {/* Gradient overlay at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  height: "40%",
                  background: "linear-gradient(to top, rgba(10,10,15,0.85) 0%, transparent 100%)",
                  zIndex: 1,
                }}
              />
              {/* Name overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  left: "1.25rem",
                  zIndex: 2,
                }}
              >
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>
                  Andi Asyraful Amal Ilham
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
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
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, fontStyle: "italic" }}>
                &ldquo;Membangun pengalaman digital yang modern, cepat, dan bermanfaat bagi banyak orang.&rdquo;
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
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
