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
          - gap-16: Sets a gap of 16 units between child elements.
      ---------------------------------------------------------------- */}
      <div className="w-full max-w-screen-xl 2xl:max-w-none h-auto min-h-[694px] px-6 md:px-16 2xl:px-20 pt-20 pb-[120px] bg-[#fbfbfe] flex flex-col justify-end items-center gap-16">
        
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
          <div className="text-[#616161] text-xl sm:text-2xl md:text-3xl font-normal font-sans leading-loose">
            You remember when you said
          </div>
          
          {/* Main Header Text */}
          <div className="text-[#616161] text-[45px] sm:text-[50px] md:text-[55px] lg:text-[59px] xl:text-[65px] 2xl:text-[70px] font-bold font-sans leading-[60px] sm:leading-[65px] md:leading-[70.80px] lg:leading-[70.80px] xl:leading-[75px] 2xl:leading-[80px] text-center">
            I wish I had a second chance <br />with all that money I wasted!?
          </div>
          
          {/* Subheader Text */}
          <div className="text-[#0a092a] text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold font-sans leading-loose">
            Well Here's your chance.
          </div>
        </div>

        {/* ----------------------------------------------------------------
            Features Grid <div>:
            - w-full: Takes full width of its parent.
            - flex: Enables Flexbox layout.
            - flex-col: Arranges children vertically.
            - md:flex-row: Changes to row layout on medium screens and above.
            - justify-between: Distributes child elements evenly with space between.
            - items-center: Centers children vertically.
            - gap-10: Sets a gap of 10 units between child elements.
        ---------------------------------------------------------------- */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* -------------------------------
              First Feature Block <div>
              -------------------------------
              - w-full: Takes full width of its parent.
              - md:w-1/3: Changes width to 1/3 of the parent on medium screens and above.
              - pt-2: Top padding of 2 units.
              - flex-col: Arranges children vertically.
              - justify-start: Aligns children to the top.
              - items-start: Aligns children to the left.
              - gap-4: Gap of 4 units between children.
              - inline-flex: Displays as an inline-level flex container.
          */}
          <div className="w-full md:w-1/3 pt-2 flex flex-col justify-start items-start gap-4 inline-flex">
            {/* Icon/Image Container */}
            <div className="w-16 h-16 relative overflow-hidden"
              // w-16: Width set to 16 units (approx. 64px).
              // h-16: Height set to 16 units.
              // relative: Sets position to relative (useful for any absolutely positioned children).
              // overflow-hidden: Hides any content that overflows this container.
            >
              <Image
                src="/Feature0.svg" // Source path for the first feature icon.
                alt="Create a budget" // Alternative text for accessibility.
                width={64}          // Intrinsic width of the image.
                height={64}         // Intrinsic height of the image.
              />
            </div>
            {/* Text Block for First Feature */}
            <div className="flex-col justify-start items-start gap-2 flex"
              // flex-col: Arrange text elements vertically.
              // justify-start: Align text to the top.
              // items-start: Align text to the left.
              // gap-2: Gap of 2 units between text elements.
              // flex: Enables Flexbox layout.
            >
              {/* Feature Title */}
              <div className="w-full text-[#303030] text-2xl font-medium font-sans leading-loose"
                // w-full: Takes full width of the container.
                // text-[#303030]: Text color set to hex #303030.
                // text-2xl: Font size defined as 2xl.
                // font-medium: Medium font weight.
                // font-sans: Sans-serif font family.
                // leading-loose: Loose line-height.
              >
                Create a budget
              </div>
              {/* Feature Description */}
              <div className="w-full text-[#616161] text-xl font-normal font-sans leading-normal"
                // w-full: Takes full width of the container.
                // text-[#616161]: Text color set to hex #616161.
                // text-xl: Font size defined as xl.
                // font-normal: Normal font weight.
                // font-sans: Sans-serif font family.
                // leading-normal: Normal line-height.
              >
                Once you've set your budget, Pacto does the heavy lifting.
              </div>
            </div>
          </div>

          {/* --------------------------------
              First Divider <div>
              --------------------------------
              - hidden: Hides the divider on medium screens and above.
              - md:block: Shows the divider on medium screens and above.
              - w-[1px]: Fixed width of 1 pixel, forming a vertical line.
              - h-[200px]: Fixed height of 200 pixels.
              - bg-[#e2e2e2]: Background color set to hex #e2e2e2.
          */}
          <div className="hidden md:block w-[1px] h-[200px] bg-[#e2e2e2]"></div>

          {/* -------------------------------
              Second Feature Block <div>
              -------------------------------
              - w-full: Takes full width of its parent.
              - md:w-1/3: Changes width to 1/3 of the parent on medium screens and above.
              - pt-2: Top padding of 2 units.
              - flex-col: Arranges children vertically.
              - justify-start: Aligns children to the top.
              - items-start: Aligns children to the left.
              - gap-4: Gap of 4 units between children.
              - inline-flex: Displays as an inline-level flex container.
          */}
          <div className="w-full md:w-1/3 pt-2 flex flex-col justify-start items-start gap-4 inline-flex">
            {/* Icon/Image Container */}
            <div className="w-16 h-16 relative overflow-hidden"
              // w-16: Width of 16 units (approx. 64px).
              // h-16: Height of 16 units.
              // relative: Positions the container relative to its normal position.
              // overflow-hidden: Hides any overflowing content.
            >
              <Image
                src="/Feature1.svg" // Source path for the second feature icon.
                alt="Lock your Cash" // Alternative text for accessibility.
                width={64}          // Intrinsic width of 64 pixels.
                height={64}         // Intrinsic height of 64 pixels.
              />
            </div>
            {/* Text Block for Second Feature */}
            <div className="flex-col justify-start items-start gap-2 flex"
              // flex-col: Arrange text elements vertically.
              // justify-start: Aligns children to the top.
              // items-start: Aligns children to the left.
              // gap-2: Gap of 2 units between text elements.
              // flex: Enables Flexbox layout.
            >
              {/* Feature Title */}
              <div className="w-full text-[#303030] text-2xl font-medium font-sans leading-loose"
                // w-full: Full width.
                // text-[#303030]: Text color set to hex #303030.
                // text-2xl: Font size defined as 2xl.
                // font-medium: Medium font weight.
                // font-sans: Sans-serif font family.
                // leading-loose: Loose line-height.
              >
                Lock your Cash
              </div>
              {/* Feature Description */}
              <div className="w-full text-[#616161] text-xl font-normal font-sans leading-normal"
                // w-full: Full width.
                // text-[#616161]: Text color set to hex #616161.
                // text-xl: Font size defined as xl.
                // font-normal: Normal font weight.
                // font-sans: Sans-serif font family.
                // leading-normal: Normal line-height.
              >
                Set up a highly personalized spending plan in a few clicks.
              </div>
            </div>
          </div>

          {/* --------------------------------
              Second Divider <div>
              --------------------------------
              - hidden: Hides the divider on medium screens and above.
              - md:block: Shows the divider on medium screens and above.
              - w-[1px]: Fixed width of 1 pixel.
              - h-[200px]: Fixed height of 200 pixels.
              - bg-[#e2e2e2]: Background color set to hex #e2e2e2.
          */}
          <div className="hidden md:block w-[1px] h-[200px] bg-[#e2e2e2]"></div>

          {/* -------------------------------
              Third Feature Block <div>
              -------------------------------
              - w-full: Takes full width of its parent.
              - md:w-1/3: Changes width to 1/3 of the parent on medium screens and above.
              - pt-2: Top padding of 2 units.
              - flex-col: Arranges children vertically.
              - justify-start: Aligns children to the top.
              - items-start: Aligns children to the left.
              - gap-4: Gap of 4 units between children.
              - inline-flex: Displays as an inline-level flex container.
          */}
          <div className="w-full md:w-1/3 pt-2 flex flex-col justify-start items-start gap-4 inline-flex">
            {/* Icon/Image Container */}
            <div className="w-16 h-16 relative overflow-hidden"
              // w-16: Width of 16 units (approx. 64px).
              // h-16: Height of 16 units.
              // relative: Positions this container relatively.
              // overflow-hidden: Hides content that exceeds the container.
            >
              <Image
                src="/Feature2.svg" // Source path for the third feature icon.
                alt="Track your spending" // Alternative text for accessibility.
                width={64}             // Intrinsic width of 64 pixels.
                height={64}            // Intrinsic height of 64 pixels.
              />
            </div>
            {/* Text Block for Third Feature */}
            <div className="flex-col justify-start items-start gap-2 flex"
              // flex-col: Arrange children vertically.
              // justify-start: Align children to the top.
              // items-start: Align children to the left.
              // gap-2: Gap of 2 units between children.
              // flex: Enables Flexbox layout.
            >
              {/* Feature Title */}
              <div className="w-full text-[#303030] text-2xl font-medium font-sans leading-loose"
                // w-full: Full width.
                // text-[#303030]: Text color set to hex #303030.
                // text-2xl: Font size defined as 2xl.
                // font-medium: Medium font weight.
                // font-sans: Sans-serif font family.
                // leading-loose: Loose line-height.
              >
                Track your spending
              </div>
              {/* Feature Description */}
              <div className="w-full text-[#616161] text-xl font-normal font-sans leading-normal"
                // w-full: Full width.
                // text-[#616161]: Text color set to hex #616161.
                // text-xl: Font size defined as xl.
                // font-normal: Normal font weight.
                // font-sans: Sans-serif font family.
                // leading-normal: Normal line-height.
              >
                Set aside funds in advance for your monthly bills and subscription fees.
              </div>
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