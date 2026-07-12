import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle loading screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Sync theme with HTML tag classes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  // Track scroll position to update active navbar section
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for trigger point

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update mouse position for the luxury cursor glow tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div 
      className={`min-h-screen relative font-sans transition-colors duration-500 overflow-hidden ${
        theme === 'dark' 
          ? 'bg-[#0A0A0A] text-white' 
          : 'bg-[#FAFAFC] text-zinc-900'
      }`}
    >
      {/* 1. Loading Splash Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center font-sans text-white"
            id="splash-loading-screen"
          >
            <div className="relative flex flex-col items-center">
              {/* Rotating glowing geometric ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 rounded-full border-2 border-t-[#7C3AED] border-r-[#2563EB] border-b-transparent border-l-transparent mb-6 shadow-md shadow-[#7C3AED]/25"
              />

              {/* Initials load indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold font-mono bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent mb-1"
              >
                &lt;AS /&gt;
              </motion.div>

              {/* Progress hint text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-[10px] font-mono uppercase tracking-widest text-zinc-500"
              >
                Initializing Engine...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Interactive Cursor Spotlight Glow Effect (Desktop Only) */}
      <div
        className="hidden lg:block pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, ${theme === 'dark' ? 0.05 : 0.02}), transparent 80%)`,
        }}
      />

      {/* 3. Outer Framing Glow */}
      <div className="absolute top-0 right-0 w-full h-[600px] pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#7C3AED]/10 light:bg-[#7C3AED]/2 blur-[150px]" />
      </div>

      {/* 4. Core Portfolio Layout */}
      {!loading && (
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar 
            theme={theme} 
            toggleTheme={toggleTheme} 
            activeSection={activeSection} 
          />
          
          <main className="flex-grow">
            <Hero />
            
            {/* Divider */}
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#262626]/50 to-transparent" />
            </div>

            <About />

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#262626]/50 to-transparent" />
            </div>

            <Skills />

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#262626]/50 to-transparent" />
            </div>

            <Projects />

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#262626]/50 to-transparent" />
            </div>

            <Contact />
          </main>
          
          <Footer />
        </div>
      )}
    </div>
  );
}
