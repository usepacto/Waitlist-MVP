'use client';

import React from 'react';

export const SURVEY_URL = "https://tally.so/r/mOPMRd";

const Context: React.FC = () => {
  return (
    <section className="w-full py-24 flex justify-center items-center">
      <div className="max-w-[1440px] w-full px-6 md:px-10 flex flex-col items-center gap-4">
        <h2 className="text-[#303030] text-4xl font-bold leading-[43.20px] text-center">
          We all Know how hard it is to manage money.
        </h2>
        <p className="text-[#616161] text-2xl font-normal leading-loose text-center max-w-[900px]">
          You remember when you said "I wish I had a second chance with all the money I wasted!". We can't bring that money back but we can help you stop wasting it.
        </p>
      </div>
    </section>
  );
};

export default Context; 