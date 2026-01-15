import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrambledTextProps {
    children: string;
    className?: string;
    duration?: number;
    speed?: number;
    delay?: number;
    scrambleChars?: string;
    revealDirection?: 'start' | 'end' | 'random';
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
    children,
    className = '',
    duration = 1.5,
    speed = 0.05,
    delay = 0,
    scrambleChars = '!<>-_\\/[]{}—=+*^?#________',
    revealDirection = 'start',
}) => {
    const [displayText, setDisplayText] = useState(children);
    const elementRef = useRef<HTMLSpanElement>(null);
    const isAnimating = useRef(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const originalText = children;
        const length = originalText.length;
        const chars = scrambleChars.split('');

        // Initial scramble state
        // We don't necessarily need to set it immediately to scrambled if we want to read it then scramble-reveal, 
        // but usually "Scrambled Text effect" means it starts scrambled and resolves to clear text.
        // For accessibility, we should probably keep the real text in the DOM or aria-label, 
        // but for the visual effect, we swap it.

        let progress = 0;

        const scrambleAnimation = {
            value: 0
        };

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
            delay: delay,
            onStart: () => {
                isAnimating.current = true;
            },
            onComplete: () => {
                isAnimating.current = false;
                setDisplayText(originalText);
            }
        });

        tl.to(scrambleAnimation, {
            duration: duration,
            value: 1,
            ease: 'power2.inOut',
            onUpdate: () => {
                const p = scrambleAnimation.value;
                let result = '';

                for (let i = 0; i < length; i++) {
                    // If we should reveal this character yet
                    const shouldReveal = revealDirection === 'start'
                        ? i / length < p
                        : revealDirection === 'end'
                            ? (length - i) / length < p
                            : Math.random() < p; // Random reveal

                    if (shouldReveal) {
                        result += originalText[i];
                    } else {
                        // Show random char, but preserve spaces for layout stability usually, 
                        // though sometimes spaces being scrambled looks cool too. 
                        // Let's preserve spaces to avoid massive reflows.
                        if (originalText[i] === ' ') {
                            result += ' ';
                        } else {
                            result += chars[Math.floor(Math.random() * chars.length)];
                        }
                    }
                }
                setDisplayText(result);
            }
        });

        return () => {
            tl.kill();
        };

    }, [children, duration, speed, delay, scrambleChars, revealDirection]);

    return (
        <span ref={elementRef} className={className}>
            {displayText}
        </span>
    );
};

export default ScrambledText;
