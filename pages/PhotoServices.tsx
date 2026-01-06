
import React from 'react';
import { motion } from 'framer-motion';

const PhotoServices: React.FC = () => {
  // Edit your gallery images here
  const galleryData = [
    {
      title: 'Weddings',
      description: 'Timeless moments on your special day',
      images: [
        { id: 1, photoId: 10 },
        { id: 2, photoId: 15 },
        { id: 3, photoId: 20 },
        { id: 4, photoId: 25 },
        { id: 5, photoId: 30 },
        { id: 6, photoId: 35 },
        { id: 7, photoId: 40 },
        { id: 8, photoId: 45 },
        { id: 9, photoId: 50 },
        { id: 10, photoId: 55 },
        { id: 11, photoId: 60 },
        { id: 12, photoId: 65 },
      ],
    },
    {
      title: 'Sweet 16s',
      description: 'Celebrating a milestone moment',
      images: [
        { id: 1, photoId: 70 },
        { id: 2, photoId: 75 },
        { id: 3, photoId: 80 },
        { id: 4, photoId: 85 },
        { id: 5, photoId: 90 },
        { id: 6, photoId: 95 },
        { id: 7, photoId: 100 },
        { id: 8, photoId: 105 },
        { id: 9, photoId: 110 },
        { id: 10, photoId: 115 },
        { id: 11, photoId: 120 },
        { id: 12, photoId: 125 },
      ],
    },
    {
      title: 'And So Much More',
      description: 'Beyond the ordinary',
      images: [
        { id: 1, photoId: 130 },
        { id: 2, photoId: 135 },
        { id: 3, photoId: 140 },
        { id: 4, photoId: 145 },
        { id: 5, photoId: 150 },
        { id: 6, photoId: 155 },
        { id: 7, photoId: 160 },
        { id: 8, photoId: 165 },
        { id: 9, photoId: 170 },
        { id: 10, photoId: 175 },
        { id: 11, photoId: 180 },
        { id: 12, photoId: 185 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="bg-neutral-950 min-h-screen">
      {/* Header */}
      <motion.header 
        className="pt-20 pb-12 text-center px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent mb-4">
          PHOTOGRAPHY
        </h1>
        <p className="text-gray-400 uppercase tracking-widest text-sm font-light">
          Capturing your most important moments
        </p>
      </motion.header>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-6 pb-20 space-y-24">
        {galleryData.map((section, sectionIndex) => (
          <motion.section 
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-5xl md:text-6xl font-bold">{section.title}</h2>
              <p className="text-gray-400 text-lg">{section.description}</p>
            </div>

            {/* Gallery Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {section.images.map((image) => (
                <motion.div 
                  key={image.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
                >
                  <img 
                    src={`https://picsum.photos/id/${image.photoId}/500/500`} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    alt={section.title}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default PhotoServices;
