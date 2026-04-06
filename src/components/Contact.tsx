"use client";

import { motion } from "framer-motion";

const ease = [0.645, 0.045, 0.355, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-4 font-mono text-accent"
        >
          04. What&apos;s Next?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-4xl font-bold text-text-bright md:text-5xl"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-6 text-lg leading-relaxed text-text-dim"
        >
          I&apos;m currently open to new opportunities. Whether you have a
          question, a project idea, or just want to say hi — my inbox is always
          open and I&apos;ll do my best to get back to you.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          href="mailto:hello@example.com"
          className="mt-12 inline-block rounded border border-accent px-8 py-4 font-mono text-sm text-accent transition-all duration-300 hover:bg-accent/10"
        >
          Say Hello
        </motion.a>
      </div>
    </section>
  );
}
