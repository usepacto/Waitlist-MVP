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
    icon: '/Feature0.svg',
  },
  {
    title: 'Easy Budget Creation.',
    description: 'Set up a highly personalized spending plan in a few clicks.',
    icon: '/Feature1.svg',
  },
  {
    title: 'Automated Budgeting',
    description: 'Set aside funds in advance for your monthly bills and subscription fees.',
    icon: '/Feature2.svg',
  },
];

const FeatureShowcase: React.FC = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#ffffff] via-white to-[#fafcfe] flex justify-center items-center">
      <div className="max-w-[1440px] w-full px-6 md:px-10 flex flex-col lg:flex-row justify-between items-start gap-20">
        {/* Left Column */}
        <div className="w-full lg:w-[640px] flex flex-col justify-start items-center lg:items-start text-center lg:text-left">
          <h2 className="text-[#303030] text-4xl font-bold font-['Geist'] leading-[43.20px] mb-4">
            Pacto is built to give you control over your money
          </h2>
          <div className="flex flex-col gap-1">
            <p className="text-[#616161] text-xl font-normal font-['Geist'] leading-normal">
              Managing money should be effortlessly easy easy, all you should need to do is think about what you want and plan for it.
            </p>
            
          </div>
        </div>

        {/* Right Column - Feature Cards */}
        <div className="flex-1 flex flex-col justify-center items-start gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase; 
