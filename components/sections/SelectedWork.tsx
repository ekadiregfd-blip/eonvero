"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !imageRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Optional: Add other card animations here if needed.
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[var(--grid-gutter)] items-center ${
        index > 0 ? "mt-20 md:mt-32 lg:mt-40" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`${
          isEven
            ? "lg:col-span-7 lg:col-start-1"
            : "lg:col-span-7 lg:col-start-6"
        } ${isEven ? "" : "lg:order-2"} overflow-hidden rounded-[var(--radius-md)]`}
      >
        <div
          ref={imageRef}
          className="relative aspect-video bg-bg-card overflow-hidden group cursor-pointer"
          style={{ backgroundColor: project.color || "#141414" }}
        >
          {/* Project number overlay */}
          <div className="absolute top-6 left-6 z-10">
            <span className="text-mono text-text-muted text-xs">
              {project.number}
            </span>
          </div>

          <Image
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* View project indicator */}
          <div className="absolute bottom-6 right-6 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span className="text-mono text-text-primary text-xs bg-bg-primary/60 backdrop-blur-sm px-3 py-1.5 rounded-[var(--radius-sm)]">
              View Project →
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`${
          isEven
            ? "lg:col-span-4 lg:col-start-9"
            : "lg:col-span-4 lg:col-start-1"
        } ${isEven ? "" : "lg:order-1"}`}
      >
        <ScrollReveal>
          <div className="mb-4 flex items-center gap-4">
            <span className="text-mono text-accent">{project.number}</span>
            <span className="text-mono text-text-muted">{project.year}</span>
          </div>

          <h3 className="text-h3 text-text-primary mb-2">{project.title}</h3>

          <p className="text-mono text-text-tertiary mb-6">
            {project.category}
          </p>

          <p className="text-body text-text-secondary leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-mono text-xs px-3 py-1.5 border border-border rounded-[var(--radius-sm)] text-text-tertiary"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover text-small text-text-secondary hover:text-text-primary transition-colors uppercase tracking-wide"
              >
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover text-small text-text-secondary hover:text-text-primary transition-colors uppercase tracking-wide"
              >
                Live Demo
              </a>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="work"
      className="section-lg"
      aria-labelledby="work-heading"
    >
      <div className="container-grid">
        <div>
          {/* Section Header */}
          <ScrollReveal>
            <div className="eyebrow mb-8">
              <span className="eyebrow-text">Selected Work</span>
            </div>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
            <ScrollReveal>
              <h2 id="work-heading" className="text-h2 text-text-primary leading-tight">
                Projects built with purpose and precision.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="mt-6 md:mt-0 flex-shrink-0">
              <span className="text-mono text-text-muted">
                {String(featuredProjects.length).padStart(2, "0")} projects
              </span>
            </ScrollReveal>
          </div>

          {/* Projects */}
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
