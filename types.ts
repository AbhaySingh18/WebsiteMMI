export interface Product {
  id: string;
  title: string;
  description: string;
  category: 'Marble' | 'Granite' | 'Imported Marble' | 'Onyx' | 'Tiles';
  image: string;
  tag?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}