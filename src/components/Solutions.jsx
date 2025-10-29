import { motion } from 'framer-motion';
import { Workflow, Bot, LineChart, ExternalLink, Code } from 'lucide-react';

const items = [
  {
    title: 'Product Consulting',
    desc: 'Strategy, roadmaps, and delivery for ambitious teams. From idea to launch with measurable outcomes.',
    icon: Workflow,
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'AI & Data Engineering',
    desc: 'LLM integrations, retrieval, analytics pipelines, and evaluation. Ship reliable, practical AI.',
    icon: Bot,
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Automation & Platforms',
    desc: 'Developer tooling, internal platforms, and workflow automation to move faster with confidence.',
    icon: Code,
    accent: 'from-violet-500 to-indigo-500',
  },
  {
    title: 'Mermaid Chart Editor',
    desc: 'A delightful editor for Mermaid diagrams. Create, preview, and share diagrams instantly.',
    icon: LineChart,
    href: 'https://mermaid.ciphoria.com',
    accent: 'from-emerald-400 to-teal-500',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.25),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">What we build</h2>
          <p className="mt-4 text-white/70 text-lg">
            We partner with founders and enterprises to design, build, and scale distinctive software products — and ship our own along the way.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.href || '#contact'}
              target={item.href ? '_blank' : undefined}
              rel={item.href ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur hover:bg-white/[0.06] transition"
            >
              <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-tr ${item.accent} opacity-20 blur-3xl`} />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/80">
                  {item.href ? 'Open app' : 'Learn more'}
                  {item.href ? (
                    <ExternalLink className="h-4 w-4 opacity-80 group-hover:opacity-100" />
                  ) : (
                    <span className="h-4 w-4 rounded-full border border-white/30 inline-block" />
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
