import React from 'react';
import { ViewType } from '../types';
import { Instagram, Mail, Phone, Heart } from 'lucide-react';

interface FooterProps {
  setView: (view: ViewType) => void;
}

export default function Footer({ setView }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-black border-t border-white/5 py-16 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(210,180,140,0.03),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Dynamic Logo Anchor */}
        <button
          onClick={() => {
            setView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer group flex flex-col items-center mb-8 focus:outline-none"
        >
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase text-luxury-fg transition-colors group-hover:text-luxury-accent">
            K&J <span className="font-light italic tracking-[0.1em] text-sm capitalize text-luxury-accent">Photography</span>
          </h2>
          <span className="text-[9px] tracking-[0.4em] text-luxury-muted uppercase mt-2">
            Wedding & Event Photography
          </span>
        </button>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-[11px] tracking-[0.2em] uppercase font-sans text-luxury-fg/60">
          {(['home', 'gallery', 'highlights', 'photobooth', 'packages', 'contact'] as ViewType[]).map((view) => (
            <button
              key={view}
              onClick={() => {
                setView(view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-luxury-accent transition-colors"
            >
              {view}
            </button>
          ))}
        </div>

        {/* Contact Links */}
        <div className="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-12 mb-10 text-sm font-sans tracking-wide text-luxury-muted">
          <a
            href="mailto:starwarsrebels75@gmail.com"
            className="flex items-center gap-2 hover:text-luxury-accent transition-colors py-1 group"
          >
            <Mail size={16} className="text-luxury-accent/60 group-hover:scale-110 transition-transform" />
            <span>starwarsrebels75@gmail.com</span>
          </a>
          
          <a
            href="tel:+15550192834"
            className="flex items-center gap-2 hover:text-luxury-accent transition-colors py-1 group"
          >
            <Phone size={16} className="text-luxury-accent/60 group-hover:scale-110 transition-transform" />
            <span>+1 (555) 019-2834</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-luxury-accent transition-colors py-1 group"
          >
            <Instagram size={16} className="text-luxury-accent/60 group-hover:scale-110 transition-transform" />
            <span>@kj.photography</span>
          </a>
        </div>

        {/* Copyright and Legal statement */}
        <div className="w-full max-w-sm pt-8 border-t border-white/5 flex flex-col gap-1 items-center text-[10px] tracking-widest text-[#555] uppercase font-mono">
          <p>© {currentYear} K&J PHOTOGRAPHY. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1.5 mt-1">
            <span>Made with</span>
            <Heart size={8} className="text-luxury-accent fill-luxury-accent animate-pulse" />
            <span>for timeless memories</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
