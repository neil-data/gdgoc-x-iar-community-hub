'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';

export function TransitionShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBarbaReady = useRef(false);
  const [overlayKey, setOverlayKey] = useState(0);

  useEffect(() => {
    if (isBarbaReady.current) {
      return;
    }

    let active = true;
    let instance: { destroy: () => void } | null = null;

    void import('@barba/core').then(({ default: barba }) => {
      if (!active) {
        return;
      }

      barba.init({
        transitions: [
          {
            name: 'app-shell-overlay',
            leave() {
              setOverlayKey((current) => current + 1);
            },
          },
        ],
        preventRunning: true,
        prevent: () => true,
      });

      instance = barba;
      isBarbaReady.current = true;
    });

    return () => {
      active = false;
      if (instance && isBarbaReady.current) {
        instance.destroy();
        isBarbaReady.current = false;
      }
    };
  }, []);

  useEffect(() => {
    setOverlayKey((current) => current + 1);
  }, [pathname]);

  return (
    <div data-barba="wrapper" className="relative min-h-screen overflow-x-clip">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          data-barba="container"
          data-barba-namespace="home"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          key={overlayKey}
          initial={{ opacity: 0.85, y: '100%' }}
          animate={{ opacity: 0, y: '-100%' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.05, ease: [0.19, 1, 0.22, 1] }}
          className="pointer-events-none fixed inset-0 z-[90] bg-[linear-gradient(135deg,rgba(66,133,244,0.22),rgba(234,67,53,0.18),rgba(251,188,5,0.12),rgba(52,168,83,0.2))] backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.1),rgba(2,6,23,0.85))]" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}