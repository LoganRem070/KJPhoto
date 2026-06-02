import React, { useEffect, useRef, useState } from 'react';
import { GALLERY_ITEMS } from '../data/staticData';
import { GalleryItem } from '../types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, ArrowDown, Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [galleryCategory, setGalleryCategory] = useState<string>('all');
  
  // Categorize images to fit the exact required Page Structure
  const weddings = GALLERY_ITEMS.filter(item => item.category === 'weddings');
  const sweet16 = GALLERY_ITEMS.filter(item => item.category === 'sweet16');
  const cultural = GALLERY_ITEMS.filter(item => item.category === 'cultural');
  const engagements = GALLERY_ITEMS.filter(item => item.category === 'engagements');
  const portraits = GALLERY_ITEMS.filter(item => item.category === 'portraits');

  const sections = [
    {quickTitle: "WEDDINGS", id: 'weddings-section', title: 'WEDDINGS & ELOPEMENTS', subtitle: 'Sacred ceremonies & fine-art moments', items: weddings },
    {quickTitle: "SWEET 16", id: 'sweet-section', title: 'SWEET SIXTEEN GALA', subtitle: 'Youthful majesty & grand portraits', items: sweet16 },
    {quickTitle: "SOUTH ASIAN", id: 'cultural-section', title: 'SOUTH ASIAN WEDDING CELEBRATIONS', subtitle: 'Intricate rituals of red and gold masterwork', items: cultural },
  ];

  useEffect(() => {
    // Only apply GSAP heavy scrub triggers on desktop for optimal rendering performance
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    let ctx = gsap.context(() => {
      // Pin each category title and fade it out while sliding the fullscreen group up
      sections.forEach((section) => {
        const triggerEl = document.getElementById(section.id);
        const titleEl = document.querySelector(`#${section.id} .section-title-wrap`);
        const imageGridEl = document.querySelector(`#${section.id} .section-grid-stack`);

        if (triggerEl && titleEl && imageGridEl) {
          // Large main scroll timeline
          gsap.timeline({
            scrollTrigger: {
              trigger: triggerEl,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1,
              pin: false,
            }
          })
          .to(titleEl, {
            opacity: 0,
            y: -80,
            scale: 0.95,
            ease: 'none'
          });

          // Animate consecutive children rows sliding up sequentially with overlap
          const children = imageGridEl.querySelectorAll('.gallery-card-row');
          children.forEach((child, index) => {
            gsap.fromTo(child,
              { y: 150, opacity: 0.35, scale: 0.93 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: child,
                  start: 'top bottom-=50',
                  end: 'top center',
                  scrub: 1,
                }
              }
            );
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const traverseLightbox = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_ITEMS.findIndex(x => x.id === selectedImage.id);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= GALLERY_ITEMS.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = GALLERY_ITEMS.length - 1;
    setSelectedImage(GALLERY_ITEMS[nextIndex]);
  };

  return (
    <div id="gallery-container" ref={containerRef} className="w-full bg-[#0a0a0a] pt-32 pb-24 overflow-hidden">
      
      {/* HEADER STATEMENT */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-luxury-accent text-[11px] font-mono tracking-[0.4em] uppercase block mb-3"
        >
          K&J ARCHIVE
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-6xl tracking-wider text-luxury-fg font-bold uppercase mb-4"
        >
          The Storyteller’s Scroll
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-xs sm:text-sm text-luxury-muted max-w-2xl mx-auto italic tracking-wide"
        >
          Slow down and immerse yourself. Scroll to watch each memory rise, overlap, and unfold organically with cinematic spatial breathing.
        </motion.p>

        <div className="flex items-center justify-center gap-1.5 mt-8 text-luxury-accent animate-bounce">
          <span className="text-[10px] tracking-[0.25em] uppercase font-mono">Scroll Down</span>
          <ArrowDown size={12} />
        </div>
      </div>

      {/* FILTER TABS (QUICK JUMP) */}
      <div className="w-full flex justify-center gap-2 sm:gap-4 mb-24 flex-wrap max-w-4xl mx-auto px-4">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => {
              const el = document.getElementById(sec.id);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="px-4 py-2 border border-white/5 hover:border-luxury-accent text-[10px] tracking-widest uppercase text-luxury-fg/70 hover:text-luxury-accent font-sans transition-all bg-black/40 backdrop-blur-sm cursor-pointer"
          >
            {sec.quickTitle || sec.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* RENDER SECTIONS STACKED VERTICALLY IN FIXED SEQUENCE */}
      <div className="w-full flex flex-col space-y-48">
        {sections.map((section, secIdx) => (
          <section
            id={section.id}
            key={section.id}
            className="relative w-full border-t border-white/5 pt-16"
          >
            {/* Pinned titles reveal container */}
            <div className="section-title-wrap max-w-5xl mx-auto px-6 text-center mb-16 md:mb-24 h-56 flex flex-col items-center justify-center sticky top-28 z-20 pointer-events-none">
              <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl tracking-[0.1em] text-luxury-fg font-extrabold uppercase leading-none text-center">
                {section.title}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-luxury-muted mt-4 tracking-widest italic max-w-lg">
                {section.subtitle}
              </p>
            </div>

            {/* Vertically stacked full-screen visual rows of layout details */}
            <div className="section-grid-stack w-full relative z-10 space-y-24 mt-6">
              {section.items.map((item, i) => (
                <div
                  key={item.id}
                  className="gallery-card-row w-full group"
                >
                  <div className="w-full overflow-hidden bg-black/25 outline outline-white/5 relative aspect-[16/10] md:aspect-[21/9] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-104 filter brightness-[0.85] group-hover:brightness-100"
                      referrerPolicy="no-referrer"
                    />

                    {/* Dark translucent cover on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => openLightbox(item)}
                        className="p-4 bg-luxury-accent text-black rounded-none flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl cursor-pointer"
                        title="Zoom Image"
                      >
                        <Maximize2 size={20} />
                      </button>
                    </div>

                    {/* Minimalist location & tag tag overlay on corners
                    /*
                    <div className="absolute top-6 left-6 bg-black/75 px-4 py-2 backdrop-blur-md border border-white/10">
                      <span className="text-[10px] font-mono tracking-widest text-[#fff] block uppercase">
                        {item.title.toUpperCase()}
                      </span>
                      <span className="text-[9px] font-sans tracking-[0.15em] text-luxury-accent block uppercase mt-0.5">
                        {item.location || 'NEW YORK'} • {item.year || '2025'}
                      </span>
                    </div> */}

                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* FINAL LANDING MEMORIAL */}
      <section className="mt-48 max-w-4xl mx-auto text-center px-6">
        <span className="font-mono text-xs text-luxury-accent uppercase tracking-widest block mb-4">
          END OF ALBUMS
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl uppercase text-luxury-fg tracking-widest">
          Every love story is historical.
        </h3>
        <p className="font-sans text-xs sm:text-sm text-luxury-muted italic mt-2 tracking-wide">
          Let’s document your legacy with this level of pristine visual focus.
        </p>
      </section>

      {/* LIGHTBOX COMPONENT FOR FULL RESOLUTION OVERVIEW */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-6 select-none"
          >
            {/* Top Bar inside Overlay */}
            <div className="w-full flex items-center justify-between z-10 px-4 pt-4">
              <div className="text-left">
                <span className="text-xs font-mono text-luxury-accent uppercase tracking-widest">
                  {selectedImage.category.toUpperCase()} // ARC
                </span>
                <h4 className="font-serif text-lg text-luxury-fg uppercase tracking-widest">
                  {selectedImage.title}
                </h4>
              </div>
              
              <button
                onClick={closeLightbox}
                className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:text-luxury-accent hover:border-luxury-accent bg-black/40 transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Core Image Display with Navigation arrows */}
            <div className="flex items-center justify-between w-full h-[70vh] my-auto relative">
              <button
                onClick={() => traverseLightbox('prev')}
                className="w-12 h-12 ml-2 sm:ml-6 flex items-center justify-center border border-white/10 hover:border-luxury-accent text-white hover:text-luxury-accent bg-black/30 backdrop-blur-sm transition-colors cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="max-w-[80vw] max-h-[100%] flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  loading="lazy"
                  className="max-w-full max-h-[68vh] object-contain shadow-2xl border border-white/5"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button
                onClick={() => traverseLightbox('next')}
                className="w-12 h-12 mr-2 sm:mr-6 flex items-center justify-center border border-white/10 hover:border-luxury-accent text-white hover:text-luxury-accent bg-black/30 backdrop-blur-sm transition-colors cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Caption bar */}
            <div className="w-full text-center pb-6">
              <span className="font-sans text-xs tracking-widest text-[#666] block uppercase font-mono">
                {selectedImage.location || 'NEW YORK STATE STUDIO'} • {selectedImage.year || '2025'}
              </span>
              <p className="font-serif italic text-sm text-luxury-muted mt-2 max-w-xl mx-auto px-4">
                "{selectedImage.description}"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
