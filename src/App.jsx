import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Certifcates from './components/Certificates';

// Your optimized asymmetric Konoha leaf path
const leafPath = "M17 2C15 2 9 5 6 10C3 15 5 22 5 22C5 22 12 22 17 17C22 12 21 4 17 2Z";

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    // Monitored structural layout elements for the navigation spy
    // FIX: Added 'certifications' to the list below
    const sectionIds = ['about', 'experience', 'projects', 'certifications', 'contact'];
    
    const observerOptions = {
      root: null, // evaluates relative to the viewport
      rootMargin: '-30% 0px -60% 0px', // triggers highlight when section occupies center-upper viewport
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
    <div className="relative min-h-screen bg-[#faf8f5] text-[#2b221e] selection:bg-[#fdf0e9] selection:text-[#e05a26] overflow-x-hidden select-none">

      {/* ================= BACKGROUND AMBIENT LAYER (z-0) ================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Your Soft Ambient Theme Glow Auras */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#fdf0e9] blur-[150px] opacity-70" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#fdf0e9] blur-[130px] opacity-50" />
      </div>

      {/* ================= MAIN CONTENT LAYOUT LAYER (z-10) ================= */}
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        {/* Navbar receives state to render active indicator underlines */}
        <Navbar activeSection={activeSection} />
        
        <main className="flex-grow pt-28">
          {/* Primary Profile Module */}
          <About />
          
          {/* Fully Integrated Interactive Timeline Module */}
          <Experience />
          
          {/* Structural section targets for testing build scroll mechanics */}
          <Projects />

          <Certifcates />
          
          <Contact />
        </main>
        <Footer />
      </div>

      {/* ================= FOREGROUND CINEMATIC LEAF OVERLAY (z-20) ================= */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">

        {/* Floating Leaf 1 - Terracotta Accent */}
        <svg className="absolute top-0 left-[90%] w-6 h-6 text-[#be4d25] fill-current animate-leaf-slow" style={{ animationDelay: '0s' }} viewBox="0 0 24 24">
          <path d={leafPath} />
        </svg>

        {/* Floating Leaf 2 - Micro Bokeh Pass */}
        <svg className="absolute top-0 left-[75%] w-5 h-5 text-[#be4d25] fill-current animate-leaf-medium" style={{ animationDelay: '4s', filter: 'blur(1px)' }} viewBox="0 0 24 24">
          <path d={leafPath} />
        </svg>

        {/* Floating Leaf 3 - Fast Darting Accent */}
        <svg className="absolute top-0 left-[95%] w-4 h-4 text-[#be4d25] fill-current animate-leaf-fast" style={{ animationDelay: '8s' }} viewBox="0 0 24 24">
          <path d={leafPath} />
        </svg>

        {/* Floating Leaf 4 - Deep Track Wave */}
        <svg className="absolute top-0 left-[80%] w-6 h-6 text-[#be4d25] fill-current animate-leaf-slow" style={{ animationDelay: '12s' }} viewBox="0 0 24 24">
          <path d={leafPath} />
        </svg>

      </div>

    </div>
  );
}

export default App;