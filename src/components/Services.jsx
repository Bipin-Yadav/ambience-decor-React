import React from 'react';

const products = [
  { title: 'Wallpapers', img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80' },
  { title: 'Floorings', img: 'https://images.unsplash.com/photo-1581858726768-75e0524d91c2?auto=format&fit=crop&q=80' },
  { title: 'Fabrics', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80' },
  { title: 'Window Blinds', img: 'https://images.unsplash.com/photo-1517174637840-7b243b9df7d7?auto=format&fit=crop&q=80' },
  { title: 'PVC Panels', img: 'https://images.unsplash.com/photo-1620626012053-1c169996df87?auto=format&fit=crop&q=80' },
  { title: 'Glass Films', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80' },
  { title: 'Artificial Grass', img: 'https://images.unsplash.com/photo-1558905545-04de8ce00ce8?auto=format&fit=crop&q=80' },
  { title: 'Vertical Gardens', img: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title matching the reference */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-12 font-serif">
          This is what we do
        </h2>

        {/* Grid matching the card style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((item, index) => (
            <div key={index} className="relative h-64 md:h-96 rounded-lg overflow-hidden cursor-pointer group shadow-lg">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay at bottom only */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-6">
                <h3 className="text-white text-lg md:text-xl font-bold tracking-wide">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;