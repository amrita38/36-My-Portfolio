import React from 'react';
import { motion } from 'motion/react';
import { aboutCards } from '../data';
import { LucideIcon } from './LucideIcon';

export const About: React.FC = () => {
  return (
    <section
      id="about"
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
            Biography
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white light:text-zinc-900 tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] mt-4 origin-left"
          />
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bio Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-[#A1A1AA] light:text-zinc-600 text-base md:text-lg leading-relaxed font-medium"
            id="about-bio-text"
          >
            <p>
              I'm <strong className="text-white light:text-zinc-800 font-semibold">Amrita Rani Shaw</strong>, a Diploma student in Computer Science Engineering at <span className="text-white light:text-zinc-800 font-semibold">Behragora Polytechnic</span>. I am immensely passionate about Full Stack Web Development and enjoy building modern, responsive, and user-friendly web applications using the MERN Stack.
            </p>
            <p>
              I continuously improve my skills by building practical projects, learning new technologies, and solving real-world problems through code. Every single project is an opportunity to learn best architectural practices, optimize performance, and create delightful user flows.
            </p>
            <p>
              My eventual goal is to become an outstanding, highly skilled Full Stack Developer and contribute to impactful digital products that make a genuine difference in users' daily workflows.
            </p>

            {/* Quick Education Highlight Box */}
            <div className="p-6 rounded-2xl border border-[#262626] light:border-zinc-200 bg-[#111111]/40 light:bg-zinc-50 backdrop-blur-sm mt-8">
              <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-white light:text-zinc-800 mb-2">Education Accent</h4>
              <p className="text-sm text-[#A1A1AA] light:text-zinc-600">
                State Board of Technical Education, Jharkhand — Diploma in Computer Science Engineering (Behragora Polytechnic). Focus on Algorithms, Data Structures, Web Engineering, and Database Management.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Identity Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4" id="about-cards-grid">
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl border border-[#262626] light:border-zinc-200 bg-[#111111] light:bg-zinc-50/50 shadow-md group hover:border-[#7C3AED]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 light:bg-[#7C3AED]/5 flex items-center justify-center text-[#7C3AED] light:text-indigo-600 mb-5 group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-350">
                  <LucideIcon name={card.icon} size={22} />
                </div>
                
                <h3 className="text-base font-bold text-white light:text-zinc-800 mb-2 group-hover:text-[#7C3AED] transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-xs text-[#A1A1AA] light:text-zinc-500 leading-relaxed font-medium">
                  {card.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
