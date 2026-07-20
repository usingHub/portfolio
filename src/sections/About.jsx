import React from 'react';

export default function About() {
  return (
    <section id="about" className="pt-8 px-4 md:px-8 max-w-5xl mx-auto text-[#54433a]">
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-12">
        <h2 className="text-3xl font-bold tracking-tight relative">
          About Me
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#e05a26] shadow-[0_0_8px_#e05a26]" />
        </h2>
        <div className="h-[1px] bg-[#54433a]/10 flex-grow mt-2" />
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* TILE 1: THE NINDO (MY COGNITIVE BIO) - Takes up 2 columns on desktop */}
        <div className="md:col-span-2 bg-white/60 backdrop-blur-sm p-8 rounded-lg border border-[#e05a26]/10 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#e05a26] mb-2 block">
              The Path & Purpose
            </span>
            <h3 className="text-2xl font-bold mb-4">Meet Dixit</h3>
            <p className="leading-relaxed mb-4 text-[#54433a]/90">
              I am a Computer Science and Engineering student driven by a straightforward philosophy: 
              software should solve immediate, real-world challenges. I focus on building full-stack 
              applications that bridge intuitive, user-friendly frontends with scalable, secure architectures.
            </p>
            <p className="leading-relaxed text-[#54433a]/90">
              Whether I'm designing secure logic to protect digital transactions or engineering platforms 
              that coordinate everyday local services, I look past clean sandbox environments. My ultimate 
              goal is to build reliable, production-ready systems that deliver genuine value to people.
            </p>
          </div>
        </div>

        {/* TILE 2: TRAINING REGIMEN (DISCIPLINE & DAILY ROUTINE) */}
        <div className="bg-[#white]/40 backdrop-blur-sm p-8 rounded-lg border border-[#54433a]/10 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#e05a26] mb-2 block">
              Daily Regimen
            </span>
            <h3 className="text-xl font-bold mb-4">The Early Riser</h3>
            <p className="text-sm leading-relaxed text-[#54433a]/80">
              While the world sleeps, my terminal is active. I run an early morning schedule, capitalizing on dawn clarity to map complex architectures, write clean APIs, and tackle deep bugs before disruptions can break my focus loop.
            </p>
          </div>
          <div className="mt-6 bg-[#e05a26]/5 p-4 rounded border border-[#e05a26]/10 text-xs italic text-[#54433a]/70 text-center">
            "Early hours build the most robust systems."
          </div>
        </div>

        {/* TILE 3: CHAKRA NATURE (CORE SPECIALTIES) */}
        <div className="bg-white/40 backdrop-blur-sm p-8 rounded-lg border border-[#54433a]/10 shadow-sm">
          <span className="text-xs font-bold tracking-widest uppercase text-[#e05a26] mb-2 block">
            Technical Arsenal
          </span>
          <h3 className="text-xl font-bold mb-4">Core Focus</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[#e05a26] mt-0.5">✦</span>
              <span><strong>Distributed Systems:</strong> Event-driven architecture utilizing Apache Kafka.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#e05a26] mt-0.5">✦</span>
              <span><strong>Robust Backends:</strong> Writing optimized architectures via Django, Spring Boot, and Node.js.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#e05a26] mt-0.5">✦</span>
              <span><strong>AI Integrations:</strong> Deep learning onboarding paths and LLM API configurations.</span>
            </li>
          </ul>
        </div>

        {/* TILE 4: OFF-DUTY STRATEGIES (SPORTS, CHESS, BOOKS) - 2 columns on desktop */}
        <div className="md:col-span-2 bg-white/60 backdrop-blur-sm p-8 rounded-lg border border-[#e05a26]/10 shadow-sm">
          <span className="text-xs font-bold tracking-widest uppercase text-[#e05a26] mb-2 block">
            Tactical Off-Duty
          </span>
          <h3 className="text-xl font-bold mb-4">Tactical Mindset & Endurance</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-bold text-[#e05a26] mb-1">Mental & Physical Endurance</h4>
              <p className="text-[#54433a]/85 leading-relaxed">
                Outside of code, I train across practically every major outdoor sport, building raw physical persistence. Indoors, I channel that competitive drive into chess, treating it as structural strategy practice for handling dynamic system bottlenecks.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#e05a26] mb-1">Constant Knowledge Ingestion</h4>
              <p className="text-[#54433a]/85 leading-relaxed">
                I maintain an active reading list leaning heavily into self-motivation paradigms and narrative novels. It keeps my critical thinking active and ensures I approach scaling problems with a growth-focused mindset.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}