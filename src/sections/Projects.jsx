import React from 'react';

// Custom Konoha Leaf Path matching your ambient background theme
const konohaLeafPath = "M17 2C15 2 9 5 6 10C3 15 5 22 5 22C5 22 12 22 17 17C22 12 21 4 17 2Z";

export default function Projects() {
  const projects = [
    {
      title: "Sentinel",
      category: "Distributed Systems & Streaming",
      description: "Real-time event-driven financial monitoring system built with a microservices architecture. Streams live Bitcoin price data through Apache Kafka for real-time processing and persistent storage in PostgreSQL.",
      tags: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "Microservices"],
      github: "https://github.com/usingHub/sentinel",
      demo: "",
      featured: true
    },
    {
      title: "Agri-Sakha",
      category: "AI / LLM Integration",
      description: "Farmer-centric digital support platform featuring an integrated AI chatbot powered by Google Gemini API. Delivers real-time agricultural guidance, advice, and robust error handling across custom Node.js APIs.",
      tags: ["Node.js", "Express", "Google Gemini API", "MongoDB", "REST API"],
      github: "https://github.com/usingHub/Agri-Sakha",
      demo: "",
      featured: true
    },
    {
      title: "Community Portal",
      category: "Full-Stack Web Application",
      description: "A community management and engagement platform built with Django's native architecture. Features role-based access control, user authentication, interactive discussion feeds, announcements, and event organization using server-side rendered templates.",
      tags: ["Python", "Django", "HTML5", "CSS3", "PostgreSQL"],
      github: "https://github.com/usingHub/Community_Portal",
      demo: "",
      featured: false
    },
    {
      title: "Bug-Tracker",
      category: "Full-Stack Web App",
      description: "Multi-user issue reporting and lifecycle tracking system featuring role-based dashboards, automated ticket assignment flows, and structured database management for software development teams.",
      tags: ["Python", "Django", "PostgreSQL", "Tailwind CSS", "RBAC"],
      github: "https://github.com/usingHub/Bug-Tracker",
      demo: "",
      featured: false
    },
    {
      title: "Fake News Detection App",
      category: "Applied AI / Machine Learning",
      description: "Full-stack web application integrating a trained Machine Learning classifier into Django to analyze text input and provide real-time news credibility verification via a minimal submission interface.",
      tags: ["Python", "Django", "Scikit-Learn", "Machine Learning", "NLP"],
      github: "https://github.com/usingHub/Fake-News-Detection-App",
      demo: "",
      featured: false
    },
    {
      title: "FinMentor",
      category: "Database-Driven Web Platform",
      description: "Dynamic financial expert directory and profile platform. Converted static layouts into data-driven components using parameterized MySQL queries, custom vanilla JS carousels, FAQ accordions, and QR popups.",
      tags: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3", "UX Design"],
      github: "https://github.com/usingHub/FinMentor",
      demo: "",
      featured: false
    }
  ];

  return (
    <section 
      id="projects" 
      className="scroll-mt-24 py-20 px-4 md:px-8 max-w-5xl mx-auto text-[#54433a]"
    >
      {/* Section Header */}
       <div className="flex items-center gap-2 mb-12">
                <h2 className="text-3xl font-bold tracking-tight relative">
                    Featured Projects 
                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#e05a26] shadow-[0_0_8px_#e05a26]" />
                </h2>
                <div className="h-[1px] bg-[#54433a]/10 flex-grow mt-2" />
        </div>


      {/* 2x3 Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-[#fffcf9] border border-[#54433a]/15 rounded-xl p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#e05a26]/50 hover:shadow-[0_12px_30px_-10px_rgba(224,90,38,0.18)]"
          >
            {/* 1. KATANA EDGE ACCENT (Left Border Slash) */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#e05a26] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl" />

            {/* 2. KONOHA LEAF WATERMARK (Top-Right Background Crest) */}
            <div className="absolute -top-1 -right-1 pointer-events-none opacity-[0.03] group-hover:opacity-[0.16] group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out text-[#e05a26]">
              <svg className="w-24 h-24 fill-current" viewBox="0 0 24 24">
                <path d={konohaLeafPath} />
              </svg>
            </div>

            {/* Content Body */}
            <div className="relative z-10">
              {/* Meta Row: Category & GitHub Link */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-extrabold tracking-widest uppercase text-[#e05a26] flex items-center gap-1.5">
                  {/* Small Shuriken/Leaf Bullet Indicator on Hover */}
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e05a26] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {project.category}
                </span>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`${project.title} GitHub Repository`}
                      className="text-[#54433a]/60 hover:text-[#e05a26] group-hover/icon:scale-110 transition-all p-1"
                    >
                      <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#2b221e] group-hover:text-[#e05a26] transition-colors duration-200 mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#54433a]/85 mb-6">
                {project.description}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-[#54433a]/10 group-hover:border-[#e05a26]/20 transition-colors duration-300">
              {project.tags.map((tag, tagIdx) => (
                <span 
                  key={tagIdx} 
                  className="text-xs font-semibold px-2.5 py-1 bg-[#54433a]/5 text-[#2b221e] rounded-md border border-[#54433a]/10 group-hover:bg-[#fdf0e9] group-hover:border-[#e05a26]/20 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}