"use client";

import { motion } from "framer-motion";

const ease = [0.645, 0.045, 0.355, 1] as const;

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6 pt-20 md:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6, ease }}
          className="mb-5 font-mono text-accent"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7, ease }}
          className="text-4xl font-bold leading-tight text-text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Lavaughn Brown.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8, ease }}
          className="mt-2 text-3xl font-bold leading-tight text-text-dim sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Lets Talk Tech
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9, ease }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-text-dim"
        >
          Hello and welcome to my page! I am a passionate Software Engineer with a strong background in frontend and backend data solutions, DevOps, and cloud technologies, complemented by my cloud deployment experience. 
          My tech career has been driven by a genuine love for innovation and a desire to enhance efficiency through smart data management and modern software practices. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.0, ease }}
          className="mt-12"
        >
          <a
            href="#projects"
            className="inline-block rounded border border-accent px-7 py-4 font-mono text-sm text-accent transition-all duration-300 hover:bg-accent/10"
          >
            Check out my work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
