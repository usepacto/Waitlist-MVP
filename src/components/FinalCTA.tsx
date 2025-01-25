'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const FinalCTA: React.FC = () => {
  const router = useRouter();
  
  const handleSurveyClick = () => {
    router.push('/survey');
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
          className="bg-[#7773E1] text-white px-6 py-3 rounded-lg hover:bg-[#7773E1]/90 active:bg-[#7773E1]/80 transition-colors"
        >
          Join the waitlist
        </button>
      </div>
    </section>
  );
};

export default FinalCTA; 