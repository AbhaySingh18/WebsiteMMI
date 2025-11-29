import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'white' | 'lightGrey' | 'smoke';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  className = '', 
  id,
  bgColor = 'white'
}) => {
  const bgClasses = {
    white: 'bg-brand-white',
    lightGrey: 'bg-brand-lightGrey',
    smoke: 'bg-brand-smoke',
  };

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-6 md:px-12 ${bgClasses[bgColor]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;