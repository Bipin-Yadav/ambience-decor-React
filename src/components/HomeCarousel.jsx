import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Layers, Image, Scissors, Sun, Grid, Box, Trees, Flower } from 'lucide-react';

// Reuse existing data structure
const products = [
  { title: 'Wallpapers', desc: 'Indian & Imported', icon: <Image />, img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80' },
  { title: 'Floorings', desc: 'Vinyl & Wooden', icon: <Layers />, img: 'https://images.unsplash.com/photo-1581858726768-75e0524d91c2?auto=format&fit=crop&q=80' },
  { title: 'Curtains', desc: 'Luxury Fabrics', icon: <Scissors />, img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80' },
  { title: 'Blinds', desc: 'Light Control', icon: <Sun />, img: 'https://images.unsplash.com/photo-1517174637840-7b243b9df7d7?auto=format&fit=crop&q=80' },
  { title: 'PVC Panels', desc: 'Wall Paneling', icon: <Grid />, img: 'https://images.unsplash.com/photo-1620626012053-1c169996df87?auto=format&fit=crop&q=80' },
  { title: 'Glass Films', desc: 'Privacy Solutions', icon: <Box />, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80' },
];

const HomeCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if(scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-brand-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Arrows */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
              Explore Collections
            </h2>
          </div>
          
          <div className="flex gap-2">
             <button onClick={() => scroll('left')} className="p-2 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-brand-gold hover:text-white dark:text-white transition">
               ←
             </button>
             <button onClick={() => scroll('right')} className="p-2 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-brand-gold hover:text-white dark:text-white transition">
               →
             </button>
          </div>
        </div>

        {/* The Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((item, index) => (
            <Link to="/products" key={index} className="min-w-[280px] md:min-w-[320px] snap-start">
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative h-96 rounded-2xl overflow-hidden cursor-pointer group"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="bg-brand-gold w-10 h-10 rounded-full flex items-center justify-center text-black mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default HomeCarousel;