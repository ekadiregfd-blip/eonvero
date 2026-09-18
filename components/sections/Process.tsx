"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding the vision, goals, and technical requirements. We align on the project scope and constraints before writing a single line of code.",
    details: [
      "Project brief & requirements",
      "Technical architecture planning",
      "Timeline & milestone mapping",
      "Feasibility analysis",
    ],
  },
  {
    number: "02",
    title: "AI Prototyping",
    description:
      "Using advanced AI tools to rapidly generate functional prototypes and explore design concepts, significantly accelerating the initial iteration phase.",
    details: [
      "Rapid UI/UX wireframing",
      "AI-assisted logic modeling",
      "Concept validation",
      "Iterative feedback loops",
    ],
  },
  {
    number: "03",
    title: "Development",
    description:
      "Combining AI generation with rigorous manual coding to build robust, scalable, and highly performant full-stack applications.",
    details: [
      "Frontend & backend implementation",
      "Database design & API integration",
      "Continuous testing & QA",
      "Performance optimization",
    ],
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Deploying the finalized application to production environments. Ensuring everything is documented, secure, and ready for scale.",
    details: [
      "CI/CD pipeline execution",
      "Security & vulnerability checks",
      "Documentation & handover",
      "Post-launch support",
    ],
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !sectionRef.current || !progressRef.current) return;

    const context = gsap.context(() => {
      // Animate progress line as section scrolls
      gsap.fromTo(
        progressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section-lg"
      aria-labelledby="process-heading"
    >
      <div className="container-grid">
        <div>
          {/* Section Header */}
          <ScrollReveal>
            <div className="eyebrow mb-8">
              <span className="eyebrow-text">Process</span>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mb-16 md:mb-24">
            <ScrollReveal>
              <h2 id="process-heading" className="text-h2 text-text-primary leading-tight">
                Simple process. Exceptional results.
              </h2>
            </ScrollReveal>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Progress line (desktop) */}
            <div className="hidden md:block absolute left-[2rem] top-0 bottom-0 w-px bg-border">
              <div
                ref={progressRef}
                className="absolute top-0 left-0 w-full bg-accent origin-top"
                style={{ height: "100%", transform: "scaleY(0)" }}
              />
            </div>

            <div className="space-y-16 md:space-y-24">
              {steps.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 0.1}>
                  <div className="md:pl-20 relative">
                    {/* Step number circle (desktop) */}
                    <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 items-center justify-center">
                      <div className="relative w-10 h-10 rounded-full border border-border flex items-center justify-center bg-bg-primary z-10">
                        <span className="text-mono text-accent text-xs">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Mobile number */}
                    <div className="md:hidden text-mono text-accent text-xs mb-4">
                      {step.number}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                      <div>
                        <h3 className="text-h3 text-text-primary mb-4">
                          {step.title}
                        </h3>
                        <p className="text-body text-text-secondary leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <div
                            key={detail}
                            className="flex items-center gap-4 py-2"
                          >
                            <span className="text-mono text-text-muted text-xs w-6 flex-shrink-0">
                              {String(detailIndex + 1).padStart(2, "0")}
                            </span>
                            <span className="text-small text-text-secondary">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
