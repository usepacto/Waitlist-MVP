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
    // ------------------------------------------------------------------
    // Outer Container <div>
    // Tailwind classes:
    // - w-full: Full width of the parent.
    // - h-[354px]: Fixed height of 354 pixels.
    // - pt-20: Top padding using Tailwind spacing scale (20).
    // - pb-[120px]: Bottom padding of 120 pixels.
    // - bg-[#fbfbfe]: Background color set to hex #fbfbfe.
    // - flex-col: Arrange child elements in a column.
    // - justify-center: Center children vertically.
    // - items-center: Center children horizontally.
    // - gap-2.5: Gap of 2.5 units between children.
    // - inline-flex: Display as an inline-level flex container.
    // ------------------------------------------------------------------
    <div className="w-full h-[354px] pt-20 pb-[120px] bg-[#fbfbfe] flex-col justify-center items-center gap-2.5 inline-flex">
      
      {/* ----------------------------------------------------------------
          Inner Content Container <div>
          Tailwind classes:
          - h-[154px]: Fixed height of 154 pixels.
          - px-[25px]: Horizontal padding of 25 pixels.
          - flex-col: Arrange children vertically.
          - justify-center: Center children vertically.
          // - items-center: Center children horizontally.
          - gap-6: Gap of 6 units between children.
          - flex: Enable Flexbox layout.
      ---------------------------------------------------------------- */}
      <div className="h-[154px] px-[25px] flex-col justify-center items-center gap-6 flex">
        
        {/* ----------------------------------------------------------------
            Text Block Container <div>
            Tailwind classes:
            - self-stretch: Stretch to fill the width of the parent.
            - h-[79px]: Fixed height of 79 pixels.
            - flex-col: Arrange children vertically.
            - justify-center: Center children vertically.
            - items-start: Align children to the left.
            - gap-3: Gap of 3 units between children.
            - flex: Enable Flexbox layout.
        ---------------------------------------------------------------- */}
        <div className="self-stretch h-[79px] flex-col justify-center items-start gap-3 flex">
          
          {/* ----------------------------------------------------------------
              Heading Text <div>
              Tailwind classes:
              - self-stretch: Stretch to fill the width of the container.
              - text-center: Center-align the text.
              - text-[#303030]: Text color set to hex #303030.
              - text-4xl: Font size defined as 4xl.
              - font-bold: Bold font weight.
              - font-sans: Use a sans-serif font family.
              - leading-[43.20px]: Line height set to 43.20 pixels.
          ---------------------------------------------------------------- */}
          <div className="self-stretch text-center text-[#303030] text-4xl font-bold font-sans leading-[43.20px]">
            Control your impulse spending!
          </div>
          
          {/* ----------------------------------------------------------------
              Subheading Text <div>
              Tailwind classes:
              - self-stretch: Stretch to fill the width of the container.
              - text-center: Center-align the text.
              - text-[#616161]: Text color set to hex #616161.
              - text-xl: Font size defined as xl.
              - font-normal: Normal font weight.
              - font-sans: Use a sans-serif font family.
              - leading-normal: Normal line height.
          ---------------------------------------------------------------- */}
          <div className="self-stretch text-center text-[#616161] text-xl font-normal font-sans leading-normal">
            Take control with a budgeting partner that does the legwork for you.
          </div>
        </div>
        
        {/* ----------------------------------------------------------------
            Button: "Join the Waitlist"
            Tailwind classes on the <button>:
            - px-7: Horizontal padding of 7 units.
            - py-4: Vertical padding of 4 units.
            - bg-[#7773e1]: Background color set to hex #7773e1.
            - rounded-2xl: Extra-large rounded corners.
            - justify-center: Center content horizontally.
            - items-center: Center content vertically.
            - inline-flex: Display as an inline-level flex container.
            - hover:bg-[#7773e1]/90: On hover, change background color to 90% opacity.
            - transition-colors: Animate color changes smoothly.
        ---------------------------------------------------------------- */}
        <button 
          onClick={handleSurveyClick}
          className="px-7 py-4 bg-[#7773e1] rounded-2xl justify-center items-center inline-flex hover:bg-[#7773e1]/90 transition-colors"
        >
          {/* ----------------------------------------------------------------
              Button Text Container <div>
              Tailwind classes:
              - text-[#fcfcfc]: Text color set to hex #fcfcfc (nearly white).
              - text-base: Base (default) font size.
              - font-medium: Medium font weight.
              - font-sans: Use a sans-serif font family.
              - leading-tight: Tight line height.
          ---------------------------------------------------------------- */}
          <div className="text-[#fcfcfc] text-base font-medium font-sans leading-tight">
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