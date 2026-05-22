'use client';

import { useEffect, useRef, useState } from 'react';
import type { FadeInProps } from '@/types';

export default function FadeInRightSection({ children, delay }: FadeInProps) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        const node = domRef.current;
        if (node) observer.observe(node);
        return () => {
            if (node) observer.unobserve(node);
        };
    }, []);

    return (
        <div
            className={`fade-in-right-section ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: delay }}
            ref={domRef}>
            {children}
        </div>
    );
}
