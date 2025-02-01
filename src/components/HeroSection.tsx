'use client';

import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HeroSection(): React.ReactElement {
  const router = useRouter();
  
  const handleSurveyClick = () => {
    router.push('/survey');
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#ffffff] via-[#f0f0ff] to-[#ffffff] overflow-hidden">
      {/* Mobile design container */}
      <div className="w-full md:min-h-[1280px] md:pb-[171px] flex justify-center items-center">
        {/* Inner container with mobile-first padding and spacing */}
        <div className="w-full md:w-auto px-[26px] pt-[26px] md:px-24 md:pt-32 flex flex-col justify-start items-center gap-[34.67px] md:gap-32">
          
          {/* Content container */}
          <div className="w-full h-[301.35px] md:h-auto flex flex-col justify-start items-center gap-5">
            {/* Text + Button Group */}
            <div className="w-full h-[139.17px] md:h-auto flex flex-col justify-start items-center gap-2">
              {/* Title + Subtitle */}
              <div className="w-full h-[98.17px] md:h-auto flex flex-col justify-start items-center gap-[2.17px] text-center">
                <h1 className="w-full text-center">
                  <span className="block text-[#303030] text-[26px] md:text-[55.60px] lg:text-8xl font-bold font-['Geist'] leading-[30.68px] md:leading-[65.61px] lg:leading-[113.28px]">
                    The easiest way to
                  </span>
                  <span className="block text-[#303030] text-[26px] md:text-[55.60px] lg:text-8xl font-bold font-['Geist'] leading-[30.68px] md:leading-[65.61px] lg:leading-[113.28px]">
                    manage your money.
                  </span>
                </h1>
                <p className="text-[#616161] text-sm md:text-2xl lg:text-[32px] font-light md:font-normal leading-[16.80px] md:leading-relaxed lg:leading-[38.40px] text-center">
                  Stay in control of your finances because we make it easy.
                </p>
              </div>

              {/* Button */}
              <button 
                onClick={handleSurveyClick}
                className="px-3 py-2 md:px-7 md:py-4 bg-[#7773e1] rounded-lg md:rounded-2xl inline-flex justify-center items-center hover:bg-opacity-90 transition-all"
              >
                <span className="text-[#fcfcfc] text-sm md:text-xl font-medium leading-[16.80px] md:leading-normal">
                  Join the waitlist
                </span>
              </button>
            </div>

            {/* Image Container */}
            <div className="w-full h-[142.19px] md:h-auto px-[43.33px] md:px-20 lg:px-40 flex flex-col justify-start items-center gap-[2.71px]">
              <Image
                src="/HeroImage.svg"
                alt="Hero Image"
                width={277}
                height={173}
                className="w-[277.33px] md:w-full h-[173.33px] md:h-auto rounded shadow-[0px_13.541666984558105px_13.541666984558105px_0px_rgba(0,0,0,0.03)] border border-[#e2e2e2]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}