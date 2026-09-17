"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      headlineRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 1, y: 0 });
      });
      if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 1, y: 0 });
      if (ctaRef.current) gsap.set(ctaRef.current, { opacity: 1, y: 0 });
      if (eyebrowRef.current) gsap.set(eyebrowRef.current, { opacity: 1, y: 0 });
      if (lineRef.current) gsap.set(lineRef.current, { scaleX: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // ── Entrance Animation (Fast & Crisp) ──
      const tl = gsap.timeline({
        delay: 0.1,
        defaults: { ease: "power3.out" },
      });

      // Eyebrow
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          0
        );
      }

      // Headline words
      const validHeadlines = headlineRefs.current.filter(Boolean);
      if (validHeadlines.length > 0) {
        tl.fromTo(
          validHeadlines,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, stagger: 0.1 },
          0.1
        );
      }

      // Line
      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.1, ease: "power2.inOut" },
          0.4
        );
      }

      // Subtitle
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.5
        );
      }

      // CTA
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.7
        );
      }

      // Scroll indicator
      if (scrollIndicatorRef.current) {
        tl.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          0.9
        );
      }

      // ── Subtle Parallax (No text darkening) ──
      if (contentRef.current && sectionRef.current) {
        gsap.to(contentRef.current, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headlineWords = ["CRAFTING", "DIGITAL", "EXPERIENCES"];

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-start pt-28 md:pt-36 lg:pt-40 pb-12 md:pb-16 overflow-hidden min-h-[85vh] lg:min-h-[90vh]"
      id="hero"
      aria-label="Hero section"
    >
      {/* Soft Ambient Light Glows (No text-covering dark overlays) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/[0.03] blur-[140px]" />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] rounded-full bg-accent/[0.02] blur-[120px]" />
      </div>

      <div ref={contentRef} className="container-grid relative z-10">
        <div>
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="eyebrow mb-10 md:mb-14 notranslate" translate="no">
            <span className="eyebrow-text">Independent Digital Studio</span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-10 md:mb-14 notranslate" translate="no">
            {headlineWords.map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <span
                  ref={(el) => { headlineRefs.current[i] = el; }}
                  className="block text-display text-text-primary will-change-transform"
                  style={{
                    marginLeft: i === 1 ? "10vw" : i === 2 ? "3vw" : "0",
                  }}
                >
                  {word}
                  {i === 2 && <span className="text-accent">.</span>}
                </span>
              </span>
            ))}
          </h1>

          {/* Divider line */}
          <div
            ref={lineRef}
            className="w-full h-px bg-border mb-10 md:mb-14 origin-left"
          />

          {/* Bottom area: subtitle + CTA */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
            <p
              ref={subtitleRef}
              className="text-h5 text-text-secondary max-w-xl leading-relaxed"
            >
              We design and develop modern websites, full-stack applications,
              and digital products that push boundaries and deliver results.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <MagneticButton
                as="a"
                href="#contact"
                className="btn-primary"
                strength={0.2}
                ariaLabel="Start a project"
              >
                <span>Start a project</span>
                <span className="btn-icon-box" aria-hidden="true">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M8.91 9.09L9 3L2.91 3.09L2.9 4.32L6.86 4.25L2.56 8.56L3.44 9.44L7.75 5.14L7.69 9.11L8.91 9.09Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </MagneticButton>
              <MagneticButton
                as="a"
                href="#work"
                className="btn-secondary"
                strength={0.15}
                ariaLabel="View work"
              >
                <span>View work</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-muted md:flex"
      >
        <span className="text-mono text-xs tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-text-tertiary animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
