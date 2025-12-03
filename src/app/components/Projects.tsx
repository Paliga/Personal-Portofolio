'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getRepos, type Repo } from '../lib/github';

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    getRepos().then(setRepos);
  }, []);

  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="block group bg-primary/50 border border-white/10 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition">
                  {repo.name.replace(/-/g, ' ')}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {repo.description || 'No description'}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Stars {repo.stargazers_count}</span>
                  <span className="text-accent">{repo.language || 'Unknown'}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}