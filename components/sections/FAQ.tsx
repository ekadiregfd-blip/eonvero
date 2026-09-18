"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-lg" aria-labelledby="faq-heading">
      <div className="container-grid">
        <div>
          {/* Section Header */}
          <ScrollReveal>
            <div className="eyebrow mb-8">
              <span className="eyebrow-text">FAQ</span>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mb-16 md:mb-24">
            <ScrollReveal>
              <h2 id="faq-heading" className="text-h2 text-text-primary leading-tight">
                Common questions, honest answers.
              </h2>
            </ScrollReveal>
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl">
            {faqItems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="border-t border-border">
                  <button
                    className="w-full flex items-start justify-between gap-4 py-6 md:py-8 text-left group"
                    onClick={() => toggle(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <div className="flex items-start gap-6">
                      <span className="text-mono text-accent text-xs mt-1.5 flex-shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-h5 text-text-primary group-hover:text-accent transition-colors duration-300">
                        {item.question}
                      </span>
                    </div>

                    <div
                      className="w-5 h-5 flex-shrink-0 mt-1.5 flex items-center justify-center transition-transform duration-500 ease-out"
                      style={{
                        transform:
                          openIndex === index
                            ? "rotate(45deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 0V12M0 6H12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="text-text-muted"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: openIndex === index ? "300px" : "0px",
                      opacity: openIndex === index ? 1 : 0,
                    }}
                  >
                    <p className="text-body text-text-secondary leading-relaxed pb-8 pl-12 md:pl-14 max-w-xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
