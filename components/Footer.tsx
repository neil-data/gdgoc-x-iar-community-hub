import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 pb-8 pt-16">
      <div className="absolute bottom-0 left-1/2 h-[220px] w-[540px] -translate-x-1/2 rounded-full bg-[#4285F4]/6 blur-[120px]" />

      <div className="section-shell relative z-10">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid grid-cols-2 gap-1 rounded-full border border-white/10 bg-white/5 p-2">
                <span className="h-3 w-3 rounded-full bg-[#4285F4]" />
                <span className="h-3 w-3 rounded-full bg-[#EA4335]" />
                <span className="h-3 w-3 rounded-full bg-[#FBBC05]" />
                <span className="h-3 w-3 rounded-full bg-[#34A853]" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                GDGOC <span className="font-light text-white/40">x</span> IAR
              </span>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-7 text-white/58">
              A premium community hub for students who want startup-grade product thinking, stronger technical execution, and a campus culture that rewards shipping.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/60 transition-all hover:border-[#4285F4] hover:text-[#4285F4]">
                <Twitter size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/60 transition-all hover:border-[#4285F4] hover:text-[#4285F4]">
                <Linkedin size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/60 transition-all hover:border-white/25 hover:text-white">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#events" className="text-sm text-white/58 transition-colors hover:text-[#4285F4]">Events</Link></li>
              <li><Link href="#projects" className="text-sm text-white/58 transition-colors hover:text-[#4285F4]">Projects</Link></li>
              <li><Link href="#leaderboard" className="text-sm text-white/58 transition-colors hover:text-[#4285F4]">Leaderboard</Link></li>
              <li><Link href="#team" className="text-sm text-white/58 transition-colors hover:text-[#4285F4]">Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Connect</h4>
            <ul className="space-y-3">
              <li><Link href="#join" className="text-sm text-white/58 transition-colors hover:text-[#4285F4]">Join Us</Link></li>
              <li><Link href="#about" className="text-sm text-white/58 transition-colors hover:text-[#4285F4]">About</Link></li>
              <li><Link href="#" className="text-sm text-white/58 transition-colors hover:text-[#4285F4]">Code of Conduct</Link></li>
              <li>
                <a href="mailto:contact@gdgociar.com" className="flex items-center gap-2 text-sm text-white/58 transition-colors hover:text-[#4285F4]">
                  <Mail size={14} />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-white/40">© GDGOC IAR</p>
          <p className="text-sm text-white/40">Built for builders, hackers, and future founders.</p>
        </div>
      </div>
    </footer>
  );
}
