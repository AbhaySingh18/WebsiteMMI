import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';

const ServiceCard: React.FC<Service> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-white p-8 border border-brand-smoke hover:border-brand-beige transition-colors duration-300 h-full"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)" }}
    >
      <div className="text-brand-beige mb-6">
        {icon}
      </div>
      <h3 className="font-serif text-xl mb-4 text-brand-charcoal">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;