import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import GalleryGrid from '../components/GalleryGrid';
import { GalleryItem } from '../types';

const galleryItems: GalleryItem[] = [
  { id: '1', title: 'Luxury Villa Foyer', category: 'Italian Marble', image: 'https://picsum.photos/id/1036/800/800' },
  { id: '2', title: 'Corporate HQ Lobby', category: 'Granite Flooring', image: 'https://picsum.photos/id/1048/800/800' },
  { id: '3', title: 'Modern Kitchen Island', category: 'Quartzite', image: 'https://picsum.photos/id/1080/800/800' },
  { id: '4', title: 'Hotel Grand Bathroom', category: 'Onyx Feature Wall', image: 'https://picsum.photos/id/1029/800/800' },
  { id: '5', title: 'Outdoor Patio', category: 'Travertine', image: 'https://picsum.photos/id/1039/800/800' },
  { id: '6', title: 'Minimalist Staircase', category: 'White Marble', image: 'https://picsum.photos/id/1040/800/800' },
  { id: '7', title: 'Executive Cabin Desk', category: 'Black Marble', image: 'https://picsum.photos/id/1060/800/800' },
  { id: '8', title: 'Retail Showroom Floor', category: 'Composite Marble', image: 'https://picsum.photos/id/1070/800/800' },
  { id: '9', title: 'Spa & Wellness Center', category: 'Textured Stone', image: 'https://picsum.photos/id/1050/800/800' },
];

const Gallery: React.FC = () => {
  return (
    <>
      <div className="bg-brand-charcoal py-20 text-center px-6">
        <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">Project Gallery</h1>
        <p className="text-gray-400 text-sm uppercase tracking-widest">Inspiration from our finished sites</p>
      </div>

      <SectionWrapper>
        <GalleryGrid items={galleryItems} />
      </SectionWrapper>
    </>
  );
};

export default Gallery;