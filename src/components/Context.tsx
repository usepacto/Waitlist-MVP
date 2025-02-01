'use client';

import React from 'react';

export const SURVEY_URL = "";

const Context: React.FC = () => {
  return (
    <section className="w-full flex justify-center items-center">
      {/* Outer Container */}
      <div
        className={`
          inline-flex flex-col bg-[#fbfbfe]
          h-[195px] px-[15px] py-10 gap-10 items-center justify-start
          md:h-[188.80px] md:px-6 md:py-10 md:gap-[23.17px] md:items-start
          lg:h-[355px] lg:px-[25px] lg:pt-20 lg:pb-[120px] lg:gap-10 lg:items-start
        `}
      >
        {/* Inner Text Container */}
        <div
          className={`
            flex flex-col self-stretch h-[115px] justify-start items-center gap-4
            md:h-[108.80px] md:py-[11.58px] md:justify-center md:items-center
            lg:h-[155px] lg:py-5 lg:justify-center lg:items-center
          `}
        >
          {/* Heading */}
          <div
            className={`
              self-stretch text-center text-[#303030]
              text-xl font-semibold font-['Geist'] leading-normal
              lg:text-4xl lg:font-bold lg:leading-[43.20px]
            `}
          >
            We all Know how hard it is to manage money.
          </div>
          {/* Paragraph */}
          <div
            className={`
              self-stretch text-center text-[#616161]
              text-sm font-normal font-['Geist'] leading-[16.80px]
              md:text-base md:leading-tight
              lg:text-2xl lg:leading-loose lg:w-[946px] xl:w-[946px]
            `}
          >
            You remember when you said “I wish I had a second chance with all the money I wasted!”. We can’t bring that money back but we can help you stop wasting it.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Context;