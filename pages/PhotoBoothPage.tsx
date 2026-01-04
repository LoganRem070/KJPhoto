
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ParallaxSection = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  imageSrc, 
  reverse = false 
}: { 
  title: string; 
  subtitle: string; 
  description: string; 
  features: string[]; 
  imageSrc: string;
  reverse?: boolean;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [reverse ? -5 : 5, reverse ? 5 : -5]);
  
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section ref={ref} className={`min-h-[80vh] py-20 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-12 overflow-hidden px-6 max-w-7xl mx-auto border-b border-white/5 last:border-0`}>
      <div className="flex-1 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">{subtitle}</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-2">{title}</h2>
          <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-md">
            {description}
          </p>
          <ul className="mt-8 space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-12 bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
            Inquire Now
          </button>
        </motion.div>
      </div>

      <div className="flex-1 relative flex items-center justify-center h-[600px] w-full">
        <motion.div 
          style={{ y: smoothY, scale, rotate }}
          className="relative z-10 w-full max-w-sm"
        >
          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-110" />
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)] relative z-10"
          />
        </motion.div>
        
        {/* Floating elements */}
        <motion.div 
           animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-20 right-10 w-12 h-12 bg-white/10 rounded-full blur-xl"
        />
        <motion.div 
           animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-20 left-10 w-24 h-24 bg-white/5 rounded-full blur-2xl"
        />
      </div>
    </section>
  );
};

const PhotoBoothPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black"
    >
      <header className="h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-7xl md:text-9xl font-bold tracking-tighter"
        >
          THE BOOTH <br /> <span className="text-gray-500">EXPERIENCE</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-8 max-w-2xl text-xl font-light"
        >
          Elevate your event with our premium interactive photo booth solutions. From classic prints to 360 cinematic videos.
        </motion.p>
      </header>

      <div className="space-y-32 pb-32">
        {/* Normal Tier - Ring Light Stand */}
        <ParallaxSection 
          subtitle="Tier 1"
          title="ROAMER"
          description="Our most versatile and sleek option. Perfect for weddings and social parties where aesthetics matter most."
          features={["Digital Sharing", "Standard Props", "LED Ring Light", "Online Gallery"]}
          imageSrc="assets\Roamer.png" 
        />

        {/* Premium Tier - Boxy Standalone */}
        <ParallaxSection 
          subtitle="Tier 2"
          title="IPAD PHOTO BOOTH"
          description="A professional-grade standalone kiosk with built-in printing and high-speed processing. The gold standard for corporate events."
          features={["DSLR Quality", "Instant Printing", "Customized Branding", "Attendant Included"]}
          imageSrc="assets\IPadBooth.png"
          reverse
        />

        {/* Interactive Tier - Mirror Booth */}
        <ParallaxSection 
          subtitle="Tier 3"
          title="DSLR CAMERA BOOTH"
          description="A full-length interactive mirror that communicates with guests through touch and animations. Elegant and engaging."
          features={["Full Length Photos", "Touch Screen Interface", "Interactive Animations", "Luxury Prop Kit"]}
          imageSrc="assets\DSLRBooth.png"
        />

        {/* 360 Tier - 360 Platform */}
        <ParallaxSection 
          subtitle="Tier 4"
          title="360 VIDEO EXPERIENCE"
          description="The ultimate showstopper. High-speed cinematic video captures every angle of the excitement in stunning slow motion."
          features={["Slow-Motion Video", "Overlay FX", "LED Base", "Same Day Text / Email Delivery"]}
          imageSrc="assets\Fake360.png"
          reverse
        />
      </div>

      <section className="bg-white text-black py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">READY TO GET THE PARTY STARTED?</h2>
          <p className="text-xl opacity-70">Contact us today for a custom quote for your event.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-black text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all">
              Check Availability
            </button>
            <button className="border-2 border-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all">
              View Packages
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PhotoBoothPage;
