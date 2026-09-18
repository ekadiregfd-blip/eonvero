"use client";

import { useState } from "react";
import { services } from "@/data/services";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="section-lg"
      aria-labelledby="services-heading"
    >
      <div className="container-grid">
        <div>
          {/* Section Header */}
          <ScrollReveal>
            <div className="eyebrow mb-8">
              <span className="eyebrow-text">Services</span>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mb-16 md:mb-24">
            <ScrollReveal>
              <h2 id="services-heading" className="text-h2 text-text-primary leading-tight">
                What we can build together.
              </h2>
            </ScrollReveal>
          </div>

          {/* Services List */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <ScrollReveal key={service.number} delay={index * 0.05}>
                <div
                  className="group border-t border-border py-8 md:py-10 cursor-pointer transition-colors duration-300 hover:bg-white/[0.01]"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={activeIndex === index}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIndex(activeIndex === index ? null : index);
                    }
                  }}
                >
                  <div className="flex items-start md:items-center justify-between gap-4">
                    <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1">
                      <span className="text-mono text-accent text-xs mt-1 md:mt-0 flex-shrink-0 w-8">
                        {service.number}
                      </span>

                      <h3
                        className="text-h4 font-[family-name:var(--font-display)] font-semibold text-text-primary transition-transform duration-500 ease-out group-hover:translate-x-2"
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div
                      className="w-6 h-6 flex-shrink-0 flex items-center justify-center transition-transform duration-500 ease-out"
                      style={{
                        transform:
                          activeIndex === index
                            ? "rotate(45deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 0V14M0 7H14"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="text-text-muted group-hover:text-text-primary transition-colors"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Expandable content */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: activeIndex === index ? "300px" : "0px",
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                  >
                    <div className="pt-6 pl-14 md:pl-[4.5rem] max-w-2xl">
                      <p className="text-body text-text-secondary leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-mono text-xs px-3 py-1.5 border border-border-subtle rounded-[var(--radius-sm)] text-text-tertiary"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            {/* Final divider */}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
