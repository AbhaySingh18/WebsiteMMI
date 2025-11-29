import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const productData: Product[] = [
  // Imported Marble
  { id: 'm1', title: 'Statuario Extra', category: 'Imported Marble', image: 'https://picsum.photos/id/1036/600/800', description: 'Classic white marble with bold grey veining.' },
  { id: 'm2', title: 'Grey William', category: 'Imported Marble', image: 'https://picsum.photos/id/1035/600/800', description: 'Subtle grey tones perfect for modern interiors.' },
  { id: 'm3', title: 'Michaelangelo', category: 'Imported Marble', image: 'https://picsum.photos/id/1033/600/800', description: 'Black base with stunning gold and white veins.' },
  
  // Granite
  { id: 'g1', title: 'Black Galaxy', category: 'Granite', image: 'https://picsum.photos/id/1016/600/800', description: 'Deep black granite with metallic flecks.', tag: 'Kitchens' },
  { id: 'g2', title: 'Tan Brown', category: 'Granite', image: 'https://picsum.photos/id/1018/600/800', description: 'Durable brown granite suitable for flooring.' },
  { id: 'g3', title: 'Absolute Black', category: 'Granite', image: 'https://picsum.photos/id/1019/600/800', description: 'Pure, consistent black for a minimal look.' },

  // Onyx
  { id: 'o1', title: 'Honey Onyx', category: 'Onyx', image: 'https://picsum.photos/id/1015/600/800', description: 'Warm amber tones, highly translucent.' },
  { id: 'o2', title: 'White Onyx', category: 'Onyx', image: 'https://picsum.photos/id/1020/600/800', description: 'Pure white crystal structure for luxury accent walls.' },

  // Tiles
  { id: 't1', title: 'Travertine Beige', category: 'Tiles', image: 'https://picsum.photos/id/1021/600/800', description: 'Classic beige texture for patios and cladding.' },
  { id: 't2', title: 'Slate Grey', category: 'Tiles', image: 'https://picsum.photos/id/1022/600/800', description: 'Natural textured finish for outdoor use.', tag: 'Outdoor' },
];

const CategorySection: React.FC<{ title: string; products: Product[]; description: string }> = ({ title, products, description }) => {
  if (products.length === 0) return null;
  return (
    <SectionWrapper id={title.toLowerCase().replace(' ', '-')}>
      <div className="mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal mb-4">{title}</h2>
        <p className="text-gray-500 max-w-2xl text-sm leading-relaxed">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(p => <ProductCard key={p.id} {...p} />)}
      </div>
    </SectionWrapper>
  );
};

const Products: React.FC = () => {
  const categories = [
    { 
      name: 'Imported Marble', 
      description: 'Sourced from the finest quarries in Italy and Turkey, our imported marble collection defines opulence. Perfect for flooring, cladding, and statement pieces.' 
    },
    { 
      name: 'Granite', 
      description: 'Known for its incredible hardness and durability, our granite collection offers resistance to heat and scratches without compromising on beauty.' 
    },
    { 
      name: 'Onyx', 
      description: 'A stone of translucent beauty. Our Onyx collection is perfect for backlit installations, creating a glowing ambiance in luxury spaces.' 
    },
    { 
      name: 'Tiles', 
      description: 'Versatile and practical, our range of natural stone tiles is suitable for bathrooms, patios, and wall cladding, offering consistency and ease of installation.' 
    },
  ];

  return (
    <>
      <div className="bg-brand-charcoal py-20 text-center px-6">
        <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">Our Collection</h1>
        <p className="text-gray-400 text-sm uppercase tracking-widest">Explore the finest natural stones</p>
      </div>

      {categories.map(cat => (
        <CategorySection 
          key={cat.name} 
          title={cat.name} 
          description={cat.description}
          products={productData.filter(p => p.category === cat.name)} 
        />
      ))}
      
      <div className="bg-brand-lightGrey py-16 text-center">
         <p className="text-brand-charcoal font-serif text-xl mb-4">Looking for something specific?</p>
         <p className="text-gray-500 text-sm mb-6">We handle custom orders and bulk project requirements.</p>
         <button className="px-8 py-3 border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-colors uppercase text-xs tracking-widest">
            Contact Sales
         </button>
      </div>
    </>
  );
};

export default Products;