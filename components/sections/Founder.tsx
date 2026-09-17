"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";

export default function Founder() {
  return (
    <section
      id="founder"
      className="section-lg bg-bg-secondary"
      aria-labelledby="founder-heading"
    >
      <div className="container-grid">
        <div>
          {/* Eyebrow */}
          <ScrollReveal>
            <div className="eyebrow mb-8">
              <span className="eyebrow-text">The Founder</span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[var(--grid-gutter)]">
            {/* Portrait Area */}
            <ScrollReveal className="lg:col-span-5" delay={0.1}>
              <div className="relative aspect-[3/4] bg-bg-card rounded-[var(--radius-md)] overflow-hidden group border border-border-subtle">
                {/* Erdem Kadir vesikalık visual */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/erdem-kadir-vesikalik.jpg"
                  alt="Erdem Kadir vesikalık"
                  className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Ambient dark gradient overlay for typography readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent z-10 pointer-events-none" />

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                  <p className="text-mono text-accent text-xs mb-1 tracking-widest uppercase">
                    Founder & Developer
                  </p>
                  <p className="text-h4 font-[family-name:var(--font-display)] font-semibold text-text-primary">
                    Erdem Kadir
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <ScrollReveal>
                <div className="mb-8">
                  <h2 className="text-h2 font-[family-name:var(--font-display)] font-bold text-text-primary tracking-tight uppercase">
                    Code<span className="text-accent">.</span> Create<span className="text-accent">.</span> Evolve<span className="text-accent">.</span>
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  <p className="text-body text-text-secondary leading-relaxed">
                    I&apos;m Erdem Kadir — a 17-year-old independent full-stack developer,
                    vibe coder, and aspiring AI &amp; Data Science Engineer based in Türkiye.
                    My journey in software development began at 14, driven by curiosity and a
                    desire to create. Since then, I&apos;ve been turning ideas into software
                    and digital products.
                  </p>

                  <p className="text-body text-text-secondary leading-relaxed">
                    As a vibe coder, I use artificial intelligence throughout my workflow
                    to explore ideas, solve problems, iterate quickly, and bring concepts to life.
                    I work across the full stack, combining AI-assisted development with hands-on
                    implementation, experimentation, and continuous learning.
                  </p>

                  <p className="text-body text-text-secondary leading-relaxed">
                    Much of my skill set is self-taught, shaped through coursework, practical
                    experimentation, and consistent hands-on work with modern development tools.
                    What matters most to me is what I can understand, build, improve, and ship.
                  </p>

                  <p className="text-body text-text-secondary leading-relaxed">
                    I&apos;m currently preparing for the 2026–2027 YKS examinations, with the
                    goal of pursuing a degree in Artificial Intelligence &amp; Data Science Engineering
                    and building a long-term career in software and technology. I enjoy software because
                    there is always another problem to solve, another system to understand, and another idea worth building.
                  </p>

                  <p className="text-body text-text-secondary leading-relaxed">
                    <span className="notranslate" translate="no">EONvero</span> is the beginning of an open, evolving archive of everything I build —
                    from projects and experiments to the code behind them. It documents not only
                    what I create, but how I grow as an engineer.
                  </p>

                  <p className="text-body text-text-primary font-medium leading-relaxed">
                    This is only the beginning.
                  </p>
                </div>
              </ScrollReveal>

              {/* Links */}
              <ScrollReveal delay={0.3}>
                <div className="divider mt-10 mb-6" />
                <div className="flex gap-8">
                  <a
                    href="https://github.com/erdemkadir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover text-small text-text-secondary hover:text-text-primary transition-colors uppercase tracking-wide"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover text-small text-text-secondary hover:text-text-primary transition-colors uppercase tracking-wide"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:hello@eonvero.dev"
                    className="link-hover text-small text-text-secondary hover:text-text-primary transition-colors uppercase tracking-wide"
                  >
                    Email
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
