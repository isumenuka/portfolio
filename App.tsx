import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SilkBackground from './components/ui/SilkBackground';
import Shuffle from './components/ui/Shuffle';
import ScrollVelocity from './components/ui/ScrollVelocity';
import ScrollReveal from './components/ui/ScrollReveal';
import TrueFocus from './components/ui/TrueFocus';
import ShinyText from './components/ui/ShinyText';
import MagicBento from './components/ui/MagicBento';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CreativeUniverses from './components/sections/CreativeUniverses';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import TargetCursor from './components/ui/TargetCursor';
import Preloader from './components/ui/Preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <main className="min-h-screen relative text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden">
          {/* Background */}
          <SilkBackground />

          {/* Navigation */}
          <Navbar />

          <div className="relative z-10 flex flex-col gap-8 md:gap-12 lg:gap-16">
            {/* Hero Section */}
            <Hero />

            {/* TrueFocus - Main Attention Grabber */}
            <div className="py-4 md:py-8">
              <TrueFocus
                sentence="Full Stack Developer Creative Coder Digital Artist"
                manualMode={false}
                blurAmount={8}
                borderColor="#00ffff"
                glowColor="rgba(0, 255, 255, 0.8)"
                animationDuration={0.6}
                pauseBetweenAnimations={1.5}
              />
            </div>

            {/* About Section */}
            <About />

            {/* Creative Universes (Pixel Transition) */}
            <CreativeUniverses />

            {/* ScrollVelocity - Transition to Skills */}
            <div className="py-4 md:py-6">
              <ScrollVelocity
                texts={['💻 CODE', '🎨 DESIGN', '⚡ INNOVATE']}
                velocity={150}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              />
            </div>

            {/* Skills Section */}
            <Skills />

            {/* Experience & Education Section */}
            <Experience />

            {/* ShinyText - Transition to Projects */}
            <div className="flex justify-center items-center py-8 md:py-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-wider text-center">
                <ShinyText
                  text="TRANSFORMING IDEAS INTO REALITY"
                  speed={2}
                  color="#a855f7"
                  shineColor="#00ffff"
                  spread={90}
                  yoyo={true}
                  delay={1}
                />
              </h2>
            </div>

            {/* Projects Section */}
            <Projects />

            {/* Contact Section */}
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;