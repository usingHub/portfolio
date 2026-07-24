import React from 'react';

// Custom Konoha Leaf Path matching your theme
const konohaLeafPath = "M17 2C15 2 9 5 6 10C3 15 5 22 5 22C5 22 12 22 17 17C22 12 21 4 17 2Z";

export default function Certifications() {
  const certifications = [
    {
      title: "JPMorgan Chase & Co. Software Engineering Experience",
      issuer: "JPMorgan Chase / Forage",
      fileUrl: "/certificates/JP Morgan and Chase.pdf",
      skills: ["Software Engineering", "Python", "Financial Systems"]
    },
    {
      title: "Deloitte Technology Simulation",
      issuer: "Deloitte",
      fileUrl: "/certificates/Delitte_cerrtificate.pdf",
      skills: ["Technology Consulting", "Software Architecture", "Analysis"]
    },
    {
      title: "Machine Learning Certification",
      issuer: "Coursera / Online Platform",
      fileUrl: "/certificates/Machine_learning_certificate.pdf",
      skills: ["Machine Learning", "Python", "Data Science"]
    },
    {
      title: "Python Data Structures",
      issuer: "Coursera / University",
      fileUrl: "/certificates/Python Data Structures.pdf",
      skills: ["Python", "Data Structures", "Algorithms"]
    },
    {
      title: "Java Programming Certification",
      issuer: "Udemy / Online Academy",
      fileUrl: "/certificates/Java certificate.pdf",
      skills: ["Java", "Object-Oriented Programming", "Backend Development"]
    },
    {
      title: "JavaScript Complete Masterclass",
      issuer: "Udemy",
      fileUrl: "/certificates/udemy_certificate_js.pdf",
      skills: ["JavaScript", "ES6+", "Web Development"]
    },
    {
      title: "HTML, CSS & JavaScript Fundamentals",
      issuer: "Udemy / Certification Body",
      fileUrl: "/certificates/Certificate html, css , js.pdf",
      skills: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Web Development Fundamentals",
      issuer: "Online Academy",
      fileUrl: "/certificates/WebDevelopmentFundamentals_Certifica.pdf",
      skills: ["Web Development", "HTML", "CSS"]
    },
    {
      title: "Tic Tac Toe Hackathon Certificate",
      issuer: "Hackathon Event",
      fileUrl: "/certificates/Tic Tac Toe hackathon.pdf",
      skills: ["Problem Solving", "Competitive Programming", "Teamwork"]
    },
    {
      title: "Project Development Using Java (Document)",
      issuer: "Academic / Technical Training",
      fileUrl: "/certificates/project development using java.pdf",
      skills: ["Java", "Software Engineering", "Project Lifecycle"]
    },
  ];

  return (
    <section 
      id="certifications" 
      className="scroll-mt-24 py-20 px-4 md:px-8 max-w-5xl mx-auto text-[#54433a] dark:text-[#d1c7bc]"
    >
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-12">
        <h2 className="text-3xl font-bold tracking-tight relative text-[#2b221e] dark:text-[#faf8f5]">
          Certifications & Badges
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#e05a26] dark:bg-[#f59e0b] shadow-[0_0_8px_#e05a26] dark:shadow-[0_0_8px_#f59e0b]" />
        </h2>
        <div className="h-[1px] bg-[#54433a]/10 dark:bg-[#d1c7bc]/10 flex-grow mt-2" />
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="group relative bg-[#fffcf9] dark:bg-[#221b18] border border-[#54433a]/15 dark:border-[#54433a]/30 rounded-xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#e05a26]/50 dark:hover:border-[#f59e0b]/50 hover:shadow-[0_12px_30px_-10px_rgba(224,90,38,0.18)] dark:hover:shadow-[0_12px_30px_-10px_rgba(245,158,11,0.18)]"
          >
            {/* KATANA EDGE ACCENT */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#e05a26] dark:bg-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl" />

            {/* KONOHA LEAF WATERMARK */}
            <div className="absolute -top-1 -right-1 pointer-events-none opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.16] dark:group-hover:opacity-[0.25] group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out text-[#e05a26] dark:text-[#f59e0b]">
              <svg className="w-20 h-20 fill-current" viewBox="0 0 24 24">
                <path d={konohaLeafPath} />
              </svg>
            </div>

            {/* Top Content Area */}
            <div className="relative z-10">
              {/* Meta Info: Issuer */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-extrabold tracking-widest uppercase text-[#e05a26] dark:text-[#f59e0b] flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e05a26] dark:bg-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {cert.issuer}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#2b221e] dark:text-[#faf8f5] group-hover:text-[#e05a26] dark:group-hover:text-[#f59e0b] transition-colors duration-200 mb-4">
                {cert.title}
              </h3>
            </div>

            {/* Bottom Row: Skill Badges + View Button */}
            <div className="relative z-10 pt-4 border-t border-[#54433a]/10 dark:border-[#54433a]/30 flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-[11px] font-semibold px-2 py-0.5 bg-[#54433a]/5 dark:bg-[#54433a]/20 text-[#2b221e] dark:text-[#d1c7bc] rounded border border-[#54433a]/10 dark:border-[#54433a]/30 group-hover:bg-[#fdf0e9] dark:group-hover:bg-[#2c221e] group-hover:border-[#e05a26]/20 dark:group-hover:border-[#f59e0b]/20 dark:group-hover:text-[#f59e0b] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {cert.fileUrl && (
                <a 
                  href={cert.fileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`View certificate for ${cert.title}`}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#e05a26] dark:text-[#f59e0b] shrink-0 ml-2 bg-[#e05a26]/10 dark:bg-[#f59e0b]/10 px-2.5 py-1.5 rounded-md hover:bg-[#e05a26] dark:hover:bg-[#f59e0b] hover:text-white dark:hover:text-[#181311] transition-all duration-200"
                >
                  <span>View</span>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H5v12h12v-6h2v6c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}