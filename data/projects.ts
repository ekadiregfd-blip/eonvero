export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  year: number;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
  featured: boolean;
  color?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "aurora-dashboard",
    number: "01",
    title: "Aurora Dashboard",
    year: 2026,
    category: "Full-Stack Web Application",
    description:
      "A real-time analytics dashboard built with modern web technologies. Features live data visualization, user authentication, and responsive design optimized for both desktop and mobile workflows.",
    longDescription:
      "Aurora Dashboard is a comprehensive analytics platform that transforms raw data into actionable insights. Built from the ground up with performance and scalability in mind, featuring WebSocket connections for real-time updates, role-based access control, and an intuitive drag-and-drop interface for custom dashboard creation.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "WebSocket"],
    image: "/images/projects/aurora.jpg",
    github: "https://github.com/erdemkadir",
    featured: true,
    color: "#1a1a2e",
  },
  {
    id: "2",
    slug: "bytecraft-cms",
    number: "02",
    title: "ByteCraft CMS",
    year: 2026,
    category: "Content Management System",
    description:
      "A headless content management system with a visual editor, API-first architecture, and plugin system. Designed for developers who need flexibility without sacrificing editorial experience.",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
    image: "/images/projects/bytecraft.jpg",
    github: "https://github.com/erdemkadir",
    featured: true,
    color: "#0f2027",
  },
  {
    id: "3",
    slug: "nexus-landing",
    number: "03",
    title: "Nexus Landing",
    year: 2025,
    category: "Landing Page & Web Design",
    description:
      "A high-conversion landing page with scroll-driven storytelling, micro-interactions, and performance-optimized animations. Designed to captivate visitors within the first three seconds.",
    technologies: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/nexus.jpg",
    featured: true,
    color: "#1a0a2e",
  },
  {
    id: "4",
    slug: "sentinel-api",
    number: "04",
    title: "Sentinel API",
    year: 2025,
    category: "Backend & API Development",
    description:
      "A secure RESTful API service with rate limiting, JWT authentication, comprehensive logging, and automated testing. Built with security-first principles following OWASP guidelines.",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
    image: "/images/projects/sentinel.jpg",
    github: "https://github.com/erdemkadir",
    featured: false,
    color: "#0a1628",
  },
];
