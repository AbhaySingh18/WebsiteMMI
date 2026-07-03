import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const productData: Product[] = [
  // Imported Marble
  { id: 'm1', title: 'Statuario Extra', category: 'Imported Marble', image: 'https://cdn.prod.website-files.com/5e1cf94f2b50942f7e1af54d/60007d7aef9475b5825502b1_V0761-142x78-3CM-STATUARIO%20EXTRA-POLISHED-DETAIL-THUMBNAIL.jpg', description: 'Classic white marble with bold grey veining.' },
  { id: 'm2', title: 'Grey William', category: 'Imported Marble', image: 'https://www.stonehubindia.com/public/uploads/product/336968738_12_09_2023_12_58_01.webp', description: 'Subtle grey tones perfect for modern interiors.' },
  { id: 'm3', title: 'Michaelangelo', category: 'Imported Marble', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHgUBi1qz-HI9UMYhs3WGMB-5aATjF9NW3bMBkQ2ZHOKe8iXbT0X61ofF&s=10', description: 'Black base with stunning gold and white veins.' },
  
  // Granite
  { id: 'g1', title: 'Black Galaxy', category: 'Granite', image: 'https://sudarshanstoneix.com/wp-content/uploads/2025/08/Black-Galaxy-Granite.jpg', description: 'Deep black granite with metallic flecks.', tag: 'Kitchens' },
  { id: 'g2', title: 'Tan Brown', category: 'Granite', image: 'https://www.aonemarbles.com/wp-content/uploads/2019/03/Tan-Brown-Granite-Tile-800x800.jpg', description: 'Durable brown granite suitable for flooring.' },
  { id: 'g3', title: 'Absolute Black', category: 'Granite', image: 'https://www.regattagranitesindia.com/wp-content/uploads/2015/11/Absolute-Black-Polished-Texture.webp', description: 'Pure, consistent black for a minimal look.' },

  // Onyx
  { id: 'o1', title: 'Honey Onyx', category: 'Onyx', image: 'https://prestigeedition.co.uk/media/images/honey-onyx.jpg', description: 'Warm amber tones, highly translucent.' },
  { id: 'o2', title: 'White Onyx', category: 'Onyx', image: 'https://florim-cdn.thron.com/api/v1/content-delivery/shares/rf8vac/contents/d90f41b3-2a7c-4862-9c9f-8d93b0409e29/image/765924_03.jpg?w=1080&format=webp&q=95', description: 'Pure white crystal structure for luxury accent walls.' },

  // Tiles
  { id: 't1', title: 'Travertine Beige', category: 'Tiles', image: 'https://surajmarbles.com/wp-content/uploads/2025/05/Marble-Beige-Travertine-webp.webp', description: 'Classic beige texture for patios and cladding.' },
  { id: 't2', title: 'Slate Grey', category: 'Tiles', image: 'https://carmelimports.com/wp-content/uploads/2024/04/cornerstone-slate-grey-porcelain-tile.jpg', description: 'Natural textured finish for outdoor use.', tag: 'Outdoor' },
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
