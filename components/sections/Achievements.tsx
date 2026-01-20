import React, { useEffect, useState } from 'react';
import SpotlightCard from '../ui/SpotlightCard';
import { FaTrophy } from 'react-icons/fa';
import { getAchievements, urlFor } from '../../lib/sanity';
import { Achievement } from '../../types/sanity';
import ElectricBorder from '../ui/ElectricBorder';

const Achievements: React.FC = () => {
    const [achievements, setAchievements] = useState<Achievement[]>([]);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const data = await getAchievements();
                setAchievements(data);
            } catch (error) {
                console.error('Error fetching achievements:', error);
            }
        };

        fetchAchievements();
    }, []);

    // if (!achievements.length) return null;

    return (
        <section id="achievements" className="py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="mb-20 text-center relative">
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500 bg-clip-text text-transparent inline-block">
                        Achievements
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
                        Recognition and awards garnered throughout my journey.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {achievements.map((achievement) => (
                        <div key={achievement._id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-sm">
                            <ElectricBorder color="#EAB308" speed={0.5} chaos={0.03} borderRadius={20}>
                                <SpotlightCard className="p-6 h-full flex flex-col" spotlightColor="rgba(234, 179, 8, 0.15)">
                                    <div className="flex flex-col gap-4 relative z-10 h-full">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20 shrink-0">
                                                <FaTrophy className="text-yellow-400 text-xl" />
                                            </div>
                                            {achievement.date && (
                                                <span className="text-sm text-gray-400 font-mono bg-white/5 px-2 py-1 rounded">
                                                    {new Date(achievement.date).getFullYear()}
                                                </span>
                                            )}
                                        </div>

                                        {achievement.image && (
                                            <div className="w-full aspect-video rounded-lg overflow-hidden border border-white/10 mt-2 group-hover/image:scale-[1.02] transition-transform duration-300">
                                                {achievement.link ? (
                                                    <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer relative overflow-hidden">
                                                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 z-10 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                                                            <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">View Achievement</span>
                                                        </div>
                                                        <img
                                                            src={achievement.image.asset.url || urlFor(achievement.image).url()}
                                                            alt={achievement.title}
                                                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </a>
                                                ) : (
                                                    <img
                                                        src={achievement.image.asset.url || urlFor(achievement.image).url()}
                                                        alt={achievement.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </div>
                                        )}

                                        <div className="mt-2">
                                            <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                                                {achievement.title}
                                            </h3>
                                            <div className="text-yellow-500/80 font-medium text-sm mt-1">
                                                {achievement.organization}
                                            </div>
                                        </div>

                                        {achievement.description && (
                                            <p className="text-gray-400 text-sm leading-relaxed mt-2 flex-grow">
                                                {achievement.description}
                                            </p>
                                        )}
                                    </div>
                                </SpotlightCard>
                            </ElectricBorder>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
