import React from 'react';
import { motion } from 'framer-motion';

// Temporary placeholders - You will replace 'src' with your real image URLs later
const projects = [
  { id: 1, src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80", category: "Living Room" },
  { id: 2, src: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80", category: "Wallpapers" },
  { id: 3, src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80", category: "Curtains" },
  { id: 4, src: "https://images.unsplash.com/photo-1581858726768-75e0524d91c2?auto=format&fit=crop&q=80", category: "Flooring" },
  { id: 5, src: "https://images.unsplash.com/photo-1558905545-04de8ce00ce8?auto=format&fit=crop&q=80", category: "Artificial Grass" },
  { id: 6, src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80", category: "Bedroom" },
  { id: 7, src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", category: "Office" },
  { id: 8, src: "https://images.unsplash.com/photo-1620626012053-1c169996df87?auto=format&fit=crop&q=80", category: "PVC Panels" },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brand-gold font-semibold tracking-wider uppercase">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2">
            Recent Installations
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            A glimpse into the luxury spaces we have transformed across Mumbai.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid relative group rounded-xl overflow-hidden"
            >
              <img 
                src={project.src} 
                alt={project.category} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium border border-white px-4 py-2 rounded-full">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-brand-900 text-brand-900 font-medium rounded hover:bg-brand-900 hover:text-white transition duration-300">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default Gallery;