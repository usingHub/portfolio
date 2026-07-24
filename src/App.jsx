import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ScrollReveal from './components/ScrollReveal';
import Navbar from './components/Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Certifcates from './components/Certificates';

const leafPath = "M17 2C15 2 9 5 6 10C3 15 5 22 5 22C5 22 12 22 17 17C22 12 21 4 17 2Z";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('about');

  // 1. Dark Mode State (Persisted in localStorage, default is LIGHT)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  // Sync dark class with HTML root element so Tailwind dark: variants ONLY activate on dark mode
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Toggle Function
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects', 'certifications', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main Container */}
      <div 
        className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden select-none selection:text-[#e05a26] ${
          isDarkMode 
            ? 'bg-[#181311] text-[#faf8f5] selection:bg-[#e05a26]/30' 
            : 'bg-[#faf8f5] text-[#2b221e] selection:bg-[#fdf0e9]'
        }`}
      >
        
        {/* BACKGROUND AMBIENT LAYER */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div 
            className={`absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] transition-colors duration-500 ${
              isDarkMode ? 'bg-[#e05a26]/15 opacity-50' : 'bg-[#fdf0e9] opacity-70'
            }`} 
          />
          <div 
            className={`absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[130px] transition-colors duration-500 ${
              isDarkMode ? 'bg-[#e05a26]/10 opacity-30' : 'bg-[#fdf0e9] opacity-50'
            }`} 
          />
        </div>

        {/* MAIN CONTENT LAYOUT LAYER */}
        <div className="relative z-10 w-full flex flex-col min-h-screen">
          <Navbar 
            activeSection={activeSection} 
            isDarkMode={isDarkMode} 
            toggleTheme={toggleTheme} 
          />
          
          <main className="flex-grow pt-28">
            <ScrollReveal>
              <About />
            </ScrollReveal>

            <ScrollReveal>
              <Experience />
            </ScrollReveal>

            <ScrollReveal>
              <Projects />
            </ScrollReveal>

            <ScrollReveal>
              <Certifcates />
            </ScrollReveal>

            <ScrollReveal>
              <Contact />
            </ScrollReveal>
          </main>
          
          <Footer />
        </div>

        {/* FLOATING THEME TOGGLE BUTTON */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark/Light Mode"
          className="fixed bottom-6 right-6 z-40 group p-3.5 rounded-full bg-white/80 dark:bg-[#221b18]/90 border border-[#e05a26]/30 text-[#2b221e] dark:text-[#faf8f5] shadow-lg backdrop-blur-md hover:scale-110 active:scale-95 transition-all duration-300 drop-shadow-[0_0_10px_rgba(224,90,38,0.2)] cursor-pointer"
        >
          {isDarkMode ? (
            /* Sun Icon in Dark Mode */
            <svg className="w-6 h-6 fill-current text-[#f59e0b] group-hover:rotate-45 transition-transform duration-300" viewBox="0 0 24 24">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
            </svg>
          ) : (
            /* Crescent Moon Icon in Light Mode */
            <svg className="w-6 h-6 fill-current text-[#e05a26] group-hover:-rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
              <path d="M12.3 2c.43 0 .77.35.77.78 0 .17-.05.33-.15.47-1.12 1.54-1.72 3.41-1.72 5.35 0 5.06 4.12 9.18 9.18 9.18 1.94 0 3.81-.6 5.35-1.72.14-.1.3-.15.47-.15.43 0 .78.34.78.77 0 .2-.08.39-.21.52-2.18 2.37-5.26 3.85-8.67 3.85-6.63 0-12-5.37-12-12 0-3.41 1.48-6.49 3.85-8.67.13-.13.32-.21.52-.21z"/>
            </svg>
          )}
        </button>

        {/* FOREGROUND CINEMATIC LEAF OVERLAY */}
        <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
          <svg className="absolute top-0 left-[90%] w-6 h-6 text-[#be4d25] fill-current animate-leaf-slow" style={{ animationDelay: '0s' }} viewBox="0 0 24 24">
            <path d={leafPath} />
          </svg>
          <svg className="absolute top-0 left-[75%] w-5 h-5 text-[#be4d25] fill-current animate-leaf-medium" style={{ animationDelay: '4s', filter: 'blur(1px)' }} viewBox="0 0 24 24">
            <path d={leafPath} />
          </svg>
          <svg className="absolute top-0 left-[95%] w-4 h-4 text-[#be4d25] fill-current animate-leaf-fast" style={{ animationDelay: '8s' }} viewBox="0 0 24 24">
            <path d={leafPath} />
          </svg>
          <svg className="absolute top-0 left-[80%] w-6 h-6 text-[#be4d25] fill-current animate-leaf-slow" style={{ animationDelay: '12s' }} viewBox="0 0 24 24">
            <path d={leafPath} />
          </svg>
        </div>

      </div>
    </>
  );
}

export default App;