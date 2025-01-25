'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SURVEY_URL } from './Context';
import { useRouter } from 'next/navigation';

const Footer: React.FC = () => {
  const router = useRouter();
  
  const handleSurveyClick = () => {
    router.push(SURVEY_URL);
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-[#ffffff] via-white to-[#fafcfe] px-4 sm:px-8 md:px-20 lg:px-[80px] py-12">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
          {/* Top Section */}
          <div className="flex justify-center">
            <div className="grow flex-col justify-center items-start gap-8 inline-flex">
              <div className="h-[70px] flex-col justify-start items-start gap-2 flex">
                <div className="text-[#303030] text-4xl font-bold font-['Geist'] leading-[43.20px]">
                  Get early access to Pacto
                </div>
                <div className="text-[#8b8b8b] text-base font-normal font-['Geist'] leading-tight">
                  Join our waitlist and be one of the first to try out Pacto
                </div>
              </div>
              <button 
                onClick={handleSurveyClick}
                className="px-6 py-3 bg-[#7773e1] rounded-xl justify-center items-center inline-flex hover:bg-[#7773e1]/90 transition-colors"
              >
                <div className="text-[#fcfcfc] text-base font-medium font-['Geist'] leading-normal">
                  Join the Waitlist
                </div>
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="h-[57px] py-2 flex items-center">
              <div className="w-[150px] h-auto relative aspect-square">
                <Image
                  src="/PactoLogo.svg"
                  alt="Pacto Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-16">
              <Link href="/terms" className="text-center text-[#616161] text-xs font-semibold font-['Geist'] underline leading-[14.40px]">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-center text-[#616161] text-xs font-semibold font-['Geist'] underline leading-[14.40px]">
                Privacy Policy
              </Link>
              <div className="text-center text-[#616161] text-xs font-semibold font-['Geist'] underline leading-[14.40px]">
                © 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer; 