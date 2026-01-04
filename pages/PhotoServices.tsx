
import React from 'react';
import { motion } from 'framer-motion';

const PhotoServices: React.FC = () => {
  const images = [
    { id: 10, title: 'Weddings', category: 'Events' },
    { id: 20, title: 'Editorials', category: 'Fashion' },
    { id: 30, title: 'Portraits', category: 'Art' },
    { id: 40, title: 'Corporate', category: 'Business' },
    { id: 50, title: 'Nature', category: 'Fine Art' },
    { id: 60, title: 'Architecture', category: 'Design' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <header className="mb-20 text-center space-y-4">
        <h1 className="text-6xl font-bold tracking-tighter">PHOTOGRAPHY</h1>
        <p className="text-gray-500 max-w-xl mx-auto uppercase tracking-widest text-xs font-bold">Documenting the beauty in every detail.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <motion.div 
            key={img.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-[400px] overflow-hidden rounded-xl bg-neutral-900"
          >
            <img 
              src={`https://picsum.photos/id/${img.id + 10}/800/1200`} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              alt={img.title}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-end p-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-300 mb-1 block">{img.category}</span>
                <h3 className="text-2xl font-bold">{img.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PhotoServices;
