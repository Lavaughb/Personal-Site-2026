"use client";

import { motion } from "framer-motion";

const ease = [0.645, 0.045, 0.355, 1] as const;

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Lavaughb",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lavaughb/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function SocialSidebar() {
  return (
    <>
      {/* Left sidebar — social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease }}
        className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-5 md:flex lg:left-10"
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
            aria-label={s.label}
          >
            {s.icon}
          </a>
        ))}
        <div className="mt-2 h-24 w-px bg-text-dim" />
      </motion.div>

      {/* Right sidebar — email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease }}
        className="fixed bottom-0 right-6 z-40 hidden flex-col items-center gap-5 md:flex lg:right-10"
      >
        <a
          href="mailto:Lavaugh.Brown@gmail.com"
          className="font-mono text-xs tracking-widest text-text-dim transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
          style={{ writingMode: "vertical-rl" }}
        >
          Lavaugh.Brown@gmail.com
        </a>
        <div className="mt-2 h-24 w-px bg-text-dim" />
      </motion.div>
    </>
  );
}
