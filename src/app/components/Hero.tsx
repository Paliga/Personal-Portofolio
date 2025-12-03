'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-slate-900 to-primary">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          Hi, I'm <span className="text-accent">YourName</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-3xl text-gray-300 mb-10"
        >
          Front-end Developer & UI Designer
        </motion.p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-accent text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-sky-400 transition"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}