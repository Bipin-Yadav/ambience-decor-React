import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-brand-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            AMBIENCE <span className="text-brand-gold font-light">DECOR</span>
          </span>
          <p className="mt-6 text-gray-400">
            Bringing you a high-end range of interior products to create a space that looks rich and elegant.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-brand-gold">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="text-brand-gold mt-1 flex-shrink-0" />
              <p className="text-gray-300">
                Shop No 1, Divya Ratna Apt, Bhardawadi Rd, near Azad Metro station, Andheri West, Mumbai, 400053.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-brand-gold flex-shrink-0" />
              <p className="text-gray-300">+91 98XXX XXXXX</p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-brand-gold">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#services" className="hover:text-white transition">Products & Services</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#footer" className="hover:text-white transition">Get a Quote</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ambience Decor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;