import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A0A0A]/85 light:bg-white/85 backdrop-blur-md border-b border-[#262626] light:border-zinc-200 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, '#home')}
          className="group flex items-center gap-2 text-xl font-bold font-mono tracking-wider focus:outline-none"
          id="logo-brand"
        >
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#2563EB] flex items-center justify-center text-white text-sm font-bold shadow-md transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
            AS
          </span>
          <span className="text-white light:text-zinc-900 group-hover:text-[#7C3AED] transition-colors">
            Amrita
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`text-sm font-medium transition-colors relative py-1 focus:outline-none ${
                  isActive 
                    ? 'text-white light:text-zinc-900' 
                    : 'text-[#A1A1AA] light:text-zinc-500 hover:text-white light:hover:text-zinc-900'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#2563EB]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4" id="desktop-actions">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            id="desktop-theme-toggle"
            className="w-10 h-10 rounded-full border border-[#262626] light:border-zinc-200 flex items-center justify-center text-[#A1A1AA] hover:text-white light:hover:text-zinc-900 bg-transparent transition-colors hover:bg-zinc-900/50 light:hover:bg-zinc-100 cursor-pointer focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-amber-400 animate-pulse" />
            ) : (
              <Moon size={18} className="text-indigo-600" />
            )}
          </button>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download="Amrita_Rani_Shaw_Resume.pdf"
            id="desktop-resume-download"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(124,58,237,0.25)] hover:shadow-[0_4px_25px_rgba(124,58,237,0.4)] hover:translate-y-[-1px] focus:outline-none"
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex md:hidden items-center gap-3" id="mobile-actions">
          {/* Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            id="mobile-theme-toggle"
            className="w-9 h-9 rounded-full border border-[#262626] light:border-zinc-200 flex items-center justify-center text-[#A1A1AA] hover:text-white bg-transparent cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun size={16} className="text-amber-400" />
            ) : (
              <Moon size={16} className="text-indigo-600" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-trigger"
            className="w-9 h-9 rounded-lg border border-[#262626] light:border-zinc-200 flex items-center justify-center text-white light:text-zinc-900 hover:bg-zinc-900/50 light:hover:bg-zinc-100 cursor-pointer"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-b border-[#262626] light:border-zinc-200 bg-[#0A0A0A]/95 light:bg-white/95 backdrop-blur-xl overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`text-base font-semibold py-1 transition-colors ${
                      isActive 
                        ? 'text-[#7C3AED] font-bold' 
                        : 'text-[#A1A1AA] light:text-zinc-500 hover:text-white light:hover:text-zinc-900'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}

              <a
                href="/resume.pdf"
                download="Amrita_Rani_Shaw_Resume.pdf"
                id="mobile-resume-download"
                className="w-full py-3 mt-2 rounded-xl text-center text-sm font-semibold bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white flex items-center justify-center gap-2 shadow-lg"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
