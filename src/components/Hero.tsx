import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Dynamic Background Aurora Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[#7C3AED]/15 light:bg-[#7C3AED]/5 blur-[120px] pointer-events-none animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-[#2563EB]/15 light:bg-[#2563EB]/5 blur-[120px] pointer-events-none animate-pulse duration-7000" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side (Text & CTA) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left" id="hero-left-content">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#262626] light:border-zinc-200 bg-[#111111]/80 light:bg-zinc-50 backdrop-blur-sm text-[#7C3AED] light:text-indigo-600 font-mono text-xs font-semibold tracking-wider mb-6"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Hello, I'm
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white light:text-zinc-900 tracking-tight leading-none mb-4"
          >
            Amrita Rani Shaw
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#7C3AED] via-[#9F67FF] to-[#2563EB] bg-clip-text text-transparent mb-6"
          >
            Full Stack Developer <span className="text-zinc-600 light:text-zinc-300 font-light font-sans">|</span> MERN Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-[#A1A1AA] light:text-zinc-600 text-base sm:text-lg max-w-xl leading-relaxed mb-10 font-medium"
          >
            I build modern, responsive, scalable, and user-friendly web applications using the MERN Stack. Passionate about writing clean code and creating beautiful interactive user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
            id="hero-cta-buttons"
          >
            <button
              onClick={handleScrollToProjects}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#2563EB] hover:opacity-95 shadow-[0_4px_25px_rgba(124,58,237,0.3)] hover:shadow-[0_4px_30px_rgba(124,58,237,0.5)] transition-all cursor-pointer group hover:translate-y-[-2px]"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/resume.pdf"
              download="Amrita_Rani_Shaw_Resume.pdf"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-[#A1A1AA] hover:text-white light:text-zinc-600 light:hover:text-zinc-900 border border-[#262626] light:border-zinc-200 bg-[#111111]/40 light:bg-zinc-50 hover:bg-[#111111]/80 light:hover:bg-zinc-100 transition-all hover:translate-y-[-2px] group"
            >
              <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex items-center gap-5 text-[#A1A1AA] light:text-zinc-400"
            id="hero-socials"
          >
            <span className="text-xs font-mono tracking-widest text-[#52525B] uppercase mr-2">Connect:</span>
            <a
              href="https://github.com/amrita38"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#7C3AED] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/amrita-rani-149169409"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#2563EB] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:amritashaw38@gmail.com"
              className="hover:text-[#7C3AED] transition-colors"
              aria-label="Email Me"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Side (Animated Profile Image Placeholder) */}
        <div className="lg:col-span-5 flex items-center justify-center" id="hero-right-visual">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-[280px] sm:w-[350px] xl:w-[400px] h-[280px] sm:h-[350px] xl:h-[400px] flex items-center justify-center"
          >
            {/* Pulsating backdrops */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7C3AED]/20 to-[#2563EB]/20 light:from-[#7C3AED]/10 light:to-[#2563EB]/10 blur-[30px] animate-pulse" />

            {/* Glowing Orbit Ring 1 (Slow) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-[#262626]/80 light:border-zinc-200"
            />

            {/* Glowing Orbit Ring 2 (Fast, reverse) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border border-dotted border-[#3F3F46]/50 light:border-zinc-300"
            />

            {/* Glowing Orbit Ring 3 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-10 rounded-full border border-[#262626] light:border-zinc-200 flex items-center justify-center"
            >
              <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-[#7C3AED] shadow-[0_0_10px_#7C3AED]" />
              <div className="absolute top-1/2 right-0 w-2.5 h-2.5 rounded-full bg-[#2563EB] shadow-[0_0_10px_#2563EB]" />
            </motion.div>

            {/* Core Circular Graphic Container */}
            <div className="relative w-48 sm:w-60 xl:w-72 h-48 sm:h-60 xl:h-72 rounded-full overflow-hidden border border-[#262626] light:border-zinc-200 bg-[#111111] light:bg-zinc-50 flex items-center justify-center group shadow-[0_10px_50px_rgba(0,0,0,0.8)]">
              {/* Internal abstract gradient shifting mesh */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                style={{ backgroundSize: '200% 200%' }}
                className="absolute inset-0 opacity-40 bg-gradient-to-tr from-[#7C3AED] via-[#111111] to-[#2563EB] group-hover:scale-105 transition-transform duration-700"
              />

              {/* Developer Avatar Silhouette Vector or Interactive Graphics */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-900/80 light:bg-white/80 border border-zinc-800 light:border-zinc-200 flex items-center justify-center shadow-lg mb-4 text-2xl font-mono text-zinc-300 light:text-zinc-700 group-hover:text-white light:group-hover:text-zinc-900 transition-colors"
                >
                  &lt;AS&gt;
                </motion.div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#A1A1AA] light:text-zinc-500 group-hover:text-white light:group-hover:text-zinc-800 transition-colors">
                  Developer Core
                </div>
                <div className="text-[10px] font-mono text-[#52525B] light:text-zinc-400 mt-1">
                  Active System
                </div>
              </div>

              {/* Floating tech nodes */}
              <div className="absolute bottom-4 left-12 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <div className="absolute top-6 right-16 w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-ping" />
            </div>

            {/* Tiny Floating Badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 left-6 px-3 py-1.5 rounded-xl border border-[#262626] light:border-zinc-200 bg-[#111111]/90 light:bg-zinc-50 backdrop-blur-md text-xs font-mono flex items-center gap-1.5 shadow-lg"
            >
              <span className="text-[#7C3AED]">&lt;/&gt;</span> React 19
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 right-6 px-3 py-1.5 rounded-xl border border-[#262626] light:border-zinc-200 bg-[#111111]/90 light:bg-zinc-50 backdrop-blur-md text-xs font-mono flex items-center gap-1.5 shadow-lg"
            >
              <span className="text-[#2563EB]">●</span> Node.js
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
