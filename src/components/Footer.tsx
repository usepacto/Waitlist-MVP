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
    <footer
      className={`
        w-full bg-gradient-to-b from-[#fbfbfe] via-[#f0f0ff] to-[#DAD9F1]
        /* PHONE */
        min-h-[359px] px-4 py-8
        /* TABLET */
        md:px-12 md:py-10
        /* DESKTOP */
        lg:px-20 lg:py-12
      `}
    >
      {/* Main Container */}
      <div
        className={`
          w-full flex flex-col justify-start items-start
          /* PHONE */
          h-[263px] gap-8
          /* TABLET */
          md:gap-10
          /* DESKTOP */
          lg:gap-12
        `}
      >
        {/* Top Section */}
        <div className="w-full flex justify-center items-end gap-10">
          <div className="grow shrink basis-0 flex flex-col justify-center items-start gap-8">
            {/* Text Content */}
            <div className="flex flex-col justify-start items-start gap-2">
              <h2
                className={`
                  w-full text-[#303030] font-sans
                  /* PHONE */
                  text-2xl font-bold leading-[33.60px]
                  /* TABLET */
                  md:text-3xl md:leading-[38.40px]
                  /* DESKTOP */
                  lg:text-4xl lg:leading-[43.20px]
                `}
              >
                Get early access to Pacto
              </h2>
              <p
                className={`
                  w-full text-[#8b8b8b] font-sans
                  /* PHONE */
                  text-sm font-normal leading-tight
                  /* TABLET */
                  md:text-base
                `}
              >
                Join our waitlist and be one of the first to try out Pacto
              </p>
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleSurveyClick}
              className={`
                bg-[#7773e1] flex justify-center items-center hover:bg-[#7773e1]/90 transition-colors
                /* PHONE */
                px-4 py-2 rounded-lg
                /* TABLET */
                md:px-5 md:py-2.5 md:rounded-xl
                /* DESKTOP */
                lg:px-6 lg:py-3 lg:rounded-[14px]
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
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Logo */}
          <div
            className={`
              relative overflow-hidden
              /* PHONE */
              w-[100px]
              /* TABLET */
              md:w-[120px]
              /* DESKTOP */
              lg:w-[150px]
            `}
          >
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
          <div
            className={`
              flex justify-start items-center
              /* PHONE */
              gap-8
              /* TABLET */
              md:gap-12
              /* DESKTOP */
              lg:gap-16
            `}
          >
            <Link
              href="/terms"
              className={`
                text-center text-[#616161] font-sans underline
                /* PHONE */
                text-[10px] leading-3
                /* TABLET */
                md:text-xs md:leading-[14.40px]
              `}
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className={`
                text-center text-[#616161] font-sans underline
                /* PHONE */
                text-[10px] leading-3
                /* TABLET */
                md:text-xs md:leading-[14.40px]
              `}
            >
              Privacy Policy
            </Link>
            <span
              className={`
                text-center text-[#616161] font-sans underline
                /* PHONE */
                text-[10px] leading-3
                /* TABLET */
                md:text-xs md:leading-[14.40px]
              `}
            >
              © 2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 