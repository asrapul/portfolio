"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiGithub, FiLinkedin, FiInstagram, FiMail,
  FiArrowRight, FiSend, FiCheckCircle, FiLoader,
} from "react-icons/fi";
import { useLang } from "../context/LangContext";

gsap.registerPlugin(ScrollTrigger);

/* ─── EmailJS config — fill in your IDs from emailjs.com ─────────────────
   1. Go to https://emailjs.com and create a free account
   2. Create a Service (Gmail / Outlook) → copy SERVICE_ID
   3. Create an Email Template → copy TEMPLATE_ID
   4. Get your PUBLIC_KEY from Account > API Keys
   Replace the three constants below with your real values.
────────────────────────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID = "service_nqp5fxb";   // ← replace
const EMAILJS_TEMPLATE_ID = "template_bghobjm";  // ← replace
const EMAILJS_PUBLIC_KEY = "BbEDVmskV7dS0OD3V";     // ← replace

type FormState = { name: string; email: string; message: string };
type FormErrors = Partial<FormState>;

function validate(values: FormState, t: any): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = t.contact.err_name_required;
  if (!values.email.trim()) {
    errors.email = t.contact.err_email_required;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = t.contact.err_email_invalid;
  }
  if (!values.message.trim()) errors.message = t.contact.err_message_required;
  else if (values.message.trim().length < 10) errors.message = t.contact.err_message_min;
  return errors;
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();

  const [formState, setFormState] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const socials = [
    { id: "social-github",    label: "GitHub",    handle: "@asrapul",            href: "https://github.com/asrapul",                     icon: <FiGithub size={20} /> },
    { id: "social-linkedin",  label: "LinkedIn",  handle: "in/andiasyraful",     href: "https://www.linkedin.com/in/andiasyraful/",       icon: <FiLinkedin size={20} /> },
    { id: "social-instagram", label: "Instagram", handle: "@asrapulamal",        href: "https://www.instagram.com/asrapulamal/",          icon: <FiInstagram size={20} /> },
    { id: "social-medium",    label: "Medium",    handle: "@AndiAsyraful",       href: "https://medium.com/@AndiAsyraful",                icon: <svg width={20} height={20} viewBox="0 0 1043.63 592.71" fill="currentColor"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36" /><path d="M911.56 296.36c0 154.06-65.89 278.92-147.17 278.92s-147.17-124.86-147.17-278.92S683.1 17.44 764.39 17.44s147.17 124.85 147.17 278.92" /><path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" /></svg> },
    { id: "social-email",     label: "Email",     handle: "asyrafulamal06@gmail.com", href: "mailto:asyrafulamal06@gmail.com",            icon: <FiMail size={20} /> },
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

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate(formState, t);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleChange = (field: keyof FormState, value: string) => {
    const updated = { ...formState, [field]: value };
    setFormState(updated);
    if (touched[field]) {
      const fieldErrors = validate(updated, t);
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const validationErrors = validate(formState, t);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
          time: new Date().toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'short' }),
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTouched({});
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err: any) {
      console.error("EmailJS error details:", {
        status: err?.status,
        text: err?.text,
        message: err?.message || err
      });
      setSubmitError("Failed to send your message. Please email me directly at asyrafulamal06@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Shared styles ── */
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
    fontSize: "0.78rem",
    fontWeight: 600,
    color: "var(--text-muted)",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
    fontFamily: "var(--font-body)",
  };

  const focusStyle = (e: React.FocusEvent) => {
    (e.target as HTMLElement).style.borderColor = "var(--accent)";
    (e.target as HTMLElement).style.boxShadow = "0 0 0 3px var(--accent-dim)";
  };
  const blurStyleHandler = (e: React.FocusEvent, field: keyof FormState) => {
    (e.target as HTMLElement).style.borderColor = errors[field] ? "rgba(239,68,68,0.6)" : "var(--border)";
    (e.target as HTMLElement).style.boxShadow = "none";
    handleBlur(field);
  };

  const errorStyle: React.CSSProperties = {
    fontSize: "0.78rem",
    color: "rgba(239,68,68,0.9)",
    marginTop: "0.35rem",
    fontFamily: "var(--font-body)",
  };

  return (
    <section ref={sectionRef} id="contact">
      <div className="container">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}
          className="contact-grid"
        >
          {/* Left — Info */}
          <div className="contact-left">
            <span className="section-label">{t.contact.label}</span>
            <h2
              style={{
                fontFamily: "'Rolide', 'Syne', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                letterSpacing: "0.01em",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              {t.contact.headline}{" "}
              <span style={{ color: "var(--accent-light)" }}>{t.contact.headline_accent}</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                marginBottom: "2.5rem",
              }}
            >
              {t.contact.subtitle}
            </p>

            {/* Social links — fully monochrome */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  id={s.id}
                  target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="social-link-card"
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
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card-hover)";
                    const iconEl = (e.currentTarget as HTMLElement).querySelector(".social-icon-wrap") as HTMLElement;
                    if (iconEl) iconEl.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                    const iconEl = (e.currentTarget as HTMLElement).querySelector(".social-icon-wrap") as HTMLElement;
                    if (iconEl) iconEl.style.opacity = "0.6";
                  }}
                >
                  <div
                    className="social-icon-wrap"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-secondary)",
                      flexShrink: 0,
                      opacity: 0.6,
                      transition: "opacity 0.3s var(--ease-out)",
                    }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
                      {s.label}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
                      {s.handle}
                    </div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "var(--text-muted)", opacity: 0.5 }}>
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
                  <FiCheckCircle size={48} color="var(--accent-light)" />
                  <h3 style={{ fontFamily: "'Rolide', 'Syne', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {t.contact.success_title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>
                    {t.contact.success_body}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <h3 style={{ fontFamily: "'Rolide', 'Syne', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                      {t.contact.form_title}
                    </h3>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
                      {t.contact.form_subtitle}
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" style={labelStyle}>{t.contact.name_label}</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder={t.contact.name_placeholder}
                      value={formState.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onFocus={focusStyle}
                      onBlur={(e) => blurStyleHandler(e, "name")}
                      style={{
                        ...inputStyle,
                        borderColor: touched.name && errors.name ? "rgba(239,68,68,0.6)" : "var(--border)",
                      }}
                      disabled={isSubmitting}
                    />
                    {touched.name && errors.name && <p style={errorStyle}>{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" style={labelStyle}>{t.contact.email_label}</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder={t.contact.email_placeholder}
                      value={formState.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onFocus={focusStyle}
                      onBlur={(e) => blurStyleHandler(e, "email")}
                      style={{
                        ...inputStyle,
                        borderColor: touched.email && errors.email ? "rgba(239,68,68,0.6)" : "var(--border)",
                      }}
                      disabled={isSubmitting}
                    />
                    {touched.email && errors.email && <p style={errorStyle}>{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" style={labelStyle}>{t.contact.message_label}</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder={t.contact.message_placeholder}
                      value={formState.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onFocus={focusStyle}
                      onBlur={(e) => blurStyleHandler(e as any, "message")}
                      style={{
                        ...inputStyle,
                        resize: "none",
                        lineHeight: 1.6,
                        borderColor: touched.message && errors.message ? "rgba(239,68,68,0.6)" : "var(--border)",
                      }}
                      disabled={isSubmitting}
                    />
                    {touched.message && errors.message && <p style={errorStyle}>{errors.message}</p>}
                  </div>

                  {/* Submit error */}
                  {submitError && (
                    <p style={{ ...errorStyle, background: "rgba(239,68,68,0.08)", padding: "0.75rem", borderRadius: "8px", border: "1px solid rgba(239,68,68,0.2)" }}>
                      {submitError}
                    </p>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    id="contact-submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "0.9rem 2rem",
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span style={{ animation: "spinIcon 1s linear infinite", display: "inline-flex" }}>
                          <FiLoader size={16} />
                        </span>
                        {t.contact.submitting}
                      </>
                    ) : (
                      <>
                        {t.contact.submit}
                        <FiSend size={16} />
                      </>
                    )}
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
        @keyframes spinIcon {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
