// ======================================================================
// Context.tsx
// ----------------------------------------------------------------------
// This file defines a React functional component that renders a section
// with a heading and two content blocks. Every line of code and every 
// Tailwind CSS class is explained inline. This is designed to be a 
// complete, textbook-level explanation.
// ======================================================================

// "use client" tells Next.js that this component should be rendered
// entirely on the client-side (in the browser). This is required for
// components that include interactive behavior.
"use client";

// ----------------------------------------------------------------------
// Import Statements
// ----------------------------------------------------------------------
// Import React to use JSX and define React components.
import React from 'react';
// Import the Next.js Image component for optimized image handling, including
// automatic lazy-loading, resizing, and more.
import Image from 'next/image';

// ----------------------------------------------------------------------
// Constant: SURVEY_URL
// ----------------------------------------------------------------------
// This constant can be used to store a URL string for a survey.
// Currently, it's an empty string.
export const SURVEY_URL = "";

// ----------------------------------------------------------------------
// Component Definition: Context
// ----------------------------------------------------------------------
// Define a functional component named 'Context'.
// The component uses React.FC, which is a type for React Functional Components.
const Context: React.FC = () => {
  // --------------------------------------------------------------------
  // JSX Return: The component returns a section element with structured
  // content. Each element is styled with Tailwind CSS classes that are
  // explained inline.
  // --------------------------------------------------------------------
  return (
    // ------------------------------------------------------------------
    // <section> Container:
    // - w-full: Sets the width to 100% of the parent.
    // - flex: Applies CSS Flexbox layout.
    // - justify-center: Centers child elements horizontally.
    // - items-center: Centers child elements vertically.
    // This container centers its children both horizontally and vertically.
    // ------------------------------------------------------------------
    <section className="w-full flex justify-center items-center pt-[1px]">
      <div className="w-full h-auto px-6 md:px-16 lg:px-20 py-[30px] md:py-[60px] bg-[#fbfbfe] flex flex-col lg:flex-row lg:items-start lg:gap-20">
        {/* Column 1 */}
        <div className="h-auto lg:h-auto justify-center lg:justify-start items-center lg:items-start gap-3 flex w-full lg:w-[40%]">
          <div className="text-[#303030] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-sans leading-snug text-center lg:text-left">
            You should spend your money how you want.
          </div>
        </div>
        
        {/* Column 2 (contains Block 1 and Block 2) */}
        <div className="w-full mt-[60px] lg:mt-0 lg:w-[60%] flex flex-col md:flex-row justify-start items-start gap-10">
          {/* Block 1 */}
          <div className="w-full md:w-1/2 flex flex-row md:flex-col justify-start items-center md:items-start gap-2 md:gap-3 lg:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative overflow-hidden shrink-0">
              <Image
                src="/ContextImage1.svg"
                alt="Context Image 1"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </div>
            <div className="text-[#616161] text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-sans leading-normal">
              Pacto is being built because money management should be easy.
            </div>
          </div>

          {/* Block 2 */}
          <div className="w-full md:w-1/2 flex flex-row-reverse md:flex-col justify-start items-center md:items-start gap-2 md:gap-3 lg:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative overflow-hidden shrink-0">
              <Image
                src="/ContextImage2.svg"
                alt="Context Image 2"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </div>
            <div className="text-[#616161] text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-sans leading-normal">
              It should be easy to stick to a budget and track your spending.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// Default Export: Context Component
// ----------------------------------------------------------------------
// Export the Context component as the default export of this module.
export default Context;