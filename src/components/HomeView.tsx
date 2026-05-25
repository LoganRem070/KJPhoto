import React, { useState, useEffect } from 'react';
import { ViewType } from '../types';
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomeViewProps {
  setView: (view: ViewType) => void;
}

const HERO_SLIDES = [
  {
    image: new URL('../assets/images/Main_0.JPG', import.meta.url).href,
    title: 'K&J Photography',
    subtitle: 'Capturing Moments That Last Forever',
    tagline: 'LUXURY FINE-ART DOCUMENTARY',
  },
  {
    image: new URL('../assets/images/Main_1.jpg', import.meta.url).href,
    title: 'Timeless Legacies',
    subtitle: 'Preserving Sacred & Sincere Vows',
    tagline: 'CATHEDRALS & SACRED SPACES',
  },
  {
    image: new URL('../assets/images/Main_2.jpg', import.meta.url).href,
    title: 'The Debut Gaze',
    subtitle: 'Elegant Celebrations of Growth',
    tagline: 'PREMIUM SWEET 16 EDITORIAL',
  },
  {
    image: new URL('../assets/images/Main_3.jpg', import.meta.url).href,
    title: 'Vibrant Splendor',
    subtitle: 'Traditional Rituals Custom Styled',
    tagline: 'CULTURAL ANCESTRAL CELEBRATIONS',
  }
];

export default function HomeView({ setView }: HomeViewProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div id="home-view" className="w-full bg-[#0a0a0a]">
      {/* SECTION 1 — EPIC HERO SLIDESHOW */}
      <section id="hero-slider" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Carousel Background with Crossfade & Slow Zoom Effect */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1.01 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={HERO_SLIDES[currentSlide].image}
                alt={HERO_SLIDES[currentSlide].title}
                className="w-full h-full object-cover object-center scale-102"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/45 to-black/60 z-10" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center select-none pt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              {/* Luxury Subtitle tag */}
              <span className="text-luxury-accent text-[11px] md:text-xs tracking-[0.5em] font-sans uppercase font-semibold mb-4 block animate-pulse">
                {HERO_SLIDES[currentSlide].tagline}
              </span>

              {/* Core Headings */}
              <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl tracking-[0.08em] uppercase text-luxury-fg font-bold leading-none mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                {HERO_SLIDES[currentSlide].title}
              </h1>

              <p className="font-sans text-sm sm:text-lg md:text-xl text-luxury-fg/80 font-light italic tracking-wider max-w-2xl mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 font-sans text-xs tracking-[0.2em] uppercase font-semibold">
                <button
                  id="view-gallery-btn"
                  onClick={() => {
                    setView('gallery');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 border border-luxury-accent text-luxury-accent text-[11px] uppercase tracking-[0.2em] hover:bg-luxury-accent hover:text-[#0a0a0a] transition-colors rounded-none cursor-pointer flex items-center gap-2"
                >
                  <span>View Gallery</span>
                  <ArrowRight size={13} />
                </button>
                
                <button
                  id="contact-us-btn"
                  onClick={() => {
                    setView('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 bg-luxury-fg text-[#0a0a0a] text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-colors rounded-none cursor-pointer"
                >
                  Inquire Now
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Micro Indicators & Arrows */}
        <div className="absolute bottom-10 left-0 w-full z-30 px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-white/20 hover:border-luxury-accent flex items-center justify-center text-luxury-fg/70 hover:text-luxury-accent transition-colors bg-black/10 backdrop-blur-sm cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 border border-white/20 hover:border-luxury-accent flex items-center justify-center text-luxury-fg/70 hover:text-luxury-accent transition-colors bg-black/10 backdrop-blur-sm cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2.5">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                  currentSlide === i ? 'w-8 bg-luxury-accent' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>

          <div className="text-[10px] tracking-[0.3em] font-mono text-luxury-muted uppercase">
            {(currentSlide + 1).toString().padStart(2, '0')} / {HERO_SLIDES.length.toString().padStart(2, '0')}
          </div>
        </div>

      </section>

      {/* SECTION 2 — SHORT CENTRED INTRO */}
      <section id="short-intro" className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(210,180,140,0.02),transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-[1px] bg-luxury-accent mb-8" />
            
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-wider text-luxury-fg font-light mb-6">
              Capturing life’s quiet romances, elegant traditions, and historic milestones through a luxurious fine-art eye.
            </h2>
            
            <div className="h-6 flex items-center justify-center">
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-luxury-accent font-medium uppercase">
                Wedding's &bull; Sweet 16's &bull; Quinceanera's &bull; Corporate Event's &bull; And More!
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-luxury-muted leading-relaxed max-w-2xl mt-8 tracking-wide">
              We specialize in full-bleed cinematic photography and state-of-the-art visual installations. Operating globally out of New York, we focus on intimate emotional depth, tailored architectural light, and bespoke high-speed photobooth systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — FEATURED SERVICES HOVER CARDS */}
      <section id="featured-services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[0.5em] text-luxury-accent uppercase font-sans font-medium block mb-2">
            STUDIO DISCIPLINE & SEGMENTS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-widest uppercase text-luxury-fg font-bold">
            Flagship Specialities
          </h2>
          <div className="w-8 h-[2px] bg-luxury-accent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* photgraphy Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onClick={() => {
              setView('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative h-[480px] md:h-[550px] overflow-hidden bg-black border border-white/5 cursor-pointer shadow-2xl flex items-end p-8"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={new URL('../assets/images/WeddingTitle.jpg', import.meta.url).href}
                alt="Photography"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent group-hover:via-black/25 transition-colors duration-500 z-10" />
            </div>

            <div className="relative z-20 w-full transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-luxury-accent font-sans text-[10px] tracking-[0.3em] uppercase block mb-1">
                Gallery
              </span>
              <h3 className="font-serif text-2xl tracking-widest text-[#fff] uppercase group-hover:text-luxury-accent transition-colors duration-300">
                Photography
              </h3>
              <p className="font-sans text-xs text-luxury-muted mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                Timeless fine-art photography with romantic lighting and emotional, high-fidelity images.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[11px] tracking-widest text-luxury-accent uppercase font-medium">
                <span>View Gallery</span>
                <ArrowRight size={12} className="transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* cinematorgraphy card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => {
              setView('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative h-[480px] md:h-[550px] overflow-hidden bg-black border border-white/5 cursor-pointer shadow-2xl flex items-end p-8"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={new URL('../assets/images/VideoTitle.jpg', import.meta.url).href}
                alt="Sweet 16 Collection"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent group-hover:via-black/25 transition-colors duration-500 z-10" />
            </div>

            <div className="relative z-20 w-full transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-luxury-accent font-sans text-[10px] tracking-[0.3em] uppercase block mb-1">
                Highlights
              </span>
              <h3 className="font-serif text-2xl tracking-widest text-[#fff] uppercase group-hover:text-luxury-accent transition-colors duration-300">
                Cinematography
              </h3>
              <p className="font-sans text-xs text-luxury-muted mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                Elegant video storytelling, capturing cinematic angles, vibrant dance coverage, and unforgettable emotional moments.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[11px] tracking-widest text-luxury-accent uppercase font-medium">
                <span>View Highlights</span>
                <ArrowRight size={12} className="transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Photobooth Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onClick={() => {
              setView('photobooth');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative h-[480px] md:h-[550px] overflow-hidden bg-black border border-white/5 cursor-pointer shadow-2xl flex items-end p-8"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={new URL('../assets/images/BoothTitle.jpg', import.meta.url).href}
                alt="Photobooths Offerings"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent group-hover:via-black/25 transition-colors duration-500 z-10" />
            </div>

            <div className="relative z-20 w-full transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-luxury-accent font-sans text-[10px] tracking-[0.3em] uppercase block mb-1">
                Experiences
              </span>
              <h3 className="font-serif text-2xl tracking-widest text-[#fff] uppercase group-hover:text-luxury-accent transition-colors duration-300">
                Photobooths
              </h3>
              <p className="font-sans text-xs text-luxury-muted mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                Every type of booth experience from open air print booths to 360 video experiences, all custom designed to match your event's aesthetic and theme.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[11px] tracking-widest text-luxury-accent uppercase font-medium">
                <span>View Offerings</span>
                <ArrowRight size={12} className="transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="cta-row" className="bg-[#0c0c0c] py-28 border-t border-white/5 relative overflow-hidden text-center flex flex-col items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(210,180,140,0.03),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <span className="text-luxury-accent font-sans text-[11px] tracking-[0.4em] uppercase block mb-4">
            EXPERIENCE RETRIEVAL & INQUIRY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-luxury-fg mb-6 font-bold">
            Curious to design your own historic album?
          </h2>
          <p className="font-sans text-sm text-luxury-muted tracking-wide max-w-xl mb-10 mx-auto">
            Our calendars book nearly twelve months in advance. Reach out today to secure K&J for your luxury wedding, sweet 16 party, or high-end event activation.
          </p>
          <button
            onClick={() => {
              setView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-10 py-4 bg-luxury-accent text-black hover:bg-luxury-fg font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all cursor-pointer shadow-lg inline-flex items-center gap-2 group"
          >
            <span>Initiate Inquiry</span>
            <ArrowRight size={13} className="transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
}
