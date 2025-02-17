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
    <section className="w-full flex justify-center items-center">
    <div className="w-full  h-auto min-h-[300px] px-6 md:px-16 2xl:px-20 pt-20 pb-[120px] bg-[#fbfbfe] flex flex-col lg:flex-row lg:items-start lg:gap-16">
    
    {/* Header: Positioned dynamically based on screen size */}
    <div className="h-auto lg:h-auto justify-start items-start gap-3 flex w-full lg:w-auto pb-4 lg:pb-0">
      <div className="text-[#616161] text-2xl sm:text-3xl md:text-4xl font-bold font-sans leading-tight">
        You should spend your money how you want.
      </div>
    </div>
    
    {/* Content Blocks Container */}
    <div className="w-full flex flex-col md:flex-row justify-start items-start gap-10">
      
      {/* First Content Block */}
      <div className="w-full md:w-1/2 pt-2 flex flex-col justify-start items-start">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative overflow-hidden">
          <Image
            src="/ContextImage1.svg"
            alt="Context Image 1"
            width={64}
            height={64}
            className="w-full h-full"
          />
        </div>
        <div className="self-stretch h-auto text-[#616161] text-lg sm:text-xl md:text-2xl font-normal font-sans leading-relaxed">
          Pacto is being built because money management should be easy.
        </div>
      </div>

      {/* Second Content Block */}
      <div className="w-full md:w-1/2 pt-2 flex flex-col justify-start items-start">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative overflow-hidden">
          <Image
            src="/ContextImage2.svg"
            alt="Context Image 2"
            width={64}
            height={64}
            className="w-full h-full"
          />
        </div>
        <div className="self-stretch h-auto text-[#616161] text-lg sm:text-xl md:text-2xl font-normal font-sans leading-relaxed">
          It should be easy to stick to a budget. It should be easy to track your spending.
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