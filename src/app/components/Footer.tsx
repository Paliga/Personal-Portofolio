export default function Footer() {
  return (
    <footer className="py-10 text-center text-gray-500 border-t border-white/10">
      <p>© {new Date().getFullYear()} YourName. Built with Next.js + Tailwind.</p>
    </footer>
  );
}