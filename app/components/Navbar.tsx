"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useLang } from "../context/LangContext";
import Link from "next/link";
import Image from "next/image";

const navKeys = ["home", "about", "skills", "experience", "contact"] as const;

export default function Navbar({ variant = "portfolio" }: { variant?: "landing" | "portfolio" }) {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isLanding = variant === "landing";

  useEffect(() => {
    // GSAP entrance - wrapped in context to fix React 18 strict mode double-trigger bug
    const ctx = gsap.context(() => {
      if (logoRef.current) {
        gsap.from(logoRef.current, { opacity: 0, x: -20, duration: 0.8, ease: "power3.out", delay: 0.15 });
      }
      // Animate the entire desktop-nav container to prevent links disappearing during translation re-renders
      gsap.from(".desktop-nav", { opacity: 0, y: -10, duration: 0.8, ease: "power3.out", delay: 0.2 });
      // Animate hamburger button for mobile entry
      if (!isLanding) {
        gsap.from(".hamburger-btn", { opacity: 0, scale: 0.8, duration: 0.6, ease: "back.out(1.5)", delay: 0.2 });
      }
    });
    return () => ctx.revert();
  }, [isLanding]);

  useEffect(() => {
    if (isLanding) return; // No scroll spy needed for landing page Navbar
    
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
  }, [isLanding]);

  useEffect(() => {
    if (isLanding) {
      const onScrollLanding = () => setScrolled(window.scrollY > 40);
      window.addEventListener("scroll", onScrollLanding, { passive: true });
      return () => window.removeEventListener("scroll", onScrollLanding);
    }
  }, [isLanding]);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        navRef.current && !navRef.current.contains(e.target as Node) &&
        (!mobileMenuRef.current || !mobileMenuRef.current.contains(e.target as Node))
      ) {
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
    
    if (isLanding) return; // shouldn't happen, but just in case
    
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height offset of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
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
          background: scrolled || menuOpen ? "rgba(0, 0, 0, 0.85)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        {/* Logo — Rolide font */}
        {isLanding ? (
          <Link
            href="/"
            className="nav-logo"
            aria-label="Go to Home"
            style={{ opacity: 1 }} // Ensure full opacity
          >
            <Image src="/Icon_web.png" alt="Logo" width={28} height={28} style={{ borderRadius: "50%" }} />
            asrap.
          </Link>
        ) : (
          <a
            ref={logoRef}
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="nav-logo"
            aria-label="Go to Home"
            style={{ opacity: 1 }} // Ensure full opacity
          >
            <Image src="/Icon_web.png" alt="Logo" width={28} height={28} style={{ borderRadius: "50%" }} />
            asrap.
          </a>
        )}

        {/* Desktop Nav */}
        <div className={`desktop-nav ${isLanding ? 'landing-nav' : ''}`} style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          {!isLanding && navKeys.map((key) => {
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
          {/* Projects link that goes to landing / page */}
          {!isLanding && (
            <Link
              href="/"
              className="nav-link-item"
            >
              {t.nav.projects}
            </Link>
          )}

          {isLanding ? (
            <Link
              href="/portfolio"
              className="btn btn-primary btn-landing-desktop"
              style={{ padding: "0.5rem 1.4rem", fontSize: "0.875rem" }}
            >
              Continue to Portfolio
            </Link>
          ) : (
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="btn btn-primary"
              style={{ marginLeft: "0.5rem", padding: "0.5rem 1.4rem", fontSize: "0.875rem" }}
            >
              {t.nav.hire}
            </a>
          )}

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

        {/* Mobile Landing CTA (shows only on mobile when isLanding is true) */}
        {isLanding && (
          <div className="mobile-landing-cta" style={{ display: "none" }}>
            <Link
              href="/portfolio"
              className="btn btn-primary"
              style={{ padding: "0.4rem 1rem", fontSize: "0.8rem" }}
            >
              Portfolio
            </Link>
          </div>
        )}

        {/* Hamburger — Mobile & Tablet (Only for portfolio) */}
        {!isLanding && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="hamburger-btn"
            style={{
              display: "none",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              border: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid rgba(255,255,255,0.1)",
              background: scrolled || menuOpen ? "rgba(255, 255, 255, 0.03)" : "rgba(0,0,0,0.2)",
              backdropFilter: "blur(8px)",
              gap: "5px",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              zIndex: 1001,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "18px" }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "1.5px",
                    background: "var(--text-primary)",
                    borderRadius: 2,
                    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform:
                      menuOpen
                        ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                        : i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)"
                        : "scaleX(0)"
                        : "none",
                    transformOrigin: "center",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </div>
          </button>
        )}
      </nav>

      {/* Mobile Drawer (Only for portfolio) */}
      {!isLanding && (
        <div
          ref={mobileMenuRef}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(0, 0, 0, 0.94)",
            backdropFilter: "blur(30px) saturate(200%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? "all" : "none",
            transition: "opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            padding: "2rem",
          }}
          className="mobile-menu"
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            {navKeys.map((key, i) => {
              const isActive = activeSection === key;
              return (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={(e) => handleLinkClick(e, `#${key}`)}
                  className={`mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`}
                  style={{
                    fontFamily: "'Rolide', 'Syne', sans-serif",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: isActive ? "var(--text-primary)" : "rgba(255,255,255,0.6)",
                    letterSpacing: "0.02em",
                    transform: menuOpen ? "translateY(0)" : "translateY(30px)",
                    opacity: menuOpen ? 1 : 0,
                    transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.05}s`,
                    textDecoration: "none",
                  }}
                >
                  {t.nav[key as keyof typeof t.nav]}
                </a>
              );
            })}
            {/* Projects → landing page */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="mobile-nav-link"
              style={{
                fontFamily: "'Rolide', 'Syne', sans-serif",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.02em",
                transform: menuOpen ? "translateY(0)" : "translateY(30px)",
                opacity: menuOpen ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${navKeys.length * 0.05}s`,
                textDecoration: "none",
              }}
            >
              {t.nav.projects}
            </Link>
          </div>

          {/* Divider */}
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "var(--border)",
              margin: "1rem 0",
              transform: menuOpen ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 0.5s ease 0.3s",
            }}
          />

          {/* Mobile Hire Me Button */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="btn btn-primary"
            style={{
              padding: "0.75rem 2rem",
              fontSize: "0.95rem",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.35s",
            }}
          >
            {t.nav.hire}
          </a>

          {/* Mobile Language Switcher */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.3rem 0.6rem",
              border: "1px solid var(--border)",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.02)",
              marginTop: "1.5rem",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.4s",
            }}
          >
            <button
              onClick={() => setLang("en")}
              className={`lang-btn ${lang === "en" ? "lang-btn-active" : ""}`}
            >
              EN
            </button>
            <span style={{ color: "var(--border-hover)", fontSize: "0.75rem" }}>|</span>
            <button
              onClick={() => setLang("id")}
              className={`lang-btn ${lang === "id" ? "lang-btn-active" : ""}`}
            >
              ID
            </button>
          </div>
        </div>
      )}

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
          color: rgba(255, 255, 255, 0.75); /* Bright text for visibility */
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

        /* Mobile Drawer Link Hover/Active Effect */
        .mobile-nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .mobile-nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--text-primary);
          transition: width 0.3s ease, left 0.3s ease;
        }
        .mobile-nav-link:hover::after,
        .mobile-nav-link-active::after {
          width: 100%;
          left: 0;
        }

        @media (max-width: 991px) { /* Trigger hamburger-btn and mobile view at tablet widths too */
          .desktop-nav:not(.landing-nav) { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .desktop-nav.landing-nav .btn-landing-desktop { display: none; }
          .mobile-landing-cta { display: flex !important; }
        }
      `}</style>
    </>
  );
}
