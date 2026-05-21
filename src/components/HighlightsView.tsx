import React, { useState } from 'react';
import { HIGHLIGHTS_DATA } from '../data/staticData';
import { Volume2, VolumeX, Film, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function HighlightsView() {
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    'h-eternal-sunset': true,
    'h-cathedral-symphony': true,
    'h-garden-elegance': true,
  });

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMutedStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div id="highlights-container" className="w-full bg-[#0a0a0a] pt-32 pb-24 overflow-hidden relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(210,180,140,0.02),transparent_70%)] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(210,180,140,0.02),transparent_70%)] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HERO TITLE HEADER */}
        <section className="text-center mb-28 px-6 max-w-4xl mx-auto">
          <span className="text-luxury-accent text-[11px] font-mono tracking-[0.4em] uppercase block mb-3">
            FINE ART CINEMATOGRAPHY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl tracking-wider text-luxury-fg font-extrabold uppercase leading-tight mb-6">
            Highlight Films
          </h1>
          <div className="w-12 h-[1px] bg-luxury-accent mx-auto" />
          <p className="font-sans text-xs sm:text-sm text-luxury-muted max-w-xl mx-auto mt-6 tracking-wide leading-relaxed">
            Unraveling emotion through fluid high-definition motion. We construct bespoke, couture wedding films that preserve sound, light, and laughter in absolute clarity. All films are captured in stunning cinematic 4K quality.
          </p>
        </section>

        {/* VIDEOS STACKED FULL WIDTH */}
        <div className="section-grid-stack w-full relative z-10 space-y-24 mt-6">
          {HIGHLIGHTS_DATA.map((item, idx) => {
            const isMuted = mutedStates[item.id] ?? true;

            return (
              <div
                key={item.id}
                id={`highlight-card-${item.id}`}
                className="gallery-card-row w-full group relative"
              >
                {/* Full Width Ambient Video Loop Container */}
                <div 
                  className="w-full overflow-hidden bg-black/45 outline outline-white/5 relative aspect-[14/9] sm:aspect-[16/10] md:aspect-[21/9] shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-default group-hover:outline-luxury-accent/30 transition-all duration-[600ms]"
                >
                  {/* Background loop video to add expensive life and animation */}
                  <video
                    src={item.videoUrl}
                    poster={item.thumbnailUrl}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-101 filter brightness-[0.8] group-hover:brightness-[0.95]"
                  />

                  {/* High Quality Overlay Controls - Audio Switch Only */}
                  <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
                    {/* Quick Inline Audio Mute/Unmute Switch */}
                    <button
                      id={`inline-mute-btn-${item.id}`}
                      onClick={(e) => toggleMute(item.id, e)}
                      className="p-3 bg-black/85 text-luxury-accent hover:text-white border border-white/10 hover:border-luxury-accent hover:scale-105 active:scale-95 transition-all shadow-2xl rounded-none cursor-pointer flex items-center justify-center gap-2 font-mono text-[10px] tracking-widest uppercase"
                      title={isMuted ? "Unmute Ambient Sound" : "Mute Sound"}
                    >
                      {isMuted ? <VolumeX size={14} className="text-luxury-accent" /> : <Volume2 size={14} className="text-white" />}
                      <span className="hidden sm:inline">{isMuted ? "Unmute" : "Mute"}</span>
                    </button>
                  </div>

                  {/* Minimalist category & metadata indicator */}
                  <div className="absolute top-6 left-6 bg-black/85 px-4 py-2 backdrop-blur-md border border-white/10 max-w-[85%] sm:max-w-none">
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#fff] block uppercase font-semibold">
                      {item.title.toUpperCase()}
                    </span>
                    <div className="flex items-center gap-3 mt-1 text-[8px] sm:text-[10px] font-sans tracking-[0.1em] text-luxury-accent uppercase">
                      <span className="flex items-center gap-1">
                        <Film size={10} />
                        {item.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={10} />
                        {item.duration}
                      </span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Corner status tag
                  <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2 bg-[#0c0c0c]/80 border border-white/10 px-3 py-1.5 backdrop-blur-sm pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-accent animate-pulse" />
                    <span className="text-[9px] font-mono tracking-[0.2em] text-luxury-fg uppercase">
                      LIVE TEASER LOOP
                    </span>
                  </div>*/}

                </div>
              </div>
            );
          })}
        </div>

        {/* FINAL MEMORIAL ACCENT */}
        <section className="mt-48 max-w-4xl mx-auto text-center px-6">
          <span className="font-mono text-xs text-luxury-accent uppercase tracking-widest block mb-4">
            MASTER CINEMATOGRAPHY
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl uppercase text-luxury-fg tracking-widest">
            A Cinematic Heirloom.
          </h3>
          <p className="font-sans text-xs sm:text-sm text-luxury-muted italic mt-2 tracking-wide">
            Framing every speech, glance, and laughter in pristine 4K cinematic gold standard.
          </p>
        </section>

      </div>

    </div>
  );
}
