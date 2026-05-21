import React, { useState, useEffect } from 'react';
import { ViewType } from '../types';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface NavbarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

export default function Navbar({ currentView, setView }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: ViewType) => {
    setView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const leftLinks: { label: string; view: ViewType }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Gallery', view: 'gallery' },
    { label: 'Highlights', view: 'highlights' },
  ];

  const rightLinks: { label: string; view: ViewType }[] = [
    { label: 'Photobooth', view: 'photobooth' },
    { label: 'Packages', view: 'packages' },
    { label: 'Contact', view: 'contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-luxury-bg/85 backdrop-blur-md border-b border-white/5 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Mobile: Hamburger on Left */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-luxury-fg hover:text-luxury-accent transition-colors focus:outline-none z-50"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Left Navigation (Desktop) */}
        <nav className="hidden md:flex items-center space-x-10 w-1/3 justify-start font-sans text-[13px] tracking-[0.2em] uppercase font-medium">
          {leftLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => handleNavClick(link.view)}
              className="relative py-2 text-left text-luxury-fg/70 hover:text-luxury-fg transition-all cursor-pointer group"
            >
              <span className={currentView === link.view ? 'text-luxury-accent font-semibold' : ''}>
                {link.label}
              </span>
              <span
                className={`absolute bottom-0 left-0 w-full h-[1px] bg-luxury-accent transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                  currentView === link.view ? 'scale-x-100' : ''
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Center Brand / Title Logo */}
        <div className="flex justify-center md:w-1/3 text-center z-50">
          <button
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group flex flex-col items-center gap-0.5 focus:outline-none"
          >
            <h1 className="font-serif text-lg md:text-2xl tracking-[0.25em] uppercase font-semibold text-luxury-fg transition-colors group-hover:text-luxury-accent">
              K&J <span className="font-light italic tracking-[0.1em] text-sm md:text-base capitalize text-luxury-accent/80">Photography</span>
            </h1>
            <span className="text-[7px] tracking-[0.5em] text-luxury-muted uppercase hidden md:inline-block">
              fine-art & visual storytelling
            </span>
          </button>
        </div>

        {/* Right Navigation (Desktop) */}
        <nav className="hidden md:flex items-center space-x-10 w-1/3 justify-end font-sans text-[13px] tracking-[0.2em] uppercase font-medium">
          {rightLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => handleNavClick(link.view)}
              className="relative py-2 text-right text-luxury-fg/70 hover:text-luxury-fg transition-all cursor-pointer group"
            >
              <span className={currentView === link.view ? 'text-luxury-accent font-semibold' : ''}>
                {link.label}
              </span>
              <span
                className={`absolute bottom-0 right-0 w-full h-[1px] bg-luxury-accent transform scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 ${
                  currentView === link.view ? 'scale-x-100' : ''
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Mobile: Invisible spacer to balance hamburger placement */}
        <div className="w-6 md:hidden"></div>

      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 bg-luxury-bg/98 backdrop-blur-xl z-40 flex flex-col justify-center items-center px-12 md:hidden"
          >
            <div className="flex flex-col space-y-8 text-center">
              {[...leftLinks, ...rightLinks].map((link, i) => (
                <motion.button
                  key={link.view}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNavClick(link.view)}
                  className={`text-2xl font-serif tracking-[0.15em] uppercase hover:text-luxury-accent transition-colors ${
                    currentView === link.view ? 'text-luxury-accent font-semibold' : 'text-luxury-fg/80'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              
              <div className="pt-12 border-t border-white/10 flex flex-col gap-2">
                <span className="text-[9px] tracking-[0.3em] text-luxury-muted uppercase">
                  Based in NY • Available Worldwide
                </span>
                <span className="text-xs text-luxury-accent font-serif italic">
                  starwarsrebels75@gmail.com
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
