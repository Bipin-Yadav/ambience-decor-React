import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Munmun Agarwal",
    text: "Ambience Decor did a great job in getting the wallpaper installed. They have very good designs and lots of choices. Neha is also very co-operative!",
    initial: "M",
    bg: "bg-orange-500"
  },
  {
    name: "Juzar Nagariya",
    text: "Wallpaper work... very good n accurate... Try to use advance techniques n machinery.",
    initial: "J",
    bg: "bg-blue-600"
  },
  {
    name: "Rahul BagD",
    text: "It was a very smooth experience working with Irshad and Neha. Quality is great, delivery is as promised, decent pricing. Happy Customer!",
    initial: "R",
    bg: "bg-green-600"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          What our clients say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col h-full">
              {/* Header: Avatar + Name + Google Logo mimic */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`${review.bg} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold`}>
                    {review.initial}
                  </div>
                  <span className="font-bold text-gray-900">{review.name}</span>
                </div>
                {/* Google 'G' Icon mimic */}
                <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center p-1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="G" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm italic leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;