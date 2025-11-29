import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8 border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl mb-2">MILLENIUM MARMO</h3>
            <p className="text-brand-beige text-xs tracking-widest uppercase mb-6">International</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Timeless elegance and superior craftsmanship in natural stone. Serving architects, builders, and luxury homes since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-lightGrey">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-brand-beige transition-colors">Our Story</Link></li>
              <li><Link to="/products" className="hover:text-brand-beige transition-colors">Collection</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-beige transition-colors">Projects Gallery</Link></li>
              <li><Link to="/services" className="hover:text-brand-beige transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-lightGrey">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-3 text-brand-beige min-w-[16px]" />
                <span>123 Marble Market Road,<br/>Kishangarh, Rajasthan, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-brand-beige" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-brand-beige" />
                <span>info@milleniummarmo.com</span>
              </li>
            </ul>
          </div>

          {/* Social / Newsletter (simplified) */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-lightGrey">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-beige hover:text-brand-charcoal transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-beige hover:text-brand-charcoal transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-beige hover:text-brand-charcoal transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Millenium Marmo International. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;