'use client';

import * as React from 'react';
import Image from 'next/image';

import { SURVEY_URL } from './Context';

export default function HeroSection(): React.ReactElement {
  const handleSurveyClick = () => {
    window.open(SURVEY_URL, '_blank');

  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-[#f8f8ff] to-white overflow-hidden">
      {/* Main container with natural height and centered content */}
      <div className="w-full min-h-[90vh] md:min-h-[1280px] flex items-start md:items-center">
        {/* Content wrapper with refined spacing */}
        <div className="w-full px-4 md:px-24 pt-6 md:pt-32 flex flex-col items-center gap-5 md:gap-16 lg:gap-32">
          
          {/* TEXT + BUTTON GROUP with mobile-optimized gaps */}
          <div className="flex flex-col items-center gap-3 md:gap-6 w-full">
            {/* Title + Subtext with improved spacing */}
            <div className="flex flex-col items-center gap-2 md:gap-3 w-full">
              <h1 className="w-full text-center max-w-[95%] md:max-w-[90%] mx-auto">
                <span className="text-[#303030] text-[2.75rem] sm:text-5xl md:text-6xl lg:text-8xl font-bold font-sans leading-[1.15] md:leading-tight lg:leading-[113.28px]">
                  The{' '}
                </span>
                <span className="text-[#303030] text-[2.75rem] sm:text-5xl md:text-6xl lg:text-8xl font-bold font-sans leading-[1.15] md:leading-tight lg:leading-[113.28px]">
                  easiest{' '}
                </span>
                <span className="text-[#303030] text-[2.75rem] sm:text-5xl md:text-6xl lg:text-8xl font-bold font-sans leading-[1.15] md:leading-tight lg:leading-[113.28px]">
                  way to{' '}
                </span>
                <span className="text-[#303030] text-[2.75rem] sm:text-5xl md:text-6xl lg:text-8xl font-bold font-sans leading-[1.15] md:leading-tight lg:leading-[113.28px]">
                  manage{' '}
                </span>
                <span className="text-[#303030] text-[2.75rem] sm:text-5xl md:text-6xl lg:text-8xl font-bold font-sans leading-[1.15] md:leading-tight lg:leading-[113.28px]">
                  money.
                </span>
              </h1>
              <p className="text-[#616161] text-lg sm:text-xl md:text-2xl lg:text-[32px] font-normal font-sans leading-snug md:leading-relaxed max-w-[92%] md:max-w-[90%] mx-auto text-center mt-1">
                Stay in control of your finances because we make it easy.
              </p>
            </div>

            {/* Button with refined mobile spacing */}
            <button 
              onClick={handleSurveyClick}

              className="mt-3 md:mt-0 px-6 py-3 md:px-7 md:py-4 bg-[#7773e1] rounded-xl md:rounded-2xl inline-flex justify-center items-center hover:bg-opacity-90 transition-all"
            >
              <span className="text-[#fcfcfc] text-base md:text-xl font-medium font-sans leading-normal">
                Join the waitlist
              </span>

            </button>
          </div>

          {/* IMAGE CONTAINER with optimized spacing */}
          <div className="w-full px-3 sm:px-4 md:px-20 lg:px-40 mt-5 md:mt-0">
            <Image
              src="/HeroImage.svg"
              alt="Hero Image"
              width={1024}
              height={640}
              className="w-full h-auto rounded-lg md:rounded-xl border border-[#e2e2e2] shadow-sm"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}