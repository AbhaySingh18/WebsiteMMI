import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';

interface ProductCardProps extends Product {
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, category, image, tag }) => {
  return (
    <motion.div 
      className="group bg-white cursor-pointer h-full flex flex-col"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
        {tag && (
          <span className="absolute top-4 left-4 z-10 bg-brand-charcoal text-white text-[10px] uppercase tracking-widest px-3 py-1">
            {tag}
          </span>
        )}
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
      </div>
      
      <div className="pt-6 pb-2 px-1 flex-grow">
        <p className="text-brand-beige text-xs font-bold tracking-widest uppercase mb-2">{category}</p>
        <h3 className="font-serif text-xl text-brand-charcoal mb-3 group-hover:text-brand-beige transition-colors">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{description}</p>
      </div>
      
      <div className="mt-auto pt-2">
        <span className="text-xs uppercase tracking-widest border-b border-brand-charcoal pb-1 group-hover:border-brand-beige group-hover:text-brand-beige transition-all">
          View Details
        </span>
      </div>
    </motion.div>
  );
};

export default ProductCard;