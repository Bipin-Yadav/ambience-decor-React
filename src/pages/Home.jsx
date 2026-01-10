import React from 'react';
import Hero from '../components/Hero';
import HomeCarousel from '../components/HomeCarousel'; // <--- IMPORT THIS
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white dark:bg-brand-dark transition-colors duration-300">
      
      <Hero />
      
      {/* New Carousel Section */}
      <HomeCarousel />

      {/* Why Choose Us / Teaser */}
      <section className="py-24 px-4 text-center bg-white dark:bg-brand-dark">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Designing Spaces, Defining Lifestyles.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
            We don't just sell wallpapers or flooring; we curate experiences. 
            Whether it's a cozy apartment in Andheri or a luxury villa, we bring your vision to life.
          </p>
          <Link to="/contact" className="inline-block bg-brand-900 dark:bg-brand-gold dark:text-black text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform">
            Book a Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;