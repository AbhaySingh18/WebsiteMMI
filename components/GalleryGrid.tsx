import React from 'react';
import { motion } from 'framer-motion';
import { GalleryItem } from '../types';

interface GalleryGridProps {
  items: GalleryItem[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="relative group overflow-hidden cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <p className="text-brand-gold text-xs uppercase tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {item.category}
            </p>
            <h3 className="text-white font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              {item.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;