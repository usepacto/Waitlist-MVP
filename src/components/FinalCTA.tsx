'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const FinalCTA: React.FC = () => {
  const router = useRouter();
  
  const handleSurveyClick = () => {
    router.push('/survey');
  };

  return (
    <section
      className={`
        w-full bg-[#fbfbfe] flex justify-center items-center
        /* PHONE */
        min-h-[359px] py-12
        /* TABLET */
        md:py-16
        /* DESKTOP */
        lg:py-[120px]
      `}
    >
      {/* Main Container */}
      <div
        className={`
          w-full flex flex-col justify-center items-center
          /* PHONE */
          max-w-[600px] px-4 gap-6
          /* TABLET */
          md:max-w-[700px] md:px-6 md:gap-8
          /* DESKTOP */
          lg:max-w-[800px] lg:px-[25px] lg:gap-[50px]
        `}
      >
        {/* Text Content */}
        <div
          className={`
            w-full flex flex-col justify-start items-center
            /* PHONE */
            gap-3
            /* TABLET */
            md:gap-4
            /* DESKTOP */
            lg:gap-[18px]
          `}
        >
          {/* Title */}
          <h2
            className={`
              w-full text-center text-[#303030] font-sans
              /* PHONE */
              text-2xl font-bold leading-[1.2]
              /* TABLET */
              md:text-3xl
              /* DESKTOP */
              lg:text-4xl lg:leading-[43.20px]
            `}
          >
            Ready to Leave Money Stress Behind?
          </h2>

          {/* Description */}
          <p
            className={`
              w-full text-center text-[#616161] font-sans
              /* PHONE */
              text-lg font-normal leading-relaxed
              /* TABLET */
              md:text-xl
              /* DESKTOP */
              lg:text-2xl lg:leading-loose
            `}
          >
            Take control with a budgeting partner that does the legwork for you...
          </p>
        </div>

        {/* CTA Button */}
        <button 
          onClick={handleSurveyClick}
          className={`
            bg-[#7773e1] flex justify-center items-center hover:bg-[#7773e1]/90 transition-colors
            /* PHONE */
            px-5 py-3 rounded-xl
            /* TABLET */
            md:px-6 md:py-3.5
            /* DESKTOP */
            lg:px-7 lg:py-4 lg:rounded-2xl
          `}
        >
          <span
            className={`
              text-[#fcfcfc] font-medium font-sans
              /* PHONE */
              text-sm leading-normal
              /* TABLET */
              md:text-base
            `}
          >
            Join the Waitlist
          </span>
        </button>
      </div>
    </section>
  );
};

export default FinalCTA; 