'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Survey from './SurveyComponent';

interface FooterProps {
  onSurveyShow: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSurveyShow }) => {
  const [showSurvey, setShowSurvey] = useState(false);
  
  const handleSurveyClick = () => {
    onSurveyShow();
  };

  if (showSurvey) {
    return <Survey onClose={() => setShowSurvey(false)} />;
  }

  return (
    <footer className="w-full bg-gradient-to-b from-[#fbfbfe] via-[#f0f0ff] to-[#DAD9F1] px-6 md:px-16 2xl:px-20 py-8 sm:py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-start items-start gap-8 sm:gap-10 md:gap-12">
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10">
          {/* Text Content */}
          <div className="w-full md:w-auto flex flex-col justify-start items-start gap-2 sm:gap-3 md:gap-4">
            <h2 className="text-[#303030] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sans leading-tight">
              Get early access to Pacto
            </h2>
            <p className="text-[#8b8b8b] text-sm sm:text-base md:text-lg lg:text-xl font-normal font-sans leading-relaxed">
              Join our waitlist and be one of the first to try out Pacto
            </p>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleSurveyClick}
            className="px-4 sm:px-5 md:px-6 lg:px-7 py-2 sm:py-3 md:py-4 bg-[#7773e1] rounded-lg sm:rounded-xl md:rounded-2xl justify-center items-center inline-flex hover:bg-[#7773e1]/90 transition-colors"
          >
            <span className="text-[#fcfcfc] text-sm sm:text-base md:text-lg font-medium font-sans leading-tight">
              Join the Waitlist
            </span>
          </button>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8 md:gap-10">
          {/* Logo */}
          <div className="w-[100px] sm:w-[120px] md:w-[150px] relative flex flex-col items-center">
            <Image
              src="/PactoLogo.svg"
              alt="Pacto Logo"
              width={150}
              height={150}
              style={{ height: 'auto' }}
              priority
            />
          </div>

          {/* Links */}
          <div className="flex justify-start items-center gap-6 sm:gap-8 md:gap-10">
            <Link
              href="/terms"
              className="text-[#616161] text-xs sm:text-sm md:text-base font-normal font-sans underline hover:text-[#7773e1] transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-[#616161] text-xs sm:text-sm md:text-base font-normal font-sans underline hover:text-[#7773e1] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[#616161] text-xs sm:text-sm md:text-base font-normal font-sans">
              © 2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 