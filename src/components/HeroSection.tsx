// "use client" tells Next.js to render this component on the client-side
// (i.e., in the browser) rather than on the server. This is required for
// interactive features like state management and event handling.
"use client";

// ---------------------------------------------------------------------
// Import statements
// ---------------------------------------------------------------------
// Import React and the useState hook from the 'react' library.
// - React: The core library for building user interfaces.
// - useState: A React hook that allows us to add state to functional components.
import React, { useState } from 'react';

// Import the Next.js Image component, which provides image optimization features
// such as lazy loading, resizing, and more.
import Image from 'next/image';

// Import a custom Survey component from a local file (e.g., SurveyComponent.tsx).
// This component likely displays a survey form.
import Survey from './SurveyComponent';

// ---------------------------------------------------------------------
// Define the props interface for the HeroSection component
// ---------------------------------------------------------------------
// This interface specifies that the HeroSection component expects one prop:
// - onSurveyShow: A function that takes no arguments and returns nothing (void).
//   The 'void' return type indicates that the function does not return a value.
interface HeroSectionProps {
  onSurveyShow: () => void; // '() => void' means: a function with no parameters that returns nothing.
}

// ---------------------------------------------------------------------
// Define and export the HeroSection component
// ---------------------------------------------------------------------
// This is a functional component that accepts props of type HeroSectionProps
// and returns a React element. It is the default export of this file.
export default function HeroSection({ onSurveyShow }: HeroSectionProps): React.ReactElement {
  // -------------------------------------------------------------------
  // Local state: showSurvey
  // -------------------------------------------------------------------
  // useState hook creates a state variable 'showSurvey' that determines whether
  // the survey should be displayed. It also provides the 'setShowSurvey' function
  // to update this state. Initially, showSurvey is set to false (survey is hidden).
  const [showSurvey, setShowSurvey] = useState(false);

  // -------------------------------------------------------------------
  // Function: handleSurveyClick
  // -------------------------------------------------------------------
  // This function is called when the "Join the waitlist" button is clicked.
  // It calls the onSurveyShow function (passed down as a prop) to notify the
  // parent component, and it could also update local state to show the survey.
  const handleSurveyClick = () => {
    onSurveyShow(); // Notify the parent component that the survey should be shown.
    // Optionally, update the local state to display the Survey component here:
    // setShowSurvey(true);
  };

  // -------------------------------------------------------------------
  // Conditional Rendering: Show Survey if needed
  // -------------------------------------------------------------------
  // If the local state 'showSurvey' is true, then render the Survey component
  // instead of the hero section. The Survey component receives an onClose prop,
  // which is a function to set showSurvey back to false when the survey is closed.
  if (showSurvey) {
    return (
      // Render the Survey component, passing an onClose function as a prop.
      <Survey onClose={() => setShowSurvey(false)} />
    );
  }

  // -------------------------------------------------------------------
  // Main JSX Return: Hero Section
  // -------------------------------------------------------------------
  // This block returns the hero section of the page. It includes a headline,
  // subheading, a button, and an image. Tailwind CSS classes are used to style
  // every element. Each class is explained inline.
  return (
   
      <div
        className="grow shrink basis-0 self-stretch pb-20 sm:pb-28 md:pb-40 px-[1.5rem] lg:px-[6rem] 2xl:px-[8rem] pt-24 bg-gradient-to-b from-[#fbfbfe] via-[#f0f0ff] to-[#DAD9F1] flex-col justify-start items-center gap-[1.25rem] lg:gap-[5rem] 2xl:gap-[6rem] inline-flex"
        // grow: Allows this div to grow to fill available space in its flex container.
        // shrink: Allows this div to shrink if necessary.
        // basis-0: Sets the initial main size of the flex item to 0.
        // self-stretch: Stretches this div to fill the cross-axis of the parent.
        // px-[2rem]: Applies horizontal padding (left and right) using Tailwind's spacing scale (2rem).
        // pt-24: Applies top padding using Tailwind's spacing scale (24).
        // bg-gradient-to-b: Creates a background gradient that transitions from top to bottom.
        // from-[#fbfbfe]: Sets the starting color of the gradient.
        // via-[#f0f0ff]: Sets the middle color of the gradient.
        // to-[#DAD9F1]: Sets the ending color of the gradient.
        // flex-col: Arranges child elements in a column.
        // justify-start: Aligns children at the start (top) of the main axis.
        // items-center: Centers children along the cross axis (horizontally).
        // gap-32: Sets a gap between child elements using Tailwind's spacing scale (32).
        // inline-flex: Displays this div as an inline-level flex container.
      >
          {/* -----------------------------------------------------------------
              Container Div for the Text (Headline, Subheading) and Button.
          */}
          <div
            className="self-stretch h-auto flex-col justify-start items-center gap-6 flex 2xl:gap-8"
            // self-stretch: Makes this div fill the width of its container.
            // h-[322px]: Sets the height of this div to 322 pixels.
            // flex-col: Arranges child elements in a vertical column.
            // justify-start: Aligns child elements to the top.
            // items-center: Centers child elements horizontally.
            // gap-6: Applies a gap between child elements using Tailwind's spacing scale (6).
            // 2xl:gap-8: Increases the gap on 2xl screens.
            // flex: Displays this div as a flex container.
          >
            {/* -----------------------------------------------------------------
                Container Div for the Headline and Subheading Text.
            */}
            <div
              className="self-stretch h-auto flex-col justify-start items-center gap-3 flex"
              // self-stretch: Makes this div stretch to fill the available width.
              // h-[247px]: Sets the height of this div to 247 pixels.
              // flex-col: Arranges child elements vertically.
              // justify-start: Aligns child elements to the top.
              // items-center: Centers child elements horizontally.
              // gap-3: Sets a gap between child elements using Tailwind's spacing scale (3).
              // flex: Displays this div as a flex container.
            >
              {/* -----------------------------------------------------------------
                  Headline Text
              */}
              <div
                className="self-stretch text-center text-[#303030] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-sans leading-[1.2] sm:leading-[1.2] md:leading-[1.2] lg:leading-[1.2] xl:leading-[96px] 2xl:leading-[110px]"
                // self-stretch: Makes this div fill the width of its container.
                // text-center: Centers the text horizontally.
                // text-[#303030]: Sets the text color to the hex color #303030.
                // Responsive font sizes: text-4xl to 2xl:text-9xl.
                // font-bold: Makes the text bold.
                // font-sans: Uses a sans-serif font family.
                // Responsive line heights: leading-[96px] on xl and 2xl:leading-[110px].
              >
                The easiest way to manage money.
              </div>
              {/* -----------------------------------------------------------------
                  Subheading Text
              */}
              <div
                className="text-[#616161] text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal font-sans leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[43.20px] 2xl:leading-[48px] text-center"
                // text-[#616161]: Sets the text color to the hex color #616161.
                // Responsive font sizes: text-base to 2xl:text-5xl.
                // font-normal: Applies a normal (regular) font weight.
                // font-sans: Uses a sans-serif font family.
                // Responsive line heights: xl:leading-[43.20px] and 2xl:leading-[48px].
                // text-center: Centers the text horizontally.
              >
                Stay in control of your finances because we make it easy.
              </div>
            </div>
            {/* -----------------------------------------------------------------
                "Join the waitlist" Button
            */}
            <button
              onClick={handleSurveyClick}
              className="px-4 sm:px-5 md:px-6 lg:px-7 2xl:px-8 py-2 sm:py-3 md:py-3.5 lg:py-4 2xl:py-4 bg-[#7773e1] rounded-xl sm:rounded-2xl justify-center items-center inline-flex hover:bg-[#7773e1]/90 transition-colors"
            >
              <div
                className="text-[#fbfbfe] text-sm sm:text-base md:text-lg lg:text-xl font-medium font-sans leading-tight"
              >
                Join the waitlist
              </div>
            </button>
          </div>
          {/* -----------------------------------------------------------------
              Container Div for the Hero Image
          */}
          <div
            className="self-stretch h-auto md:h-[525px] 2xl:h-[600px] flex-col justify-start items-center gap-2.5 flex"
            // self-stretch: Makes this div fill the width of its container.
            // h-[525px]: Sets the height of this div to 525 pixels on md screens; 2xl:h-[600px] on larger screens.
            // flex-col: Arranges child elements in a vertical column.
            // justify-start: Aligns child elements at the top.
            // items-center: Centers child elements horizontally.
            // gap-2.5: Sets a gap between child elements using Tailwind's spacing scale (2.5).
            // flex: Displays this div as a flex container.
          >
            {/* -----------------------------------------------------------------
                Next.js Image Component for the Hero Image
            */}
            <Image
              src="/HeroImage2.svg" // Mobile image
              alt="Hero Image for mobile"
              width={370}
              height={425}
              className="w-full h-auto rounded-xl block md:hidden"
              priority
            />
            <Image
              src="/HeroImage.svg" // Desktop image
              alt="Hero Image"
              width={1024}
              height={640}
              className="hidden md:block w-full md:w-[1024px] h-auto rounded-xl shadow-[0px_50px_50px_0px_rgba(0,0,0,0.03)] border border-[#e2e2e2]"
              priority
            />
          </div>
        </div>
     
    
  );
}