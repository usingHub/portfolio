import React from 'react';

export default function Experience() {
    const experiences = [
        {
            role: "AI/ML Engineering Trainee",
            company: "bEdge Tech Services", // Updated from resume
            duration: "June 2026 – July 2026",
            details: [
                "Structured tailored technical training tracks and candidate onboarding paths using Python and TensorFlow. //",
                "Implemented resume-aligned tool deep-dives and resolved individual core competency gaps to accelerate team productivity. //",
                "Guided end-to-end project development with scalable ML architectures and pipeline optimization utilities, improving real-world application deployment readiness. //[cite: 1]",
                "Integrated advanced technical features including automated data preprocessing modules, model evaluation metrics, and secure API endpoints. //[cite: 1]"
            ]
        },
        {
            role: "Freelance Web Developer",
            company: "Wix Studio Projects",
            duration: "February 2026 – April 2026",
            details: [
                "Engineered highly customized, scalable, and responsive client web ecosystems using advanced Wix Studio architecture.",
                "Implemented custom interactions, advanced layout design, and optimized asset loading states.",
                "Delivered intuitive user management panels and fluid UX transitions matching strict client specifications."
            ]
        },
        {
            role: "Backend Developer (Hackathon Participant)",
            company: "GTU Ideathon", // Updated to highlight specific backend contributions[cite: 1]
            duration: "April 2025", // Exact date aligned from certifications[cite: 1]
            details: [
                "Engineered RESTful backend APIs and scalable infrastructure using Node.js for Agri-Sakha, a dedicated farmer-centric digital platform. //[cite: 1]",
                "Architected and integrated a fully agriculture-focused AI chatbot backend leveraging the Google Gemini language model API. //[cite: 1]",
                "Collaborated seamlessly within a two-person team, managing full server-side delivery while a teammate constructed the frontend presentation layers. //[cite: 1]",
                "Ensured highly performant, real-time conversational support workflows and built robust error handling networks to elevate user experience. //[cite: 1]"
            ]
        },
        {
            role: "Freelance Full-Stack Developer",
            company: "FinMentor", // Updated from resume[cite: 1]
            duration: "August 2025", // Aligned with resume chronology[cite: 1]
            details: [
                "Developed dynamic, data-driven expert directory hubs and personalized profile pages leveraging a PHP and MySQL infrastructure. //[cite: 1]",
                "Implemented secure parameterized queries to safe-guard data transmission and resolved underlying routing and UX bugs to optimize client workflows. //[cite: 1]",
                "Redesigned interface components with responsive fluid breakpoints and vanilla JavaScript utilities, improving mobile usability. //[cite: 1]",
                "Built dynamic UI features including interactive media carousels, responsive FAQ accordions, and custom QR popups. //[cite: 1]"
            ]
        },
        {
            role: "Hackathon Participant",
            company: "Gujarat Vibrant Hackathon",
            duration: "November 2023", // Aligned with achievements[cite: 1]
            details: [
                "Engineered a web application using PHP designed to address the socio-educational challenge of tracking student dropout ratios.",
                "Developed a multi-parameter filtering system that processed demographic inputs (such as region, area, and age groups) to isolate and list specific students who had left the school ecosystem.",
                "Integrated CSV and Excel data parsing modules, allowing institutional administrators to seamlessly upload, parse, and review bulk student roster files."
            ]
        },
        {
            role: "Web Developer Intern",
            company: "Webrcodes Technologies",
            duration: "August 2022 – October 2022",
            details: [
                "Gained foundational industry experience building dynamic web applications and modern user interfaces.",
                "Assisted senior developers in writing clean, reusable frontend components and debugging production code.",
                "Participated in daily agile standups and code reviews to align with standard deployment practices."
            ]
        }
    ];

    return (
        <section
            id="experience"
            className="scroll-mt-24 py-20 px-4 md:px-8 max-w-5xl mx-auto text-[#54433a]"
        >
            {/* Consistent Section Header Asset Layout */}
            <div className="flex items-center gap-2 mb-12">
                <h2 className="text-3xl font-bold tracking-tight relative">
                    Experience & Milestones
                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#e05a26] shadow-[0_0_8px_#e05a26]" />
                </h2>
                <div className="h-[1px] bg-[#54433a]/10 flex-grow mt-2" />
            </div>

            {/* The Timeline Container */}
            <div className="relative border-l-2 border-[#54433a]/20 ml-4 md:ml-8 pl-8 space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative group">

                        {/* Diamond Node */}
                        <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-[#e05a26] border-2 border-[#fffcf9] rotate-45 transform transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#54433a]" />

                        {/* Timeline Meta Info */}
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-3">
                            <h3 className="text-xl font-bold tracking-tight text-[#54433a] group-hover:text-[#e05a26] transition-colors duration-200">
                                {exp.role} <span className="text-[#e05a26]/80 font-medium text-lg">@ {exp.company}</span>
                            </h3>
                            <span className="text-xs font-bold tracking-wider uppercase text-[#54433a]/60 bg-[#54433a]/5 px-2.5 py-1 inline-block self-start md:self-auto">
                                {exp.duration}
                            </span>
                        </div>

                        {/* Accomplishment Lists */}
                        <ul className="space-y-2 list-none pl-0">
                            {exp.details.map((detail, idx) => {
                                // Stripping out internal developer documentation comments before printing to DOM
                                const cleanText = detail.split('//')[0].trim();
                                return (
                                    <li key={idx} className="relative pl-5 text-sm leading-relaxed text-[#54433a]/80">
                                        <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#e05a26]/60" />
                                        {cleanText}
                                    </li>
                                );
                            })}
                        </ul>

                    </div>
                ))}
            </div>
        </section>
    );
}