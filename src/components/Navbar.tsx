'use client';

import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav
      className={`
        w-full 
        bg-[#fafcfe] 
        /* Phone (default) styles */
        h-[32.70px] px-[15px] py-[4.88px]
        /* Medium screens (e.g., 13-inch) */
        md:h-[53.86px] md:px-6 md:py-[10.42px]
        /* Large and XL screens */
        lg:px-[25px] lg:py-[18px]
      `}
    >
      <div className="inline-flex justify-between items-center w-full">
        <div
          className={`
            relative overflow-hidden 
            /* Phone: logo container dimensions */
            w-[60px] h-[22.95px]
            /* Medium: logo container dimensions */
            md:w-[86.30px] md:h-[33.01px]
            /* Large: logo container dimensions */
            lg:w-[150px] lg:h-auto
          `}
        >
          <Image
            src="/PactoLogo.svg"
            alt="Pacto Logo"
            width={150}
            height={150}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </nav>
  );
}