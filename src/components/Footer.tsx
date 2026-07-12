import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[#262626]/60 bg-[#0A0A0A] py-12" id="portfolio-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-xs text-[#A1A1AA] font-medium font-mono text-center md:text-left">
          &copy; {currentYear} Amrita Rani Shaw. All rights reserved.
        </div>

        {/* Right Side: Credit */}
        <div className="text-xs text-[#52525B] font-medium text-center md:text-right flex items-center gap-1.5">
          Designed & Developed with <span className="text-red-500 animate-pulse">❤️</span> using Next.js & React
        </div>

      </div>
    </footer>
  );
};
export default Footer;
