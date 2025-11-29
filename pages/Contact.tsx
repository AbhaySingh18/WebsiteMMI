import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <div className="bg-brand-lightGrey py-20 text-center px-6">
        <h1 className="font-serif text-4xl md:text-6xl text-brand-charcoal mb-4">Get in Touch</h1>
        <p className="text-gray-500 text-sm uppercase tracking-widest">Let's discuss your project</p>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="font-serif text-2xl mb-6 text-brand-charcoal">Visit Our Showroom</h3>
              <div className="space-y-6 text-gray-500 text-sm">
                <div className="flex">
                  <MapPin className="w-5 h-5 mr-4 text-brand-beige flex-shrink-0" />
                  <p>123 Marble Market Road,<br/>Kishangarh Industrial Area,<br/>Rajasthan, India</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-4 text-brand-beige flex-shrink-0" />
                  <p>+91 98765 43210</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-4 text-brand-beige flex-shrink-0" />
                  <p>info@milleniummarmo.com</p>
                </div>
                <div className="flex">
                  <Clock className="w-5 h-5 mr-4 text-brand-beige flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-charcoal">Opening Hours</p>
                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-brand-lightGrey border border-brand-smoke">
              <h4 className="font-serif text-lg mb-2">Architects & Designers</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                We offer exclusive catalog access and sample kits for trade professionals. Contact us to schedule a dedicated viewing session.
              </p>
              <button className="text-brand-charcoal text-xs uppercase tracking-widest border-b border-brand-charcoal pb-1 font-bold hover:text-brand-beige hover:border-brand-beige transition-colors">
                Request Trade Kit
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <h3 className="font-serif text-2xl mb-8 text-brand-charcoal">Send us a message</h3>
            <ContactForm />
          </div>

        </div>
      </SectionWrapper>
      
      {/* Map Placeholder */}
      <div className="h-96 w-full bg-gray-200 grayscale relative">
        <iframe 
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.067643566164!2d74.838!3d26.938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU2JzE4LjAiTiA3NMKwNTAnMTYuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%)' }} 
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;