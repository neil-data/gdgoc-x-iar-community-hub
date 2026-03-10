'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="join" className="relative py-24">
      <div className="section-shell">
        <div className="glass-card relative overflow-hidden rounded-[36px] p-8 md:p-12">
          <div className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-[#4285F4]/10 blur-[110px]" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#FBBC05]/10 blur-[90px]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16">
            <div>
              <div className="section-label mb-5">
                <Send size={14} className="text-[#EA4335]" />
                Join Us
              </div>
              <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
                Join the chapter and build with people who
                <span className="block gradient-text">actually ship things.</span>
              </h2>
              <p className="mb-10 mt-6 text-lg leading-8 text-white/62">
                Want to collaborate, mentor, sponsor, or join as a builder? Drop a note and we&apos;ll pull you into the right events, tracks, and shipping lanes.
              </p>

              <div className="space-y-6">
                <div className="glass-panel flex items-center gap-4 rounded-[22px] p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4285F4]/12 text-[#4285F4]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email Us</h4>
                    <p className="text-white/56">hello@gdgociar.com</p>
                  </div>
                </div>
                <div className="glass-panel flex items-center gap-4 rounded-[22px] p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#34A853]/12 text-[#34A853]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Visit Us</h4>
                    <p className="text-white/56">Institute of Advanced Research, Gandhinagar</p>
                  </div>
                </div>
                <div className="glass-panel flex items-center gap-4 rounded-[22px] p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EA4335]/12 text-[#EA4335]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Call Us</h4>
                    <p className="text-white/56">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[26px] border border-white/10 bg-[linear-gradient(135deg,rgba(66,133,244,0.15),rgba(234,67,53,0.1))] p-5">
                <div className="text-sm uppercase tracking-[0.28em] text-white/48">Open lanes</div>
                <div className="mt-3 font-display text-2xl text-white">Mentors, speakers, contributors, design volunteers, and project founders.</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="glass-panel rounded-[30px] p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/72">Full Name</label>
                  <input type="text" id="name" required className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition-all placeholder:text-white/28 focus:border-[#4285F4]/50 focus:bg-white/8" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/72">Email Address</label>
                  <input type="email" id="email" required className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition-all placeholder:text-white/28 focus:border-[#4285F4]/50 focus:bg-white/8" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/72">Message</label>
                  <textarea id="message" required rows={5} className="w-full resize-none rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition-all placeholder:text-white/28 focus:border-[#4285F4]/50 focus:bg-white/8" placeholder="Tell us what you want to build, learn, or contribute." />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-semibold transition-all ${
                    isSuccess ? 'bg-[#34A853] text-slate-950' : 'bg-white text-slate-950 hover:bg-white/90'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : isSuccess ? (
                    'Message Sent Successfully!'
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
