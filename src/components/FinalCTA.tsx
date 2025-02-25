// ======================================================================
// FinalCTA.tsx
// ----------------------------------------------------------------------
// This file defines the FinalCTA component—a React Functional Component
// that displays a call-to-action (CTA) section encouraging users to join
// a waitlist. It optionally renders a Survey component when a condition is met.
// Every line of code, including TypeScript types, React hooks, and Tailwind
// CSS classes, is explained in detail.
// ======================================================================

// "use client" tells Next.js that this component should be rendered
// on the client-side (in the browser), which is necessary for interactive
// behavior like state management and event handling.
"use client";

// ----------------------------------------------------------------------
// Import Statements
// ----------------------------------------------------------------------
// Import React and the useState hook from the 'react' library:
// - React: The core library for building user interfaces with JSX.
// - useState: A hook that allows us to add state to functional components.
import React, { useState } from 'react';

// Import the Survey component from a local file.
// This component likely displays a survey form that can be shown or hidden.
import Survey from './SurveyComponent';

// ----------------------------------------------------------------------
// TypeScript Interface: FinalCTAProps
// ----------------------------------------------------------------------
// Define the shape of the props that FinalCTA expects.
// - onSurveyShow: A function with no parameters that returns nothing (void).
//   This function is used to notify a parent component to show a survey.
interface FinalCTAProps {
  onSurveyShow: () => void;
}

// ----------------------------------------------------------------------
// Component Definition: FinalCTA
// ----------------------------------------------------------------------
// Define the FinalCTA component as a React Functional Component (React.FC)
// that takes props of type FinalCTAProps.
const FinalCTA: React.FC<FinalCTAProps> = ({ onSurveyShow }) => {
  // --------------------------------------------------------------------
  // Local State: showSurvey
  // --------------------------------------------------------------------
  // Create a state variable "showSurvey" to determine whether the Survey
  // component should be displayed. Initially, it's set to false (survey hidden).
  const [showSurvey, setShowSurvey] = useState(false);

  // --------------------------------------------------------------------
  // Function: handleSurveyClick
  // --------------------------------------------------------------------
  // This function is called when the "Join the Waitlist" button is clicked.
  // It calls the onSurveyShow function (provided via props) to notify the parent.
  const handleSurveyClick = () => {
    onSurveyShow();
    // Optionally, if you want to also display the Survey component locally,
    // you could update the state as follows:
    // setShowSurvey(true);
  };

  // --------------------------------------------------------------------
  // Conditional Rendering: Show Survey Component
  // --------------------------------------------------------------------
  // If "showSurvey" is true, render the Survey component instead of the CTA.
  // The Survey component receives an onClose prop, which, when called,
  // sets "showSurvey" back to false.
  if (showSurvey) {
    return <Survey onClose={() => setShowSurvey(false)} />;
  }

  // --------------------------------------------------------------------
  // JSX Return: Final Call-to-Action (CTA) Section
  // --------------------------------------------------------------------
  return (
    <div className="w-full px-6 md:px-16 2xl:px-20 py-12 sm:py-16 md:py-20 bg-[#fbfbfe] flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10">
        <div className="w-full flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-6">
          <div className="text-center text-[#303030] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sans leading-tight">
            Control your impulse spending!
          </div>
          <div className="text-center text-[#616161] text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-sans leading-normal">
            Take control with a budgeting partner that does the legwork for you.
          </div>
        </div>
        <button 
          onClick={handleSurveyClick}
          className="px-4 sm:px-5 md:px-6 lg:px-7 py-2 sm:py-3 md:py-4 bg-[#7773e1] rounded-lg sm:rounded-xl md:rounded-2xl justify-center items-center inline-flex hover:bg-[#7773e1]/90 transition-colors"
        >
          <div className="text-[#fcfcfc] text-sm sm:text-base md:text-lg font-medium font-sans leading-tight">
            Join the Waitlist
          </div>
        </button>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Export Statement
// ----------------------------------------------------------------------
// Export the FinalCTA component as the default export of this module.
export default FinalCTA;