// =====================================================================
// HeroSection.annotated.tsx
// ---------------------------------------------------------------------
// This file contains a fully annotated version of the HeroSection component.
// Every line of code, component, and utility is explained in detail so you 
// can understand exactly what each piece does. Use this file as a reference
// to learn how the component works internally.
// =====================================================================

"use client"; // Instructs Next.js to render this component on the client side.

import React, { useState } from 'react'; // Import React and the useState hook for managing component state.
import Image from 'next/image'; // Import the Next.js Image component for optimized image handling.
import Survey from './SurveyComponent'; // Import the Survey component which may be displayed conditionally.

// Define the props interface for the HeroSection component.
// The component expects a single prop:
// - onSurveyShow: a function that takes no arguments and returns nothing (void), used to notify the parent component when the survey should be shown.
interface HeroSectionProps {
  onSurveyShow: () => void;
}

// Define and export the HeroSection component as the default export of this module.
// It is a functional component that takes props of type HeroSectionProps and returns a React element.
export default function HeroSection({ onSurveyShow }: HeroSectionProps): React.ReactElement {
  // Initialize local state 'showSurvey' using the useState hook.
  // 'showSurvey' determines whether the Survey component should be displayed or not.
  const [showSurvey, setShowSurvey] = useState(false);

  // Define a function that is triggered when the 'Join the waitlist' button is clicked.
  // This function calls the onSurveyShow prop function to notify the parent component.
  const handleSurveyClick = () => {
    onSurveyShow();
    // Optionally, we could update the local state to show the Survey component by calling setShowSurvey(true).
  };

  // Conditional rendering: if showSurvey is true, render the Survey component instead of the hero content.
  // The Survey component receives an onClose prop, which is a function to hide the survey by setting showSurvey to false.
  if (showSurvey) {
    return <Survey onClose={() => setShowSurvey(false)} />;
  }

  // Main return block: renders the hero section layout using JSX.
  // This layout includes a headline, a subheading, a call-to-action button, and a hero image.
  // Tailwind CSS classes are used to style every element, with inline comments explaining each class's purpose.
  return (
    <div className="w-[1440px] h-[1328px] pb-[325px] bg-[#fbfbfe] justify-center items-center inline-flex overflow-hidden">
      {/* Outer Container: Sets overall dimensions, background color, padding, and flex layout properties for centering content. */}
      <div className="grow shrink basis-0 self-stretch px-24 pt-24 bg-gradient-to-b from-[#fbfbfe] via-[#f0f0ff] to-[#DAD9F1] flex-col justify-start items-center gap-32 inline-flex">
        {/* Second-Level Container: Adds responsive padding and a vertical gradient background. */}
        <div className="self-stretch h-[907px] flex-col justify-start items-center gap-[60px] flex">
          {/* Third-Level Container: Organizes all content vertically with defined spacing. */}
          <div className="self-stretch h-[322px] flex-col justify-start items-center gap-6 flex">
            {/* Container for the headline, subheading, and action button. */}
            <div className="self-stretch h-[247px] flex-col justify-start items-center gap-3 flex">
              {/* Text Container: Holds the headline and subheading texts. */}
              <div className="self-stretch text-center text-[#303030] text-8xl font-bold font-sans leading-[96px]">
                {/* Headline: A bold, large text element that captures the main message. */}
                The easiest way to manage money.
              </div>
              <div className="text-[#616161] text-4xl font-normal font-sans leading-[43.20px]">
                {/* Subheading: Provides a supportive message that elaborates on the headline. */}
                Stay in control of your finances because we make it easy.
              </div>
            </div>
            <button
              onClick={handleSurveyClick} // When clicked, this triggers the handleSurveyClick function.
              className="px-7 py-4 bg-[#7773e1] rounded-2xl justify-center items-center inline-flex hover:bg-[#7773e1]/90 transition-colors"
            >
              {/* Button: Styled with Tailwind CSS to include padding, background color, rounded edges, and hover transitions. */}
              <div className="text-[#fbfbfe] text-base font-medium font-sans leading-tight">
                {/* Button Label: Invites the user to join the waitlist. */}
                Join the waitlist
              </div>
            </button>
          </div>
          <div className="self-stretch h-[525px] px-40 flex-col justify-start items-center gap-2.5 flex">
            {/* Container for the Hero Image: Displays an image alongside the text content. */}
            <Image
              src="/HeroImage.svg"           // Source path for the hero image asset.
              alt="Hero Image"              // Alternative text for accessibility purposes.
              width={1024}                   // Intrinsic width of the image in pixels.
              height={640}                   // Intrinsic height of the image in pixels.
              className="w-[1024px] h-[640px] rounded-xl shadow-[0px_50px_50px_0px_rgba(0,0,0,0.03)] border border-[#e2e2e2]"
              /* Tailwind CSS classes applied:
                 w-[1024px] and h-[640px]: Define explicit dimensions for the rendered image.
                 rounded-xl: Applies extra-large rounded corners to soften the image edges.
                 shadow-[0px_50px_50px_0px_rgba(0,0,0,0.03)]: Adds a subtle shadow to give the image depth.
                 border and border-[#e2e2e2]: Adds a border with a specified color for visual separation. */
              priority                       // Indicates that the image should be prioritized during page load, important for above-the-fold content.
            />
          </div>
        </div>
      </div>
    </div>
  );
} 