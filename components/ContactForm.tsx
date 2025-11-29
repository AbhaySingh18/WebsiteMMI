import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', projectType: 'Residential', message: '' });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-widest text-gray-500">Full Name *</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-beige transition-colors bg-transparent"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-widest text-gray-500">Email Address *</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-beige transition-colors bg-transparent"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-widest text-gray-500">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-beige transition-colors bg-transparent"
            placeholder="+91 98765 43210"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-widest text-gray-500">Project Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-beige transition-colors bg-transparent"
          >
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Hotel/Hospitality">Hotel / Hospitality</option>
            <option value="Export">Export</option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs uppercase tracking-widest text-gray-500">Message / Requirements</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-beige transition-colors bg-transparent resize-none"
          placeholder="Tell us about your project needs..."
        />
      </div>

      <div className="pt-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === 'submitting' || status === 'success'}
          className={`w-full md:w-auto px-10 py-4 text-sm uppercase tracking-widest font-medium transition-colors ${
            status === 'success' 
              ? 'bg-green-600 text-white' 
              : 'bg-brand-charcoal text-white hover:bg-brand-beige'
          }`}
        >
          {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Enquiry'}
        </motion.button>
      </div>
    </form>
  );
};

export default ContactForm;