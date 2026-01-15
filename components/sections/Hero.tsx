import React, { useEffect, useState } from 'react';
import { GradientText, Typewriter, Reveal } from '../ui/TextAnimations';
import TiltedCard from '../ui/TiltedCard';
import { getPersonalInfo } from '../../lib/sanity';
import { PersonalInfo } from '../../types/sanity';

const Hero: React.FC = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPersonalInfo();
        setPersonalInfo(data);
      } catch (error) {
        console.error('Error fetching personal info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fallback data if Sanity content not yet added
  const name = personalInfo?.name || 'Isum Enuka';
  const tagline = personalInfo?.tagline || 'Building innovative solutions with AI, ML, and React';
  const profileImage = personalInfo?.profileImage?.asset?.url || 'https://picsum.photos/400/400';

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl w-full text-center z-10">
        <Reveal delay={100}>
          <div className="flex justify-center mb-6 md:mb-8">
            <TiltedCard
              imageSrc={profileImage}
              altText={name}
              captionText={name}
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-b-[15px]">
                  <p className="text-sm font-bold">{name}</p>
                </div>
              }
            />
          </div>
        </Reveal>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 tracking-tight">
          <Reveal delay={200}>
            <span>Hi, I'm </span>
            <GradientText>{name}</GradientText>
          </Reveal>
        </h1>

        <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center px-2">
          <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-300 font-mono">
            <Typewriter text={tagline} delay={50} />
          </h2>
        </div>

        <Reveal delay={800} className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
          <a
            href={personalInfo?.cv || "/cv.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-medium text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 text-center min-h-[44px] flex items-center justify-center"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-white/20 rounded-full font-medium text-gray-300 hover:bg-white/5 hover:text-white hover:border-white/40 transition-all duration-300 text-center min-h-[44px] flex items-center justify-center"
          >
            Contact Me
          </a>
        </Reveal>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;