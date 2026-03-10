import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Events } from '@/components/Events';
import { Projects } from '@/components/Projects';
import { Leaderboard } from '@/components/Leaderboard';
import { Roadmaps } from '@/components/Roadmaps';
import { Team } from '@/components/Team';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#4285F4]/30">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Projects />
      <Leaderboard />
      <Roadmaps />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
