
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-20"
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://picsum.photos/id/405/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>
        
        <div className="relative z-10 text-center space-y-8 px-6">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-6xl md:text-9xl font-bold tracking-tighter"
          >
            CAPTURING <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">THE MOMENT</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
          >
            We don't just take photos; we document legacies. High-end visual experiences for those who value art.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/photo" className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-neutral-200 transition-all">
              Explore Portfolio
            </Link>
            <Link to="/booths" className="border border-white/20 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
              Rent a Booth
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Photography", 
              desc: "From weddings to high-fashion editorials.", 
              img: "https://picsum.photos/id/250/800/1000",
              link: "/photo"
            },
            { 
              title: "Cinematography", 
              desc: "Cinematic storytelling that moves with you.", 
              img: "https://picsum.photos/id/251/800/1000",
              link: "/video"
            },
            { 
              title: "Photo Booths", 
              desc: "Interactive fun with professional quality.", 
              img: "https://picsum.photos/id/252/800/1000",
              link: "/booths"
            },
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5"
            >
              <img 
                src={service.img} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0" 
                alt={service.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-bold mb-2 uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-400 mb-6 text-sm">{service.desc}</p>
                <Link to={service.link} className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
