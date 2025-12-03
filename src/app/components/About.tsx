export default function About() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js'];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-16">About Me</h2>
        <p className="text-xl text-center text-gray-300 leading-relaxed mb-12">
          I build fast, beautiful, and user-friendly web experiences with modern tools and a pixel-perfect eye.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill} className="bg-slate-800/50 border border-white/10 rounded-lg p-6 text-center hover:border-accent/50 transition">
              <p className="text-lg font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}