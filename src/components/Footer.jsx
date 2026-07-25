import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#fffcf9] dark:bg-[#181311] border-t border-[#54433a]/15 dark:border-[#54433a]/30 py-8 px-4 md:px-8 mt-20 text-[#54433a] dark:text-[#d1c7bc]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        {/* Copyright & Branding */}
        <div>
          <p className="text-sm font-semibold text-[#2b221e] dark:text-[#faf8f5]">
            © {currentYear} <span className="font-bold text-[#e05a26] dark:text-[#f59e0b]">Meet Dixit</span>. All rights reserved.
          </p>
          <p className="text-xs text-[#54433a]/70 dark:text-[#d1c7bc]/70 mt-1">
            Designed & Built with React, Tailwind CSS 
          </p>
        </div>

        {/* Back to Top Scroll Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2b221e] dark:text-[#faf8f5] hover:text-[#e05a26] dark:hover:text-[#f59e0b] transition-colors group cursor-pointer"
        >
          <span>Back to Top</span>
          <div className="w-8 h-8 rounded-lg bg-[#54433a]/5 dark:bg-[#54433a]/20 border border-[#54433a]/10 dark:border-[#54433a]/30 group-hover:bg-[#e05a26]/10 dark:group-hover:bg-[#f59e0b]/10 group-hover:border-[#e05a26]/30 dark:group-hover:border-[#f59e0b]/30 group-hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
            <svg className="w-4 h-4 fill-current text-[#e05a26] dark:text-[#f59e0b]" viewBox="0 0 24 24">
              <path d="M12 4l-8 8h5v8h6v-8h5z"/>
            </svg>
          </div>
        </button>

      </div>
    </footer>
  );
}