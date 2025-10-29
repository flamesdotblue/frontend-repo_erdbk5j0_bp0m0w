import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/60">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,212,255,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-white text-2xl font-semibold">Ciphoria</h3>
            <p className="mt-2 text-white/70 max-w-md">
              We help teams design, build, and scale exceptional software products.
            </p>
          </div>
          <div className="flex md:justify-end items-start gap-3">
            <a
              href="mailto:hello@ciphoria.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition"
            >
              <Mail className="h-4 w-4" /> hello@ciphoria.com
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Ciphoria, Inc. All rights reserved.</div>
      </div>
    </footer>
  );
}
