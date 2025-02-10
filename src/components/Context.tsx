'use client';

import React from 'react';
import Image from 'next/image';

export const SURVEY_URL = "";

const Context: React.FC = () => {
  return (
    <section className="w-full flex justify-center items-center">
      {/* Outer Container */}
      <div className="w-[1440px] h-[368px] px-16 pt-20 pb-[120px] bg-[#fbfbfe] justify-start items-start gap-16 inline-flex">
        {/* Heading */}
        <div className="h-[86px] justify-start items-start gap-3 flex">
          <div className="text-[#616161] text-4xl font-bold font-sans leading-[43.20px]">
            You should spend your money how you want.
          </div>
        </div>
        {/* Content Blocks */}
        <div className="justify-start items-start gap-10 flex">
          <div className="w-80 pt-2 flex-col justify-start items-start inline-flex">
            <div className="w-16 h-16 relative overflow-hidden">
              <Image
                src="/ContextImage1.svg"
                alt="Context Image 1"
                width={64}
                height={64}
              />
            </div>
            <div className="self-stretch h-24 text-[#616161] text-2xl font-normal font-sans leading-[28.80px]">
              Pacto is being built because money management should be easy.
            </div>
          </div>
          <div className="w-80 pt-2 flex-col justify-start items-start inline-flex">
            <div className="w-16 h-16 relative overflow-hidden">
              <Image
                src="/ContextImage2.svg"
                alt="Context Image 2"
                width={64}
                height={64}
              />
            </div>
            <div className="self-stretch text-[#616161] text-2xl font-normal font-sans leading-[28.80px]">
              It should be easy to stick to a budget. It should be easy to track your spending.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Context;