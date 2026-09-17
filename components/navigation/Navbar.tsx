"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import { getCalApi } from "@calcom/embed-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

/*
 * Navbar Blend Strategy
 * ─────────────────────
 * The header container is 100% transparent with NO mix-blend-mode/filter —
 * this preserves the z-index stacking context so the navbar always sits on top.
 *
 * Each individual element (logo, links, active underline, mobile hamburger lines)
 * carries its own `mix-blend-mode: difference` with a white fill/color.
 * This means every pixel of every element independently inverts against the exact
 * color behind it:
 *   • over dark bg  (#0a0a0a): white → inverts to near-white  → visible ✓
 *   • over light text (#f0ece4): white → inverts to near-black → visible ✓
 *   • over mid-gray (#6b6560): white → inverts to lighter gray → visible ✓
 *
 * The CTA button stays in its own z-50 layer with no blend mode (normal rendering).
 */

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["about", "work", "services", "process", "contact"];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: 0.1,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Keep one underline mounted so it glides between sections instead of remounting.
  useEffect(() => {
    const updateIndicator = () => {
      const nav = navRef.current;
      const activeLink = activeSection ? linkRefs.current[activeSection] : null;

      if (!nav || !activeLink) {
        setIndicator((current) => ({ ...current, visible: false }));
        return;
      }

      const navBounds = nav.getBoundingClientRect();
      const linkBounds = activeLink.getBoundingClientRect();
      setIndicator({
        left: linkBounds.left - navBounds.left,
        width: linkBounds.width,
        visible: true,
      });
    };

    updateIndicator();
    const resizeObserver = new ResizeObserver(updateIndicator);
    if (navRef.current) resizeObserver.observe(navRef.current);

    return () => resizeObserver.disconnect();
  }, [activeSection]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setActiveSection(href);
      setIsMobileOpen(false);
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return (
    <>
      {/* Layer 1: Dynamic Inversion for Logo & Nav Links */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-transparent pointer-events-none transition-colors duration-300"
        role="banner"
      >
        <div className="flex items-center justify-between px-[var(--grid-margin)] h-16 md:h-20 pointer-events-auto">
          {/* Logo */}
          <a
            href="#"
            className="notranslate flex items-center hover:opacity-85 transition-opacity"
            translate="no"
            aria-label="EONvero — return to homepage"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-beige.png"
              alt="EONvero Logo"
              className="h-16 md:h-24 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-8 notranslate relative"
            translate="no"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  ref={(element) => {
                    linkRefs.current[link.href] = element;
                  }}
                  className={`link-hover text-small font-medium transition-colors duration-300 tracking-widest uppercase relative ${
                    isActive ? "text-[#e3dbc5] font-semibold" : "text-[#e3dbc5] hover:text-[#e3dbc5]/80"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-[2px] bg-[#e3dbc5] transition-[transform,width,opacity] duration-500 ease-[var(--ease-expo)]"
              style={{
                width: `${indicator.width}px`,
                transform: `translateX(${indicator.left}px)`,
                opacity: indicator.visible ? 1 : 0,
              }}
            />
          </nav>

          {/* Empty spacer for alignment with right side CTA button */}
          <div className="w-10 md:w-36 lg:w-44" />
        </div>
      </header>

      {/* ── CTA Button + Mobile Toggle (separate layer, normal rendering) ── */}
      <div className="fixed top-0 right-0 z-50 pointer-events-none flex items-center px-[var(--grid-margin)] h-16 md:h-20">
        <div className="pointer-events-auto flex items-center gap-4">

          {/* CTA — opens Cal.com modal */}
          <MagneticButton
            as="button"
            onClick={async () => {
              const cal = await getCalApi();
              cal("modal", {
                calLink: "erdem-kadir/30min",
                config: { layout: "month_view" }
              });
            }}
            className="hidden md:inline-flex btn-primary"
            strength={0.2}
            ariaLabel="Start a project"
          >
            <span>Start a project</span>
            <span className="btn-icon-box" aria-hidden="true">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path
                  d="M8.91 9.09L9 3L2.91 3.09L2.9 4.32L6.86 4.25L2.56 8.56L3.44 9.44L7.75 5.14L7.69 9.11L8.91 9.09Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </MagneticButton>

          {/* Mobile hamburger — lines have mix-blend-mode individually */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            <div className="relative w-6 h-4">
              <span
                className={`absolute left-0 w-full h-[1.5px] transition-all duration-300 ${
                  isMobileOpen
                    ? "top-1/2 -translate-y-1/2 rotate-45"
                    : "top-0"
                }`}
                style={{ background: "#ffffff", mixBlendMode: "difference" }}
              />
              <span
                className={`absolute left-0 w-full h-[1.5px] transition-all duration-300 ${
                  isMobileOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-0"
                }`}
                style={{ background: "#ffffff", mixBlendMode: "difference" }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-bg-primary transition-all duration-500 lg:hidden ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <nav className="flex flex-col justify-center items-start h-full px-[var(--grid-margin)] gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-h2 text-text-primary hover:text-accent transition-colors duration-300"
              style={{
                transitionDelay: isMobileOpen ? `${i * 80}ms` : "0ms",
                opacity: isMobileOpen ? 1 : 0,
                transform: isMobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease, color 0.3s ease",
              }}
            >
              {link.label}
            </a>
          ))}

          <div
            className="mt-12 flex flex-col gap-4"
            style={{
              opacity: isMobileOpen ? 1 : 0,
              transform: isMobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s",
            }}
          >
            <button
              onClick={async () => {
                const cal = await getCalApi();
                cal("modal", {
                  calLink: "erdem-kadir/30min",
                  config: { layout: "month_view" }
                });
              }}
              className="btn-primary w-fit"
            >
              Start a project
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M8.91 9.09L9 3L2.91 3.09L2.9 4.32L6.86 4.25L2.56 8.56L3.44 9.44L7.75 5.14L7.69 9.11L8.91 9.09Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <div className="flex gap-6 mt-4">
              <a
                href="https://github.com/erdemkadir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mono text-text-tertiary hover:text-text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mono text-text-tertiary hover:text-text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@eonvero.dev"
                className="text-mono text-text-tertiary hover:text-text-primary transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
