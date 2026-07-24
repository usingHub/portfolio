import React, { useState, useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0 }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Set visibility dynamically: true when in view, false when out of view
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.15, // Triggers when 15% of the element is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out transform ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-[0.98]'
                } ${className}`}
        >
            {children}
        </div>
    );
}