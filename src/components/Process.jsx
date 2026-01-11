import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Hammer, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Consultation",
    desc: "We discuss your vision, budget, and requirements. We can meet at your site or our studio.",
    icon: <MessageSquare size={32} />,
    color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
  },
  {
    id: 2,
    title: "Design & Selection",
    desc: "Choose from our premium catalogues of wallpapers, floorings, and fabrics. We guide you to the best match.",
    icon: <PenTool size={32} />,
    color: "bg-brand-gold/20 text-brand-gold"
  },
  {
    id: 3,
    title: "Execution",
    desc: "Our technical team arrives on the scheduled date. We install everything with precision and clean up after.",
    icon: <Hammer size={32} />,
    color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300"
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-white dark:bg-brand-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-white mt-2 mb-4">
            From Idea to Reality in 3 Steps
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            We handle everything from the first measurement to the final installation. You just sit back and relax.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 dark:bg-gray-700 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Icon Circle */}
              <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-gray-200/50 dark:shadow-none transform transition-transform hover:scale-110 duration-300`}>
                {step.icon}
              </div>

              {/* Number Badge */}
              <div className="absolute top-0 right-1/3 bg-brand-900 dark:bg-white text-white dark:text-brand-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-brand-900">
                {step.id}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="/contact" className="inline-flex items-center gap-2 text-brand-gold font-bold hover:underline underline-offset-4 text-lg">
            Start Your Project Now <ArrowRight size={20} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;