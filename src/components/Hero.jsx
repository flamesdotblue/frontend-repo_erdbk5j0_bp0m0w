import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Spline 3D Object */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient to improve legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-widest text-white/70">Web Development • Product Engineering</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight text-white">
            Clean, performant web experiences
          </h1>
          <p className="mt-5 text-white/80 text-lg md:text-xl">
            Ciphoria helps teams design and build modern web products with a focus on craftsmanship, reliability, and measurable impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#expertise"
              className="rounded-full bg-white text-black px-5 py-3 font-medium hover:opacity-95 transition"
            >
              Our expertise
            </a>
            <a
              href="https://mermaid.ciphoria.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10 transition"
            >
              Mermaid Editor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
