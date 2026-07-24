import React from 'react';

export default function Experience() {
    const experiences = [
        {
            role: "AI/ML Engineering Trainee",
            company: "bEdge Tech Services",
            duration: "June 2026 – July 2026",
            details: [
                "Structured tailored technical training tracks and candidate onboarding paths using Python and TensorFlow. //",
                "Implemented resume-aligned tool deep-dives and resolved individual core competency gaps to accelerate team productivity. //",
                "Guided end-to-end project development with scalable ML architectures and pipeline optimization utilities, improving real-world application deployment readiness. //",
                "Integrated advanced technical features including automated data preprocessing modules, model evaluation metrics, and secure API endpoints. //"
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
            company: "GTU Ideathon",
            duration: "April 2025",
            details: [
                "Engineered RESTful backend APIs and scalable infrastructure using Node.js for Agri-Sakha, a dedicated farmer-centric digital platform. //",
                "Architected and integrated a fully agriculture-focused AI chatbot backend leveraging the Google Gemini language model API. //",
                "Collaborated seamlessly within a two-person team, managing full server-side delivery while a teammate constructed the frontend presentation layers. //",
                "Ensured highly performant, real-time conversational support workflows and built robust error handling networks to elevate user experience. //"
            ]
        },
        {
            role: "Freelance Full-Stack Developer",
            company: "FinMentor",
            duration: "August 2025",
            details: [
                "Developed dynamic, data-driven expert directory hubs and personalized profile pages leveraging a PHP and MySQL infrastructure. //",
                "Implemented secure parameterized queries to safe-guard data transmission and resolved underlying routing and UX bugs to optimize client workflows. //",
                "Redesigned interface components with responsive fluid breakpoints and vanilla JavaScript utilities, improving mobile usability. //",
                "Built dynamic UI features including interactive media carousels, responsive FAQ accordions, and custom QR popups. //"
            ]
        },
        {
            role: "Hackathon Participant",
            company: "Gujarat Vibrant Hackathon",
            duration: "November 2023",
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
            className="scroll-mt-24 py-20 px-4 md:px-8 max-w-5xl mx-auto text-[#54433a] dark:text-[#d1c7bc]"
        >
            {/* Section Header */}
            <div className="flex items-center gap-2 mb-16">
                <h2 className="text-3xl font-bold tracking-tight relative text-[#2b221e] dark:text-[#faf8f5]">
                    Experience & Milestones
                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#e05a26] dark:bg-[#f59e0b] shadow-[0_0_8px_#e05a26] dark:shadow-[0_0_8px_#f59e0b]" />
                </h2>
                <div className="h-[1px] bg-[#54433a]/10 dark:bg-[#d1c7bc]/10 flex-grow mt-2" />
            </div>

            {/* Zigzag Timeline Wrapper */}
            <div className="relative">
                {/* Central Scroll Spine / Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#e05a26] via-[#54433a]/20 to-[#e05a26] dark:from-[#f59e0b] dark:via-[#d1c7bc]/20 dark:to-[#f59e0b]" />

                <div className="space-y-10 md:space-y-12">
                    {experiences.map((exp, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div 
                                key={index} 
                                className={`relative flex flex-col md:flex-row items-start ${
                                    isEven ? 'md:flex-row-reverse' : ''
                                } group`}
                            >
                                {/* Center Ninja Node (Rotating Diamond with Glow) */}
                                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                                    <div className="w-5 h-5 bg-[#fffcf9] dark:bg-[#221b18] border-2 border-[#e05a26] dark:border-[#f59e0b] rotate-45 transform transition-all duration-300 group-hover:scale-125 group-hover:bg-[#e05a26] dark:group-hover:bg-[#f59e0b] group-hover:shadow-[0_0_12px_#e05a26] dark:group-hover:shadow-[0_0_12px_#f59e0b] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-[#e05a26] dark:bg-[#f59e0b] group-hover:bg-[#fffcf9] dark:group-hover:bg-[#221b18] transition-colors" />
                                    </div>
                                </div>

                                {/* Content Card Slot */}
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                                    isEven ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'
                                }`}>
                                    {/* The Interactive Scroll Card */}
                                    <div className="relative bg-[#fffcf9] dark:bg-[#221b18] border border-[#54433a]/15 dark:border-[#54433a]/30 rounded-xl p-5 shadow-sm transition-all duration-300 hover:border-[#e05a26]/60 dark:hover:border-[#f59e0b]/60 hover:shadow-[0_12px_30px_-10px_rgba(224,90,38,0.2)] dark:hover:shadow-[0_12px_30px_-10px_rgba(245,158,11,0.2)] overflow-hidden">
                                        
                                        {/* Katana Edge Line Accent */}
                                        <div className={`absolute top-0 bottom-0 w-[3px] bg-[#e05a26] dark:bg-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                                            isEven ? 'md:right-0 md:left-auto left-0' : 'left-0'
                                        }`} />

                                        {/* Header Info */}
                                        <div>
                                            <div className={`flex flex-wrap items-center gap-2 mb-2 ${
                                                isEven ? 'md:justify-end' : 'justify-start'
                                            }`}>
                                                <span className="text-xs font-extrabold tracking-wider uppercase text-[#e05a26] dark:text-[#f59e0b] bg-[#e05a26]/10 dark:bg-[#f59e0b]/10 px-2.5 py-0.5 rounded">
                                                    {exp.duration}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-bold tracking-tight text-[#2b221e] dark:text-[#faf8f5] group-hover:text-[#e05a26] dark:group-hover:text-[#f59e0b] transition-colors duration-200">
                                                {exp.role}
                                            </h3>
                                            <p className="text-sm font-semibold text-[#54433a]/80 dark:text-[#d1c7bc] mb-3">
                                                @ {exp.company}
                                            </p>

                                            {/* Interactive Hover Hint (Hidden on mobile, visible on desktop) */}
                                            <div className={`hidden md:flex items-center gap-1.5 text-[11px] font-bold text-[#e05a26]/70 dark:text-[#f59e0b]/70 group-hover:text-[#e05a26] dark:group-hover:text-[#f59e0b] transition-colors ${
                                                isEven ? 'md:justify-end' : 'justify-start'
                                            }`}>
                                                <span>Hover to inspect scroll</span>
                                                <svg className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-y-0.5 group-hover:rotate-180 fill-current" viewBox="0 0 24 24">
                                                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Details Accordion: Always expanded on mobile (grid-rows-[1fr]), collapsible on desktop (md:grid-rows-[0fr]) */}
                                        <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                                            <div className="overflow-hidden">
                                                <div className="pt-3 mt-3 border-t border-[#54433a]/10 dark:border-[#54433a]/30">
                                                    <ul className="space-y-2 list-none pl-0 text-left">
                                                        {exp.details.map((detail, idx) => {
                                                            const cleanText = detail.split('//')[0].trim();
                                                            return (
                                                                <li key={idx} className="relative pl-4 text-xs leading-relaxed text-[#54433a]/90 dark:text-[#d1c7bc]">
                                                                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#e05a26] dark:bg-[#f59e0b]" />
                                                                    {cleanText}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Empty Spacer for layout balance on desktop */}
                                <div className="hidden md:block w-1/2" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}