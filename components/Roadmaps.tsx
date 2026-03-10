'use client';

import { motion } from 'motion/react';
import { ArrowRight, BrainCircuit, Cloud, LayoutTemplate, Sparkles } from 'lucide-react';

const roadmaps = [
  {
    id: 'cloud',
    title: 'Cloud Track',
    icon: Cloud,
    color: 'from-[#4285F4] to-[#34A853]',
    glowColor: 'rgba(66, 133, 244, 0.1)',
    levels: [
      { name: 'Level 1', desc: 'Cloud Fundamentals, IAM, storage, and compute basics.' },
      { name: 'Level 2', desc: 'Containers, Kubernetes, CI/CD, and deployment workflows.' },
      { name: 'Level 3', desc: 'Serverless architecture, observability, and scale patterns.' },
    ],
  },
  {
    id: 'ai',
    title: 'AI / ML Track',
    icon: BrainCircuit,
    color: 'from-[#EA4335] to-[#FBBC05]',
    glowColor: 'rgba(234, 67, 53, 0.1)',
    levels: [
      { name: 'Level 1', desc: 'Python, data foundations, and model intuition.' },
      { name: 'Level 2', desc: 'Core ML workflows with Scikit-Learn and evaluation loops.' },
      { name: 'Level 3', desc: 'Deep learning, GenAI orchestration, and applied product ideas.' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Track',
    icon: LayoutTemplate,
    color: 'from-[#FBBC05] to-[#34A853]',
    glowColor: 'rgba(251, 188, 5, 0.1)',
    levels: [
      { name: 'Level 1', desc: 'Web foundations, layout systems, and JavaScript essentials.' },
      { name: 'Level 2', desc: 'React architecture, state flows, and reusable UI patterns.' },
      { name: 'Level 3', desc: 'Next.js, performance, design systems, and product polish.' },
    ],
  },
];

export function Roadmaps() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(66,133,244,0.1),rgba(234,67,53,0.08),rgba(251,188,5,0.07))] blur-[120px]" />

      <div className="section-shell relative z-10">
        <div className="mb-14 text-center">
          <div className="section-label mb-5">
            <Sparkles size={14} className="text-[#FBBC05]" />
            Learning Roadmaps
          </div>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Structured tracks for
            <span className="block gradient-text">cloud, AI, and frontend systems.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/60">
            Clear levels, visible progression, and deliberate next steps so students can move from basics to production thinking without drifting.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {roadmaps.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 rounded-[30px] blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: track.glowColor }} />

              <div className="glass-card relative flex h-full flex-col rounded-[30px] p-8 transition-all hover:-translate-y-1">
                <div className="mb-8 flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${track.color} shadow-[0_0_30px_rgba(66,133,244,0.18)]`}>
                    <track.icon className="text-slate-950" size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{track.title}</h3>
                </div>

                <div className="relative flex-grow space-y-6 before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/15 before:to-transparent">
                  {track.levels.map((level, levelIndex) => (
                    <div key={level.name} className="relative flex items-start gap-6">
                      <div className="z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-slate-950 transition-colors group-hover:border-white/35">
                        <div className="h-2 w-2 rounded-full bg-white/60 transition-colors group-hover:bg-white" />
                      </div>
                      <div>
                        <div className="mb-1 text-xs font-mono uppercase tracking-[0.22em] text-white/40">{level.name}</div>
                        <p className="text-sm leading-relaxed text-white/58">{level.desc}</p>
                        {levelIndex < track.levels.length - 1 ? <div className="mt-5 h-px w-16 bg-gradient-to-r from-white/20 to-transparent" /> : null}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  Start Track
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
