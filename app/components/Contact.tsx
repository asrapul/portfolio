"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowRight, FiSend, FiCheckCircle } from "react-icons/fi";
import { useLang } from "../context/LangContext";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const socials = [
    { id: "social-github", label: "GitHub", handle: "@asrapul", href: "https://github.com/asrapul", icon: <FiGithub size={20} />, color: "#e2e8f0" },
    { id: "social-linkedin", label: "LinkedIn", handle: "in/andiasyraful", href: "https://www.linkedin.com/in/andiasyraful/", icon: <FiLinkedin size={20} />, color: "#0077b5" },
    { id: "social-instagram", label: "Instagram", handle: "@asrapulamal", href: "https://www.instagram.com/asrapulamal/", icon: <FiInstagram size={20} />, color: "#e1306c" },
    { id: "social-email", label: "Email", handle: "asyrafulamal06@gmail.com", href: "mailto:asyrafulamal06@gmail.com", icon: <FiMail size={20} />, color: "#a3a3a3" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-left", {
        x: -40, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-left", start: "top 80%" },
      });
      gsap.from(".contact-right", {
        x: 40, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-right", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1.1rem",
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-md)",
    color: "var(--text-primary)",
    fontSize: "0.9rem",
    fontFamily: "'Rolide', 'Syne', var(--font-body)",
    outline: "none",
    transition: "border-color 0.25s, box-shadow 0.25s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.78rem",
    fontWeight: 600,
    color: "var(--text-muted)",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
    fontFamily: "'Rolide', 'Syne', sans-serif",
  };

  const focusStyle = (e: React.FocusEvent) => {
    (e.target as HTMLElement).style.borderColor = "var(--accent)";
    (e.target as HTMLElement).style.boxShadow = "0 0 0 3px var(--accent-dim)";
  };
  const blurStyle = (e: React.FocusEvent) => {
    (e.target as HTMLElement).style.borderColor = "var(--border)";
    (e.target as HTMLElement).style.boxShadow = "none";
  };

  return (
    <section ref={sectionRef} id="contact">
      <div className="container">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}
          className="contact-grid"
        >
          {/* Left */}
          <div className="contact-left">
            <span className="section-label">{t.contact.label}</span>
            <h2
              style={{ fontFamily: "'Rolide', 'Syne', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "0.01em", lineHeight: 1.15, marginBottom: "1.25rem" }}
            >
              {t.contact.headline}{" "}
              <span style={{ color: "var(--accent-light)" }}>{t.contact.headline_accent}</span>
            </h2>
            <p
              style={{ fontFamily: "'Rolide', 'Syne', sans-serif", fontSize: "1rem", lineHeight: 1.75, color: "var(--text-secondary)", marginBottom: "2.5rem" }}
            >
              {t.contact.subtitle}
            </p>

            {/* Social links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  id={s.id}
                  target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", transition: "all 0.3s var(--ease-out)", textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = s.color;
                    (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card-hover)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                  }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: "10px", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: s.color, flexShrink: 0 }}>
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)", fontFamily: "'Rolide', 'Syne', sans-serif" }}>{s.label}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "'Rolide', 'Syne', sans-serif" }}>{s.handle}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "var(--text-muted)" }}>
                    <FiArrowRight size={14} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-right">
            <div className="card" style={{ padding: "2.25rem" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                  <FiCheckCircle size={48} color="#4ade80" />
                  <h3 style={{ fontFamily: "'Rolide', 'Syne', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {t.contact.success_title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontFamily: "'Rolide', 'Syne', sans-serif" }}>
                    {t.contact.success_body}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <h3 style={{ fontFamily: "'Rolide', 'Syne', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                      {t.contact.form_title}
                    </h3>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontFamily: "'Rolide', 'Syne', sans-serif" }}>
                      {t.contact.form_subtitle}
                    </p>
                  </div>

                  <div>
                    <label htmlFor="contact-name" style={labelStyle}>{t.contact.name_label}</label>
                    <input id="contact-name" type="text" required placeholder={t.contact.name_placeholder} value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={labelStyle}>{t.contact.email_label}</label>
                    <input id="contact-email" type="email" required placeholder={t.contact.email_placeholder} value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                  </div>
                  <div>
                    <label htmlFor="contact-message" style={labelStyle}>{t.contact.message_label}</label>
                    <textarea id="contact-message" required rows={5} placeholder={t.contact.message_placeholder} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }} onFocus={focusStyle} onBlur={blurStyle} />
                  </div>

                  <button type="submit" id="contact-submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "0.9rem 2rem" }}>
                    {t.contact.submit}
                    <FiSend size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
