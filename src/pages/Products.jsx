import React from 'react';
import Services from '../components/Services'; // The grid of 8 icons you liked
import Gallery from '../components/Gallery';   // The masonry photo grid

const Products = () => {
  return (
    <div className="pt-10">
      <div className="bg-brand-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Products & Services</h1>
        <p className="text-gray-400 mt-2">Explore our complete range of interior solutions</p>
      </div>

      {/* The 8 Categories (Icons) */}
      <Services />

      {/* The Photo Gallery (Real Work) */}
      <Gallery />
    </div>
  );
};

export default Products;