'use client';

import React from 'react';
import Image from 'next/image';

const FeatureShowcase: React.FC = () => {
  return (
    <section className="w-full bg-transparent flex justify-center items-center">
      <div className="h-[694px] px-16 pt-20 pb-[120px] bg-[#fbfbfe] flex-col justify-end items-center gap-16 inline-flex">
        {/* Header Text Block */}
        <div className="h-[230px] flex-col justify-center items-center gap-3 flex">
          <div className="text-[#616161] text-2xl font-normal font-['Geist'] leading-loose">
            You remember when you said
          </div>
          <div className="text-[#616161] text-[59px] font-bold font-['Geist'] leading-[70.80px]">
            "I wish I had a second chance <br />with all that money I wasted!?”.
          </div>
          <div className="text-[#0a092a] text-2xl font-semibold font-['Geist'] leading-loose">
            Well Here's your chance.
          </div>
        </div>

        {/* Features Row */}
        <div className="h-[200px] justify-start items-center gap-10 inline-flex">
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
              <div className="w-[315px] text-[#303030] text-2xl font-medium font-['Geist'] leading-loose">
                Create a budget
              </div>
              <div className="w-[315px] text-[#616161] text-xl font-normal font-['Geist'] leading-normal">
                Once you've set your budget, Pacto does the heavy lifting.
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-[200px] h-[0px] origin-top-left rotate-90 border border-[#e2e2e2]"></div>

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
              <div className="w-[315px] text-[#303030] text-2xl font-medium font-['Geist'] leading-loose">
                Lock your Cash
              </div>
              <div className="w-[315px] text-[#616161] text-xl font-normal font-['Geist'] leading-normal">
                Set up a highly personalized spending plan in a few clicks.
              </div>
            </div>
          </div>

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
              <div className="w-[315px] text-[#303030] text-2xl font-medium font-['Geist'] leading-loose">
                Track your spending
              </div>
              <div className="w-[383px] text-[#616161] text-xl font-normal font-['Geist'] leading-normal">
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