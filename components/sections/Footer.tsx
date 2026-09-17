"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 md:py-16 border-t border-border"
      role="contentinfo"
    >
      <div className="container-grid">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-[var(--grid-gutter)]">
            {/* Brand */}
            <div className="md:col-span-4">
              <ScrollReveal>
                <a
                  href="#"
                  className="notranslate inline-block mb-6 hover:opacity-85 transition-opacity"
                  translate="no"
                  aria-label="EONvero — return to top"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logo-white.png"
                    alt="EONvero Logo"
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </a>
                <p className="text-small text-text-tertiary max-w-xs leading-relaxed">
                  Independent digital studio crafting modern websites,
                  full-stack applications, and experimental digital experiences.
                </p>
              </ScrollReveal>
            </div>

            {/* Services */}
            <div className="md:col-span-3 md:col-start-6">
              <ScrollReveal delay={0.1}>
                <p className="text-mono text-text-muted text-xs mb-4">
                  Services
                </p>
                <ul className="space-y-2">
                  {[
                    "Web Design",
                    "Web Development",
                    "Full-Stack Development",
                    "Landing Pages",
                    "Web Applications",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#services"
                        className="text-small text-text-tertiary hover:text-text-primary transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            {/* Connect */}
            <div className="md:col-span-3 md:col-start-10">
              <ScrollReveal delay={0.2}>
                <p className="text-mono text-text-muted text-xs mb-4">
                  Connect
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://github.com/erdemkadir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-small text-text-tertiary hover:text-text-primary transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-small text-text-tertiary hover:text-text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@eonvero.dev"
                      className="text-small text-text-tertiary hover:text-text-primary transition-colors"
                    >
                      hello@eonvero.dev
                    </a>
                  </li>
                </ul>
              </ScrollReveal>
            </div>
          </div>

          {/* Bottom Bar */}
          <ScrollReveal delay={0.3}>
            <div className="divider mt-12 mb-6" />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-mono text-text-muted text-xs">
                © {currentYear} <span className="notranslate" translate="no">EONvero</span>. All rights reserved.
              </p>
              <p className="text-mono text-text-muted text-xs">
                Designed & developed by Erdem Kadir
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
