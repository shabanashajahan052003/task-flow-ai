"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-12 text-center px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 mb-8"
        >
          🚀 AI Powered Productivity Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold leading-tight"
        >
          Manage Projects
          <br />
          Faster With AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 text-xl text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto"
        >
          TaskFlow AI helps teams automate workflows,
          collaborate efficiently and boost productivity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center gap-5 mt-10"
        >
          <button className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition font-semibold">
            Start Free Trial
          </button>

          <button className="px-8 py-4 rounded-2xl border border-zinc-700 hover:border-purple-500 transition">
            Watch Demo
          </button>
        </motion.div>

      </div>
    </section>
  );
}