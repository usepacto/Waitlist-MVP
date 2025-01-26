'use client';

import React from 'react';
import { SURVEY_URL } from './Context';

const FinalCTA: React.FC = () => {
  const handleSurveyClick = () => {
    window.open(SURVEY_URL, '_blank');
  };

  return (
    <section className="w-full min-h-[439px] py-16 md:py-[120px] bg-[#fafcfe] flex justify-center items-center">
      <div className="w-full max-w-[800px] px-6 md:px-[25px] flex flex-col justify-center items-center gap-8 md:gap-[50px]">
        <div className="w-full flex flex-col justify-start items-center gap-4 md:gap-[18px]">
          <h2 className="w-full text-center text-[#303030] text-3xl md:text-4xl font-bold font-['Geist'] leading-[1.2] md:leading-[43.20px]">
            Ready to Leave Money Stress Behind?
          </h2>
          <p className="w-full text-center text-[#616161] text-xl md:text-2xl font-normal font-['Geist'] leading-relaxed md:leading-loose">
            Take control with a budgeting partner that does the legwork for you...
          </p>
        </div>
        <button 
          onClick={handleSurveyClick}
          className="px-6 py-3 bg-[#7773e1] rounded-[14px] flex justify-center items-center hover:bg-[#7773e1]/90 transition-colors"
        >
          <span className="text-[#fcfcfc] text-base font-medium font-['Geist'] leading-normal">
            Join the Waitlist
          </span>
        </button>
      </div>
    </section>
  );
};

export default FinalCTA; 