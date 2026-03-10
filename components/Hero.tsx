'use client';

import { motion } from 'motion/react';
import { ArrowRight, GitBranch, Sparkles, TerminalSquare, UsersRound } from 'lucide-react';
import { Hero3D } from '@/components/Hero3D';

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0 bg-noise opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="absolute left-[8%] top-28 h-72 w-72 rounded-full bg-[#4285F4]/16 blur-[120px]" />
      <div className="absolute bottom-20 right-[8%] h-80 w-80 rounded-full bg-[#EA4335]/12 blur-[140px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.14)_48%,rgba(2,6,23,0.72)_100%)]" />

      <div className="section-shell relative z-10 w-full pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="section-label mb-6">
              <Sparkles size={14} className="text-[#FBBC05]" />
              Official Developer Hub for IAR
            </div>

            <h1 className="text-balance font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-[6.6rem]">
              Build. Learn.
              <span className="block gradient-text">Lead.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
              Welcome to the official developer hub for Institute of Advanced Research. We run high-signal events, launch student-built products, and turn curious builders into confident technical leaders.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                Explore Events
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-colors hover:bg-white/10"
              >
                Join Community
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: GitBranch, label: 'Open-source pushes', value: '4.8k+' },
                { icon: UsersRound, label: 'Active members', value: '180+' },
                { icon: TerminalSquare, label: 'Labs and jams', value: '32' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.1, duration: 0.55 }}
                  className="glass-card rounded-[24px] px-5 py-5"
                >
                  <item.icon size={18} className="mb-4 text-white/70" />
                  <div className="font-display text-3xl font-semibold text-white">{item.value}</div>
                  <div className="mt-1 text-sm text-white/52">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[40px] bg-[linear-gradient(135deg,rgba(66,133,244,0.22),rgba(234,67,53,0.14),rgba(251,188,5,0.12),rgba(52,168,83,0.14))] blur-3xl" />
            <div className="glass-card relative overflow-hidden rounded-[32px] p-3 shadow-neon">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-[#4285F4]/18 blur-3xl" />
              <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full bg-[#34A853]/18 blur-3xl" />
              <div className="rounded-[28px] border border-white/10 bg-slate-950/60">
                <Hero3D />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
