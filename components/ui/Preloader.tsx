"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const frame = window.requestAnimationFrame(() => {
        setIsVisible(false);
        onComplete();
      });

      return () => window.cancelAnimationFrame(frame);
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        onComplete();
      },
    });

    // Logo fade in
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      0.2
    );

    // Tagline
    tl.fromTo(
      taglineRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      0.5
    );

    // Counter animation
    const counter = { value: 0 };
    tl.to(
      counter,
      {
        value: 100,
        duration: 1.8,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = String(
              Math.round(counter.value)
            );
          }
        },
      },
      0.3
    );

    // Progress line
    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.8, ease: "power2.inOut" },
      0.3
    );

    // Exit: slide up entire preloader
    tl.to(
      [logoRef.current, taglineRef.current],
      {
        opacity: 0,
        y: -20,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in",
      },
      2.2
    );

    tl.to(
      containerRef.current,
      {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.7,
        ease: "power3.inOut",
      },
      2.4
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-bg-primary flex flex-col items-center justify-center"
      style={{ clipPath: "inset(0 0 0 0)" }}
      aria-hidden="true"
    >
      {/* Logo */}
      <div ref={logoRef} className="text-center mb-6" style={{ opacity: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-white.png"
          alt="EONvero Logo"
          className="h-24 md:h-32 w-auto object-contain mx-auto notranslate"
          translate="no"
        />
      </div>

      {/* Tagline */}
      <div ref={taglineRef} className="mb-10" style={{ opacity: 0 }}>
        <p className="text-mono text-text-muted text-xs tracking-[0.2em]">
          DIGITAL EXPERIENCES
        </p>
      </div>

      {/* Progress */}
      <div className="w-48 md:w-64">
        <div className="relative w-full h-px bg-border-subtle">
          <div
            ref={lineRef}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent/60 to-accent origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
        <div className="flex justify-between mt-3">
          <span className="text-mono text-text-muted text-xs tracking-widest">
            LOADING
          </span>
          <span className="text-mono text-text-muted text-xs tabular-nums">
            <span ref={counterRef}>0</span>%
          </span>
        </div>
      </div>
    </div>
  );
}
