'use client';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-primary/90 backdrop-blur-md z-50 border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-accent">
          YourName
        </a>
        <div className="hidden md:flex space-x-10">
          {['home', 'projects', 'about', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize hover:text-accent transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}