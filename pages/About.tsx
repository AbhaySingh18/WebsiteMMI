import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

const About: React.FC = () => {
  return (
    <>
      <div className="bg-brand-lightGrey py-20 md:py-32 text-center px-6">
        <h1 className="font-serif text-4xl md:text-6xl text-brand-charcoal mb-4">Our Legacy</h1>
        <p className="text-gray-500 text-sm uppercase tracking-widest">Built on Trust, Defined by Quality</p>
      </div>

      <SectionWrapper>
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-brand-charcoal">Shaping the stone industry since 1995</h2>
            <div className="space-y-4 text-gray-500 leading-relaxed font-light">
              <p>
                Millenium Marmo International began with a singular vision: to bridge the gap between nature's finest creations and modern architecture. Located in the heart of India's stone capital, we have grown from a modest trading house to a premier global supplier of luxury natural stones.
              </p>
              <p>
                For over two decades, we have cultivated strong relationships with quarry owners across Italy, Turkey, Spain, and India. This allows us to curate an exclusive inventory of Marble, Granite, and Onyx that meets the exacting standards of the world's leading architects and interior designers.
              </p>
              <p>
                We believe that every slab tells a story. Our expertise lies not just in sourcing, but in understanding the character of the stone, ensuring that the material you choose perfectly aligns with the aesthetic and functional needs of your project.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
             <img src="https://thumbs.dreamstime.com/b/warehouse-wooden-support-aisle-long-aisle-inside-marble-warehouse-rows-white-grey-marble-slabs-leaning-against-435113580.jpg" alt="Our Warehouse" className="w-full h-auto shadow-lg" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bgColor="lightGrey">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="bg-white p-10 shadow-sm border-t-4 border-brand-beige">
            <h3 className="font-serif text-2xl mb-4 text-brand-charcoal">Our Mission</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              To provide unparalleled quality in natural stones while ensuring transparent, ethical, and professional service to clients worldwide.
            </p>
          </div>
          <div className="bg-white p-10 shadow-sm border-t-4 border-brand-charcoal">
            <h3 className="font-serif text-2xl mb-4 text-brand-charcoal">Our Vision</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              To be the preferred partner for luxury developments, recognized for our diverse collection and deep industry expertise.
            </p>
          </div>
          <div className="bg-white p-10 shadow-sm border-t-4 border-brand-gold">
            <h3 className="font-serif text-2xl mb-4 text-brand-charcoal">Core Values</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Integrity in business, passion for craftsmanship, and a commitment to long-term client relationships.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl mb-8">The Millenium Advantage</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <span className="block text-4xl font-serif text-brand-beige mb-2">25+</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Years Experience</span>
                </div>
                <div>
                    <span className="block text-4xl font-serif text-brand-beige mb-2">500+</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Premium Varieties</span>
                </div>
                <div>
                    <span className="block text-4xl font-serif text-brand-beige mb-2">1k+</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Projects Completed</span>
                </div>
                <div>
                    <span className="block text-4xl font-serif text-brand-beige mb-2">Global</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Shipping Network</span>
                </div>
            </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default About;
