import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Globe, PenTool } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const featuredProducts: Product[] = [
  {
    id: 'f1',
    title: 'Statuario Extra',
    description: 'The epitome of luxury with bold grey veining on a pure white canvas.',
    category: 'Imported Marble',
    image: 'https://surajmarbles.com/wp-content/uploads/2025/05/Marble-Statuario-Extra-webp.webp',
    tag: 'Best Seller'
  },
  {
    id: 'f2',
    title: 'Black Galaxy',
    description: 'Deep black granite with golden specks, perfect for statement countertops.',
    category: 'Granite',
    image: 'https://stonegalleria.in/uploads/blog_images/black-galaxy-with-gold-flecks.jpg',
    tag: 'Durable'
  },
  {
    id: 'f3',
    title: 'Honey Onyx',
    description: 'Translucent stone that glows with warmth when backlit.',
    category: 'Onyx',
    image: 'https://bhutrastones.com/wp-content/uploads/2026/03/honey-onyx-marble-texture-close-up.png',
    tag: 'Premium'
  }
];

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-lightGrey">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://picsum.photos/id/1002/1920/1080" 
            alt="Marble Texture" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-beige uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6"
          >
            Shaping Luxury in Stone
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-charcoal mb-8 leading-tight"
          >
            Timeless Elegance <br/> in Every Slab
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Discover the world's finest collection of Marble, Granite, Onyx, and Tiles. 
            Curated for visionaries, built for eternity.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <Link 
              to="/products"
              className="px-8 py-4 bg-brand-charcoal text-white uppercase tracking-widest text-sm hover:bg-brand-beige transition-colors duration-300"
            >
              Explore Collection
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 border border-brand-charcoal text-brand-charcoal uppercase tracking-widest text-sm hover:bg-brand-charcoal hover:text-white transition-colors duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro / Featured Categories */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4 text-brand-charcoal">Curated Collections</h2>
          <div className="h-[1px] w-24 bg-brand-beige mx-auto mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            From the quarries of Italy to the heart of India, we source stones that redefine architectural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="inline-flex items-center text-brand-charcoal uppercase tracking-widest text-xs border-b border-brand-charcoal pb-1 hover:text-brand-beige hover:border-brand-beige transition-colors">
            View All Categories <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper bgColor="lightGrey">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-beige uppercase tracking-widest text-xs font-bold mb-2 block">Why Millenium Marmo</span>
            <h2 className="font-serif text-4xl mb-8 text-brand-charcoal">Precision, Quality, & Trust</h2>
            <div className="space-y-8">
              <div className="flex">
                <ShieldCheck className="text-brand-beige w-10 h-10 mr-6 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl mb-2">Unmatched Quality</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Rigorous quality checks ensure every slab meets global standards of thickness, polish, and integrity.
                  </p>
                </div>
              </div>
              <div className="flex">
                <Globe className="text-brand-beige w-10 h-10 mr-6 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl mb-2">Global Sourcing</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Direct imports from Italy, Turkey, and Vietnam, alongside the finest Indian natural stones.
                  </p>
                </div>
              </div>
              <div className="flex">
                <PenTool className="text-brand-beige w-10 h-10 mr-6 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl mb-2">Architectural Support</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We work closely with architects and designers to provide technical guidance and selection support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-200 overflow-hidden rounded-sm">
               <img src="https://picsum.photos/id/1004/800/1000" alt="Showroom" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl max-w-xs hidden md:block">
              <p className="font-serif italic text-lg text-brand-charcoal">"Where Marble Meets Mastery"</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Gallery Preview */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <h2 className="font-serif text-4xl text-brand-charcoal mb-2">Recent Projects</h2>
             <p className="text-gray-500">Transforming spaces with natural elegance.</p>
          </div>
          <Link to="/gallery" className="hidden md:inline-flex items-center px-6 py-3 border border-brand-smoke hover:bg-brand-beige hover:text-white hover:border-brand-beige transition-all text-sm uppercase tracking-widest">
            View Full Gallery
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
            <div className="col-span-2 row-span-2 overflow-hidden relative group">
                <img src="https://picsum.photos/id/1029/800/800" alt="Luxury Living" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="overflow-hidden relative group">
                <img src="https://picsum.photos/id/1033/400/400" alt="Kitchen Island" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="overflow-hidden relative group">
                <img src="https://picsum.photos/id/1039/400/400" alt="Bathroom Vanity" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-2 overflow-hidden relative group">
                <img src="https://picsum.photos/id/1048/800/400" alt="Corporate Lobby" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
        </div>

        <div className="mt-8 md:hidden text-center">
             <Link to="/gallery" className="inline-block px-6 py-3 border border-brand-smoke text-sm uppercase tracking-widest">
            View Full Gallery
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA Band */}
      <section className="bg-brand-charcoal py-20 text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl text-white mb-6"
        >
          Have a vision for your space?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 mb-10 max-w-xl mx-auto"
        >
          Share your architectural plans or interior requirements with us for a custom consultation.
        </motion.p>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
           <Link to="/contact" className="bg-white text-brand-charcoal px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-beige hover:text-white transition-colors">
            Connect With Us
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
