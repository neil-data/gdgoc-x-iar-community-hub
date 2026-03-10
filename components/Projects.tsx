'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, Code2, ExternalLink, Github, Layers3, Share2 } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useIsMobile } from '@/hooks/use-mobile';

const projects = [
  {
    id: 1,
    title: 'Nexus AI Assistant',
    description: 'A multimodal assistant for developer workflows with voice prompts, task orchestration, and code-aware suggestions.',
    image: 'https://picsum.photos/seed/nexus/800/600',
    tags: ['Next.js', 'Python', 'TensorFlow'],
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-2',
    contributors: ['https://i.pravatar.cc/150?u=1', 'https://i.pravatar.cc/150?u=2'],
    color: 'from-[#4285F4]/20 to-transparent',
  },
  {
    id: 2,
    title: 'Campus Connect',
    description: 'Real-time event discovery and match-making platform for campus builders.',
    image: 'https://picsum.photos/seed/campus/800/600',
    tags: ['React Native', 'Firebase'],
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
    contributors: ['https://i.pravatar.cc/150?u=3'],
    color: 'from-[#EA4335]/20 to-transparent',
  },
  {
    id: 3,
    title: 'DevBoard',
    description: 'A sprint board tuned for hackathons, issue triage, and fast-moving student teams.',
    image: 'https://picsum.photos/seed/devboard/800/600',
    tags: ['Vue', 'Node.js'],
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
    contributors: ['https://i.pravatar.cc/150?u=4', 'https://i.pravatar.cc/150?u=5'],
    color: 'from-[#FBBC05]/20 to-transparent',
  },
  {
    id: 4,
    title: 'CodeSnippet Share',
    description: 'A polished snippet-sharing platform with embedded previews and social distribution.',
    image: 'https://picsum.photos/seed/code/800/600',
    tags: ['Svelte', 'Tailwind'],
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-1',
    contributors: ['https://i.pravatar.cc/150?u=6'],
    color: 'from-[#34A853]/20 to-transparent',
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`neon-border group relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/60 shadow-neon ${project.colSpan} ${project.rowSpan}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-65 transition-all duration-700 group-hover:scale-105 group-hover:opacity-78"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.55),rgba(2,6,23,0.96))]" />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`} />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>
          <button className="rounded-full border border-white/15 bg-white/12 p-2 text-white/75 backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white" title="Share">
            <Share2 size={16} />
          </button>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
          <p className="mt-3 max-w-lg text-sm leading-6 text-white/62 sm:text-base">{project.description}</p>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex -space-x-2">
              {project.contributors.map((avatar, contributorIndex) => (
                <Image
                  key={contributorIndex}
                  src={avatar}
                  alt="Contributor avatar"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full border-2 border-slate-950"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>

            <div className="flex items-center gap-2 opacity-100 transition-all duration-300 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
              <button className="rounded-full border border-white/15 bg-white/12 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-white/20" title="Source code">
                <Github size={17} />
              </button>
              <button className="rounded-full border border-white/15 bg-white/12 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-white/20" title="Live demo">
                <ExternalLink size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const isMobile = useIsMobile();

  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-label mb-5">
              <Layers3 size={14} className="text-[#34A853]" />
              Featured Projects
            </div>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Campus products that feel
              <span className="block gradient-text">closer to startup launches.</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/60">
              Explore community builds across AI, productivity, developer tools, and campus infrastructure. Each card is designed to feel like a product reveal, not a gallery thumbnail.
            </p>
          </div>
          <button className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/6 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10">
            <Code2 size={18} />
            Submit Project
            <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        {isMobile ? (
          <Swiper modules={[Pagination]} spaceBetween={18} slidesPerView={1.08} pagination={{ clickable: true }} className="!overflow-visible pb-12">
            {projects.map((project, index) => (
              <SwiperSlide key={project.id} className="pb-2">
                <ProjectCard project={project} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid auto-rows-[320px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
