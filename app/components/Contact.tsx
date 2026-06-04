"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    id: "social-github",
    label: "GitHub",
    handle: "@asrapul",
    href: "https://github.com/asrapul",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    color: "#e2e8f0",
  },
  {
    id: "social-linkedin",
    label: "LinkedIn",
    handle: "in/andiasyraful",
    href: "https://www.linkedin.com/in/andiasyraful/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#0077b5",
  },
  {
    id: "social-instagram",
    label: "Instagram",
    handle: "@asrapulamal",
    href: "https://www.instagram.com/asrapulamal/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    color: "#e1306c",
  },
  {
    id: "social-email",
    label: "Email",
    handle: "asyrafulamal06@gmail.com",
    href: "mailto:asyrafulamal06@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: "#6c63ff",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "border-color 0.25s, box-shadow 0.25s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.8rem",
    fontWeight: 600,
    color: "var(--text-muted)",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
  };

  return (
    <section ref={sectionRef} id="contact">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left */}
          <div className="contact-left">
            <span className="section-label">Contact</span>
            <h2 className="text-h2" style={{ marginBottom: "1.25rem" }}>
              Let&apos;s build something{" "}
              <span style={{ color: "var(--accent-light)" }}>remarkable.</span>
            </h2>
            <p className="text-body-lg" style={{ marginBottom: "2.5rem" }}>
              Punya proyek atau ingin berkolaborasi? Saya selalu terbuka untuk
              diskusi menarik dan peluang baru. Jangan ragu untuk menghubungi!
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    transition: "all 0.3s var(--ease-out)",
                    textDecoration: "none",
                  }}
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
                  <div
                    style={{
                      width: 40, height: 40,
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: s.color,
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      {s.label}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                      {s.handle}
                    </div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "var(--text-muted)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-right">
            <div className="card" style={{ padding: "2.25rem" }}>
              {submitted ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "3rem 1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div style={{ fontSize: "3rem" }}>✅</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    Pesan terkirim!
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                    Saya akan membalas dalam waktu 24 jam.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Kirim pesan
                    </h3>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                      Biasanya saya membalas dalam satu hari kerja.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="contact-name" style={labelStyle}>Nama Kamu</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "var(--accent)";
                        (e.target as HTMLElement).style.boxShadow = "0 0 0 3px var(--accent-dim)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "var(--border)";
                        (e.target as HTMLElement).style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" style={labelStyle}>Alamat Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "var(--accent)";
                        (e.target as HTMLElement).style.boxShadow = "0 0 0 3px var(--accent-dim)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "var(--border)";
                        (e.target as HTMLElement).style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" style={labelStyle}>Pesan</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Ceritakan tentang proyek kamu..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "var(--accent)";
                        (e.target as HTMLElement).style.boxShadow = "0 0 0 3px var(--accent-dim)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "var(--border)";
                        (e.target as HTMLElement).style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center", padding: "0.9rem 2rem" }}
                  >
                    Kirim Pesan
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
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
