import React, { useEffect, useState } from 'react';
import { Reveal } from '../ui/TextAnimations';
import Magnet from '../ui/Magnet';
import ScrambledText from '../ui/ScrambledText';
import ScrollFloat from '../ui/ScrollFloat';
import { getPersonalInfo } from '../../lib/sanity';
import { PersonalInfo } from '../../types/sanity';

const About: React.FC = () => {
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPersonalInfo();
                setPersonalInfo(data);
            } catch (error) {
                console.error('Error fetching personal info:', error);
            }
        };

        fetchData();
    }, []);

    // Fallback text if no content in Sanity yet
    const aboutText1 = personalInfo?.bioParagraph1 || "I am a passionate developer with a keen interest in building scalable, efficient, and user-friendly web applications. With a strong foundation in modern web technologies, I strive to create digital experiences that leave a lasting impression.";
    const aboutText2 = personalInfo?.bioParagraph2 || "My journey in tech has led me to explore various domains, from frontend development with React and Next.js to backend systems and AI integration. I'm always eager to learn new tools and frameworks to solve complex problems.";

    return (
        <section id="about" className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 relative">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        About Me
                    </h2>
                </Reveal>

                <Reveal delay={200}>
                    <Magnet padding={50} magnetStrength={10} wrapperClassName="w-full flex justify-center">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl hover:bg-white/10 transition-colors duration-300 w-full">
                            <div className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 md:mb-6">
                                <ScrambledText speed={0.5} duration={1.2}>
                                    {aboutText1}
                                </ScrambledText>
                            </div>
                            <div className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                                <ScrambledText speed={0.5} duration={1.2} delay={0.5}>
                                    {aboutText2}
                                </ScrambledText>
                            </div>
                        </div>
                    </Magnet>
                </Reveal>
            </div>
        </section>
    );
};

export default About;
