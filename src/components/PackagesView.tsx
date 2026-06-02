import React, { useState } from 'react';
import { PACKAGES_DATA } from '../data/staticData';
import { PackageDetails, ViewType } from '../types';
import { HelpCircle, ChevronDown, ChevronUp, Clock, HelpCircle as HelpIcon, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PackagesViewProps {
  setView: (view: ViewType) => void;
}

const FAQS = [
  {
    q: 'What is the master file turnaround period?',
    a: 'These things take time, and we pride ourselves on delivering high-quality results. Once we finish the final edit, your gallery will be available soon.'
  },
  {
    q: 'Do you offer custom tailored packages outside these three tiers?',
    a: 'Indeed. Every celebration holds an individual rhythm. Upon completing your initial inquiry form on our Contact page, we can customize hours of coverage, destination travel splits, second assistants, or multi-day traditional ceremony arrays.'
  },
  {
    q: 'Do you deliver unedited RAW camera negatives?',
    a: 'We pride ourselves on completing fully finished masterpieces. Consistent with modern luxury studio disciplines, we do not release unedited RAW negatives, as our custom color grading, light retention, and digital development constitute the sacred K&J aesthetic signature.'
  }
];

export default function PackagesView({ setView }: PackagesViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div id="packages-container" className="w-full bg-[#0a0a0a] pt-32 pb-24 text-luxury-fg">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* HEADER */}
        <section className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-luxury-accent text-[11px] font-mono tracking-[0.4em] uppercase block mb-3 animate-pulse">
            TRANSPARENT COLLECTION SCOPE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-wider text-luxury-fg font-extrabold uppercase leading-none block mb-6">
            Packages Designed Around Your Vision
          </h1>
          <div className="w-12 h-[1px] bg-luxury-accent mx-auto" />
          <p className="font-sans text-xs sm:text-sm text-luxury-muted mt-6 leading-relaxed max-w-xl mx-auto tracking-wide italic">
            Text-only transparency curated with pristine focus. We believe luxury means clarity — no hidden fees, no opaque contracts, and standard top-tier equipment included.
          </p>
        </section>

        {/* PACKAGE CORES - HIGH TYPOGRAPHY LAYOUT ROW WITH FINE LINES */}
        <section className="space-y-16 mb-32">
          {PACKAGES_DATA.map((pkg, idx) => (
            <div
              key={pkg.id}
              className="border-t border-white/10 pt-10 flex flex-col md:flex-row gap-8 md:gap-16 group"
            >
              {/* Category & Title Column */}
              <div className="w-full md:w-4/12">
                <span className="text-[10px] font-mono text-luxury-accent tracking-[0.3em] block uppercase mb-1">
                  COLLECTION // 0{idx + 1}
                </span>
                
                <h2 className="font-serif text-2xl sm:text-3xl text-luxury-fg tracking-widest uppercase font-bold group-hover:text-luxury-accent transition-colors duration-400">
                  {pkg.title}
                </h2>

                <p className="font-sans text-xs sm:text-sm text-luxury-muted mt-3 italic leading-relaxed tracking-wide">
                  {pkg.tagline}
                </p>

                {/* Quick scope bubble tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {pkg.inclusions.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 border border-white/5 bg-white/[0.02] text-[8px] font-mono tracking-widest uppercase text-luxury-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Breakdown list */}
              <div className="w-full md:w-8/12 space-y-4">
                <span className="text-[10px] tracking-widest text-[#555] uppercase font-mono block">
                  Service Inclusions & Scope
                </span>
                
                <ul className="space-y-3 font-sans text-xs sm:text-sm text-luxury-fg/80 leading-relaxed tracking-wide">
                  {pkg.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3">
                      <span className="text-luxury-accent font-mono text-[10px] mt-0.5 shrink-0 select-none">
                        &mdash;
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 mt-4 border-b border-white/5"></div>
              </div>

            </div>
          ))}
          
          <div className="border-t border-white/10"></div>
        </section>

        {/* INTERACTIVE FAQ ACCORDION */}
        <section className="mb-24 bg-black/40 border border-white/5 p-8 md:p-12">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <span className="text-luxury-accent text-[9px] font-mono tracking-widest uppercase block mb-1">
              STUDIO INTELLIGENCE
            </span>
            <h3 className="font-serif text-xl sm:text-2xl tracking-widest uppercase text-luxury-fg">
              Frequently Asked Questions
            </h3>
            <p className="font-sans text-xs text-luxury-muted mt-2 tracking-wide">
              Everything you need to digest regarding luxury custom scheduling and workflows.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className="border-b border-white/5 pb-4 transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between text-left py-2 hover:text-luxury-accent cursor-pointer group focus:outline-none"
                  >
                    <span className="font-serif text-sm sm:text-base tracking-wide text-luxury-fg group-hover:text-luxury-accent transition-colors">
                      {faq.q}
                    </span>
                    <span className="text-luxury-accent ml-4">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-xs sm:text-sm text-luxury-muted leading-relaxed tracking-wide pt-2 pb-1 pr-6">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* INQUIRY OPTIONAL BUTTON */}
        <section className="text-center">
          <button
            onClick={() => {
              setView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-10 py-4 bg-luxury-accent text-black hover:bg-luxury-fg font-sans text-xs tracking-[0.25em] uppercase font-bold transition-all cursor-pointer shadow-xl inline-flex items-center gap-2 group"
          >
            <span>Initiate Custom Quote</span>
            <ArrowRight size={13} className="transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </section>

      </div>
    </div>
  );
}
