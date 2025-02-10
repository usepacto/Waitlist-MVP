'use client';

import React from 'react';
import Image from 'next/image';

const FeatureShowcase: React.FC = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1440px] h-[694px] px-16 pt-20 pb-[120px] bg-[#fbfbfe] flex-col justify-end items-center gap-16 inline-flex">
        {/* Header Text Block */}
        <div className="h-[230px] flex-col justify-center items-center gap-3 flex">
          <div className="text-[#616161] text-2xl font-normal font-sans leading-loose">
            You remember when you said
          </div>
          <div className="text-[#616161] text-[59px] font-bold font-sans leading-[70.80px] text-center">
            "I wish I had a second chance <br />with all that money I wasted!?".
          </div>
          <div className="text-[#0a092a] text-2xl font-semibold font-sans leading-loose">
            Well Here's your chance.
          </div>
        </div>

        {/* Features Grid */}
        <div className="w-full flex justify-between items-center">
          {/* First Feature Block */}
          <div className="w-[383px] pt-2 flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-16 h-16 relative overflow-hidden">
              <Image
                src="/Feature0.svg"
                alt="Create a budget"
                width={64}
                height={64}
              />
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-full text-[#303030] text-2xl font-medium font-sans leading-loose">
                Create a budget
              </div>
              <div className="w-full text-[#616161] text-xl font-normal font-sans leading-normal">
                Once you've set your budget, Pacto does the heavy lifting.
              </div>
            </div>
          </div>

          {/* First Divider */}
          <div className="w-[1px] h-[200px] bg-[#e2e2e2]"></div>

          {/* Second Feature Block */}
          <div className="w-[383px] pt-2 flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-16 h-16 relative overflow-hidden">
              <Image
                src="/Feature1.svg"
                alt="Lock your Cash"
                width={64}
                height={64}
              />
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-full text-[#303030] text-2xl font-medium font-sans leading-loose">
                Lock your Cash
              </div>
              <div className="w-full text-[#616161] text-xl font-normal font-sans leading-normal">
                Set up a highly personalized spending plan in a few clicks.
              </div>
            </div>
          </div>

          {/* Second Divider */}
          <div className="w-[1px] h-[200px] bg-[#e2e2e2]"></div>

          {/* Third Feature Block */}
          <div className="w-[383px] pt-2 flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-16 h-16 relative overflow-hidden">
              <Image
                src="/Feature2.svg"
                alt="Track your spending"
                width={64}
                height={64}
              />
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-full text-[#303030] text-2xl font-medium font-sans leading-loose">
                Track your spending
              </div>
              <div className="w-full text-[#616161] text-xl font-normal font-sans leading-normal">
                Set aside funds in advance for your monthly bills and subscription fees.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;