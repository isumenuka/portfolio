import React, { useEffect, useState } from 'react';
import SpotlightCard from '../ui/SpotlightCard';
import { FaBriefcase, FaGraduationCap, FaBuilding, FaSchool } from 'react-icons/fa';
import { getExperience, getEducation, urlFor } from '../../lib/sanity';
import { Experience as ExperienceType, Education as EducationType } from '../../types/sanity';

const Experience: React.FC = () => {
    const [experiences, setExperiences] = useState<ExperienceType[]>([]);
    const [education, setEducation] = useState<EducationType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [expData, eduData] = await Promise.all([
                    getExperience(),
                    getEducation()
                ]);
                setExperiences(expData);
                setEducation(eduData);
            } catch (error) {
                console.error('Error fetching experience/education:', error);
            }
        };

        fetchData();
    }, []);





    const displayExperiences = experiences || [];
    const displayEducation = education || [];

    return (
        <section id="experience" className="min-h-screen py-24 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="mb-20 text-center relative">
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block">
                        Experience & Education
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
                        My professional journey and academic path, marked by continuous learning and building.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
                    {/* Central Gradient Line (Desktop) */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -ml-[1px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />

                    {/* Work Experience Column */}
                    <div>
                        <div className="mb-12 flex items-center gap-3">
                            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                                <FaBriefcase className="text-cyan-400 text-xl" />
                            </div>
                            <h3 className="text-3xl font-bold text-white">Work Experience</h3>
                        </div>

                        <div className="space-y-12 relative border-l-2 border-cyan-500/20 lg:border-none pl-8 lg:pl-0">
                            {displayExperiences.map((exp, index) => (
                                <div key={exp._id} className="relative group">
                                    {/* Connector Dot/Line (Mobile) */}
                                    <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full border-4 border-black bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] lg:hidden mt-6" />

                                    {/* Desktop Connector */}
                                    <div className="hidden lg:block absolute top-[28px] -right-[60px] w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)] z-20 group-hover:scale-125 transition-transform duration-300" />
                                    <div className="hidden lg:block absolute top-[35px] -right-[60px] w-[60px] h-[2px] bg-cyan-500/30" />


                                    <SpotlightCard className="p-6 md:p-8 cursor-target" spotlightColor="rgba(6, 182, 212, 0.15)">
                                        <div className="flex flex-col gap-4 relative z-10">
                                            {/* Header */}
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.title}</h4>
                                                    <div className="text-gray-400 font-medium mt-1">{exp.company}</div>
                                                </div>
                                                {/* Dynamic Logo */}
                                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-1 overflow-hidden shrink-0 shadow-sm">
                                                    {exp.logo ? (
                                                        <img
                                                            src={urlFor(exp.logo).url()}
                                                            alt={exp.company}
                                                            className="w-full h-full object-cover rounded-lg"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-lg">
                                                            <FaBriefcase className="text-cyan-500 text-sm" />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400 font-mono">
                                                <span>{exp.period?.split('·')[0].trim()}</span>
                                                <span className="w-1 h-1 rounded-full bg-cyan-500" />
                                                <span>{exp.type}</span>
                                            </div>

                                            {exp.description && (
                                                <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-white/10 pl-4">
                                                    {exp.description}
                                                </p>
                                            )}

                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {exp.skills?.map((skill, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white/5 hover:bg-white/10 text-xs text-white/80 rounded-full border border-white/5 transition-colors">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="mb-12 flex items-center gap-3">
                            <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                                <FaGraduationCap className="text-purple-400 text-xl" />
                            </div>
                            <h3 className="text-3xl font-bold text-white">Education</h3>
                        </div>

                        <div className="space-y-12 relative border-l-2 border-purple-500/20 lg:border-none pl-8 lg:pl-0">
                            {displayEducation.map((edu, index) => (
                                <div key={edu._id} className="relative group">
                                    {/* Connector Dot/Line (Mobile) */}
                                    <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full border-4 border-black bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] lg:hidden mt-6" />

                                    {/* Desktop Connector */}
                                    <div className="hidden lg:block absolute top-[28px] -left-[60px] w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] z-20 group-hover:scale-125 transition-transform duration-300" />
                                    <div className="hidden lg:block absolute top-[35px] -left-[60px] w-[60px] h-[2px] bg-purple-500/30" />

                                    <SpotlightCard className="p-6 md:p-8 cursor-target" spotlightColor="rgba(168, 85, 247, 0.15)">
                                        <div className="flex flex-col gap-4 relative z-10">
                                            {/* Header */}
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{edu.degree}</h4>
                                                    <div className="text-gray-400 font-medium mt-1">{edu.institution}</div>
                                                </div>
                                                {/* Dynamic Logo */}
                                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-1 overflow-hidden shrink-0 shadow-sm">
                                                    {edu.logo ? (
                                                        <img
                                                            src={urlFor(edu.logo).url()}
                                                            alt={edu.institution}
                                                            className="w-full h-full object-cover rounded-lg"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-lg">
                                                            <FaGraduationCap className="text-purple-500 text-sm" />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400 font-mono">
                                                <span>{edu.period?.split('-')[0].trim()}</span>
                                                {edu.grade && (
                                                    <>
                                                        <span className="w-1 h-1 rounded-full bg-purple-500" />
                                                        <span>{edu.grade}</span>
                                                    </>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {edu.skills?.map((skill, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white/5 hover:bg-white/10 text-xs text-white/80 rounded-full border border-white/5 transition-colors">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Experience;
