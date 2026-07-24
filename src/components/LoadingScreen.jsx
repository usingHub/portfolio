import React, { useState, useEffect } from 'react';

// Konoha Leaf Path
const konohaLeafPath = "M17 2C15 2 9 5 6 10C3 15 5 22 5 22C5 22 12 22 17 17C22 12 21 4 17 2Z";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Smooth loader progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Initiate exit animation
          setTimeout(() => setIsFadingOut(true), 300);
          // Signal parent component that loading finished
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
          return 100;
        }
        // Progress increment speed calculation
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#181311] text-[#faf8f5] transition-opacity duration-700 ease-in-out select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Internal Custom Keyframes */}
      <style>{`
        @keyframes leafFloat {
          0% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-12px) rotate(8deg) scale(1.05); }
          50% { transform: translateY(4px) rotate(-6deg) scale(0.98); }
          75% { transform: translateY(-8px) rotate(4deg) scale(1.02); }
          100% { transform: translateY(0px) rotate(0deg) scale(1); }
        }
        @keyframes windStream {
          0% { stroke-dashoffset: 300; opacity: 0; }
          40% { opacity: 0.8; }
          100% { stroke-dashoffset: -300; opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
        .animate-leaf-float {
          animation: leafFloat 4s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient Chakra Background Glow */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-[#e05a26]/20 blur-[100px] animate-pulse-glow pointer-events-none" />

      {/* Wind Lines SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 800 600" preserveAspectRatio="none">
        <path
          d="M -100 200 C 200 150, 400 250, 900 180"
          fill="none"
          stroke="#e05a26"
          strokeWidth="1.5"
          strokeDasharray="120 180"
          className="animate-[windStream_3s_linear_infinite]"
        />
        <path
          d="M -100 400 C 300 450, 500 350, 900 420"
          fill="none"
          stroke="#e05a26"
          strokeWidth="1"
          strokeDasharray="80 220"
          className="animate-[windStream_4s_linear_infinite_1.5s]"
        />
      </svg>

      {/* Center Animated Leaf Container */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Swirling Chakra Ring */}
        <div className="absolute w-28 h-28 rounded-full border border-[#e05a26]/30 border-t-[#e05a26] animate-spin" style={{ animationDuration: '3s' }} />
        <div className="absolute w-36 h-36 rounded-full border border-[#e05a26]/10 border-b-[#e05a26]/50 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />

        {/* Floating Konoha Leaf */}
        <div className="relative z-10 animate-leaf-float text-[#e05a26] filter drop-shadow-[0_0_12px_rgba(224,90,38,0.8)]">
          <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24">
            <path d={konohaLeafPath} />
          </svg>
        </div>
      </div>

      {/* Name & Title */}
      <div className="text-center z-10 mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-widest uppercase text-[#faf8f5] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Meet Dixit
        </h1>
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#e05a26] mt-1 opacity-90">
          Will of Fire • Portfolio
        </p>
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 sm:w-72 relative z-10">
        <div className="flex justify-between items-center text-xs font-mono text-[#faf8f5]/70 mb-2">
          <span className="tracking-wider">GATHERING CHAKRA</span>
          <span className="text-[#e05a26] font-bold">{progress}%</span>
        </div>

        {/* Outer Bar Frame */}
        <div className="w-full h-2 bg-[#2b221e] border border-[#e05a26]/30 rounded-full overflow-hidden p-[1px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          {/* Inner Active Progress Fill */}
          <div
            className="h-full bg-gradient-to-r from-[#b91c1c] via-[#e05a26] to-[#f59e0b] rounded-full transition-all duration-150 relative shadow-[0_0_10px_#e05a26]"
            style={{ width: `${progress}%` }}
          >
            {/* Glowing Tip Accent */}
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_6px_#fff]" />
          </div>
        </div>
      </div>
    </div>
  );
}