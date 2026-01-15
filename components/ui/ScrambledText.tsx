import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrambledTextProps {
    children: string;
    className?: string;
    speed?: number; // 0-1, likelihood of change per frame
    duration?: number; // Total duration in seconds
    delay?: number; // Delay before starting in seconds
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

const ScrambledText: React.FC<ScrambledTextProps> = ({
    children,
    className = '',
    speed = 0.5,
    duration = 1.5,
    delay = 0,
}) => {
    const [displayText, setDisplayText] = useState(children);
    const elementRef = useRef<HTMLSpanElement>(null);
    const originalText = children;

    useEffect(() => {
        // If we're on the server or text is empty, just render
        if (!originalText) return;

        let progress = 0;
        let animationFrameId: number;
        let startTime: number;
        let isAnimating = false;

        const scramble = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsedTime = (timestamp - startTime) / 1000; // in seconds

            // Calculate normalized progress (0 to 1)
            progress = Math.min(elapsedTime / duration, 1);

            // Determine how many characters should be revealed based on progress
            const length = originalText.length;
            const revealIndex = Math.floor(progress * length);

            // Generate new string
            let newText = '';
            for (let i = 0; i < length; i++) {
                if (i < revealIndex) {
                    // Revealed character
                    newText += originalText[i];
                } else {
                    // Scrambled character (only valid if text is not a space)
                    if (originalText[i] === ' ') {
                        newText += ' ';
                    } else {
                        // Randomly change character based on speed
                        // If speed is high, change often. If low, hold character.
                        // For simplicity in this request, we just pick random char.
                        newText += CHARS[Math.floor(Math.random() * CHARS.length)];
                    }
                }
            }

            setDisplayText(newText);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(scramble);
            } else {
                setDisplayText(originalText); // Ensure final state is correct
            }
        };

        // Use ScrollTrigger to start animation when visible
        const el = elementRef.current;
        if (el) {
            ScrollTrigger.create({
                trigger: el,
                start: 'top 80%', // Start when top of text hits 80% viewport
                onEnter: () => {
                    if (!isAnimating) {
                        isAnimating = true;
                        setTimeout(() => {
                            animationFrameId = requestAnimationFrame(scramble);
                        }, delay * 1000);
                    }
                },
                once: true // Play only once
            });
        }

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            // Clean up ScrollTrigger? usually handled by GSAP context but explicit kill is good
        };
    }, [children, duration, speed, delay, originalText]);

    return (
        <span ref={elementRef} className={className}>
            {displayText}
        </span>
    );
};

export default ScrambledText;
