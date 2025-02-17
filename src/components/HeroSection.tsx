'use client';

import * as React from 'react';
import Image from 'next/image';
import { SURVEY_URL } from './Context';
import { useRouter } from 'next/navigation';

export default function HeroSection(): React.ReactElement {
  const router = useRouter();
  
  const handleSurveyClick = () => {
    router.push(SURVEY_URL);
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-[#f8f8ff] to-white overflow-hidden">
      {/* Main container with optimized height and spacing */}
      <div className="w-full min-h-[90vh] md:min-h-[100vh] flex items-start md:items-center">
        {/* Content wrapper with refined spacing */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 pt-6 md:pt-16 flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
          
          {/* TEXT + BUTTON GROUP with mobile-optimized gaps */}
          <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
            {/* Title + Subtext with improved spacing and line control */}
            <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
              <h1 className="w-full text-center max-w-[95%] md:max-w-[90%] mx-auto">
                <span className="text-[#303030] text-[2rem] sm:text-4xl md:text-6xl lg:text-8xl font-bold font-sans leading-[1.2] md:leading-tight lg:leading-[1.15] inline-block">
                  The easiest way to{' '}
                </span>
                <span className="text-[#303030] text-[2rem] sm:text-4xl md:text-6xl lg:text-8xl font-bold font-sans leading-[1.2] md:leading-tight lg:leading-[1.15] inline-block">
                  manage money.
                </span>
              </h1>
              <p className="text-[#616161] text-base sm:text-lg md:text-2xl lg:text-[32px] font-normal font-sans leading-snug md:leading-relaxed max-w-[92%] md:max-w-[90%] mx-auto text-center">
                Stay in control of your finances because we make it easy.
              </p>
            </div>

            {/* Button with refined mobile spacing */}
            <button 
              onClick={handleSurveyClick}
              className="px-6 py-3 md:px-7 md:py-4 bg-[#7773e1] rounded-xl md:rounded-2xl inline-flex justify-center items-center hover:bg-opacity-90 transition-all"
            >
              <span className="text-[#fcfcfc] text-base md:text-xl font-medium font-sans leading-normal">
                Join the waitlist
              </span>
            </button>
          </div>

          {/* IMAGE CONTAINER with optimized spacing and mobile sizing */}
          <div className="w-full px-2 sm:px-4 md:px-16 lg:px-32">
          <div
            className="self-stretch h-auto md:h-[525px] 2xl:h-[600px] flex-col justify-start items-center gap-2.5 flex"
          >
            {/* -----------------------------------------------------------------
                Next.js Image Component for the Hero Image
            */}
            <Image
              src="/HeroImage2.svg" // Mobile image
              alt="Hero Image for mobile"
              width={370}
              height={425}
              className="w-full h-auto rounded-xl block md:hidden"
              priority
            />
            <Image
              src="/HeroImage.svg" // Desktop image
              alt="Hero Image"
              width={1024}
              height={640}
              className="hidden md:block w-full md:w-[1024px] h-auto rounded-xl shadow-[0px_50px_50px_0px_rgba(0,0,0,0.03)] border border-[#e2e2e2]"
              priority
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}