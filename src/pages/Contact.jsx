import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-900">Get In Touch</h1>
          <p className="text-gray-500 mt-2">We'd love to hear about your dream project.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg h-fit">
            <h3 className="text-2xl font-bold mb-6">Visit Our Studio</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-brand-gold w-6 h-6 flex-shrink-0" />
                <p className="text-gray-600">
                  Shop No 1, Divya Ratna Apt, Bhardawadi Rd,<br/>
                  near Azad Metro station, Andheri West,<br/>
                  Mumbai, Maharashtra 400053.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-brand-gold w-6 h-6" />
                <p className="text-gray-600">+91 98XXX XXXXX</p>
              </div>
              <div className="flex gap-4 items-center">
                <Clock className="text-brand-gold w-6 h-6" />
                <p className="text-gray-600">Mon - Sat: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
            
            {/* Google Map Embed */}
            <div className="mt-8 h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.897992457891!2d72.8436!3d19.1171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzAxLjYiTiA3MsKwNTAnMzcuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                 width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy">
               </iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold outline-none" placeholder="+91 98..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold outline-none" placeholder="I'm interested in wallpapers..."></textarea>
              </div>
              <button className="w-full bg-brand-900 text-white py-3 rounded-lg font-bold hover:bg-brand-gold transition duration-300">
                Send Request
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;