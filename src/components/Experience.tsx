"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface Job {
  company: string;
  title: string;
  period: string;
  bullets: string[];
}

const jobs: Job[] = [
  {
    company: "Company One",
    title: "Software Engineer",
    period: "Jan 2024 — Present",
    bullets: [
      "Developed and maintained web applications using modern JavaScript frameworks",
      "Collaborated with cross-functional teams to deliver features end-to-end",
      "Improved application performance and reduced load times by optimizing critical rendering paths",
    ],
  },
  // {
  //   company: "Company Two",
  //   title: "Frontend Developer",
  //   period: "Jun 2022 — Dec 2023",
  //   bullets: [
  //     "Built responsive UI components and design systems with React and TypeScript",
  //     "Integrated RESTful APIs and managed application state",
  //     "Participated in code reviews and mentored junior developers",
  //   ],
  // },
  // {
  //   company: "Company Three",
  //   title: "Web Developer Intern",
  //   period: "Jan 2022 — May 2022",
  //   bullets: [
  //     "Assisted in the development of client-facing web applications",
  //     "Wrote clean, maintainable code following team coding standards",
  //     "Gained experience with version control, CI/CD pipelines, and agile workflows",
  //   ],
  // },
];

const ease = [0.645, 0.045, 0.355, 1] as const;

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="02" title="Where I've Worked" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col gap-6 md:flex-row"
        >
          {/* Tab list */}
          <div className="relative flex overflow-x-auto border-b border-surface-light md:flex-col md:border-b-0 md:border-l">
            {jobs.map((job, i) => (
              <button
                key={job.company}
                onClick={() => setActiveTab(i)}
                className={`whitespace-nowrap px-5 py-3 text-left font-mono text-sm transition-all duration-200 ${
                  activeTab === i
                    ? "bg-surface-light text-accent"
                    : "text-text-dim hover:bg-surface hover:text-text-medium"
                }`}
              >
                {job.company}
              </button>
            ))}
            {/* Active indicator */}
            <div
              className="absolute bottom-0 left-0 hidden h-10 w-0.5 bg-accent transition-all duration-300 md:block"
              style={{ transform: `translateY(${activeTab * 2.75}rem)` }}
            />
          </div>

          {/* Tab panel */}
          <div className="min-h-[280px] flex-1">
            <h3 className="text-xl text-text-bright">
              {jobs[activeTab].title}{" "}
              <span className="text-accent">@ {jobs[activeTab].company}</span>
            </h3>
            <p className="mt-1 mb-6 font-mono text-sm text-text-dim">
              {jobs[activeTab].period}
            </p>
            <ul className="space-y-3">
              {jobs[activeTab].bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-text-dim leading-relaxed"
                >
                  <span className="mt-1.5 text-accent">▹</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
