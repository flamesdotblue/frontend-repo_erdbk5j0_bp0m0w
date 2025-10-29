import { motion } from 'framer-motion';
import { Code2, Server, Cpu, BarChart3 } from 'lucide-react';

const items = [
  {
    title: 'Frontend Engineering',
    desc: 'Accessible, responsive interfaces built with modern stacks. Performance first, pixel-perfect polish.',
    icon: Code2,
  },
  {
    title: 'Backend & APIs',
    desc: 'Robust APIs and services with best practices in security, testing, and observability.',
    icon: Server,
  },
  {
    title: 'AI-Assisted Experiences',
    desc: 'Integrate LLMs and data pipelines thoughtfully to enhance workflows without adding noise.',
    icon: Cpu,
  },
  {
    title: 'Analytics & Optimization',
    desc: 'Measure what matters. Ship with dashboards, eventing, and continuous UX performance tuning.',
    icon: BarChart3,
  },
];

export default function Solutions() {
  return (
    <section id="expertise" className="relative py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Expertise</h2>
          <p className="mt-4 text-white/70 text-lg">
            We bring senior-level engineering and design to ship reliable, maintainable web products on time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-6 hover:bg-white/[0.06] transition"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div id="work" className="mt-14 rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-white text-2xl font-semibold">A pragmatic, high-quality process</h3>
              <p className="mt-2 text-white/70 max-w-2xl">
                We start with clarity—requirements, constraints, and success metrics—then deliver in focused iterations with visible progress and tight feedback loops.
              </p>
            </div>
            <a href="mailto:hello@ciphoria.com" className="rounded-full bg-white text-black px-5 py-3 font-medium hover:opacity-95 transition">Discuss your project</a>
          </div>
        </div>
      </div>
    </section>
  );
}
