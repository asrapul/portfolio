"use client";

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { useLang } from "../context/LangContext";
import Link from "next/link";
import Image from "next/image";

const socials = [
  { href: "https://github.com/asrapul", label: "GitHub", icon: <FiGithub size={15} /> },
  { href: "https://www.linkedin.com/in/andiasyraful/", label: "LinkedIn", icon: <FiLinkedin size={15} /> },
  { href: "https://www.instagram.com/asrapulamal/", label: "Instagram", icon: <FiInstagram size={15} /> },
  { href: "https://medium.com/@AndiAsyraful", label: "Medium", icon: <svg width={15} height={15} viewBox="0 0 1043.63 592.71" fill="currentColor"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36" /><path d="M911.56 296.36c0 154.06-65.89 278.92-147.17 278.92s-147.17-124.86-147.17-278.92S683.1 17.44 764.39 17.44s147.17 124.85 147.17 278.92" /><path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" /></svg> },
];

const navKeys = ["home", "about", "skills", "experience", "contact"] as const;

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        paddingTop: "3rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Logo — Rolide font */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="footer-logo"
            aria-label="Go to top"
          >
            <Image src="/Icon_web.png" alt="Logo" width={28} height={28} style={{ borderRadius: "50%" }} />
            asrap.
          </a>

          {/* Nav links */}
          <nav style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap" }}>
            {navKeys.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={(e) => handleClick(e, `#${key}`)}
                className="footer-nav-link"
              >
                {t.nav[key as keyof typeof t.nav]}
              </a>
            ))}
            {/* Projects → landing page */}
            <Link href="/" className="footer-nav-link">
              {t.nav.projects}
            </Link>
          </nav>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="footer-social-btn"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, var(--border), transparent)",
            marginBottom: "2rem",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
            © {year} Andi Asyraful Amal Ilham. {t.footer.copyright}{" "}
            <span style={{ color: "var(--accent-light)" }}>Next.js</span> &{" "}
            <span style={{ color: "var(--accent-light)" }}>GSAP</span>.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span
              style={{
                width: 7, height: 7,
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 8px #4ade80",
                display: "inline-block",
                animation: "footerPulse 2.5s ease-in-out infinite",
              }}
            />
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              {t.footer.available}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-logo {
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
        .footer-logo:hover { opacity: 0.7; }
        .footer-logo-dot {
          display: inline-block;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 10px var(--accent);
        }
        .footer-nav-link {
          padding: 0.4rem 0.85rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          border-radius: 100px;
          transition: all 0.2s;
        }
        .footer-nav-link:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.04);
        }
        .footer-social-btn {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all 0.25s;
        }
        .footer-social-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent);
          background: var(--accent-dim);
          transform: translateY(-2px);
        }
        @keyframes footerPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </footer>
  );
}
