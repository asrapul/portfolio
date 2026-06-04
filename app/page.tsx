"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cursor glow tracking
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

    // GSAP ScrollTrigger defaults
    ScrollTrigger.defaults({
      toggleActions: "play none none none",
    });

    // Progress bar
    const progressBar = document.getElementById("scroll-progress");
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      if (progressBar) progressBar.style.width = `${progress}%`;
    };
    window.addEventListener("scroll", updateProgress, { passive: true });

    // Handle layout shifts by refreshing ScrollTrigger
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", handleLoad);

    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("load", handleLoad);
      clearTimeout(refreshTimeout);
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      {/* Noise texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Custom cursor glow */}
      <div
        ref={cursorRef}
        className="cursor-glow"
        aria-hidden="true"
      />

      {/* Scroll progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          height: "2px",
          width: 0,
          background: "linear-gradient(90deg, var(--accent), var(--accent-light))",
          transition: "width 0.05s linear",
          pointerEvents: "none",
        }}
        id="scroll-progress"
        aria-hidden="true"
      />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
