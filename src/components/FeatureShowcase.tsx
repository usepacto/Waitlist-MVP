// ======================================================================
// FeatureShowcase.tsx
// ----------------------------------------------------------------------
// This file defines the FeatureShowcase component—a React Functional
// Component that displays a header text block and a grid of three feature
// blocks. Each feature block includes an icon (using Next.js's Image
// component) and descriptive text. Every line and Tailwind CSS class is
// commented in detail for educational purposes.
// ======================================================================

// "use client" tells Next.js to render this component on the client side,
// enabling interactive behaviors and client-side hooks.
"use client";

// ----------------------------------------------------------------------
// Import Statements
// ----------------------------------------------------------------------
// Import React to create components and JSX.
// Import Next.js's Image component for optimized image handling.
import React from 'react';
import Image from 'next/image';

// ----------------------------------------------------------------------
// Component Definition: FeatureShowcase
// ----------------------------------------------------------------------
// Define the FeatureShowcase component as a React Functional Component (React.FC).
const FeatureShowcase: React.FC = () => {
  return (
    // ------------------------------------------------------------------
    // <section> Container:
    // - w-full: Sets width to 100% of the parent container.
    // - flex: Enables Flexbox layout.
    // - justify-center: Centers child elements horizontally.
    // - items-center: Centers child elements vertically.
    <section className="w-full flex justify-center items-center">
      
      {/* ----------------------------------------------------------------
          Inner Container <div>:
          - w-full: Sets width to 100% of the parent container.
          - max-w-screen-xl: Sets maximum width to screen size of 1440px.
          - 2xl:max-w-none: Removes max width restriction.
          - h-auto: Sets height to auto (content-based).
          - min-h-[694px]: Sets minimum height of 694px.
          - px-6: Applies horizontal padding (left/right) using Tailwind's scale.
          - pt-20: Applies top padding (scale 20).
          - pb-[120px]: Applies bottom padding of 120 pixels.
          - bg-[#fbfbfe]: Sets the background color to hex #fbfbfe.
          - flex: Enables Flexbox layout.
          - flex-col: Arranges children vertically.
          - justify-end: Aligns children to the bottom of the container.
          - items-center: Centers children horizontally.
          - gap-10: Sets a gap of 10 units between child elements.
      ---------------------------------------------------------------- */}
      <div className="w-full h-auto min-h-[694px] px-6 md:px-16 2xl:px-20 pt-[40px] md:pt-[120px] pb-[120px] bg-[#fbfbfe] flex flex-col justify-end items-center gap-10 md:gap-20">
        
        {/* ----------------------------------------------------------------
            Header Text Block <div>:
            - w-full: Sets width to 100% of the parent container.
            - lg:w-auto: Removes max width restriction on larger screens.
            - flex-col: Arranges children vertically.
            - justify-center: Centers children vertically.
            - items-center: Centers children horizontally.
            - gap-3: Sets a gap of 3 units between text lines.
            - flex: Enables Flexbox layout.
            - pb-4: Applies bottom padding of 4 pixels.
            - lg:pb-0: Removes bottom padding on larger screens.
        ---------------------------------------------------------------- */}
        <div className="w-full lg:w-auto flex-col justify-center items-center gap-3 flex pb-4 lg:pb-0">
          
          {/* First Header Line */}
          <div className="text-[#616161] text-l sm:text-xl md:text-3xl font-normal font-sans leading-loose">
            You remember when you said
          </div>
          
          {/* Main Header Text */}
          <div className="text-[#0a092a] text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-sans leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight text-center">
            I wish I had a second chance <br />with all that money I wasted!?
          </div>
          {/* Subheader Text */}
          <div className="text-[#616161] text-l sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold font-sans leading-loose">
            Well Here's your chance.
          </div>
        </div>

        {/* Features Container */}
        <div className="w-full flex flex-col md:flex-row justify-start items-start gap-10">
          {/* Feature 1 */}
          <div className="w-full md:w-1/3 flex flex-row md:flex-col justify-start items-center md:items-start gap-2 md:gap-3 lg:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative overflow-hidden shrink-0">
              <Image
                src="/Feature0.svg"
                alt="Create a budget"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </div>
            <div className="text-[#616161] text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-sans leading-normal">
              Once you've set your budget, Pacto does the heavy lifting.
            </div>
          </div>

          {/* Divider 1 */}
          <div className="hidden md:block w-[1px] h-[200px] bg-[#e2e2e2]"></div>

          {/* Feature 2 */}
          <div className="w-full md:w-1/3 flex flex-row-reverse md:flex-col justify-between md:justify-start items-center md:items-start gap-2 md:gap-3 lg:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative overflow-hidden shrink-0">
              <Image
                src="/Feature1.svg"
                alt="Lock your Cash"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </div>
            <div className="text-[#616161] text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-sans leading-normal">
              Set up a highly personalized budgets and spendingplan in a few clicks.
            </div>
          </div>

          {/* Divider 2 */}
          <div className="hidden md:block w-[1px] h-[200px] bg-[#e2e2e2]"></div>

          {/* Feature 3 */}
          <div className="w-full md:w-1/3 flex flex-row md:flex-col justify-start items-center md:items-start gap-2 md:gap-3 lg:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative overflow-hidden shrink-0">
              <Image
                src="/Feature2.svg"
                alt="Track your spending"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </div>
            <div className="text-[#616161] text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-sans leading-normal">
              Set aside funds in advance for your monthly bills and subscription fees.
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// Export Statement
// ----------------------------------------------------------------------
// Export the FeatureShowcase component as the default export of this module.
export default FeatureShowcase;