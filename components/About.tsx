'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Binary, Globe, MapPin, Sparkles, Users } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { label: 'Members', value: 180, suffix: '+' },
  { label: 'Events', value: 32, suffix: '+' },
  { label: 'Projects', value: 54, suffix: '+' },
  { label: 'Workshops', value: 18, suffix: '+' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setDisplayValue(Math.round(value * (1 - Math.pow(1 - progress, 3))));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <div className="glass-card relative overflow-hidden rounded-[36px] p-8 md:p-12">
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#34A853]/10 blur-[100px]" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#4285F4]/14 blur-[90px]" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-label mb-6">
                <Globe size={14} className="text-[#4285F4]" />
                About IAR Chapter
              </div>

              <h2 className="text-balance font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                We turn campus energy into
                <span className="block gradient-text">shipped developer momentum.</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/68">
                GDG On Campus at the Institute of Advanced Research is a launchpad for engineers who want more than lectures. We run hands-on labs, peer-led sprints, real product showcases, and mentoring loops that help students build portfolios with signal.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="glass-panel rounded-[24px] p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EA4335]/12 text-[#EA4335]">
                    <Users size={20} />
                  </div>
                  <h4 className="font-semibold text-white">Community-first engineering</h4>
                  <p className="mt-2 text-sm leading-6 text-white/56">
                    Build with peers, review like a team, and learn in public through events and project demos.
                  </p>
                </div>
                <div className="glass-panel rounded-[24px] p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#34A853]/12 text-[#34A853]">
                    <Binary size={20} />
                  </div>
                  <h4 className="font-semibold text-white">Practical, not performative</h4>
                  <p className="mt-2 text-sm leading-6 text-white/56">
                    Each cohort is pushed toward shipping: prototypes, dashboards, AI tools, and campus-ready apps.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="glass-panel rounded-[22px] px-4 py-5">
                    <div className="font-display text-3xl font-semibold text-white">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card relative overflow-hidden rounded-[32px] p-3 shadow-neon">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] border border-white/10">
                  <Image
                    src="https://picsum.photos/seed/iar-campus-tech/900/1100"
                    alt="Institute of Advanced Research campus"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.15)_40%,rgba(2,6,23,0.9)_100%)]" />
                  <div className="absolute inset-x-6 bottom-6 grid gap-4 sm:grid-cols-2">
                    <div className="glass-panel rounded-[22px] p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm text-white/70">
                        <MapPin size={16} className="text-[#34A853]" />
                        Gandhinagar Campus
                      </div>
                      <p className="text-sm leading-6 text-white/58">
                        Where code reviews, study jams, and founder conversations happen after hours.
                      </p>
                    </div>
                    <div className="glass-panel rounded-[22px] p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm text-white/70">
                        <Sparkles size={16} className="text-[#FBBC05]" />
                        Startup-grade rhythm
                      </div>
                      <p className="text-sm leading-6 text-white/58">
                        Premium documentation, active demos, and event production that feels like a real product team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
