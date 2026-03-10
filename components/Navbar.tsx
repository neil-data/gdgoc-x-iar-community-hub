'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Events', href: '#events' },
  { name: 'Projects', href: '#projects' },
  { name: 'Leaderboard', href: '#leaderboard' },
  { name: 'Team', href: '#team' },
  { name: 'Join Us', href: '#join' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry?.target instanceof HTMLElement) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navigateTo = (href: string) => {
    const target = document.querySelector(href);

    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(target.id);
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-white/10 bg-slate-950/55 shadow-[0_14px_40px_rgba(2,6,23,0.45)] backdrop-blur-2xl'
          : 'bg-transparent'
      )}
    >
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-6">
          <button
            type="button"
            onClick={() => navigateTo('#home')}
            className="flex shrink-0 items-center gap-3 text-left"
          >
            <div className="flex rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]" />
              </div>
            </div>
            <div>
              <div className="font-display text-lg font-bold tracking-[0.16em] text-white">GDGOC x IAR</div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/45">Community Hub</div>
            </div>
          </button>

          <nav className="glass-panel hidden items-center gap-2 rounded-full px-3 py-2 md:flex">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.name}
                onClick={() => navigateTo(link.href)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all',
                  activeSection === link.href.slice(1)
                    ? 'bg-white/12 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'
                    : 'text-white/60 hover:bg-white/6 hover:text-white'
                )}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => navigateTo('#join')}
            className="group hidden items-center gap-2 rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10 md:inline-flex"
          >
            Join Us
            <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="glass-panel rounded-2xl p-3 text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="section-shell md:hidden"
        >
          <div className="glass-panel mb-4 space-y-2 rounded-[28px] px-4 py-4">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.name}
                onClick={() => navigateTo(link.href)}
                className={cn(
                  'block w-full rounded-2xl px-4 py-3 text-left text-base font-medium transition-colors',
                  activeSection === link.href.slice(1)
                    ? 'bg-white/12 text-white'
                    : 'text-white/65 hover:bg-white/6 hover:text-white'
                )}
              >
                {link.name}
              </button>
            ))}
            <div className="px-1 pt-2">
              <button
                type="button"
                onClick={() => navigateTo('#join')}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950"
              >
                Join Community
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
