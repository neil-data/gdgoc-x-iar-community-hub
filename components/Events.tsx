'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Clock3, MapPin, Sparkles, Ticket } from 'lucide-react';
import Image from 'next/image';

const events = [
  {
    id: 1,
    title: 'GenAI Study Jam',
    date: 'Mar 22, 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'IAR Main Auditorium',
    image: 'https://picsum.photos/seed/genai/800/400',
    description: 'Ship your first Gemini-powered workflow with guided mentors, collaborative prompts, and live debugging tables.',
    tags: ['AI/ML', 'Workshop'],
    capacity: '96 seats',
  },
  {
    id: 2,
    title: 'Frontend Systems Bootcamp',
    date: 'Apr 06, 2026',
    time: '2:00 PM - 6:00 PM',
    location: 'Innovation Lab, CS Block',
    image: 'https://picsum.photos/seed/webdev/800/400',
    description: 'Design and build a production-style frontend with design tokens, motion systems, and deployment discipline.',
    tags: ['Frontend', 'Bootcamp'],
    capacity: '72 seats',
  },
  {
    id: 3,
    title: 'Cloud Architecture Lab',
    date: 'Apr 20, 2026',
    time: '11:00 AM - 3:00 PM',
    location: 'Hybrid Session',
    image: 'https://picsum.photos/seed/cloud/800/400',
    description: 'Build event-driven systems with Cloud Run, Pub/Sub, and observability dashboards in a guided lab format.',
    tags: ['Cloud', 'Lab'],
    capacity: '120 seats',
  },
];

export function Events() {
  const [rsvpStatus, setRsvpStatus] = useState<Record<number, boolean>>({});

  const handleRSVP = (id: number) => {
    setRsvpStatus((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="events" className="py-24">
      <div className="section-shell">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="section-label mb-5">
              <Calendar size={14} className="text-[#4285F4]" />
              Community Events
            </div>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Build momentum with
              <span className="block gradient-text">workshops, launches, and labs.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/60">
            Every event is designed like a sprint: clear outcomes, strong production quality, and just enough pressure to make people ship.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card relative overflow-hidden rounded-[32px] p-5"
          >
            <div className="mb-5 flex items-center justify-between rounded-[24px] border border-white/10 bg-white/6 px-5 py-4">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-white/50">Next Major Drop</div>
                <div className="mt-2 font-display text-2xl text-white">Hackweek 2026 is loading</div>
              </div>
              <div className="rounded-full bg-[#34A853]/12 px-3 py-1 text-xs font-semibold text-[#34A853]">Live queue</div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="neon-border group flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/55 transition-transform hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={event.image} alt={event.title} fill className="object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.1),rgba(2,6,23,0.82))]" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h3 className="font-display text-2xl font-bold text-white">{event.title}</h3>
                      <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/55">{event.capacity}</div>
                    </div>
                    <p className="mb-6 flex-grow text-sm leading-6 text-white/58">{event.description}</p>

                    <div className="mb-6 space-y-3">
                      <div className="flex items-center gap-3 text-sm text-white/60">
                        <Calendar size={16} className="text-[#4285F4]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-white/60">
                        <Clock3 size={16} className="text-[#EA4335]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-white/60">
                        <MapPin size={16} className="text-[#34A853]" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRSVP(event.id)}
                      disabled={rsvpStatus[event.id]}
                      className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3 font-semibold transition-all ${
                        rsvpStatus[event.id]
                          ? 'border border-[#34A853]/35 bg-[#34A853]/14 text-[#8ef0b0]'
                          : 'bg-white text-slate-950 hover:bg-white/90'
                      }`}
                    >
                      {rsvpStatus[event.id] ? (
                        <>
                          <CheckCircle2 size={18} />
                          RSVP Confirmed
                        </>
                      ) : (
                        'RSVP Now'
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-[32px] p-7"
          >
            <div className="section-label mb-5">
              <Sparkles size={14} className="text-[#FBBC05]" />
              Why these events work
            </div>
            <div className="space-y-4">
              {[
                'Production-style briefs so attendees know what “done” looks like.',
                'Peer review stations for code, design, and demos.',
                'Clear learning ladders that connect events to project outcomes.',
              ].map((item) => (
                <div key={item} className="glass-panel rounded-[22px] p-4 text-sm leading-6 text-white/62">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(66,133,244,0.12),rgba(52,168,83,0.08))] p-5">
              <div className="mb-3 flex items-center gap-2 text-sm text-white/70">
                <Ticket size={16} className="text-[#FBBC05]" />
                Priority Track
              </div>
              <div className="font-display text-2xl text-white">Apply for speaker slots, review panels, and lead-mentor roles.</div>
              <button className="mt-5 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Submit Interest
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
