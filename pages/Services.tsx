import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ServiceCard from '../components/ServiceCard';
import { Truck, Scissors, PenTool, Layers, Box, Globe } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 's1',
    title: 'Stone Sourcing',
    description: 'We help you find the perfect block or slab from quarries worldwide, ensuring the color and vein pattern match your vision.',
    icon: <Globe size={32} />
  },
  {
    id: 's2',
    title: 'Precision Cutting',
    description: 'State-of-the-art machinery allows us to cut slabs to specific dimensions with minimal wastage and perfect edges.',
    icon: <Scissors size={32} />
  },
  {
    id: 's3',
    title: 'Polishing & Finishing',
    description: 'From mirror-polished to leather, honed, or flamed finishes, we provide textures that enhance the stone\'s natural character.',
    icon: <Layers size={32} />
  },
  {
    id: 's4',
    title: 'Custom Profiling',
    description: 'Specialized edge profiles for countertops, staircases, and tabletops designed to add a refined touch.',
    icon: <PenTool size={32} />
  },
  {
    id: 's5',
    title: 'Bulk Project Supply',
    description: 'Capable of handling large-scale orders for commercial projects, hotels, and residential complexes with consistent quality.',
    icon: <Box size={32} />
  },
  {
    id: 's6',
    title: 'Logistics & Export',
    description: 'Secure packaging and reliable shipping logistics to deliver materials safely to your site, anywhere in the world.',
    icon: <Truck size={32} />
  }
];

const Services: React.FC = () => {
  return (
    <>
      <div className="bg-brand-lightGrey py-20 text-center px-6">
        <h1 className="font-serif text-4xl md:text-6xl text-brand-charcoal mb-4">Our Services</h1>
        <p className="text-gray-500 text-sm uppercase tracking-widest">Beyond just supply</p>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Services;