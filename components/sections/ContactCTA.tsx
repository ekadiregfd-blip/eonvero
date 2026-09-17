"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import Cal from "@calcom/embed-react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="section-lg"
      aria-labelledby="contact-heading"
    >
      <div className="container-grid">
        <div>
          {/* Big CTA Statement */}
          <ScrollReveal>
            <div className="eyebrow mb-8">
              <span className="eyebrow-text">Start a project</span>
            </div>
          </ScrollReveal>

          <div className="mb-16 md:mb-24">
            <ScrollReveal>
              <h2 className="text-h1 text-text-primary mb-4 leading-tight">
                Have an idea?
              </h2>
              <p className="text-h2 text-text-primary leading-tight opacity-90">
                Let&apos;s build something worth remembering.
              </p>
            </ScrollReveal>
          </div>

          {/* Cal.com Inline Booking */}
          <ScrollReveal delay={0.1}>
            <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden mt-8 min-h-[600px]">
              <Cal
                calLink="erdem-kadir/30min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view" }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
