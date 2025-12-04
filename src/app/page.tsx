import Hero from './components/Hero';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Fading gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900 to-black pointer-events-none" />

      {/* Subtle cyan grid with radial fade */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at center, white 0%, transparent 70%)',
        }}
      />

      {/* All content */}
      <div className="relative z-10 container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <Hero />
          {/* More cards will go here */}
        </div>
      </div>
    </main>
  );
}