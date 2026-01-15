import React, { useEffect, useState, useMemo } from 'react';
import { Reveal } from '../ui/TextAnimations';
import PixelCard from '../ui/PixelCard';
import TextCursor from '../ui/TextCursor';
import LogoLoop from '../ui/LogoLoop';
import { getSkills, getSectionTitles } from '../../lib/sanity';
import { SkillCategory as SanitySkillCategory, SectionTitles } from '../../types/sanity';



// Helper to get icon for skill using Devicon CDN
const getSkillIcon = (skillName: string) => {
  if (!skillName) return null;
  // Robust normalization: lowercase, remove ALL non-alphanumeric (dots, spaces, dashes)
  // e.g. "Node.js" -> "nodejs", "C++" -> "cplusplus" (special handle), "scikit-learn" -> "scikitlearn"
  let normalized = skillName.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Special overrides before map lookup
  if (normalized === 'c++' || normalized === 'cpp') normalized = 'cplusplus';
  if (normalized === 'c#') normalized = 'csharp';
  if (normalized === 'discordapi') normalized = 'discord'; // Map Discord API to Discord

  // Map to Devicon filenames
  // Base URL: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/[name]/[name]-original.svg
  const deviconMap: Record<string, string> = {
    // Languages
    'python': 'python/python-original',
    'java': 'java/java-original',
    'javascript': 'javascript/javascript-original',
    'typescript': 'typescript/typescript-original',
    'cplusplus': 'cplusplus/cplusplus-original', // Normalized from c++
    'latex': 'latex/latex-original',

    // Web
    'react': 'react/react-original',
    'nodejs': 'nodejs/nodejs-original',
    'tailwindcss': 'tailwindcss/tailwindcss-original',
    'firebase': 'firebase/firebase-plain',
    'html': 'html5/html5-original',
    'css': 'css3/css3-original',

    // Tools
    'git': 'git/git-original',
    'docker': 'docker/docker-original',
    'vscode': 'vscode/vscode-original',
    'figma': 'figma/figma-original',
    'linux': 'linux/linux-original',
    'jupyter': 'jupyter/jupyter-original',
    'discord': 'discordjs/discordjs-original', // Using discord.js logo or generic discord if available

    // AI / Data
    'tensorflow': 'tensorflow/tensorflow-original',
    'pandas': 'pandas/pandas-original',
    'numpy': 'numpy/numpy-original',
    'scikitlearn': 'scikitlearn/scikitlearn-original',
    'pytorch': 'pytorch/pytorch-original',

    // Manual / External
    'keras': 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg',
    'googlecolab': 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg',
    'n8n': 'https://upload.wikimedia.org/wikipedia/commons/f/f3/N8n-logo.svg',
    'restapis': 'https://www.svgrepo.com/show/331860/api.svg',
    'xgboost': 'https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png'
  };

  let src = '';
  // 1. Try explicit map
  if (deviconMap[normalized]) {
    if (deviconMap[normalized].startsWith('http')) {
      src = deviconMap[normalized];
    } else {
      src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${deviconMap[normalized]}.svg`;
    }
  }
  // 2. Try optimistic matching for whatever is left (e.g. mysq, redis -> mysql/mysql-original)
  else {
    // Default fallback logic if not in map: try the name itself
    src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${normalized}/${normalized}-original.svg`;
  }

  // Fallback image to use if the specific logo fails to load
  const genericFallback = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";

  return (
    <img
      src={src}
      alt={skillName}
      className="w-full h-full object-contain"
      onError={(e) => {
        // If the specific icon fails (optimistic or mapped), revert to generic Devicon logo
        // Prevent infinite loop if generic fails by checking currentSrc
        if (e.currentTarget.src !== genericFallback) {
          e.currentTarget.src = genericFallback;
        } else {
          e.currentTarget.style.display = 'none'; // Give up if even generic fails
        }
      }}
    />
  );
};

const Skills: React.FC = () => {
  const [skillData, setSkillData] = useState<SanitySkillCategory[]>([]);
  const [sectionTitles, setSectionTitles] = useState<SectionTitles | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [skillsData, titlesData] = await Promise.all([
          getSkills(),
          getSectionTitles()
        ]);
        setSkillData(skillsData);
        setSectionTitles(titlesData);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchData();
  }, []);

  const displaySkills = useMemo(() => skillData || [], [skillData]);

  const allSkills = useMemo(() => {
    if (displaySkills.length === 0) return [];

    // Interleave skills for a better visual pattern in the loop
    // (e.g. [Lang1, AI1, Web1, Tool1, Lang2, AI2...])
    const interleaved: string[] = [];
    const seen = new Set<string>();
    const maxSkills = Math.max(...displaySkills.map(c => c.skills.length));

    for (let i = 0; i < maxSkills; i++) {
      displaySkills.forEach(category => {
        const skill = category.skills[i];
        const normalized = skill ? skill.toLowerCase().replace(/\s+/g, '') : '';

        if (skill && !seen.has(normalized)) {
          interleaved.push(skill);
          seen.add(normalized);
        }
      });
    }

    return interleaved;
  }, [displaySkills]);

  const logoItems = useMemo(() => allSkills.length > 0 ? allSkills.map(skill => ({
    node: (
      <div className="flex flex-col items-center justify-center gap-2 group cursor-pointer px-4">
        <div className="p-2 w-16 h-16 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-lg">
          {getSkillIcon(skill)}
        </div>
      </div>
    ),
    title: skill
  })) : [], [allSkills]);

  return (
    <section id="skills" className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decorative blob */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl -z-10"></div>

      {/* TextCursor Effect */}
      <div className="absolute inset-0 z-0">
        <TextCursor
          text="💻"
          spacing={80}
          maxPoints={8}
          colors={['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899']}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {sectionTitles?.skillsTitle || 'Skills & Technologies'}
          </h2>
        </Reveal>

        {/* Logo Loop */}
        {logoItems.length > 0 && (
          <div className="mb-12 md:mb-16">
            <LogoLoop logos={logoItems} speed={30} />
          </div>
        )}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {displaySkills.map((category, index) => (
            <Reveal key={category._id} delay={index * 100}>
              <PixelCard className="h-full rounded-xl overflow-hidden !border-0" variant="blue" gap={5} speed={40}>
                <div className="h-full w-full bg-gray-900/20 backdrop-blur-sm border border-white/5 rounded-xl p-4 md:p-6 hover:border-cyan-500/50 transition-all duration-300 flex flex-col relative z-20">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-cyan-400 relative z-30 drop-shadow-sm">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 relative z-30">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 md:px-3 py-1 bg-gray-950/80 backdrop-blur-md border border-white/10 rounded-md text-white/90 text-xs md:text-sm font-mono hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </PixelCard>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;