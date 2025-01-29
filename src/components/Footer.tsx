'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Footer: React.FC = () => {
  const router = useRouter();
  
  const handleSurveyClick = () => {
    router.push('/survey');
  };

  return (
    <footer className="w-full min-h-[359px] px-20 py-12 bg-[#fafcfe]">
      <div className="w-full h-[263px] flex flex-col justify-start items-start gap-12">
        {/* Top Section */}
        <div className="w-full flex justify-center items-end gap-10">
          <div className="grow shrink basis-0 flex flex-col justify-center items-start gap-8">
            <div className="flex flex-col justify-start items-start gap-2">
              <h2 className="w-full text-[#303030] text-4xl font-bold leading-[43.20px]">
                Get early access to Pacto
              </h2>
              <p className="w-full text-[#8b8b8b] text-base font-normal leading-tight">
                Join our waitlist and be one of the first to try out Pacto
              </p>
            </div>
            <button 
              onClick={handleSurveyClick}
              className="px-6 py-3 bg-[#7773e1] rounded-[14px] flex justify-center items-center hover:bg-[#7773e1]/90 transition-colors"
            >
              <span className="text-[#fcfcfc] text-base font-medium leading-normal">
                Join the Waitlist
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <div className="w-[150px] relative overflow-hidden">
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
          <div className="flex justify-start items-center gap-16">
            <Link href="/terms" className="text-center text-[#616161] text-xs font-semibold underline leading-[14.40px]">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-center text-[#616161] text-xs font-semibold underline leading-[14.40px]">
              Privacy Policy
            </Link>
            <span className="text-center text-[#616161] text-xs font-semibold underline leading-[14.40px]">
              © 2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 