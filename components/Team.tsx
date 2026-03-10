'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Users2 } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'GDGOC Lead',
    image: 'https://i.pravatar.cc/150?u=rahul',
    bio: 'Passionate about building communities and scalable cloud architectures.',
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Tech Lead',
    image: 'https://i.pravatar.cc/150?u=priya',
    bio: 'Full-stack developer obsessed with React and Next.js performance.',
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'AI/ML Lead',
    image: 'https://i.pravatar.cc/150?u=amit',
    bio: 'Exploring the frontiers of Generative AI and deep learning models.',
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    role: 'Web Dev Lead',
    image: 'https://i.pravatar.cc/150?u=sneha',
    bio: 'Creating beautiful, accessible, and responsive web experiences.',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Cloud Lead',
    image: 'https://i.pravatar.cc/150?u=vikram',
    bio: 'GCP certified. Helping students master cloud infrastructure.',
  },
  {
    id: 6,
    name: 'Ananya Desai',
    role: 'Design Lead',
    image: 'https://i.pravatar.cc/150?u=ananya',
    bio: 'UI/UX enthusiast crafting intuitive and stunning interfaces.',
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-24">
      <div className="section-shell">
        <div className="mb-14 text-center">
          <div className="section-label mb-5">
            <Users2 size={14} className="text-[#34A853]" />
            Core Team
          </div>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Meet the students behind the
            <span className="block gradient-text">chapter operating system.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/60">
            Builders, mentors, organizers, and operators who keep the community high-quality and relentlessly useful.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card group rounded-[30px] p-6 text-center transition-transform hover:-translate-y-1"
            >
              <div className="relative mx-auto mb-6 h-32 w-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4285F4] via-[#EA4335] to-[#FBBC05] opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="relative z-10 rounded-full border-4 border-slate-950 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="mb-1 font-display text-xl font-bold text-white">{member.name}</h3>
              <p className="mb-4 text-sm font-medium text-[#7db2ff]">{member.role}</p>
              <p className="mb-6 text-sm leading-6 text-white/58">{member.bio}</p>

              <div className="flex justify-center gap-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/60 transition-colors hover:border-[#4285F4] hover:text-[#4285F4]">
                  <Github size={18} />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/60 transition-colors hover:border-[#4285F4] hover:text-[#4285F4]">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/60 transition-colors hover:border-[#4285F4] hover:text-[#4285F4]">
                  <Twitter size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
