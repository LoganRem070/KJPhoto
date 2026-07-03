import React from 'react';
import { PHOTOBOOTH_OFFERINGS } from '../data/staticData';
import { ViewType } from '../types';
import { Sparkles, ArrowRight, CheckCircle2, Monitor, Printer, RotateCw, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const ICON_MAP: Record<string, React.ReactNode> = {
  'pb-vogue': <Sparkles size={22} className="text-luxury-accent" />,
  'pb-air-digital': <Monitor size={22} className="text-luxury-accent" />,
  'pb-air-print': <Printer size={22} className="text-luxury-accent" />,
  'pb-360-video': <RotateCw size={22} className="text-luxury-accent" />,
  'pb-telephone': <Phone size={22} className="text-luxury-accent" />,
};

const PHOTOBOOTH_IMAGES: Record<string, string> = {
  'pb-vogue': new URL('../assets/images/VogueBoothTemp.webp', import.meta.url).href,
  'pb-roamer': new URL('../assets/images/RoamerTemp.jpg', import.meta.url).href,
  'pb-air-digital': new URL('../assets/images/OpenAirTemp.jpg', import.meta.url).href,
  'pb-air-print': new URL('../assets/images/OpenAirNew.webp', import.meta.url).href,
  'pb-360-video': new URL('../assets/images/360New.webp', import.meta.url).href,
  'pb-telephone': new URL('../assets/images/PhoneboothTemp.jpg', import.meta.url).href,
};

interface PhotoboothViewProps {
  setView?: (view: ViewType) => void;
}

export default function PhotoboothView({ setView }: PhotoboothViewProps) {
  const handleInquire = () => {
    if (setView) {
      setView('contact');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="photobooth-container" className="w-full bg-[#0a0a0a] pt-32 pb-24 overflow-hidden relative">
      
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[radial-gradient(circle,rgba(210,180,140,0.03),transparent_65%)] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(210,180,140,0.02),transparent_65%)] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HERO HEADER */}
        <section className="text-center mb-28 max-w-4xl mx-auto">
          <span className="text-luxury-accent text-[11px] font-mono tracking-[0.4em] uppercase block mb-3">
            INTERACTIVE EVENT ENHANCEMENT
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl tracking-wider text-luxury-fg font-extrabold uppercase leading-tight mb-6">
            Interactive Experiences
          </h1>
          <div className="w-12 h-[1px] bg-luxury-accent mx-auto" />
          <p className="font-sans text-xs sm:text-sm text-luxury-muted max-w-xl mx-auto mt-6 tracking-wide leading-relaxed">
            Elevate your celebration from standard to legendary. We construct mini-studios on-site, complete with flawless high-key illumination and high-fashion backdrops. Review our range of immersive booth formats below.
          </p>
        </section>

        {/* PHOTOBOOTHS DISPLAYED SEPARATELY */}
        <section className="space-y-40">
          {PHOTOBOOTH_OFFERINGS.map((booth, idx) => {
            const isEven = idx % 2 === 0;
            const boothImage = PHOTOBOOTH_IMAGES[booth.id];

            return (
              <div
                key={booth.id}
                id={`booth-row-${booth.id}`}
                className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between group"
              >
                {/* Visual Image Showcase */}
                <div
                  className={`w-full lg:w-7/12 relative aspect-[16/10] overflow-hidden bg-zinc-950 border border-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.8)] ${
                    isEven ? 'lg:order-first' : 'lg:order-last'
                  }`}
                >
                  <img
                    src={boothImage}
                    alt={booth.title}
                    className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-104 filter brightness-[0.85] group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating badge 
                  <div className="absolute top-5 left-5 z-20 bg-[#0c0c0c] border border-white/10 px-4 py-2 flex items-center gap-2.5">
                    {ICON_MAP[booth.id]}
                    <span className="text-[10px] font-mono tracking-widest text-light uppercase">
                      {booth.tag}
                    </span>
                  </div>*/}

                  {/* Corner stats watermark info 
                  <div className="absolute bottom-5 right-5 z-20 bg-black/60 px-3 py-1.5 text-[9px] font-mono text-luxury-accent uppercase tracking-widest backdrop-blur-sm pointer-events-none">
                    Studio Grade Config Activated
                  </div>*/}
                </div>

                {/* Info & Data details column */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-6">
                  
                  <div className="flex items-center gap-2 text-luxury-accent text-xs font-mono tracking-widest uppercase">
                    <span>BOOTH 0{idx + 1}</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-luxury-fg tracking-wide font-medium uppercase leading-tight">
                    {booth.title}
                  </h2>

                  <p className="font-serif text-sm italic text-luxury-accent/90">
                    {booth.subtitle}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-luxury-muted leading-relaxed tracking-wide">
                    {booth.description}
                  </p>

                  {/* Specifications checklist */}
                  <div className="pt-6 border-t border-white/5 space-y-4">
                    <span className="text-[10px] tracking-widest text-[#555] uppercase font-mono block">
                      Premium inclusions & details:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {booth.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-luxury-fg/80">
                          <CheckCircle2 size={13} className="text-luxury-accent shrink-0 mt-0.5" />
                          <span className="tracking-wide leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Vibe metadata & quick reservation */}
                  <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[8px] tracking-widest font-mono text-[#555] block uppercase">EXPERIENCE MOOD</span>
                      <span className="text-xs uppercase tracking-widest font-mono text-luxury-fg font-semibold">{booth.vibe}</span>
                    </div>

                    <button
                      id={`inquire-booth-${booth.id}`}
                      onClick={handleInquire}
                      className="px-6 py-2.5 bg-luxury-fg text-[#0a0a0a] text-[10px] font-mono uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-black transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight size={11} />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </section>

        {/* CUSTOM ENQUIRY ACCENT */}
        <section className="mt-36 max-w-3xl mx-auto text-center border-t border-white/5 pt-16">
          <p className="font-sans text-xs text-luxury-muted uppercase tracking-[0.25em] mb-4">
            Custom Overlay Templates & Premium Leather Scrapbooks Included Option.
          </p>
          <p className="font-serif text-sm italic text-luxury-accent">
            "Every output layout, typeface selection, and overlay watermark spacing is customized individually by our studio artists to fit your wedding or activation theme beautifully."
          </p>
        </section>

      </div>
    </div>
  );
}
