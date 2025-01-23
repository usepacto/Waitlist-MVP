'use client';

import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="w-full flex justify-start items-start gap-8">
      <div className="w-[80px] h-[80px] relative flex-shrink-0">
        <Image
          src={icon}
          alt={`${title} icon`}
          fill
          className="object-contain"
          priority={false}
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-1">
        <h3 className="text-[#303030] text-2xl font-medium font-['Geist'] underline leading-loose">
          {title}
        </h3>
        <p className="text-[#616161] text-xl font-normal font-['Geist'] leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard; 