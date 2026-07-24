import React, { useState } from 'react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        try {
            // Replace 'YOUR_FORMSPREE_ID' with your private Formspree ID (e.g., xknlqwzy)
            // Your real email address remains completely hidden!
            const formId = import.meta.env.VITE_FORMSPREE_ID;

            // We construct the URL using a template literal
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            setIsSubmitting(false);

            if (response.ok) {
                setSubmitted(true);
                e.target.reset();
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                alert("Something went wrong while sending your scroll. Please try again!");
            }
        } catch (error) {
            setIsSubmitting(false);
            alert("Network error. Please try again!");
        }
    };

    return (
        <section
            id="contact"
            className="scroll-mt-24 py-20 px-4 md:px-8 max-w-5xl mx-auto text-[#54433a] dark:text-[#d1c7bc]"
        >
            {/* Section Header */}
            <div className="flex items-center gap-2 mb-12">
                <h2 className="text-3xl font-bold tracking-tight relative text-[#2b221e] dark:text-[#faf8f5]">
                    Get In Touch
                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#e05a26] dark:bg-[#f59e0b] shadow-[0_0_8px_#e05a26] dark:shadow-[0_0_8px_#f59e0b]" />
                </h2>
                <div className="h-[1px] bg-[#54433a]/10 dark:bg-[#d1c7bc]/10 flex-grow mt-2" />
            </div>


            {/* CTA / Conclusion Banner */}
            <div className="relative bg-[#fffcf9] dark:bg-[#221b18] border border-[#e05a26]/30 dark:border-[#f59e0b]/30 rounded-2xl p-8 md:p-10 mb-12 shadow-sm overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e05a26] via-[#f7931e] to-[#e05a26] dark:from-[#f59e0b] dark:via-[#fbbf24] dark:to-[#f59e0b]" />

                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e05a26]/10 dark:bg-[#f59e0b]/10 text-[#e05a26] dark:text-[#f59e0b] text-xs font-bold tracking-wider uppercase mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#e05a26] dark:bg-[#f59e0b] animate-ping" />
                        Open For Communication & Opportunities
                    </div>

                    <h3 className="text-3xl font-bold tracking-tight relative text-[#2b221e] dark:text-[#faf8f5] mb-3">
                        Always Ready For The Next Mission 🍃
                    </h3>

                    <p className="text-base leading-relaxed text-[#54433a]/90 dark:text-[#d1c7bc]">
                        Whether you’re a <strong className="text-[#2b221e] dark:text-[#faf8f5]">recruiter</strong> looking for a software engineer to join your team, a <strong className="text-[#2b221e] dark:text-[#faf8f5]">founder/developer</strong> wanting to collaborate on a real-world project, or <strong className="text-[#2b221e] dark:text-[#faf8f5]">just someone who wants to connect</strong> and discuss web development, systems, or AI my scroll is always open.
                    </p>


                </div>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

                {/* Left Column: Direct Channels */}
                <div className="md:col-span-5 flex flex-col justify-start space-y-6">
                    <div>
                        <h4 className="text-xl font-bold text-[#2b221e] dark:text-[#faf8f5] mb-2">
                            Direct Channels
                        </h4>
                        <p className="text-sm leading-relaxed text-[#54433a]/80 dark:text-[#d1c7bc]/80">
                            Prefer direct messaging? Reach out through any of these platforms for a fast response.
                        </p>
                    </div>

                    <div className="space-y-4 pt-2">
                        {/* GitHub Card */}
                        <a
                            href="https://github.com/usingHub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 p-4 rounded-xl bg-[#fffcf9] dark:bg-[#221b18] border border-[#54433a]/15 dark:border-[#54433a]/30 hover:border-[#e05a26]/50 dark:hover:border-[#f59e0b]/50 hover:shadow-md transition-all duration-300"
                        >
                            <div className="p-3 rounded-lg bg-[#e05a26]/10 dark:bg-[#f59e0b]/10 text-[#e05a26] dark:text-[#f59e0b] group-hover:bg-[#e05a26] dark:group-hover:bg-[#f59e0b] group-hover:text-white dark:group-hover:text-[#181311] transition-colors duration-300">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-[#54433a]/60 dark:text-[#d1c7bc]/60">GitHub</p>
                                <p className="text-sm font-semibold text-[#2b221e] dark:text-[#faf8f5] group-hover:text-[#e05a26] dark:group-hover:text-[#f59e0b] transition-colors">
                                    github.com/usingHub
                                </p>
                            </div>
                        </a>

                        {/* Email Card */}
                        <a
                            href="mailto:infomeet06@gmail.com"
                            className="group flex items-center gap-4 p-4 rounded-xl bg-[#fffcf9] dark:bg-[#221b18] border border-[#54433a]/15 dark:border-[#54433a]/30 hover:border-[#e05a26]/50 dark:hover:border-[#f59e0b]/50 hover:shadow-md transition-all duration-300"
                        >
                            <div className="p-3 rounded-lg bg-[#e05a26]/10 dark:bg-[#f59e0b]/10 text-[#e05a26] dark:text-[#f59e0b] group-hover:bg-[#e05a26] dark:group-hover:bg-[#f59e0b] group-hover:text-white dark:group-hover:text-[#181311] transition-colors duration-300">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-[#54433a]/60 dark:text-[#d1c7bc]/60">Email</p>
                                <p className="text-sm font-semibold text-[#2b221e] dark:text-[#faf8f5] group-hover:text-[#e05a26] dark:group-hover:text-[#f59e0b] transition-colors">
                                    infomeet06@gmail.com
                                </p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right Column: Clean Form */}
                <div className="md:col-span-7 bg-[#fffcf9] dark:bg-[#221b18] border border-[#54433a]/15 dark:border-[#54433a]/30 rounded-xl p-6 md:p-8 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#e05a26] dark:bg-[#f59e0b]" />

                    {submitted && (
                        <div className="mb-6 p-4 rounded-lg text-sm font-semibold bg-[#e05a26]/10 dark:bg-[#f59e0b]/10 border border-[#e05a26]/30 dark:border-[#f59e0b]/30 text-[#e05a26] dark:text-[#f59e0b]">
                            📜 Scroll dispatched successfully! Check your inbox soon.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* Name */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-[#2b221e] dark:text-[#faf8f5] mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Meet Dixit"
                                    className="w-full px-4 py-3 bg-[#fffcf9] dark:bg-[#2c221e] border border-[#54433a]/20 dark:border-[#54433a]/40 rounded-lg text-sm text-[#2b221e] dark:text-[#faf8f5] placeholder-[#54433a]/40 dark:placeholder-[#d1c7bc]/40 focus:outline-none focus:border-[#e05a26] dark:focus:border-[#f59e0b] focus:ring-1 focus:ring-[#e05a26] dark:focus:ring-[#f59e0b] transition-all"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-[#2b221e] dark:text-[#faf8f5] mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 bg-[#fffcf9] dark:bg-[#2c221e] border border-[#54433a]/20 dark:border-[#54433a]/40 rounded-lg text-sm text-[#2b221e] dark:text-[#faf8f5] placeholder-[#54433a]/40 dark:placeholder-[#d1c7bc]/40 focus:outline-none focus:border-[#e05a26] dark:focus:border-[#f59e0b] focus:ring-1 focus:ring-[#e05a26] dark:focus:ring-[#f59e0b] transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* Phone Number */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-[#2b221e] dark:text-[#faf8f5] mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 98765 43210"
                                    className="w-full px-4 py-3 bg-[#fffcf9] dark:bg-[#2c221e] border border-[#54433a]/20 dark:border-[#54433a]/40 rounded-lg text-sm text-[#2b221e] dark:text-[#faf8f5] placeholder-[#54433a]/40 dark:placeholder-[#d1c7bc]/40 focus:outline-none focus:border-[#e05a26] dark:focus:border-[#f59e0b] focus:ring-1 focus:ring-[#e05a26] dark:focus:ring-[#f59e0b] transition-all"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-[#2b221e] dark:text-[#faf8f5] mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="Hiring Inquiry / Collaboration"
                                    className="w-full px-4 py-3 bg-[#fffcf9] dark:bg-[#2c221e] border border-[#54433a]/20 dark:border-[#54433a]/40 rounded-lg text-sm text-[#2b221e] dark:text-[#faf8f5] placeholder-[#54433a]/40 dark:placeholder-[#d1c7bc]/40 focus:outline-none focus:border-[#e05a26] dark:focus:border-[#f59e0b] focus:ring-1 focus:ring-[#e05a26] dark:focus:ring-[#f59e0b] transition-all"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-[#2b221e] dark:text-[#faf8f5] mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                placeholder="Drop your thoughts or proposal here..."
                                className="w-full px-4 py-3 bg-[#fffcf9] dark:bg-[#2c221e] border border-[#54433a]/20 dark:border-[#54433a]/40 rounded-lg text-sm text-[#2b221e] dark:text-[#faf8f5] placeholder-[#54433a]/40 dark:placeholder-[#d1c7bc]/40 focus:outline-none focus:border-[#e05a26] dark:focus:border-[#f59e0b] focus:ring-1 focus:ring-[#e05a26] dark:focus:ring-[#f59e0b] transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3.5 px-6 bg-[#e05a26] dark:bg-[#f59e0b] hover:bg-[#c84d1e] dark:hover:bg-[#d98206] disabled:opacity-60 text-white dark:text-[#181311] font-bold text-sm tracking-wide rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"
                        >
                            <span>{isSubmitting ? 'Dispatching...' : 'Dispatch Message'}</span>
                            <svg
                                className="w-4 h-4 fill-current group-hover:translate-x-1 transition-transform"
                                viewBox="0 0 24 24"
                            >
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}