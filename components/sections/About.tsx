"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";

export default function About() {
  return (
    <section id="about" className="section-lg" aria-labelledby="about-heading">
      <div className="container-grid">
        <div>
          {/* Eyebrow */}
          <ScrollReveal>
            <div className="eyebrow mb-8">
              <span className="eyebrow-text">About <span className="notranslate" translate="no">EONvero</span></span>
            </div>
          </ScrollReveal>

          {/* Main Statement */}
          <div className="max-w-5xl mb-16 md:mb-24">
            <ScrollReveal>
              <h2 id="about-heading" className="text-h2 text-text-primary mb-6 leading-tight">
                Built from curiosity. Driven by code. Made for the web.
              </h2>
            </ScrollReveal>
          </div>

          {/* Two Column Content */}
          <div className="content-grid">
            <ScrollReveal
              className="col-span-12 md:col-span-5"
              delay={0.1}
            >
              <p className="text-body text-text-secondary leading-relaxed mb-6">
                <span className="notranslate" translate="no">EONvero</span> is an independent digital studio founded by Erdem Kadir — 
                a student, aspiring full-stack developer, and experimental creator 
                who believes the best way to learn is to build.
              </p>
              <p className="text-body text-text-secondary leading-relaxed">
                Every project here started with a question: &ldquo;What if I tried 
                this?&rdquo; That curiosity drives everything — from clean frontend 
                interfaces to complex backend architectures, from pixel-perfect 
                landing pages to real-time web applications.
              </p>
            </ScrollReveal>

            <div className="hidden md:block md:col-span-2" />

            <ScrollReveal
              className="col-span-12 md:col-span-5"
              delay={0.25}
            >
              <p className="text-body text-text-secondary leading-relaxed mb-6">
                This isn&apos;t a template portfolio. It&apos;s a working studio — a place 
                where ideas become functional, beautiful digital products. Every 
                line of code is written with intention, every design decision is 
                purposeful.
              </p>
              <p className="text-body text-text-secondary leading-relaxed">
                The web is an infinite canvas. <span className="notranslate" translate="no">EONvero</span> exists to explore it — one 
                project at a time, with craft, precision, and an obsession for 
                getting the details right.
              </p>
            </ScrollReveal>
          </div>

          {/* Stats Row */}
          <ScrollReveal delay={0.3}>
            <div className="divider mt-16 md:mt-24 mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "2025", label: "Founded" },
                { value: "Full-Stack", label: "Discipline" },
                { value: "Independent", label: "Structure" },
                { value: "Remote", label: "Location" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-h4 font-[family-name:var(--font-display)] font-semibold text-text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-mono text-text-tertiary">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
