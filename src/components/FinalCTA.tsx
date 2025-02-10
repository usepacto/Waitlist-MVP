'use client';

import React, { useState } from 'react';
import Survey from './SurveyComponent';

interface FinalCTAProps {
  onSurveyShow: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onSurveyShow }) => {
  const [showSurvey, setShowSurvey] = useState(false);
  
  const handleSurveyClick = () => {
    onSurveyShow();
  };

  if (showSurvey) {
    return <Survey onClose={() => setShowSurvey(false)} />;
  }

  return (
    <div className="w-full h-[354px] pt-20 pb-[120px] bg-[#fbfbfe] flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="h-[154px] px-[25px] flex-col justify-center items-center gap-6 flex">
        <div className="self-stretch h-[79px] flex-col justify-center items-start gap-3 flex">
          <div className="self-stretch text-center text-[#303030] text-4xl font-bold font-sans leading-[43.20px]">
            Control your impulse spending!
          </div>
          <div className="self-stretch text-center text-[#616161] text-xl font-normal font-sans leading-normal">
            Take control with a budgeting partner that does the legwork for you.
          </div>
        </div>
        <button 
          onClick={handleSurveyClick}
          className="px-7 py-4 bg-[#7773e1] rounded-2xl justify-center items-center inline-flex hover:bg-[#7773e1]/90 transition-colors"
        >
          <div className="text-[#fcfcfc] text-base font-medium font-sans leading-tight">
            Join the Waitlist
          </div>
        </button>
      </div>
    </div>
  );
};

export default FinalCTA; 