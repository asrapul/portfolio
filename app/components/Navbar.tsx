"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useLang } from "../context/LangContext";

const navKeys = ["home", "about", "skills", "projects", "experience", "contact"] as const;

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // GSAP entrance
    if (logoRef.current) {
      gsap.from(logoRef.current, { opacity: 0, x: -20, duration: 0.9, ease: "power3.out", delay: 0.2 });
    }
    gsap.from(".nav-link-item", { opacity: 0, y: -12, duration: 0.6, stagger: 0.06, ease: "power3.out", delay: 0.3 });
    gsap.from(".nav-lang-switcher", { opacity: 0, x: 20, duration: 0.7, ease: "power3.out", delay: 0.5 });
  }, []);

  useEffect(() => {
    const navLinks = navKeys.map(k => ({ href: `#${k}` }));
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        ref={navRef}
        className="navbar"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: "0 2rem",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          background: scrolled ? "rgba(10, 10, 15, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        {/* Logo — Rolide font */}
        <a
          ref={logoRef}
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="nav-logo"
          aria-label="Go to Home"
        >
          <span className="nav-logo-dot" />
          asrap.
        </a>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          {navKeys.map((key) => {
            const isActive = activeSection === key;
            return (
              <a
                key={key}
                href={`#${key}`}
                onClick={(e) => handleLinkClick(e, `#${key}`)}
                className={`nav-link-item ${isActive ? "nav-link-active" : ""}`}
              >
                {t.nav[key as keyof typeof t.nav]}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="btn btn-primary"
            style={{ marginLeft: "0.5rem", padding: "0.5rem 1.4rem", fontSize: "0.875rem" }}
          >
            {t.nav.hire}
          </a>

          {/* Language Switcher */}
          <div className="nav-lang-switcher">
            <button
              onClick={() => setLang("en")}
              className={`lang-btn ${lang === "en" ? "lang-btn-active" : ""}`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span style={{ color: "var(--border-hover)", fontSize: "0.75rem" }}>|</span>
            <button
              onClick={() => setLang("id")}
              className={`lang-btn ${lang === "id" ? "lang-btn-active" : ""}`}
              aria-label="Switch to Indonesian"
            >
              ID
            </button>
          </div>
        </div>

        {/* Hamburger — Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="hamburger-btn"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "0.5rem",
            borderRadius: "8px",
            background: "transparent",
            transition: "background 0.2s",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22, height: 1.5,
                background: "var(--text-primary)",
                borderRadius: 2,
                transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                transform:
                  menuOpen
                    ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                    : i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)"
                    : "scaleX(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "rgba(10,10,15,0.97)",
          backdropFilter: "blur(24px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        className="mobile-menu"
      >
        {navKeys.map((key, i) => (
          <a
            key={key}
            href={`#${key}`}
            onClick={(e) => handleLinkClick(e, `#${key}`)}
            style={{
              fontFamily: "'Rolide', 'Syne', sans-serif",
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "0.02em",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transition: `all 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.06}s`,
            }}
          >
            {t.nav[key as keyof typeof t.nav]}
          </a>
        ))}
        {/* Mobile lang switcher */}
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <button onClick={() => setLang("en")} className={`lang-btn ${lang === "en" ? "lang-btn-active" : ""}`}>EN</button>
          <button onClick={() => setLang("id")} className={`lang-btn ${lang === "id" ? "lang-btn-active" : ""}`}>ID</button>
        </div>
      </div>

      <style>{`
        .nav-logo {
          font-family: 'Rolide', 'Syne', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: opacity 0.2s;
        }
        .nav-logo:hover { opacity: 0.75; }
        .nav-logo-dot {
          display: inline-block;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 10px var(--accent);
          flex-shrink: 0;
        }
        .nav-link-item {
          padding: 0.45rem 1rem;
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: transparent;
          transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link-item:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.05);
        }
        .nav-link-active {
          color: var(--text-primary) !important;
          background: rgba(255,255,255,0.07) !important;
        }
        .nav-lang-switcher {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-left: 0.75rem;
          padding: 0.3rem 0.6rem;
          border: 1px solid var(--border);
          border-radius: 100px;
          background: rgba(255,255,255,0.02);
        }
        .lang-btn {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.1rem 0.3rem;
          border-radius: 4px;
          transition: color 0.2s, background 0.2s;
        }
        .lang-btn:hover { color: var(--text-primary); }
        .lang-btn-active {
          color: var(--text-primary) !important;
          background: rgba(255,255,255,0.08) !important;
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
