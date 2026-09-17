"use client";

import { technologies } from "@/data/technologies";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";

export default function TechStack() {
  return (
    <section
      id="tech"
      className="section-lg bg-bg-secondary"
      aria-labelledby="tech-heading"
    >
      <div className="container-grid">
        <div>
          {/* Section Header */}
          <ScrollReveal>
            <div className="eyebrow mb-8">
              <span className="eyebrow-text">Technical Capabilities</span>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mb-16 md:mb-24">
            <ScrollReveal>
              <h2 className="text-h2 text-text-primary leading-tight">
                The tools behind the craft.
              </h2>
            </ScrollReveal>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {technologies.map((category, catIndex) => (
              <ScrollReveal key={category.name} delay={catIndex * 0.1}>
                <div>
                  <h3 className="text-mono text-accent text-xs mb-6 tracking-widest">
                    {category.name.toUpperCase()}
                  </h3>

                  <div className="space-y-0">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={item}
                        className="group flex items-center justify-between py-3 border-b border-border-subtle hover:border-border transition-colors duration-300"
                      >
                        <span className="text-body text-text-secondary group-hover:text-text-primary transition-colors duration-300 group-hover:translate-x-1 transform">
                          {item}
                        </span>
                        <span className="text-mono text-text-muted text-xs">
                          {String(itemIndex + 1).padStart(2, "0")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
