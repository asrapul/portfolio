"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiAward, FiBookOpen, FiBriefcase, FiZap } from "react-icons/fi";
import { useLang } from "../context/LangContext";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  const timelineData = t.experience.timeline as Array<{
    period: string;
    role: string;
    company: string;
    type: string;
    description: string;
    tags: string[];
  }>;

  const statsData = t.experience.stats as Array<{
    value: string;
    label: string;
  }>;

  // Custom inline SVG organization logos — Monochrome & Brand-specific
  const renderLogo = (type: string) => {
    let src = "/Icon/logo-telkom-schools.png";
    let alt = "School Logo";

    if (type === "internship") {
      src = "/Icon/AshariTech.png";
      alt = "Ashari Tech Logo";
    } else if (type === "achievement") {
      src = "/Icon/HMPTI.png";
      alt = "HMP-TI Logo";
    } else if (type === "training") {
      src = "/Icon/digiup-logo.png";
      alt = "Telkom DigiUp Logo";
    }

    return (
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "10px",
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          overflow: "hidden",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={26}
          height={26}
          className="experience-brand-logo"
        />
      </div>
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".exp-title", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".exp-title", start: "top 85%" },
      });

      // Sticky Sidebar Entrance
      gsap.from(".exp-sidebar-card", {
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".exp-sidebar-card", start: "top 80%" },
      });

      // Individual Timeline Cards Stagger Reveal
      gsap.from(".timeline-item-container", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: { trigger: ".timeline-list", start: "top 78%" },
      });

      // Timeline Scroll-Bound Progress Line Animation
      gsap.fromTo(
        ".timeline-track-active",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-list",
            start: "top 25%",
            end: "bottom 75%",
            scrub: true,
          },
        }
      );

      // Light up nodes and card borders dynamically based on scroll position
      const items = gsap.utils.toArray(".timeline-item-container");
      items.forEach((item: any) => {
        const dot = item.querySelector(".timeline-node-dot");
        const card = item.querySelector(".timeline-card-body");
        const isAchievement = item.classList.contains("achievement-highlight");

        gsap.fromTo(
          [dot, card],
          { opacity: 0.45, borderColor: "var(--border)" },
          {
            opacity: 1,
            borderColor: isAchievement ? "rgba(255, 255, 255, 0.45)" : "var(--border-hover)",
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "bottom 30%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      style={{ background: "var(--bg-secondary)", position: "relative", padding: "6rem 0" }}
    >
      {/* Top and Bottom Section Fades */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />

      <div className="container">
        {/* Section Title */}
        <div className="exp-title" style={{ marginBottom: "4.5rem" }}>
          <span className="section-label">{t.experience.label}</span>
          <h2
            style={{
              fontFamily: "'Rolide', 'Syne', sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "0.01em",
            }}
          >
            {t.experience.headline}{" "}
            <span style={{ color: "var(--accent-light)" }}>{t.experience.headline_accent}</span>
          </h2>
        </div>

        <div className="timeline-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "start" }}>
          
          {/* Left Sticky Summary Sidebar */}
          <div ref={sidebarRef} className="exp-sidebar" style={{ position: "sticky", top: "100px" }}>
            <div className="card exp-sidebar-card" style={{ padding: "2.25rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "10px",
                  background: "var(--accent-dim)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-light)",
                }}
              >
                <FiBriefcase size={20} />
              </div>
              
              <div>
                <h3
                  style={{
                    fontFamily: "'Rolide', 'Syne', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {t.experience.growing}
                </h3>
                <p className="text-body" style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {t.experience.growing_desc}
                </p>
              </div>

              {/* Statistics Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem", borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                {statsData.map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "1rem",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Rolide', 'Syne', sans-serif",
                        fontSize: "1.6rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        lineHeight: 1.1,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        marginTop: "0.3rem",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Timeline Column */}
          <div ref={timelineRef} className="timeline-col" style={{ position: "relative", paddingLeft: "3.5rem" }}>
            
            {/* Professional Timeline Track */}
            <div
              className="timeline-track-bg"
              style={{
                position: "absolute",
                left: "19px",
                top: "10px",
                bottom: "10px",
                width: "2px",
                background: "var(--border)",
                borderRadius: "10px",
                zIndex: 1,
              }}
            >
              <div
                className="timeline-track-active"
                style={{
                  width: "100%",
                  height: "0%",
                  background: "linear-gradient(to bottom, var(--border) 0%, var(--text-primary) 50%, var(--border) 100%)",
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                }}
              />
            </div>

            {/* Timeline List */}
            <div className="timeline-list" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {timelineData.map((item, i) => {
                const isAchievement = item.type === "achievement";
                return (
                  <div
                    key={i}
                    className={`timeline-item-container ${isAchievement ? "achievement-highlight" : ""}`}
                    style={{ position: "relative" }}
                  >
                    {/* Glowing Timeline Dot */}
                    <div
                      className="timeline-node-dot"
                      style={{
                        position: "absolute",
                        left: "-3.5rem",
                        marginLeft: "14px",
                        top: "20px",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: isAchievement ? "#ffffff" : "var(--border)",
                        border: `2px solid ${isAchievement ? "rgba(255, 255, 255, 0.4)" : "var(--bg-secondary)"}`,
                        zIndex: 2,
                        transition: "all 0.3s ease",
                      }}
                    />

                    {/* Timeline Card */}
                    <div
                      className="timeline-card-body"
                      style={{
                        background: isAchievement ? "linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(10, 10, 15, 0) 100%)" : "var(--bg-card)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-lg)",
                        padding: "2rem",
                        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                        boxShadow: isAchievement ? "0 8px 32px -4px rgba(255, 255, 255, 0.03)" : "none",
                        position: "relative",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateX(5px) translateY(-2px)";
                        (e.currentTarget as HTMLElement).style.boxShadow = isAchievement
                          ? "0 12px 32px -4px rgba(255, 255, 255, 0.05)"
                          : "0 8px 24px -6px rgba(255, 255, 255, 0.02)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateX(0) translateY(0)";
                        (e.currentTarget as HTMLElement).style.boxShadow = isAchievement ? "0 8px 32px -4px rgba(255, 255, 255, 0.03)" : "none";
                      }}
                    >
                      {/* Highlight Trophy & Winner Badge */}
                      {isAchievement && (
                        <div
                          style={{
                            position: "absolute",
                            top: "1.5rem",
                            right: "1.5rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            background: "rgba(255, 255, 255, 0.08)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "100px",
                            padding: "0.25rem 0.75rem",
                            color: "#ffffff",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          <FiAward size={13} />
                          Winner
                        </div>
                      )}

                      {/* Header containing Logo & Organization Detail */}
                      <div style={{ display: "flex", alignItems: "center", gap: "1.1rem", marginBottom: "1.25rem" }}>
                        <div
                          className="timeline-logo"
                          style={{
                            flexShrink: 0,
                            transition: "transform 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.transform = "scale(1.1) rotate(2deg)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                          }}
                        >
                          {renderLogo(item.type)}
                        </div>
                        <div>
                          <div
                            style={{
                              fontFamily: "'Rolide', 'Syne', sans-serif",
                              fontSize: "0.82rem",
                              fontWeight: 700,
                              color: isAchievement ? "#ffffff" : "var(--text-muted)",
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {item.company}
                          </div>
                          <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>
                            {item.period}
                          </div>
                        </div>
                      </div>

                      {/* Role/Experience Title */}
                      <h4
                        style={{
                          fontFamily: "'Rolide', 'Syne', sans-serif",
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          marginBottom: "0.75rem",
                          lineHeight: 1.25,
                        }}
                      >
                        {item.role}
                      </h4>

                      {/* Professional Description — Restored Clean Typography */}
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.7,
                          marginBottom: "1.5rem",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {item.description}
                      </p>

                      {/* Technology / Competency Tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {item.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            style={{
                              padding: "0.25rem 0.7rem",
                              background: "rgba(255, 255, 255, 0.03)",
                              border: `1px solid ${isAchievement ? "rgba(255, 255, 255, 0.2)" : "var(--border)"}`,
                              borderRadius: "100px",
                              fontSize: "0.75rem",
                              fontWeight: 500,
                              color: isAchievement ? "#ffffff" : "var(--text-muted)",
                              letterSpacing: "0.01em",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .experience-brand-logo {
          filter: grayscale(100%) brightness(0.9) contrast(1.1);
          opacity: 0.6;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .experience-brand-logo:hover {
          filter: grayscale(100%) brightness(1.2) contrast(1.1) !important;
          opacity: 1 !important;
          transform: scale(1.08);
        }
        @media (max-width: 1024px) {
          .timeline-grid { gap: 3rem !important; }
        }
        @media (max-width: 768px) {
          .timeline-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
          .exp-sidebar { position: relative !important; top: 0 !important; }
          .timeline-col { padding-left: 2.75rem !important; }
          .timeline-track-bg { left: 14px !important; }
          .timeline-node-dot { left: -2.75rem !important; marginLeft: 9px !important; }
        }
      `}</style>
    </section>
  );
}
