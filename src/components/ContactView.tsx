import React from 'react';
import { Mail, Phone, Instagram, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactView() {
  return (
    <div id="contact-container" className="w-full bg-[#0a0a0a] pt-36 pb-32 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(210,180,140,0.03),transparent_70%)] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* HEADER */}
        <section className="mb-16 max-w-2xl mx-auto">
          <span className="text-luxury-accent text-[11px] font-mono tracking-[0.4em] uppercase block mb-3">
            COMMENCEMENT OF CONVERSATION
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-wider text-luxury-fg font-extrabold uppercase leading-tight mb-6">
            Get In Touch
          </h1>
          <div className="w-12 h-[1px] bg-luxury-accent mx-auto" />
          <p className="font-sans text-xs sm:text-sm text-luxury-muted mt-6 leading-relaxed tracking-wide">
            We are dedicated to documenting your most precious milestones with timeless, editorial vision. Reach out directly through the channels below to discuss bookings, custom specifications, and venue itineraries.
          </p>
        </section>

        {/* ELEGANT MINIMALIST CONTACT DISPLAY */}
        <div className="space-y-6 max-w-lg mx-auto">
          
          {/* Email Block */}
          <motion.a
            id="contact-email-link"
            href="mailto:kandjphoto@yahoo.com"
            whileHover={{ y: -4 }}
            className="block p-8 border border-white/5 bg-zinc-950/40 hover:border-luxury-accent/50 transition-all duration-300 group rounded-none"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-white/[0.02] text-luxury-accent group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <span className="text-[9px] font-mono text-luxury-muted tracking-[0.3em] uppercase mt-2">WRITE TO PRINCIPALS</span>
              <span className="text-lg sm:text-xl tracking-wide text-luxury-fg group-hover:text-luxury-accent transition-colors font-mono font-medium block mt-1 break-all">
                kandjphoto@yahoo.com
              </span>
            </div>
          </motion.a>

          {/* Phone Block */}
          <motion.a
            id="contact-phone-link"
            href="tel:+15550192834"
            whileHover={{ y: -4 }}
            className="block p-8 border border-white/5 bg-zinc-950/40 hover:border-luxury-accent/50 transition-all duration-300 group rounded-none"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-white/[0.02] text-luxury-accent group-hover:scale-110 transition-transform">
                <Phone size={22} />
              </div>
              <span className="text-[9px] font-mono text-luxury-muted tracking-[0.3em] uppercase mt-2">DIRECT TELEPHONY</span>
              <span className="text-lg sm:text-xl tracking-wide text-luxury-fg group-hover:text-luxury-accent transition-colors font-mono font-medium block mt-1">
                +1 (516) 476-0898
              </span>
            </div>
          </motion.a>

          {/* Instagram Block */}
          <motion.a
            id="contact-instagram-link"
            href="https://instagram.com/kandjphotovideo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="block p-8 border border-white/5 bg-zinc-950/40 hover:border-luxury-accent/50 transition-all duration-300 group rounded-none"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-white/[0.02] text-luxury-accent group-hover:scale-110 transition-transform">
                <Instagram size={22} />
              </div>
              <span className="text-[9px] font-mono text-luxury-muted tracking-[0.3em] uppercase mt-2">INSTAGRAM SOCIALS</span>
              <span className="text-lg sm:text-xl tracking-wide text-luxury-fg group-hover:text-luxury-accent transition-colors font-mono font-medium block mt-1">
                @kandjphotovideo
              </span>
            </div>
          </motion.a>

        </div>

        {/* Traveling / Geography status stamp */}
        <div className="max-w-lg mx-auto p-6 border border-luxury-accent/10 bg-luxury-accent/[0.01] mt-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-luxury-accent animate-pulse shrink-0" />
            <span className="text-[10px] tracking-widest font-mono text-luxury-accent uppercase">travel status</span>
          </div>
          <span className="text-xs text-luxury-muted tracking-wide max-w-md block leading-relaxed">
            Catering to New York, New Jersey, Connecticut & Global Destination Flights.
          </span>
        </div>

      </div>
    </div>
  );
}
