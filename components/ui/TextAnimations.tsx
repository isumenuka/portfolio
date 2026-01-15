import React, { useState, useEffect, useRef } from 'react';

// 1. Gradient Text Animation
export const GradientText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient-x bg-300% ${className}`}>
      {children}
    </span>
  );
};

// 2. Typewriter Effect
export const Typewriter: React.FC<{ text: string; delay?: number; className?: string }> = ({ text, delay = 50, className = '' }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span className={`font-mono ${className}`}>{currentText}<span className="animate-pulse">|</span></span>;
};

// 3. Reveal on Scroll (Fade In)
export const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// 4. Staggered Word Reveal
export const StaggeredText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-x-1.5 ${className}`}>
      {text.split(' ').map((word, i) => (
        <Reveal key={i} delay={i * 50}>
          <span>{word}</span>
        </Reveal>
      ))}
    </div>
  );
};

// 5. Letter-by-letter Fade In
export const LetterFadeIn: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} aria-label={text}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`transition-opacity duration-300 inline-block min-w-[4px]`}
          style={{ 
            opacity: isVisible ? 1 : 0, 
            transitionDelay: `${index * 30}ms` 
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};