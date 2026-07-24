import React from 'react';

export default function About() {
    return (
        <section id="about" className="scroll-mt-24 py-12 px-4 md:px-8 max-w-5xl mx-auto text-[#54433a] dark:text-[#d1c7bc]">

            {/* Section Header */}
            <div className="flex items-center gap-2 mb-12">
                <h2 className="text-3xl font-bold tracking-tight relative text-[#2b221e] dark:text-[#faf8f5]">
                    About Me
                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#e05a26] dark:bg-[#f59e0b] shadow-[0_0_8px_#e05a26] dark:shadow-[0_0_8px_#f59e0b]" />
                </h2>
                <div className="h-[1px] bg-[#54433a]/10 dark:bg-[#d1c7bc]/10 flex-grow mt-2" />
            </div>


            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* CARD 1: Path & Purpose (Spans 7 cols on md) */}
                <div className="md:col-span-7 bg-[#fffcf9] dark:bg-[#221b18] border border-[#54433a]/10 dark:border-[#54433a]/30 rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-[#e05a26] dark:text-[#f59e0b]">
                            The Path & Purpose
                        </span>
                        <h3 className="text-2xl font-bold text-[#2b221e] dark:text-[#faf8f5] mt-1 mb-4">
                            Meet Dixit
                        </h3>
                        <p className="text-sm leading-relaxed text-[#54433a]/90 dark:text-[#d1c7bc] mb-4">
                            I am a Computer Science and Engineering student who loves building things
                            where code meets reality. My tech obsession started early with a hands-on curiosity, tinkering
                            with every piece of hardware I could get my hands on. That drive led me through a Diploma
                            in Information Technology, where I opened the hood to explore Python, electronics, and the Internet of Things (IoT),
                            and eventually to my Bachelor's degree to deepen my engineering roots.                        </p>
                        <p className="text-sm leading-relaxed text-[#54433a]/90 dark:text-[#d1c7bc] mb-6">
                            What drives me is simple: I look at the world and see countless real-time struggles waiting
                            to be solved through smart technology. I don't limit myself to just screens;
                            I bridge the gap between software and hardware. This unique blend keeps me focused on mastering
                            IoT, Mobile Applications, and Cloud solutions to build connected tech that actually matters.                        </p>
                    </div>

                    {/* Download Resume Button */}
                    <div>
                        <a
                            href="/Meet_Dixit.pdf"
                            download="Meet_Dixit.pdf"
                            className="relative inline-flex items-center gap-3 px-6 py-3 font-bold text-xs tracking-widest uppercase text-white bg-[#e05a26] overflow-hidden transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(224,90,38,0.4)] dark:hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] group border border-[#e05a26]"
                        >
                            <span className="absolute inset-0 w-full h-full bg-[#54433a] dark:bg-[#382d27] transition-transform duration-300 ease-out -translate-x-full group-hover:translate-x-0" />
                            <span className="absolute top-0 left-0 w-8 h-full bg-white/20 transform skew-x-[30deg] transition-transform duration-500 ease-out -translate-x-[200%] group-hover:translate-x-[600%]" />
                            <span className="relative z-10 flex items-center gap-2">
                                Download Resume
                                <svg
                                    className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:scale-110"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>

                {/* CARD 2: Daily Regimen (Spans 5 cols on md) */}
                <div className="md:col-span-5 bg-[#fffcf9] dark:bg-[#221b18] border border-[#54433a]/10 dark:border-[#54433a]/30 rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-[#e05a26] dark:text-[#f59e0b]">
                            Daily Regimen
                        </span>
                        <h3 className="text-2xl font-bold text-[#2b221e] dark:text-[#faf8f5] mt-1 mb-4">
                            The Early Riser
                        </h3>
                        <p className="text-sm leading-relaxed text-[#54433a]/90 dark:text-[#d1c7bc]">
                            While the world sleeps, my terminal is active. I run an early morning schedule, capitalizing on dawn clarity to map complex architectures, write clean APIs, and tackle deep bugs before disruptions can break my focus loop.
                        </p>
                    </div>

                    <div className="mt-6 p-4 bg-[#fdf0e9] dark:bg-[#2c221e] border border-[#e05a26]/20 dark:border-[#e05a26]/30 rounded-lg text-center">
                        <p className="text-xs italic font-medium text-[#be4d25] dark:text-[#f59e0b]">
                            "Early hours build the most robust systems."
                        </p>
                    </div>
                </div>

                {/* CARD 3: Technical Arsenal (Spans 5 cols on md) */}
                <div className="md:col-span-5 bg-[#fffcf9] dark:bg-[#221b18] border border-[#54433a]/10 dark:border-[#54433a]/30 rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-[#e05a26] dark:text-[#f59e0b]">
                            Technical Arsenal
                        </span>
                        <h3 className="text-2xl font-bold text-[#2b221e] dark:text-[#faf8f5] mt-1 mb-4">
                            Go-To Stack & Focus
                        </h3>

                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-2.5">
                                <span className="text-[#e05a26] dark:text-[#f59e0b] font-bold text-base mt-0.5">✦</span>
                                <p className="text-[#54433a]/90 dark:text-[#d1c7bc] leading-relaxed">
                                    <strong className="text-[#2b221e] dark:text-[#faf8f5]">Python & Django:</strong> My core preference for building secure, scalable backend architectures, RESTful APIs, and robust database layers.
                                </p>
                            </div>

                            <div className="flex items-start gap-2.5">
                                <span className="text-[#e05a26] dark:text-[#f59e0b] font-bold text-base mt-0.5">✦</span>
                                <p className="text-[#54433a]/90 dark:text-[#d1c7bc] leading-relaxed">
                                    <strong className="text-[#2b221e] dark:text-[#faf8f5]">React & Tailwind CSS:</strong> My go-to modern web stack for crafting ultra-responsive, modular, and visually refined frontend interfaces.
                                </p>
                            </div>

                            <div className="flex items-start gap-2.5">
                                <span className="text-[#e05a26] dark:text-[#f59e0b] font-bold text-base mt-0.5">✦</span>
                                <p className="text-[#54433a]/90 dark:text-[#d1c7bc] leading-relaxed">
                                    <strong className="text-[#2b221e] dark:text-[#faf8f5]">AI Integration:</strong> Passionate about bridging software with AI, integrating Gemini APIs, ML classifiers, and intelligent features into real-world applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CARD 4: Tactical Off-Duty (Spans 7 cols on md) */}
                <div className="md:col-span-7 bg-[#fffcf9] dark:bg-[#221b18] border border-[#54433a]/10 dark:border-[#54433a]/30 rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-[#e05a26] dark:text-[#f59e0b]">
                            Tactical Off-Duty
                        </span>
                        <h3 className="text-2xl font-bold text-[#2b221e] dark:text-[#faf8f5] mt-1 mb-4">
                            Tactical Mindset & Endurance
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                            <div>
                                <h4 className="font-bold text-sm text-[#e05a26] dark:text-[#f59e0b] mb-1">
                                    Mental & Physical Endurance
                                </h4>
                                <p className="text-xs leading-relaxed text-[#54433a]/80 dark:text-[#d1c7bc]">
                                    Outside of code, I maintain a disciplined physical routine and train consistently. Indoors, I channel strategic focus into chess, treating it as practical practice for handling dynamic system bottlenecks.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-sm text-[#e05a26] dark:text-[#f59e0b] mb-1">
                                    Constant Knowledge Ingestion
                                </h4>
                                <p className="text-xs leading-relaxed text-[#54433a]/80 dark:text-[#d1c7bc]">
                                    I stay committed to continuous learning across system architectures and emerging tech paradigms. It keeps my problem-solving adaptable and growth-focused.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}