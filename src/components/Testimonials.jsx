import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Munmun Agarwal",
    text: "Ambience Decor did a great job installing the wallpaper. They have very good designs. Neha is very cooperative - she helped get the best design for my son's room!",
    rating: 5,
    initial: "M"
  },
  {
    id: 2,
    name: "Rahul BagD",
    text: "It was a smooth experience working with Irshad and Neha. Quality is great, delivery is as promised. I have already recommended them to a few of my friends.",
    rating: 5,
    initial: "R"
  },
  {
    id: 3,
    name: "Juzar Nagariya",
    text: "Wallpaper work was very good and accurate. They use advance techniques and machinery. Highly recommended.",
    rating: 5,
    initial: "J"
  },
  {
    id: 4,
    name: "Saeed Sheikh",
    text: "Excellent service and on time delivery with good price. Wallpaper fixed by well experienced professional guy. I am 100% satisfied.",
    rating: 5,
    initial: "S"
  },
  {
    id: 5,
    name: "Amit Singh",
    text: "Nice work!! Quality products!!! Loved the carpet finish. Also in budget too!",
    rating: 4,
    initial: "A"
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-brand-dark transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-2 block">Social Proof</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <div className="flex items-center gap-2">
              <span className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </span>
              <span className="text-gray-600 dark:text-gray-400 font-medium">4.8/5 Average Rating</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-brand-gold hover:text-white dark:text-white transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-brand-gold hover:text-white dark:text-white transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Reviews Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] snap-center bg-white dark:bg-brand-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col justify-between"
            >
              <div>
                {/* User Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-gold to-yellow-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-900 dark:text-white">{review.name}</h4>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Verified Client</span>
                  </div>
                  <Quote size={40} className="ml-auto text-brand-gold/20" />
                </div>

                {/* Review Text */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < review.rating ? "text-brand-gold fill-brand-gold" : "text-gray-300"} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;