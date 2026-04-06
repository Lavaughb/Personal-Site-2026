"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Python",
  "SQL",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="01" title="About Me" />

        <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] as const }}
            className="space-y-4 text-text-dim leading-relaxed"
          >
            <p>
              Hello! I&apos;m Lavaugh, a software engineer who enjoys building
              things that live on the internet. My interest in web development
              started when I first tried customizing a website template — turns
              out that hacking together layouts taught me a lot about HTML &amp;
              CSS.
            </p>
            <p>
              Fast-forward to today, I&apos;ve had the privilege of working
              across various projects and teams. My main focus these days is
              building accessible, inclusive products and digital experiences.
            </p>
            <p>Here are a few technologies I&apos;ve been working with recently:</p>

            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 font-mono text-sm text-text-medium"
                >
                  <span className="text-accent">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.645, 0.045, 0.355, 1] as const,
            }}
            className="relative mx-auto w-64 md:w-full"
          >
            <div className="group relative">
              <div className="relative z-10 overflow-hidden rounded bg-surface-light">
                <div className="aspect-square w-full flex items-center justify-center bg-surface">
                  {/* Placeholder avatar — replace with your headshot */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    className="h-full w-full"
                  >
                    <rect width="200" height="200" fill="#252525" />
                    <circle cx="100" cy="75" r="35" fill="#dc143c" opacity="0.3" />
                    <circle cx="100" cy="75" r="35" stroke="#dc143c" strokeWidth="2" fill="none" />
                    <path
                      d="M45 175 C45 135 75 110 100 110 C125 110 155 135 155 175"
                      fill="#dc143c"
                      opacity="0.15"
                    />
                    <path
                      d="M45 175 C45 135 75 110 100 110 C125 110 155 135 155 175"
                      stroke="#dc143c"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-accent/10 transition-opacity duration-300 group-hover:opacity-0" />
              </div>
              <div className="absolute -bottom-4 -right-4 z-0 h-full w-full rounded border-2 border-accent transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
