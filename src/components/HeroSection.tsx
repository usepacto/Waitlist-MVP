'use client';

import * as React from 'react';
import Image from 'next/image';

export default function HeroSection(): JSX.Element {
  return (
    <section className="w-full bg-gradient-to-b from-[#ffffff] via-[#f0f0ff] to-[#ffffff] overflow-hidden">
      {/* Outer wrapper: ensures min height, bottom padding, center alignment */}
      <div className="w-full min-h-[1280px] pb-[171px] flex justify-center items-center">
        {/* Inner container: increased top padding, large gap between text+button and image */}
        <div className="w-full px-6 md:px-24 pt-24 md:pt-32 flex flex-col justify-start items-center gap-16 md:gap-32">
          
          {/* TEXT + BUTTON GROUP (Auto layout with 24px gap) */}
          <div className="flex flex-col items-center gap-6">
            {/* Title + Subtext */}
            <div className="flex flex-col items-center gap-2">
              <h1 className="w-full text-center">
                <span className="text-[#303030] text-4xl md:text-6xl lg:text-8xl font-bold font-['Geist'] leading-tight lg:leading-[113.28px]">
                  The{' '}
                </span>
                <span className="text-[#303030] text-4xl md:text-6xl lg:text-8xl font-bold font-['Geist'] leading-tight lg:leading-[113.28px]">
                  easiest{' '}
                </span>
                <span className="text-[#303030] text-4xl md:text-6xl lg:text-8xl font-bold font-['Geist'] leading-tight lg:leading-[113.28px]">
                  way to{' '}
                </span>
                <span className="text-[#303030] text-4xl md:text-6xl lg:text-8xl font-bold font-['Geist'] leading-tight lg:leading-[113.28px]">
                  manage{' '}
                </span>
                <span className="text-[#303030] text-4xl md:text-6xl lg:text-8xl font-bold font-['Geist'] leading-tight lg:leading-[113.28px]">
                  money.
                </span>
              </h1>
              <p className="text-[#616161] text-xl md:text-2xl lg:text-[32px] font-normal font-['Geist'] leading-relaxed lg:leading-[38.40px] text-center">
                Stay in control of your finances because we make it easy.
              </p>
            </div>

            {/* Button (24px below subtext thanks to gap-6) */}
            <button className="px-7 py-4 bg-[#7773e1] rounded-2xl inline-flex justify-center items-center hover:bg-opacity-90 transition-all">
              <span className="text-[#fcfcfc] text-xl font-medium font-['Inter'] leading-normal">
                Join the waitlist
              </span>
            </button>
          </div>

          {/* IMAGE CONTAINER (Spacing preserved by gap-16 md:gap-32) */}
          <div className="w-full px-4 md:px-20 lg:px-40">
            <Image
              src="/HeroImage.svg"
              alt="Hero Image"
              width={1024}
              height={640}
              className="w-full h-auto rounded-xl border border-[#e2e2e2]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}