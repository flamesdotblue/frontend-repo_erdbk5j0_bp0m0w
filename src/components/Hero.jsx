import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-1/3 h-1/2 bg-gradient-to-t from-black via-black/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Futuristic consulting • Product engineering • R&D
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-white">
            Build bold products with Ciphoria
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/80">
            We craft high-performance software and immersive experiences — from strategy and prototypes to production apps. Explore our own tools like the Mermaid Chart Editor at mermaid.ciphoria.com.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#solutions"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition"
            >
              Explore solutions
              <ArrowRight className="h-4 w-4 transition -rotate-45 group-hover:rotate-0" />
            </a>
            <a
              href="https://mermaid.ciphoria.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition"
            >
              Try Mermaid Editor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
