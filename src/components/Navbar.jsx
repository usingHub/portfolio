import React, { useState, useEffect } from 'react';

export default function Navbar({ activeSection }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Always keep navbar visible at the very top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // 2. Hide when scrolling down
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } 
      // 3. Show when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      // Track position for the next scroll frame
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certificates', href: '#certifications', id: 'certifications' },
    { name: 'Contact Me', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-5 left-0 w-full z-50 px-4 md:px-8 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-28'
      }`}
    >
      {/* The Main Scroll Container */}
      <div className="relative max-w-5xl mx-auto bg-white dark:bg-[#221b18] border-y-2 border-[#e05a26]/20 dark:border-[#e05a26]/30 shadow-md h-14 flex items-center justify-between px-6 md:px-10 transition-all duration-300">
        
        {/* ================= LEFT SCROLL ROLLER ================= */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex flex-col items-center">
          {/* Top Gold Cap */}
          <div className="w-4 h-1.5 bg-gradient-to-r from-[#d97706] to-[#f59e0b] rounded-t-sm shadow-sm" />
          {/* Main Orange Roller Cylinder */}
          <div className="w-3 h-16 bg-gradient-to-r from-[#b91c1c] via-[#e05a26] to-[#b91c1c] shadow-md relative">
            {/* Inner highlight line for a glossy wooden/metallic texture */}
            <div className="absolute inset-y-0 left-0.5 w-0.5 bg-white/20" />
          </div>
          {/* Bottom Gold Cap */}
          <div className="w-4 h-1.5 bg-gradient-to-r from-[#d97706] to-[#f59e0b] rounded-b-sm shadow-sm" />
        </div>

        {/* Left Layout Spacer */}
        <div className="hidden md:flex w-16" />

        {/* CENTERED NAVIGATION LINKS */}
        <nav className="flex items-center gap-3 sm:gap-4 md:gap-6 mx-auto md:mx-0 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-xs sm:text-sm font-semibold transition-colors duration-200 py-1 whitespace-nowrap group ${
                  isActive 
                    ? 'text-[#e05a26] dark:text-[#f59e0b] drop-shadow-[0_0_4px_rgba(224,90,38,0.15)]' 
                    : 'text-[#54433a] dark:text-[#d1c7bc] hover:text-[#e05a26] dark:hover:text-[#f59e0b]'
                }`}
              >
                {link.name}
                {/* Chakra Glow Underline Animation */}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#e05a26] dark:bg-[#f59e0b] transition-all duration-300 shadow-[0_0_8px_#e05a26] dark:shadow-[0_0_8px_#f59e0b] ${
                    isActive ? 'w-full opacity-100' : 'w-0 group-hover:w-full'
                  }`} 
                />
              </a>
            );
          })}
        </nav>

        {/* RIGHT SIDE: SOCIAL ICONS */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 w-16 md:w-24 justify-end shrink-0">
          {/* Fixed GitHub Icon */}
          <a
            href="https://github.com/usingHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#54433a] dark:text-[#faf8f5] hover:text-[#e05a26] dark:hover:text-[#f59e0b] transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 7.65 6.84 8.98.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.48C19.14 19.65 22 15.9 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/meet-dixit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#54433a] dark:text-[#faf8f5] hover:text-[#e05a26] dark:hover:text-[#f59e0b] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        {/* ================= RIGHT SCROLL ROLLER ================= */}
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col items-center">
          {/* Top Gold Cap */}
          <div className="w-4 h-1.5 bg-gradient-to-r from-[#d97706] to-[#f59e0b] rounded-t-sm shadow-sm" />
          {/* Main Orange Roller Cylinder */}
          <div className="w-3 h-16 bg-gradient-to-r from-[#b91c1c] via-[#e05a26] to-[#b91c1c] shadow-md relative">
            <div className="absolute inset-y-0 left-0.5 w-0.5 bg-white/20" />
          </div>
          {/* Bottom Gold Cap */}
          <div className="w-4 h-1.5 bg-gradient-to-r from-[#d97706] to-[#f59e0b] rounded-b-sm shadow-sm" />
        </div>

      </div>
    </header>
  );
}