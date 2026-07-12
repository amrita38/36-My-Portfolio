import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData } from '../data';
import { LucideIcon } from './LucideIcon';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'database' | 'tool';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories: { label: string; value: SkillCategory }[] = [
    { label: 'All Tech', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Database', value: 'database' },
    { label: 'Tools', value: 'tool' }
  ];

  const filteredSkills = skillsData.filter(skill => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-widest text-[#7C3AED] uppercase mb-2"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white light:text-zinc-900 tracking-tight"
          >
            Technical Stack
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] mt-4"
          />
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12" id="skills-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-semibold font-mono tracking-wide transition-all cursor-pointer focus:outline-none ${
                activeCategory === cat.value
                  ? 'text-white'
                  : 'text-[#A1A1AA] hover:text-white border border-[#262626] hover:border-[#3F3F46] light:border-zinc-200'
              }`}
            >
              <span className="relative z-10">{cat.label}</span>
              {activeCategory === cat.value && (
                <motion.div
                  layoutId="activeSkillCategory"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB]"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5"
          id="skills-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative overflow-hidden p-5 rounded-2xl border border-[#262626] light:border-zinc-200 bg-[#111111] light:bg-zinc-50/50 flex flex-col items-start group shadow-sm hover:border-[#7C3AED]/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] transition-all duration-300"
              >
                {/* Custom Glowing Underlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-[#7C3AED] to-[#2563EB] pointer-events-none" />

                {/* Left/Top Icon with corresponding category color highlight */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-[10px] bg-[#111111] flex items-center justify-center">
                    <LucideIcon name={skill.icon} className="group-hover:text-white transition-colors text-zinc-300" size={18} />
                  </div>
                </div>

                {/* Skill Name */}
                <div className="text-sm font-bold text-white light:text-zinc-800 group-hover:text-[#7C3AED] transition-colors mb-1">
                  {skill.name}
                </div>

                {/* Category label */}
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 light:text-zinc-400">
                  {skill.category}
                </div>

                {/* Top Corner Radial Glow Decor */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-[#7C3AED]/10 to-[#2563EB]/10 rounded-bl-full pointer-events-none group-hover:from-[#7C3AED]/20 group-hover:to-[#2563EB]/20 transition-all duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
