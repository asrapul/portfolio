"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { FiArrowLeft, FiExternalLink, FiX, FiAward, FiCalendar, FiBriefcase } from "react-icons/fi";
import { useLang } from "../context/LangContext";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialUrl: string;
}

export default function CertificatesPage() {
  const { t } = useLang();
  const pageRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Certificates list
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Next.js Developer Certification",
      issuer: "Dicoding Indonesia",
      date: "2025",
      imageUrl: "/certificates/cert-nextjs.png",
      credentialUrl: "https://www.dicoding.com",
    },
    {
      id: 2,
      title: "React.js Frontend Engineering Certificate",
      issuer: "Telkom DigiUp",
      date: "2024",
      imageUrl: "/certificates/cert-react.png",
      credentialUrl: "https://digiup.telkom.co.id",
    },
    {
      id: 3,
      title: "First Winner - Web & Graphic Design Competition",
      issuer: "HMP-TI DIES NATALIS",
      date: "2025",
      imageUrl: "/certificates/cert-design.png",
      credentialUrl: "https://github.com/asrapul",
    },
    {
      id: 4,
      title: "Frontend Developer Internship Completion",
      issuer: "Ashari Tech",
      date: "2025",
      imageUrl: "/certificates/cert-intern.png",
      credentialUrl: "https://ashari.tech",
    }
  ];

  // Handle cursor movement
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".cert-header-anim", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Staggered Cards Reveal
      gsap.from(".cert-card-anim", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.3,
        clearProps: "transform,opacity",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const openPreview = (cert: Certificate) => {
    setSelectedCert(cert);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
    // Delay clearing selected cert to avoid flash during fade-out
    setTimeout(() => setSelectedCert(null), 300);
  };

  return (
    <div
      ref={pageRef}
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
        padding: "4rem 0 8rem 0",
        color: "#ffffff"
      }}
    >
      {/* Background Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Custom cursor glow */}
      <div
        ref={cursorRef}
        className="cursor-glow"
        aria-hidden="true"
      />

      <div className="container">
        
        {/* Navigation Header */}
        <div className="cert-header-anim" style={{ marginBottom: "3rem" }}>
          <Link
            href="/"
            className="btn btn-outline"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.85rem",
              padding: "0.5rem 1.25rem",
            }}
          >
            <FiArrowLeft size={16} />
            {t.certificates.back}
          </Link>
        </div>

        {/* Title Section */}
        <div style={{ marginBottom: "5rem" }}>
          <span className="section-label cert-header-anim">
            {t.experience.label}
          </span>
          <h1
            className="cert-header-anim"
            style={{
              fontFamily: "'Rolide', 'Syne', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "0.01em",
              marginBottom: "1.25rem",
            }}
          >
            {t.certificates.title}{" "}
            <span style={{ color: "var(--accent-light)" }}>{t.certificates.accent_title}</span>
          </h1>
          <p
            className="cert-header-anim"
            style={{
              maxWidth: 600,
              color: "var(--text-secondary)",
              fontFamily: "var(--font-sans)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            {t.certificates.subtitle}
          </p>
        </div>

        {/* Certificate Minimal Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="card cert-card-anim"
              style={{
                cursor: "pointer",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                display: "flex",
                flexDirection: "column"
              }}
              onClick={() => openPreview(cert)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.4)";
                const img = (e.currentTarget as HTMLElement).querySelector(".cert-card-img") as HTMLElement;
                if (img) img.style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                const img = (e.currentTarget as HTMLElement).querySelector(".cert-card-img") as HTMLElement;
                if (img) img.style.transform = "scale(1)";
              }}
            >
              {/* Image Box */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "210px",
                  overflow: "hidden",
                  background: "#161616",
                  borderBottom: "1px solid var(--border)"
                }}
              >
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="cert-card-img"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />
              </div>

              {/* Text Area */}
              <div
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  gap: "0.75rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.75rem" }}>
                  <FiBriefcase size={12} />
                  <span style={{ textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>{cert.issuer}</span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Rolide', 'Syne', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    lineHeight: 1.25,
                    margin: "0.25rem 0"
                  }}
                >
                  {cert.title}
                </h3>

                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "auto" }}>
                  <FiCalendar size={13} />
                  <span>{t.certificates.date}: {cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview Component */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: modalOpen ? 1 : 0,
          pointerEvents: modalOpen ? "all" : "none",
          transition: "opacity 0.3s ease-in-out",
          padding: "1.5rem"
        }}
      >
        {/* Backdrop overlay */}
        <div
          onClick={closePreview}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(12px)",
            cursor: "zoom-out"
          }}
        />

        {/* Modal Window */}
        {selectedCert && (
          <div
            className="card"
            style={{
              position: "relative",
              maxWidth: "850px",
              width: "100%",
              background: "#121212",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(0, 0, 0, 0.8)",
              zIndex: 1,
              transform: modalOpen ? "scale(1)" : "scale(0.95)",
              transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {/* Close Button Top Right */}
            <button
              onClick={closePreview}
              aria-label={t.certificates.close}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s",
                zIndex: 10,
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.transform = "rotate(90deg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.5)";
                (e.currentTarget as HTMLElement).style.transform = "rotate(0deg)";
              }}
            >
              <FiX size={18} />
            </button>

            {/* Modal Certificate Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "auto",
                maxHeight: "68vh",
                aspectRatio: "4/3",
                background: "#0c0c0c",
                overflow: "hidden"
              }}
            >
              <Image
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                fill
                sizes="(max-width: 900px) 100vw, 850px"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Modal Detail & Actions Footer */}
            <div
              style={{
                padding: "2rem",
                background: "#141414",
                borderTop: "1px solid var(--border)",
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div style={{ flex: "1 1 300px" }}>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)"
                  }}
                >
                  {t.certificates.issued_by} {selectedCert.issuer} · {selectedCert.date}
                </span>
                <h2
                  style={{
                    fontFamily: "'Rolide', 'Syne', sans-serif",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginTop: "0.35rem",
                    lineHeight: 1.2
                  }}
                >
                  {selectedCert.title}
                </h2>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    padding: "0.75rem 1.75rem",
                    fontSize: "0.85rem"
                  }}
                >
                  {t.certificates.verify}
                  <FiExternalLink size={14} />
                </a>
                <button
                  onClick={closePreview}
                  className="btn btn-outline"
                  style={{
                    padding: "0.75rem 1.5rem",
                    fontSize: "0.85rem"
                  }}
                >
                  {t.certificates.close}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
