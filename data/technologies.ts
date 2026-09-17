export interface TechCategory {
  name: string;
  items: string[];
}

export const technologies: TechCategory[] = [
  {
    name: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Python", "Go", ".NET"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "Tools & Infrastructure",
    items: ["Git", "GitHub", "Docker", "Linux"],
  },
  {
    name: "Security",
    items: [
      "OWASP Principles",
      "Authentication",
      "Input Validation",
      "API Security",
    ],
  },
];
