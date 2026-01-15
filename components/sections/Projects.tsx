import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Reveal, GradientText, LetterFadeIn } from '../ui/TextAnimations';
import { getProjects } from '../../lib/sanity';
import { Project as SanityProject } from '../../types/sanity';
import { ParticleCard, GlobalSpotlight } from '../ui/MagicBento';

// Fallback data in case no Sanity content yet
const fallbackProjects = [
  {
    _id: '1',
    title: "Food Preservation ML",
    description: "Machine Learning model designed to predict food spoilage rates and optimize storage conditions using sensor data analysis.",
    tags: ["Python", "scikit-learn", "Pandas", "IoT"],
    link: "https://github.com/isumenuka",
  },
  {
    _id: '2',
    title: "Traditional Masks Detection",
    description: "Deep Learning computer vision project capable of identifying and classifying traditional Sri Lankan masks from images.",
    tags: ["TensorFlow", "Keras", "Deep Learning", "OpenCV"],
    link: "https://github.com/isumenuka",
  },
  {
    _id: '3',
    title: "TeamMate App",
    description: "A collaborative platform for developers to find teammates for hackathons and side projects based on skill compatibility.",
    tags: ["React", "Node.js", "Firebase", "Tailwind"],
    link: "https://github.com/isumenuka",
  },
  {
    _id: '4',
    title: "Suno.AI Music Generator",
    description: "Experimental project leveraging Suno.AI to generate algorithmic music compositions based on mood prompts.",
    tags: ["AI Audio", "Suno", "Python", "API Integration"],
    link: "https://www.linkedin.com/in/ezsumm/",
  },
  {
    _id: '5',
    title: "Kaggle Competitions",
    description: "Various data science notebooks and solutions provided for competitive programming challenges on Kaggle.",
    tags: ["Data Analysis", "Jupyter", "XGBoost", "Matplotlib"],
    link: "https://www.kaggle.com/",
  }
];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<SanityProject[]>([]);
  const [loading, setLoading] = useState(true);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjects();
        setProjects(data && data.length > 0 ? data : fallbackProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="projects" className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 relative">
      {/* Global Spotlight for Mouse Tracking */}
      <GlobalSpotlight
        gridRef={gridRef}
        glowColor="0, 255, 255" // Cyan glow
        spotlightRadius={300}
      />

      <style>
        {`
          .magic-card {
            --glow-color: 0, 255, 255;
            --border-color: rgba(255, 255, 255, 0.1);
          }
          
          /* Custom style to integrate with GlobalSpotlight */
          .magic-card::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 1px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(var(--glow-color), calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(var(--glow-color), calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            opacity: 1;
            z-index: 10;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Featured <GradientText>Projects</GradientText>
            </h2>
            <div className="text-gray-400 text-base md:text-lg max-w-2xl">
              <LetterFadeIn text="A selection of my work in AI, Machine Learning, and Web Development." />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" ref={gridRef}>
          {projects.map((project, index) => (
            <Reveal key={project._id} delay={index * 100} className="h-full">
              <ParticleCard
                className="magic-card group h-full bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
                glowColor="0, 255, 255"
                particleCount={8}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
              >
                <div className="p-6 h-full flex flex-col relative z-20">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
                    {project.description || 'No description provided'}
                  </p>

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors mt-auto"
                      // Prevent click propagation to card click effect if desired, but click effect is nice
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>View Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </ParticleCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;