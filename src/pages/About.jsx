import React from 'react';
import AboutComponent from '../components/About'; // Re-use the component we already built!

const About = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-100 py-12 text-center">
         <h1 className="text-4xl font-bold text-brand-900">About Us</h1>
      </div>
      <AboutComponent />
    </div>
  );
};

export default About;