'use client';

import React from 'react';
import FeatureCard from './FeatureCard';

interface Feature {
  title: string;
  description: string;
  icon: string; // Path to the icon image
}

const features: Feature[] = [
  {
    title: 'Spend Confidently',
    description: 'Once you\'ve set your budget, Pacto does the heavy lifting.',
    icon: '/feature0.svg',
  },
  {
    title: 'Easy Budget Creation.',
    description: 'Set up a highly personalized spending plan in a few clicks.',
    icon: '/feature1.svg',
  },
  {
    title: 'Automated Budgeting',
    description: 'Set aside funds in advance for your monthly bills and subscription fees.',
    icon: '/feature2.svg',
  },
];

const FeatureShowcase: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#ffffff] via-white to-[#fafcfe]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20">
        {/* Header Section */}
        <div className="w-full max-w-[800px] mx-auto flex flex-col justify-start items-center text-center mb-8 md:mb-12">
          <h2 className="text-[#303030] text-2xl sm:text-3xl md:text-4xl font-bold font-['Geist'] leading-tight mb-3 md:mb-4">
            Pacto is built to give you control over your money
          </h2>
          <p className="text-[#616161] text-base sm:text-lg md:text-xl font-normal font-['Geist'] leading-normal max-w-[90%] mx-auto">
            Managing money should be effortlessly easy, all you should need to do is think about what you want and plan for it.
          </p>
        </div>

        {/* Feature Cards - Stack on Mobile and Tablet */}
        <div className="w-full max-w-[800px] mx-auto flex flex-col justify-center items-center gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="w-full">
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase; 