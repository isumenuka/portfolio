import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import SilkBackground from './components/ui/SilkBackground';
import TrueFocus from './components/ui/TrueFocus';
import ShinyText from './components/ui/ShinyText';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CreativeUniverses from './components/sections/CreativeUniverses';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import TargetCursor from './components/ui/TargetCursor';
import Preloader from './components/ui/Preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Custom Cursor - Always active */}
      {!isLoading && <TargetCursor hideDefaultCursor={true} />}

      <AnimatePresence mode='wait'>
        {isLoading && <Preloader onLoadComplete={handleLoadComplete} />}
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


            {/* Skills Section */}
            <Skills />

            {/* Experience & Education Section */}
            <Experience />

            {/* Achievements Section */}
            <Achievements />


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

      {/* Vercel Analytics */}
      <Analytics />
    </>
  );
};

export default App;