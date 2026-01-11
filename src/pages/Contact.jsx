import React from 'react';
import { MapPin, Phone, Clock, Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-brand-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Let's Connect</span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 dark:text-white mt-2 transition-colors">
            Get In Touch
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            Ready to transform your space? We are here to answer your questions and discuss your dream project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left: Contact Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-brand-800 p-6 md:p-8 rounded-2xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-700 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold mb-8 text-brand-900 dark:text-white">Visit Our Studio</h3>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-brand-gold/10 dark:bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Shop No 1, Divya Ratna Apt, Bhardawadi Rd,<br/>
                    near Azad Metro station, Andheri West,<br/>
                    Mumbai, Maharashtra 400053.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-brand-gold/10 dark:bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Call Us</h4>
                  <a href="tel:+919800000000" className="text-gray-600 dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold transition-colors">
                    +91 98XXX XXXXX
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Available Mon-Sat</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-brand-gold/10 dark:bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Working Hours</h4>
                  <p className="text-gray-600 dark:text-gray-300">Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Google Map (Grayscale in Dark Mode) */}
            <div className="mt-8 h-64 w-full bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-inner">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.837856488755!2d72.8436!3d19.1145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzUyLjIiTiA3MsKwNTAnMzcuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen="" 
                 loading="lazy"
                 className="dark:opacity-80 dark:grayscale-[0.5] transition-all duration-500"
               ></iframe>
            </div>
          </motion.div>

          {/* Right: Modern Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-brand-800 p-6 md:p-8 rounded-2xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-700 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-900 dark:text-white">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-brand-900 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-brand-900 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-brand-900 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  placeholder="+91 98XXX XXXXX"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-brand-900 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements (e.g. 3BHK Wallpaper installation...)"
                ></textarea>
              </div>

              <button className="w-full bg-brand-900 dark:bg-brand-gold text-white dark:text-brand-900 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2">
                Send Request <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;