"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    period: "2024 — Sekarang",
    role: "Member & Learner",
    company: "Incubator Community SMK Telkom Makassar",
    description:
      "Aktif dalam komunitas pembelajaran Network Administrator dan Web Development. Berpartisipasi dalam diskusi teknis, praktik jaringan, dan pengembangan website. Berbagi pengetahuan dengan anggota komunitas lainnya.",
    tags: ["Network Admin", "Web Development", "Community"],
    highlight: true,
  },
  {
    period: "2024",
    role: "Frontend Development Participant",
    company: "Telkom DigiUp",
    description:
      "Mempelajari pengembangan website modern menggunakan React.js. Mengembangkan kemampuan frontend development dan kolaborasi tim. Mendalami praktik industri dalam pengembangan aplikasi web.",
    tags: ["React.js", "Frontend", "Training"],
    highlight: false,
  },
  {
    period: "2023 — Sekarang",
    role: "Siswa Rekayasa Perangkat Lunak",
    company: "SMK Telkom Makassar",
    description:
      "Fokus pada Software Engineering dan pengembangan web & mobile. Aktif mengikuti kompetisi dan pelatihan teknologi. Mengembangkan berbagai proyek berbasis web, mobile, dan jaringan.",
    tags: ["Software Engineering", "Web", "Mobile", "Networking"],
    highlight: false,
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-title", {
        y: 30, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".exp-title", start: "top 82%" },
      });
      gsap.from(".timeline-item", {
        x: -30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".timeline-container", start: "top 78%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      style={{ background: "var(--bg-secondary)", position: "relative" }}
    >
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
        <div className="exp-title" style={{ marginBottom: "3.5rem" }}>
          <span className="section-label">Journey</span>
          <h2 className="text-h2">
            Experience &{" "}
            <span style={{ color: "var(--accent-light)" }}>Growth</span>
          </h2>
        </div>

        <div
          className="timeline-container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left — summary card */}
          <div
            style={{ position: "sticky", top: "100px" }}
            className="exp-summary"
          >
            <div
              className="card"
              style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <div
                style={{
                  width: 48, height: 48,
                  borderRadius: "12px",
                  background: "var(--accent-dim)",
                  border: "1px solid rgba(108,99,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}
              >
                🚀
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Terus Berkembang
                </h3>
                <p className="text-body" style={{ fontSize: "0.875rem" }}>
                  Dari siswa RPL hingga aktif berkontribusi di komunitas teknologi
                  dan mengikuti program pelatihan industri.
                </p>
              </div>
              <div
                style={{
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                }}
              >
                {[
                  { icon: "🏫", text: "SMK Telkom Makassar" },
                  { icon: "🤝", text: "Incubator Community" },
                  { icon: "⚡", text: "Telkom DigiUp Alumni" },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — timeline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              position: "relative",
              paddingLeft: "2rem",
            }}
          >
            {/* Vertical line */}
            <div className="timeline-line" />

            {timeline.map((item, i) => (
              <div
                key={i}
                className="timeline-item"
                style={{
                  paddingBottom: i < timeline.length - 1 ? "2.5rem" : 0,
                  position: "relative",
                }}
              >
                {/* Dot */}
                <div
                  className="timeline-dot"
                  style={{
                    background: item.highlight ? "var(--accent)" : "var(--text-muted)",
                    boxShadow: item.highlight ? "0 0 12px var(--accent-glow)" : "none",
                  }}
                />

                <div
                  style={{
                    background: item.highlight ? "rgba(108,99,255,0.06)" : "var(--bg-card)",
                    border: `1px solid ${item.highlight ? "rgba(108,99,255,0.2)" : "var(--border)"}`,
                    borderRadius: "var(--radius-md)",
                    padding: "1.5rem",
                    transition: "all 0.3s var(--ease-out)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = item.highlight ? "rgba(108,99,255,0.2)" : "var(--border)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      color: item.highlight ? "var(--accent-light)" : "var(--text-muted)",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.period}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {item.role}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      marginBottom: "0.85rem",
                      fontWeight: 500,
                    }}
                  >
                    @ {item.company}
                  </div>
                  <p
                    className="text-body"
                    style={{ fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1rem" }}
                  >
                    {item.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "0.2rem 0.6rem",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid var(--border)",
                          borderRadius: "100px",
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-container { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .exp-summary { position: relative !important; top: 0 !important; }
        }
      `}</style>
    </section>
  );
}
