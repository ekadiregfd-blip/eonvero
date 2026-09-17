export interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Art-directed, conversion-focused web design that communicates your brand story with precision. Every layout decision serves a purpose.",
    features: [
      "Visual identity systems",
      "Responsive layouts",
      "UI component design",
      "Design systems",
    ],
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Clean, performant, and maintainable code. Built with modern frameworks and best practices for scalability and speed.",
    features: [
      "Next.js & React",
      "Performance optimization",
      "SEO implementation",
      "Responsive development",
    ],
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "End-to-end application development from database architecture to user interface. Complete solutions, not just frontends.",
    features: [
      "API design & development",
      "Database architecture",
      "Authentication systems",
      "Cloud deployment",
    ],
  },
  {
    number: "04",
    title: "Landing Pages",
    description:
      "High-conversion landing pages with scroll-driven storytelling, polished animations, and optimized performance.",
    features: [
      "Conversion optimization",
      "Scroll animations",
      "A/B testing ready",
      "Analytics integration",
    ],
  },
  {
    number: "05",
    title: "Web Applications",
    description:
      "Complex, interactive web applications with real-time features, data management, and intuitive user experiences.",
    features: [
      "Real-time features",
      "Data dashboards",
      "User management",
      "Third-party integrations",
    ],
  },
  {
    number: "06",
    title: "UI / UX",
    description:
      "User-centered design that balances aesthetics with usability. Every interaction is intentional, every detail considered.",
    features: [
      "User research",
      "Wireframing & prototyping",
      "Interaction design",
      "Usability testing",
    ],
  },
  {
    number: "07",
    title: "Deployment & Maintenance",
    description:
      "Reliable deployment pipelines, monitoring, and ongoing maintenance to keep your digital products running smoothly.",
    features: [
      "CI/CD pipelines",
      "Server configuration",
      "Performance monitoring",
      "Security updates",
    ],
  },
];
