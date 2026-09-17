"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
  scrollTrigger?: boolean;
}

export default function TextReveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  stagger = 0.03,
  scrollTrigger = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    // Use GSAP Context for 100% safe React lifecycle & HMR cleanup
    const ctx = gsap.context(() => {
      const words = containerRef.current?.querySelectorAll(".word-inner");
      if (!words || words.length === 0) return;

      gsap.fromTo(
        words,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: scrollTrigger
            ? {
                trigger: containerRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
              }
            : undefined,
        }
      );
    }, containerRef);

    // Revert ALL GSAP inline DOM modifications when component unmounts or re-renders
    return () => ctx.revert();
  }, [delay, stagger, scrollTrigger, children]);

  const wordsList = children.split(" ");

  return (
    <Tag ref={containerRef as React.RefObject<never>} className={className}>
      {wordsList.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="word-inner inline-block mr-[0.28em] will-change-transform"
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}
