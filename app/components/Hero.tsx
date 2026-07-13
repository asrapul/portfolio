"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { useLang } from "../context/LangContext";
import Link from "next/link";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const SplitText = (window as any).SplitText;
    if (SplitText) {
      gsap.registerPlugin(SplitText);
    }

    const ctx = gsap.context((self) => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      if (SplitText && headlineRef.current) {
        const split = new SplitText(headlineRef.current, {
          type: "words,chars",
          wordsClass: "split-word",
          charsClass: "split-char",
        });
        gsap.set(".split-word", { overflow: "hidden", display: "inline-block", verticalAlign: "bottom" });
        gsap.set(".split-char", { display: "inline-block" });
        tl.from(split.chars, { y: "110%", opacity: 0, duration: 1.2, stagger: 0.02, ease: "power4.out" });
      } else {
        tl.from(headlineRef.current, { y: 40, opacity: 0, duration: 1.2, ease: "power4.out" });
      }

      tl.from(subRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(taglineRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-badge", { scale: 0.8, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.4");

      const setupMagnetic = (selector: string) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          const htmlEl = el as HTMLElement;
          const xTo = gsap.quickTo(htmlEl, "x", { duration: 0.3, ease: "power3.out" });
          const yTo = gsap.quickTo(htmlEl, "y", { duration: 0.3, ease: "power3.out" });
          const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const rect = htmlEl.getBoundingClientRect();
            xTo((clientX - (rect.left + rect.width / 2)) * 0.28);
            yTo((clientY - (rect.top + rect.height / 2)) * 0.28);
          };
          const handleMouseLeave = () => { xTo(0); yTo(0); };
          htmlEl.addEventListener("mousemove", handleMouseMove);
          htmlEl.addEventListener("mouseleave", handleMouseLeave);
          self.add(() => {
            htmlEl.removeEventListener("mousemove", handleMouseMove);
            htmlEl.removeEventListener("mouseleave", handleMouseLeave);
          });
        });
      };

      setupMagnetic(".magnetic-element");

      const parallaxHandler = () => {
        if (decorRef.current) gsap.set(decorRef.current, { y: window.scrollY * 0.25 });
      };
      window.addEventListener("scroll", parallaxHandler, { passive: true });
      return () => window.removeEventListener("scroll", parallaxHandler);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { label: "GitHub", href: "https://github.com/asrapul" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/andiasyraful/" },
    { label: "Instagram", href: "https://www.instagram.com/asrapulamal/" },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: "5rem", background: "var(--bg-primary)" }}
    >
      <div className="gradient-mesh" />
      <div className="grid-pattern" />
      <div ref={decorRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 65%)", top: "-150px", right: "-100px" }} />
        <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 65%)", bottom: "100px", left: "-80px" }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 860, display: "flex", flexDirection: "column", gap: "1.75rem" }}>

          {/* Badges */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <span
              className="hero-badge"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.35rem 0.9rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "100px", fontSize: "0.78rem", fontWeight: 500, color: "var(--text-primary)", letterSpacing: "0.03em" }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#ffffff", boxShadow: "0 0 8px #ffffff", animation: "pulse 2s infinite" }} />
              {t.hero.available}
            </span>
            <span
              className="hero-badge"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.35rem 0.9rem", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "100px", fontSize: "0.78rem", fontWeight: 500, color: "var(--text-muted)", letterSpacing: "0.03em" }}
            >
              {t.hero.role}
            </span>
          </div>

          {/* Headline */}
          <div>
            <h1 ref={headlineRef} className="text-hero" style={{ lineHeight: 1.05, overflow: "visible" }}>
              {t.hero.headline}
            </h1>
          </div>

          {/* Sub-role */}
          <div ref={subRef}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1rem, 2vw, 1.2rem)", fontWeight: 500, color: "var(--text-muted)", letterSpacing: "0.01em" }}>
              {t.hero.intro}{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>{t.hero.name}</span>{" "}
              {t.hero.subrole}
            </p>
          </div>

          {/* Tagline */}
          <p ref={taglineRef} className="text-body-lg" style={{ maxWidth: 580, fontFamily: "var(--font-body)" }}>
            {t.hero.tagline}
          </p>

          {/* CTAs */}
          <div ref={ctaRef} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", paddingTop: "0.5rem" }}>
            <Link
              href="/"
              className="btn btn-primary magnetic-element"
              id="hero-cta-projects"
            >
              {t.hero.cta_projects}
              <FiArrowRight size={16} />
            </Link>
            <button
              onClick={() => handleScroll("contact")}
              className="btn btn-outline magnetic-element"
              id="hero-cta-contact"
            >
              {t.hero.cta_contact}
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn magnetic-element"
              id="hero-cta-cv"
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                fontSize: "0.88rem",
                padding: "0.875rem 1.5rem",
                borderRadius: "100px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontWeight: 600,
                transition: "all 0.3s var(--ease-out)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <FiDownload size={15} />
              {t.hero.cta_cv}
            </a>
          </div>

          {/* Social row */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", paddingTop: "0.75rem" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {t.hero.find_me}
            </span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-element"
                style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text-secondary)", transition: "color 0.2s", position: "relative", display: "inline-block" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", opacity: 0.4 }}>
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          {t.hero.scroll}
        </span>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, var(--text-muted), transparent)", animation: "scrollFade 2s ease-in-out infinite" }} />
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; box-shadow: 0 0 8px #ffffff; } 50% { opacity: 0.6; box-shadow: 0 0 16px #ffffff; } }
        @keyframes scrollFade { 0%, 100% { opacity: 0.3; transform: scaleY(1); transform-origin: top; } 50% { opacity: 0.8; transform: scaleY(1.1); } }
      `}</style>
    </section>
  );
}
