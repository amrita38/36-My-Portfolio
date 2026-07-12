import React from 'react';
import { motion } from 'motion/react';
import { projectsData } from '../data';
import { Github, ExternalLink, Code, Layers, ShieldCheck, PlayCircle } from 'lucide-react';

export const Projects: React.FC = () => {
  // Let's create an elegant visual mock renderer for each project image placeholder!
  const renderProjectMockup = (projectId: string) => {
    switch (projectId) {
      case '1': // WebLance Mockup
        return (
          <div className="w-full h-full bg-neutral-950 flex flex-col justify-between p-3 relative overflow-hidden font-mono text-[9px] text-[#A1A1AA]">
            {/* Top Bar (Mock Browser Control) */}
            <div className="flex items-center justify-between border-b border-[#262626] pb-2 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="px-2 py-0.5 rounded bg-zinc-900/80 border border-zinc-800 text-[8px] text-zinc-500 tracking-wider">
                weblance.io/dashboard
              </span>
              <div className="w-4" />
            </div>

            {/* Dashboard content */}
            <div className="grid grid-cols-12 gap-2 flex-grow">
              {/* Sidebar Mock */}
              <div className="col-span-3 border-r border-[#262626] pr-1 flex flex-col gap-1.5 py-1">
                <div className="h-2 rounded bg-zinc-800/80" />
                <div className="h-2 rounded bg-zinc-900/60 w-3/4" />
                <div className="h-2 rounded bg-zinc-900/60 w-5/6" />
                <div className="h-2 rounded bg-zinc-900/60" />
              </div>

              {/* Main Workspace Mock */}
              <div className="col-span-9 flex flex-col gap-2 p-1">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-16 rounded bg-gradient-to-r from-[#7C3AED] to-[#2563EB]" />
                  <div className="h-2.5 w-8 rounded bg-[#111111] border border-[#262626]" />
                </div>
                <div className="grid grid-cols-2 gap-1.5 mt-1">
                  <div className="h-10 rounded-lg bg-zinc-900/50 border border-[#262626] p-1.5 flex flex-col justify-between">
                    <div className="h-1.5 w-1/2 rounded bg-zinc-800" />
                    <span className="text-[10px] text-green-400 font-bold">$12,400</span>
                  </div>
                  <div className="h-10 rounded-lg bg-zinc-900/50 border border-[#262626] p-1.5 flex flex-col justify-between">
                    <div className="h-1.5 w-1/2 rounded bg-zinc-800" />
                    <span className="text-[10px] text-[#7C3AED] font-bold">18 Gigs</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Glowing blur */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-[#7C3AED]/20 blur-[20px]" />
          </div>
        );

      case '2': // Todo App Mockup
        return (
          <div className="w-full h-full bg-neutral-950 flex flex-col p-3 relative overflow-hidden font-sans text-[#A1A1AA]">
            {/* Top Bar (Mock Browser Control) */}
            <div className="flex items-center justify-between border-b border-[#262626] pb-2 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="px-2 py-0.5 rounded bg-zinc-900/80 border border-zinc-800 font-mono text-[8px] text-zinc-500">
                taskify.app/board
              </span>
              <div className="w-4" />
            </div>

            {/* Todo Lists mockup */}
            <div className="space-y-2 flex-grow">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded border border-[#7C3AED] flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-sm bg-[#7C3AED]" />
                </div>
                <div className="h-2.5 w-2/3 rounded bg-zinc-900/80" />
                <span className="ml-auto text-[8px] px-1 py-0.2 rounded bg-red-500/10 text-red-400 border border-red-500/20">High</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded border border-zinc-700" />
                <div className="h-2.5 w-1/2 rounded bg-zinc-900/80" />
                <span className="ml-auto text-[8px] px-1 py-0.2 rounded bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20">Dev</span>
              </div>
              <div className="flex items-center gap-2 opacity-50">
                <div className="h-3 w-3 rounded border border-green-500 bg-green-500/20 flex items-center justify-center">
                  <span className="text-[7px] text-green-400">✓</span>
                </div>
                <div className="h-2.5 w-3/5 rounded bg-zinc-900/80 line-through" />
                <span className="ml-auto text-[8px] px-1 py-0.2 rounded bg-zinc-800 text-zinc-500 border border-zinc-700">Done</span>
              </div>
            </div>
            {/* Glowing blur */}
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-[#2563EB]/20 blur-[20px]" />
          </div>
        );

      case '3': // Netflix Clone Mockup
        return (
          <div className="w-full h-full bg-neutral-950 flex flex-col justify-between p-3 relative overflow-hidden font-sans">
            {/* Top Navigation Mock */}
            <div className="flex items-center justify-between border-b border-[#262626] pb-2 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="text-red-600 font-extrabold text-[10px] tracking-tighter">NETFLUX</span>
                <span className="text-[7px] text-zinc-400 ml-1.5 font-mono">Home</span>
                <span className="text-[7px] text-zinc-600 font-mono">Movies</span>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            </div>

            {/* Feature Banner */}
            <div className="relative h-14 rounded bg-gradient-to-r from-zinc-900 to-black border border-zinc-900 p-1.5 flex flex-col justify-end overflow-hidden mb-2">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_right,rgba(220,38,38,0.4),transparent)]" />
              <div className="h-1.5 w-16 rounded bg-zinc-700 mb-1" />
              <div className="flex gap-1">
                <div className="h-3 w-8 rounded-sm bg-white flex items-center justify-center gap-0.5 p-0.5">
                  <PlayCircle size={6} className="text-black" />
                  <span className="text-[5px] text-black font-extrabold">PLAY</span>
                </div>
                <div className="h-3 w-10 rounded-sm bg-zinc-800/80 border border-zinc-700 flex items-center justify-center">
                  <span className="text-[5px] text-white font-extrabold">INFO</span>
                </div>
              </div>
            </div>

            {/* Movies grid mockup */}
            <div className="grid grid-cols-4 gap-1 flex-grow">
              <div className="h-10 rounded bg-zinc-900 border border-zinc-800/50 hover:border-red-500/30 transition-colors" />
              <div className="h-10 rounded bg-zinc-900 border border-zinc-800/50" />
              <div className="h-10 rounded bg-zinc-900 border border-zinc-800/50" />
              <div className="h-10 rounded bg-zinc-900 border border-zinc-800/50" />
            </div>
            {/* Glowing blur */}
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-red-600/10 blur-[15px]" />
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-[#52525B]">
            <Code size={40} />
          </div>
        );
    }
  };

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-widest text-[#7C3AED] uppercase mb-2"
          >
            Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white light:text-zinc-900 tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm text-[#A1A1AA] light:text-zinc-600 max-w-xl mt-2 leading-relaxed"
          >
            A curated collection of client products and open-source applications built with precision, speed, and standard web technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] mt-4 origin-left"
          />
        </div>

        {/* Projects Responsive Grid (3 on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col h-full rounded-2xl border border-[#262626] light:border-zinc-200 bg-[#111111] light:bg-zinc-50/50 overflow-hidden shadow-lg hover:border-[#7C3AED]/40 hover:shadow-[0_15px_40px_rgba(124,58,237,0.15)] transition-all duration-300"
            >
              {/* Project Image Placeholder (Interactive Mockup) */}
              <div className="relative h-48 w-full border-b border-[#262626] light:border-zinc-200 overflow-hidden bg-neutral-950">
                {renderProjectMockup(project.id)}
                
                {/* Image Overlay with Category */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-mono bg-black/75 text-white border border-[#262626] backdrop-blur-md flex items-center gap-1.5">
                  <Layers size={10} className="text-[#7C3AED]" />
                  MERN Application
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Project Name */}
                <h3 className="text-xl font-bold text-white light:text-zinc-800 mb-2.5 group-hover:text-[#7C3AED] transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A1A1AA] light:text-zinc-600 font-medium leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Technology Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6" id={`stack-${project.id}`}>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-mono font-semibold tracking-wider rounded-lg bg-zinc-900/65 text-zinc-400 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons (Github & Demo) */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#262626]/50" id={`actions-${project.id}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-[#A1A1AA] hover:text-white hover:bg-zinc-900 border border-[#262626] light:border-zinc-200 transition-all text-center group/btn focus:outline-none"
                  >
                    <Github size={14} className="group-hover/btn:scale-110 transition-transform" />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-white light:bg-zinc-900 text-black light:text-white hover:opacity-90 transition-all text-center shadow-md focus:outline-none"
                  >
                    Live Demo
                    <ExternalLink size={14} />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Projects;
