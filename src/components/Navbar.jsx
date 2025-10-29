import { useState, useEffect } from 'react';
import { Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="group inline-flex items-center gap-2">
          <div className="relative">
            <span className="absolute inset-0 blur-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400 opacity-60 group-hover:opacity-80 transition" />
            <Rocket className="relative h-6 w-6 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight">Ciphoria</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#solutions" className="hover:text-white transition">Solutions</a>
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a
            href="mailto:hello@ciphoria.com"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition"
          >
            <Sparkles className="h-4 w-4" /> Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
