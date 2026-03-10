'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, GitCommit, Medal, Rocket, Sparkles, Trophy } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const leaderboardData = [
  { rank: 1, name: 'Alex Chen', xp: 12500, project: 'AI Study Buddy', avatar: 'https://i.pravatar.cc/150?u=1' },
  { rank: 2, name: 'Sarah Jones', xp: 11200, project: 'Campus Map App', avatar: 'https://i.pravatar.cc/150?u=2' },
  { rank: 3, name: 'David Kim', xp: 9800, project: 'Event Tracker', avatar: 'https://i.pravatar.cc/150?u=3' },
  { rank: 4, name: 'Priya Patel', xp: 8400, project: 'GDGOC Website', avatar: 'https://i.pravatar.cc/150?u=4' },
  { rank: 5, name: 'Michael Ross', xp: 7600, project: 'Study Timer', avatar: 'https://i.pravatar.cc/150?u=5' },
];

const activityFeed = [
  { id: 1, user: 'Alex Chen', action: 'pushed new code to', target: 'AI Study Buddy', time: '10m ago', icon: GitCommit, color: 'text-[#4285F4]', bg: 'bg-[#4285F4]/12' },
  { id: 2, user: 'GDGOC', action: 'announced a new hackathon:', target: 'Build Week 2026', time: '2h ago', icon: Calendar, color: 'text-[#EA4335]', bg: 'bg-[#EA4335]/12' },
  { id: 3, user: 'Sarah Jones', action: 'updated', target: 'Campus Map App', time: '5h ago', icon: Rocket, color: 'text-[#34A853]', bg: 'bg-[#34A853]/12' },
  { id: 4, user: 'David Kim', action: 'merged a pull request in', target: 'Event Tracker', time: '1d ago', icon: GitCommit, color: 'text-[#4285F4]', bg: 'bg-[#4285F4]/12' },
];

function AnimatedValue({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const duration = 1000;
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

  return <>{displayValue.toLocaleString()}</>;
}

export function Leaderboard() {
  const [filter, setFilter] = useState<'weekly' | 'monthly'>('weekly');

  return (
    <section id="leaderboard" className="py-24">
      <div className="section-shell">
        <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="section-label mb-5">
              <Trophy size={14} className="text-[#FBBC05]" />
              Community Leaderboard
            </div>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Top contributors,
              <span className="block gradient-text">live activity, real signal.</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/60">
            Reward systems only matter when they feel alive. This board surfaces contributors, code momentum, and project traction in one place.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card relative overflow-hidden rounded-[32px] p-6"
          >
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#4285F4]/60 to-transparent" />

            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Trophy className="text-[#FBBC05]" size={28} />
                <h3 className="font-display text-2xl font-semibold text-white">Leaderboard</h3>
              </div>

              <div className="flex rounded-full border border-white/10 bg-white/6 p-1">
                <button
                  onClick={() => setFilter('weekly')}
                  className={cn('rounded-full px-4 py-1.5 text-sm font-medium transition-colors', filter === 'weekly' ? 'bg-white text-slate-950 shadow-sm' : 'text-white/55 hover:text-white')}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setFilter('monthly')}
                  className={cn('rounded-full px-4 py-1.5 text-sm font-medium transition-colors', filter === 'monthly' ? 'bg-white text-slate-950 shadow-sm' : 'text-white/55 hover:text-white')}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 text-sm text-white/45">
                    <th className="pb-4 pl-4 font-medium">Rank</th>
                    <th className="pb-4 font-medium">Member</th>
                    <th className="pb-4 font-medium">Points</th>
                    <th className="pb-4 font-medium">Top Project</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((user, index) => (
                    <motion.tr
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      key={user.rank}
                      className="group border-b border-white/6 transition-colors hover:bg-white/4"
                    >
                      <td className="py-4 pl-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/6 font-mono text-sm text-white/70 transition-colors group-hover:border-white/20">
                          {user.rank === 1 ? <Medal size={16} className="text-[#FBBC05]" /> : user.rank === 2 ? <Medal size={16} className="text-gray-400" /> : user.rank === 3 ? <Medal size={16} className="text-amber-700" /> : user.rank}
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <Image src={user.avatar} alt={user.name} width={40} height={40} className="h-10 w-10 rounded-full border border-white/10" referrerPolicy="no-referrer" />
                          <span className="font-medium text-white">{user.name}</span>
                        </div>
                      </td>
                      <td className="py-4 font-mono text-[#8ef0b0]">
                        <AnimatedValue value={user.xp} />
                      </td>
                      <td className="py-4 text-white/58">{user.project}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card relative overflow-hidden rounded-[32px] p-6"
          >
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#34A853]/55 to-transparent" />

            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-white">Live Activity</h3>
              <div className="section-label">
                <Sparkles size={14} className="text-[#34A853]" />
                Synced feed
              </div>
            </div>

            <div className="relative space-y-6 before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/12 before:to-transparent">
              {activityFeed.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.id * 0.08 }}
                  className="relative flex items-start gap-4"
                >
                  <div className={cn('z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10', item.bg, item.color)}>
                    <item.icon size={18} />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm leading-6 text-white/60">
                      <span className="font-semibold text-white">{item.user}</span> {item.action} <span className="font-medium text-white/78">{item.target}</span>
                    </p>
                    <span className="mt-1 block text-xs text-white/35">{item.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Commits today', value: '142' },
                { label: 'Projects active', value: '24' },
                { label: 'Mentors live', value: '09' },
              ].map((item) => (
                <div key={item.label} className="glass-panel rounded-[22px] p-4 text-center">
                  <div className="font-display text-2xl text-white">{item.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.24em] text-white/40">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
