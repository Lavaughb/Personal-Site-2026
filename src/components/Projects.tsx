"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  icon: React.ReactNode;
}

// Project placeholder icons
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const featuredProjects: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack web application with a custom backend API, authentication, and a polished frontend. Built for real users with production-grade infrastructure.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    external: "#",
    icon: <CodeIcon />,
  },
  {
    title: "Project Two",
    description:
      "An interactive dashboard that visualizes complex data sets in real time. Features responsive charts, filtering, and export functionality.",
    tech: ["Next.js", "TypeScript", "D3.js", "REST API"],
    github: "https://github.com",
    external: "#",
    icon: <ChartIcon />,
  },
  {
    title: "Project Three",
    description:
      "A mobile-first e-commerce platform with cart management, payment integration, and an admin panel for inventory control.",
    tech: ["React", "Stripe", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    icon: <CartIcon />,
  },
];

const ease = [0.645, 0.045, 0.355, 1] as const;

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="03" title="Some Things I've Built" />

        <div className="space-y-24">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className={`relative grid items-center gap-4 md:grid-cols-12 ${
                i % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              {/* Project image placeholder with icon */}
              <div
                className={`relative hidden overflow-hidden rounded bg-surface md:col-span-7 md:block ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="aspect-video w-full bg-surface-light flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    {project.icon}
                    <span className="font-mono text-xs text-text-dim tracking-wider uppercase">
                      {project.title}
                    </span>
                    <div className="flex gap-1 mt-1">
                      {[...Array(3)].map((_, j) => (
                        <div
                          key={j}
                          className="h-1 rounded-full bg-accent/30"
                          style={{ width: `${40 + j * 20}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-accent/5 transition-opacity duration-300 hover:opacity-0" />
              </div>

              {/* Project content */}
              <div
                className={`relative z-10 rounded-lg bg-surface p-6 md:col-span-6 md:bg-transparent md:p-0 ${
                  i % 2 === 1
                    ? "md:col-start-1 md:row-start-1"
                    : "md:col-start-7"
                }`}
              >
                <p className="mb-1 font-mono text-sm text-accent">
                  Featured Project
                </p>
                <h3 className="mb-4 text-2xl font-semibold text-text-bright transition-colors hover:text-accent">
                  <a href={project.external || project.github || "#"}>
                    {project.title}
                  </a>
                </h3>
                <div className="rounded-lg bg-surface-light p-5 shadow-xl shadow-black/30 md:bg-surface">
                  <p className="text-text-dim leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`mt-4 flex flex-wrap gap-3 font-mono text-sm text-text-dim ${
                    i % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div
                  className={`mt-4 flex gap-4 ${
                    i % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-medium transition-colors hover:text-accent"
                      aria-label="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-medium transition-colors hover:text-accent"
                      aria-label="External link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
