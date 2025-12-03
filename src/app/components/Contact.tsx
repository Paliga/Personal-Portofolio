export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-12">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm always open to new opportunities and interesting projects.
        </p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block bg-accent text-primary px-12 py-5 rounded-full text-lg font-semibold hover:bg-sky-400 transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}