
import React from 'react';
import { motion } from 'framer-motion';

const VideoServices: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <header className="mb-20 text-center space-y-4">
        <h1 className="text-6xl font-bold tracking-tighter">CINEMATOGRAPHY</h1>
        <p className="text-gray-500 max-w-xl mx-auto uppercase tracking-widest text-xs font-bold">Moving images, lasting impressions.</p>
      </header>

      <div className="space-y-32">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden group">
            <img src="https://picsum.photos/id/101/1280/720" className="w-full h-full object-cover opacity-80" alt="Video" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform">▶</button>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">WEDDING CINEMA</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              We specialize in narrative-driven wedding films. We don't just capture events; we tell the story of your love, your family, and your journey.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-sm font-medium tracking-widest uppercase text-gray-500">
              <li>4K Delivery</li>
              <li>Drone Coverage</li>
              <li>Multi-Cam</li>
              <li>Same Day Edit</li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="md:order-2 relative aspect-video rounded-3xl overflow-hidden">
             <img src="https://picsum.photos/id/102/1280/720" className="w-full h-full object-cover opacity-80" alt="Video" />
             <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform">▶</button>
            </div>
          </div>
          <div className="md:order-1 space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">COMMERCIAL & BRAND</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              High-production value content for modern brands. From social media micro-content to full-scale broadcast commercials.
            </p>
            <button className="border border-white/20 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10">View Commercial Reels</button>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default VideoServices;
