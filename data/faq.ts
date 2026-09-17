export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What kind of projects do you build?",
    answer:
      "I build modern websites, full-stack web applications, landing pages, dashboards, and custom digital products. From single-page marketing sites to complex multi-user platforms — if it lives on the web, I can build it.",
  },
  {
    question: "Can you build both frontend and backend?",
    answer:
      "Yes. I work across the full stack — from responsive user interfaces with React and Next.js to backend APIs, databases, authentication systems, and deployment pipelines. Every project gets end-to-end attention.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. Whether it's a visual refresh, a complete rebuild, or a migration to a modern tech stack, I can evaluate your current site and create a plan to elevate it.",
  },
  {
    question: "Can you deploy the project?",
    answer:
      "Yes. I handle deployment to platforms like Vercel, Railway, or custom servers. This includes setting up CI/CD pipelines, environment configuration, domain setup, and SSL certificates.",
  },
  {
    question: "How does the project process work?",
    answer:
      "It starts with a discovery conversation where we align on goals, scope, and timeline. Then I move into design and development with regular check-ins. Once everything is tested and approved, I handle deployment and handover.",
  },
  {
    question: "How can I request a project?",
    answer:
      "Fill out the project inquiry form on this page, or reach out directly via email. Share as much detail as you can about your idea — I'll respond within 48 hours with my thoughts and availability.",
  },
  {
    question: "What are your rates?",
    answer:
      "Pricing depends on the scope, complexity, and timeline of the project. After our initial conversation, I provide a clear proposal with transparent pricing. No hidden fees, no surprises.",
  },
];
