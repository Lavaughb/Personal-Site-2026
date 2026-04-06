"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] as const }}
      className="mb-10 flex items-center gap-4 text-2xl font-semibold text-text-bright md:text-3xl"
    >
      <span className="font-mono text-lg text-accent md:text-xl">{number}.</span>
      {title}
      <span className="hidden h-px flex-1 bg-surface-light sm:block" />
    </motion.h2>
  );
}
