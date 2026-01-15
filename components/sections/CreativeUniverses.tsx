import React, { useRef, useEffect, useState } from 'react';
import PixelTransition from '../ui/PixelTransition';
import { Reveal } from '../ui/TextAnimations';
import Noise from '../ui/Noise';
import PixelCard from '../ui/PixelCard';

import { FaGamepad, FaPaintBrush } from 'react-icons/fa';
import { getCreativeUniverses } from '../../lib/sanity';

interface CreativeUniversesData {
    title: string;
    subtitle: string;
    designCard: {
        title: string;
        subtitle: string;
        linkText: string;
        linkUrl: string;
    };
    gamingCard: {
        title: string;
        subtitle: string;
        linkText: string;
        linkUrl: string;
    };
}

const CreativeUniverses: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const [data, setData] = useState<CreativeUniversesData | null>(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const fetchedData = await getCreativeUniverses();
                setData(fetchedData);
            } catch (error) {
                console.error("Error fetching Creative Universes data:", error);
            }
        };
        fetchContent();
    }, []);

    // Fallbacks if Sanity data is missing or loading
    const title = data?.title || "Creative Universes";
    const subtitle = data?.subtitle || "Beyond code, I explore digital dimensions through design and competitive gaming.";

    const designCard = {
        title: data?.designCard?.title || "Creative Studio",
        subtitle: data?.designCard?.subtitle || "Thumbnails & Design",
        linkText: data?.designCard?.linkText || "thumb.isumenuka.me",
        linkUrl: data?.designCard?.linkUrl || "https://thumb.isumenuka.me"
    };

    const gamingCard = {
        title: data?.gamingCard?.title || "Gaming Hub",
        subtitle: data?.gamingCard?.subtitle || "Esports & Content",
        linkText: data?.gamingCard?.linkText || "esum4.isumenuka.me",
        linkUrl: data?.gamingCard?.linkUrl || "https://esum4.isumenuka.me"
    };

    return (
        <section id="universe" ref={containerRef} className="py-20 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <Reveal>
                    <div className="mb-12 md:mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                                {title}
                            </span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg font-light tracking-wide max-w-xl mx-auto">
                            {subtitle}
                        </p>
                    </div>
                </Reveal>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    {/* Design Universe Card */}
                    <Reveal delay={100} className="w-full max-w-[400px] group">
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <PixelTransition
                                firstContent={
                                    <div className="w-full h-full bg-gray-900/40 backdrop-blur-xl border-[0.5px] border-white/10 flex flex-col items-center justify-center p-6 text-center rounded-[20px] relative overflow-hidden">
                                        <Noise patternAlpha={20} />
                                        {/* Subtle internal gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-50" />

                                        <div className="relative z-10 w-20 h-20 mb-4">
                                            <PixelCard variant="pink" className="w-full h-full flex items-center justify-center bg-black/50 rounded-xl border border-white/5">
                                                <FaPaintBrush className="text-3xl text-purple-200" />
                                            </PixelCard>
                                        </div>

                                        <h3 className="relative z-10 text-2xl font-bold text-white mb-1 tracking-wide">{designCard.title}</h3>
                                        <p className="relative z-10 text-gray-400 font-mono text-xs uppercase tracking-widest">{designCard.subtitle}</p>
                                    </div>
                                }
                                secondContent={
                                    <div className="w-full h-full bg-[#080808] flex flex-col items-center justify-center p-6 text-center border-[0.5px] border-purple-500/40 rounded-[20px] relative overflow-hidden">
                                        <Noise patternAlpha={30} />
                                        <div className="absolute inset-0 bg-purple-900/10" />

                                        <h3 className="relative z-10 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 uppercase tracking-widest">
                                            Visit Studio
                                        </h3>
                                        <a
                                            href={designCard.linkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative z-10 px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] tracking-wide"
                                        >
                                            {designCard.linkText}
                                        </a>
                                    </div>
                                }
                                gridSize={8}
                                pixelColor="#a855f7"
                                aspectRatio="100%"
                                className="w-full h-[320px] rounded-[20px]"
                            />
                        </div>
                    </Reveal>

                    {/* Gaming Universe Card */}
                    <Reveal delay={200} className="w-full max-w-[400px] group">
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-cyan-600/20 blur-xl rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <PixelTransition
                                firstContent={
                                    <div className="w-full h-full bg-gray-900/40 backdrop-blur-xl border-[0.5px] border-white/10 flex flex-col items-center justify-center p-6 text-center rounded-[20px] relative overflow-hidden">
                                        <Noise patternAlpha={20} />
                                        {/* Subtle internal gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-50" />

                                        <div className="relative z-10 w-20 h-20 mb-4">
                                            <PixelCard variant="blue" className="w-full h-full flex items-center justify-center bg-black/50 rounded-xl border border-white/5">
                                                <FaGamepad className="text-4xl text-cyan-200" />
                                            </PixelCard>
                                        </div>

                                        <h3 className="relative z-10 text-2xl font-bold text-white mb-1 tracking-wide">{gamingCard.title}</h3>
                                        <p className="relative z-10 text-gray-400 font-mono text-xs uppercase tracking-widest">{gamingCard.subtitle}</p>
                                    </div>
                                }
                                secondContent={
                                    <div className="w-full h-full bg-[#080808] flex flex-col items-center justify-center p-6 text-center border-[0.5px] border-cyan-500/40 rounded-[20px] relative overflow-hidden">
                                        <Noise patternAlpha={30} />
                                        <div className="absolute inset-0 bg-cyan-900/10" />

                                        <h3 className="relative z-10 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6 uppercase tracking-widest">
                                            Enter Hub
                                        </h3>
                                        <a
                                            href={gamingCard.linkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative z-10 px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] tracking-wide"
                                        >
                                            {gamingCard.linkText}
                                        </a>
                                    </div>
                                }
                                gridSize={8}
                                pixelColor="#06b6d4"
                                aspectRatio="100%"
                                className="w-full h-[320px] rounded-[20px]"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default CreativeUniverses;
