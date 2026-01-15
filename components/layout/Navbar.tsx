import React, { useState, useEffect } from 'react';
import GooeyNav from '../ui/GooeyNav';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Universe', href: '#universe' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background on scroll
      setScrolled(window.scrollY > 50);

      // Check if we're at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection('contact'); // Select Contact (last item)
        return;
      }

      // Find active section using Max Overlap logic
      const sections = navItems.map(item => {
        const element = document.querySelector(item.href);
        if (!element) return null;

        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate how much of this section is visible
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        return {
          id: item.href.replace('#', ''),
          visibleHeight,
        };
      }).filter(Boolean);

      // Find section with maximum visibility
      const mostVisible = sections.reduce((prev, current) => {
        return (current && current.visibleHeight > (prev?.visibleHeight || 0)) ? current : prev;
      }, sections[0]);

      if (mostVisible?.id) {
        setActiveSection(mostVisible.id);
      }
    };

    // Run on mount and scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle link clicks
  const handleNavClick = (href: string) => {
    // Close mobile menu
    setIsOpen(false);

    // Get target element
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Use scrollIntoView - accurate and robust
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Fine-tune position for navbar offset after a brief delay
      // because scrollIntoView doesn't support offset
      setTimeout(() => {
        const navHeight = 80;
        const rect = element.getBoundingClientRect();
        // Only adjust if we are not at the top (avoid negative scroll)
        // and if the previous scroll put us exactly at top
        if (rect.top === 0) {
          window.scrollBy({ top: -navHeight, behavior: 'smooth' });
        }
      }, 800);

      // Update active section immediately
      setActiveSection(targetId);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${scrolled
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center md:justify-center">
          {/* Desktop Navigation with GooeyNav */}
          <div className="hidden md:flex items-center gap-8">
            <GooeyNav
              items={navItems}
              initialActiveIndex={navItems.findIndex(item => item.href.replace('#', '') === activeSection)}
              onItemClick={(item) => handleNavClick(item.href)}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 h-screen">
            <div className="flex flex-col items-center space-y-8 mt-12">
              {navItems.map((item) => {
                const id = item.href.replace('#', '');
                const isActive = activeSection === id;

                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-2xl font-medium transition-colors ${isActive
                      ? 'text-cyan-400'
                      : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;