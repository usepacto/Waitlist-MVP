// =====================================================================
// SurveyComponent.annotated.tsx
// ---------------------------------------------------------------------
// This file contains a fully annotated version of the SurveyComponent.
// Every line of code, function, state hook, and CSS class is explained in
// detail so you can understand exactly how this multi-step survey works.
// =====================================================================

// "use client" instructs Next.js to render this component on the client-side,
// enabling interactive features such as state management and event handling.
"use client";

// ---------------------------------------------------------------------
// Import statements
// ---------------------------------------------------------------------
// Import React and the useState hook from the 'react' library.
// - React: The core library for building user interfaces.
// - useState: A hook to add state to functional components.
import React, { useState } from 'react';

// Import the Next.js Image component which provides image optimization features
// like lazy loading, responsive images, and more.
import Image from 'next/image';

// Import the useRouter hook from Next.js to enable programmatic navigation.
import { useRouter } from 'next/navigation';

// ---------------------------------------------------------------------
// Define the SurveyData interface
// ---------------------------------------------------------------------
// This interface outlines the structure for the survey responses.
// It groups questions by survey screens and holds the user input data.
interface SurveyData {
  // Screen 1: Questions related to personal financial challenges and stresses.
  biggestChallenge: string;       // The user's biggest challenge in managing money.
  otherChallenge: string;         // Custom input if the challenge is not listed.
  controlFrequency: string;       // How often the user feels in control of their finances.
  stressCause: string;            // The primary reason for financial stress.
  otherStressCause: string;       // Custom stress cause, if 'Other' is selected.

  // Screen 2: Questions about budgeting and expense planning.
  followsBudget: string;          // Indicates if the user follows a budget (Yes/No/Sometimes).
  expensePlanning: string;        // How the user plans their expenses (e.g., Apps, Spreadsheets).
  expensePlanningApp: string;     // If using Apps, which app(s) are used.
  expensePlanningOther: string;   // Custom input if expense planning method is not listed.
  automatesFinances: string;      // Whether the user automates any financial processes.

  // Screen 3: Questions regarding monthly financial priorities.
  monthlyPriorities: string[];    // List of priorities such as Rent, Food, etc.
  otherPriority: string;          // Additional priority if 'Other' is selected.

  // Screen 4: Questions on financial review habits and planning obstacles.
  reviewFrequency: string;        // How often the user reviews their financial situation.
  planningObstacles: string[];    // Obstacles that prevent sticking to financial plans.
  otherObstacle: string;          // Custom obstacle input if 'Other' is chosen.

  // Screen 5: Questions about overall money management approach and contact info.
  moneyManagementApproach: string; // Describes the user's approach to managing money.
  otherApproach: string;           // Custom approach if 'Other' is selected.
  phoneNumber: string;             // User's phone number for follow-up (optional).
}

// ---------------------------------------------------------------------
// Define the SurveyProps interface
// ---------------------------------------------------------------------
// This interface defines the props for the Survey component.
// - onClose: A function to be called when the survey should close.
interface SurveyProps {
  onClose: () => void; // A callback function with no arguments that returns nothing (void).
}

// ---------------------------------------------------------------------
// Define and export the Survey component
// ---------------------------------------------------------------------
// This is a functional React component that implements a multi-step survey.
// It manages its own state, handles input changes, navigation between survey screens,
// and renders modals for exit confirmation and submission success.
const Survey: React.FC<SurveyProps> = ({ onClose }) => {
  // -------------------------------------------------------------------
  // Hook: useRouter
  // -------------------------------------------------------------------
  // useRouter provides a function to navigate programmatically.
  const router = useRouter();

  // -------------------------------------------------------------------
  // Local State: currentScreen
  // -------------------------------------------------------------------
  // Tracks the current screen or step of the multi-step survey.
  const [currentScreen, setCurrentScreen] = useState(1);

  // -------------------------------------------------------------------
  // Local State: showExitConfirmation
  // -------------------------------------------------------------------
  // Determines whether the exit confirmation modal is visible.
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);

  // -------------------------------------------------------------------
  // Local State: isSubmitting
  // -------------------------------------------------------------------
  // Indicates whether the survey submission process is currently running.
  const [isSubmitting, setIsSubmitting] = useState(false);

  // -------------------------------------------------------------------
  // Local State: showSuccessMessage
  // -------------------------------------------------------------------
  // Used to determine if a submission success message should be displayed.
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // -------------------------------------------------------------------
  // Local State: formData
  // -------------------------------------------------------------------
  // Holds all the responses from the survey as defined by the SurveyData interface.
  const [formData, setFormData] = useState<SurveyData>({
    biggestChallenge: '',
    otherChallenge: '',
    controlFrequency: '',
    stressCause: '',
    otherStressCause: '',
    followsBudget: '',
    expensePlanning: '',
    expensePlanningApp: '',
    expensePlanningOther: '',
    automatesFinances: '',
    monthlyPriorities: [],
    otherPriority: '',
    reviewFrequency: '',
    planningObstacles: [],
    otherObstacle: '',
    moneyManagementApproach: '',
    otherApproach: '',
    phoneNumber: ''
  });

  // -------------------------------------------------------------------
  // Constant: PHONE_REGEX
  // -------------------------------------------------------------------
  // Regular expression to validate phone numbers (10 to 15 digits).
  const PHONE_REGEX = /^[0-9]{10,15}$/;

  // -------------------------------------------------------------------
  // Local State: validationErrors
  // -------------------------------------------------------------------
  // Holds any validation error messages, such as for the phone number input.
  const [validationErrors, setValidationErrors] = useState<{ phoneNumber: string }>({
    phoneNumber: ''
  });

  // ===================================================================
  // Function: handleRadioChange
  // -------------------------------------------------------------------
  // Updates a form field when a radio button selection is made.
  // Parameters:
  // - field: The key of the field in the formData object to update.
  // - value: The selected value from the radio option.
  const handleRadioChange = (field: keyof SurveyData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // ===================================================================
  // Function: handleCheckboxChange
  // -------------------------------------------------------------------
  // Handles toggling of values in a checkbox group.
  // It updates the formData field (an array) by adding or removing the selected option.
  const handleCheckboxChange = (field: keyof SurveyData, value: string) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[]; // Cast current field value as an array
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value) // Remove value if already selected
        : [...currentArray, value]; // Add value if not selected
      return {
        ...prev,
        [field]: newArray
      };
    });
  };

  // ===================================================================
  // Function: handleTextChange
  // -------------------------------------------------------------------
  // Updates a text input field in the formData.
  const handleTextChange = (field: keyof SurveyData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // ===================================================================
  // Function: handlePhoneChange
  // -------------------------------------------------------------------
  // Processes changes to the phone number input by stripping non-numeric characters
  // and validating against the PHONE_REGEX. Updates both formData and validationErrors.
  const handlePhoneChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, ''); // Remove any non-digit characters
    setFormData(prev => ({
      ...prev,
      phoneNumber: numericValue
    }));

    // Validate the phone number and set error message if invalid
    if (numericValue && !PHONE_REGEX.test(numericValue)) {
      setValidationErrors(prev => ({
        ...prev,
        phoneNumber: 'Please enter a valid phone number (10-15 digits)'
      }));
    } else {
      setValidationErrors(prev => ({
        ...prev,
        phoneNumber: ''
      }));
    }
  };

  // ===================================================================
  // Function: handleExit
  // -------------------------------------------------------------------
  // Triggers the display of the exit confirmation modal when the user attempts to leave the survey.
  const handleExit = () => {
    setShowExitConfirmation(true);
  };

  // ===================================================================
  // Function: confirmExit
  // -------------------------------------------------------------------
  // Calls the onClose callback to exit the survey.
  const confirmExit = () => {
    onClose();
  };

  // ===================================================================
  // Function: handleSubmit
  // -------------------------------------------------------------------
  // Manages the survey submission process:
  // - Sets submission state to true.
  // - Simulates an API call with a timeout.
  // - Logs the final form data and shows a success message.
  // - Redirects to the home page after a delay.
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Final form data:', formData);
      setShowSuccessMessage(true);
      // Navigate to the home page after showing success message
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert('There was an error submitting your responses. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ===================================================================
  // Function: handleContinue
  // -------------------------------------------------------------------
  // Advances the survey to the next screen.
  // Scrolls to the top for a smooth transition before incrementing the screen count.
  // If on the final screen, it triggers the submission process.
  const handleContinue = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
    setTimeout(() => {
      if (currentScreen === 5) {
        handleSubmit();
        return;
      }
      setCurrentScreen(prev => prev + 1);
    }, 300); // Delay to match the scroll animation duration
  };

  // ===================================================================
  // Function: handleBack
  // -------------------------------------------------------------------
  // Moves the survey back to the previous screen, if possible.
  // Also scrolls to the top for a smooth user experience.
  const handleBack = () => {
    if (currentScreen > 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        setCurrentScreen(prev => prev - 1);
      }, 300);
    }
  };

  // ===================================================================
  // Function: getOtherFieldName
  // -------------------------------------------------------------------
  // Maps a given field to its corresponding 'other' field for text input when 'Other'
  // is selected. Returns the appropriate key from the SurveyData interface.
  const getOtherFieldName = (field: keyof SurveyData): keyof SurveyData => {
    const mapping: Record<keyof SurveyData, keyof SurveyData> = {
      biggestChallenge: 'otherChallenge',
      stressCause: 'otherStressCause',
      expensePlanning: 'expensePlanningOther',
      monthlyPriorities: 'otherPriority',
      planningObstacles: 'otherObstacle',
      moneyManagementApproach: 'otherApproach',
      // For fields that do not have an associated 'other' input, map to themselves
      controlFrequency: 'controlFrequency',
      followsBudget: 'followsBudget',
      expensePlanningApp: 'expensePlanningApp',
      automatesFinances: 'automatesFinances',
      reviewFrequency: 'reviewFrequency',
      phoneNumber: 'phoneNumber',
      otherChallenge: 'otherChallenge',
      otherStressCause: 'otherStressCause',
      expensePlanningOther: 'expensePlanningOther',
      otherPriority: 'otherPriority',
      otherObstacle: 'otherObstacle',
      otherApproach: 'otherApproach'
    };
    return mapping[field];
  };

  // ===================================================================
  // Function: renderRadioOption
  // -------------------------------------------------------------------
  // Renders a radio option for a survey question.
  // Parameters:
  // - option: The label for this radio option.
  // - field: The formData field to update when selected.
  // - isOther (optional): If true, an input field is rendered when the option is 'Other'.
  const renderRadioOption = (option: string, field: keyof SurveyData, isOther = false) => (
    <div
      key={option}
      className="justify-start items-center gap-3 inline-flex cursor-pointer mb-4 w-full group"
      onClick={() => handleRadioChange(field, option)}
    >
      {/* Radio button outer circle with conditional border color */}
      <div className="w-5 h-5 relative">
        <div className={`w-5 h-5 rounded-full border-2 absolute transition-colors ${
          formData[field] === option ? 'border-[#7773E1]' : 'border-[#aeaeae] group-hover:border-[#7773E1]/70'
        }`} />
        {formData[field] === option && (
          <div className="w-3 h-3 bg-[#7773E1] rounded-full absolute top-1 left-1 transition-transform scale-in" />
        )}
      </div>
      {/* Option label or input if 'Other' is selected */}
      {isOther && formData[field] === 'Other' ? (
        <input
          type="text"
          value={formData[getOtherFieldName(field)] as string}
          onChange={(e) => handleTextChange(getOtherFieldName(field), e.target.value)}
          placeholder="Please specify"
          className="flex-1 px-2 py-1 border-b-2 border-[#7773E1] focus:outline-none bg-transparent text-base font-normal"
          autoFocus
        />
      ) : (
        <div className="text-[#303030] text-base font-normal leading-tight group-hover:text-[#7773E1]/70 transition-colors">
          {option}
        </div>
      )}
    </div>
  );

  // ===================================================================
  // Function: renderCheckboxOption
  // -------------------------------------------------------------------
  // Renders a checkbox option for survey questions allowing multiple selections.
  // Parameters:
  // - option: The label for this checkbox option.
  // - field: The formData field (expected to be an array) to update.
  // - isOther (optional): If true, an input field is shown for custom input when 'Other' is selected.
  const renderCheckboxOption = (option: string, field: keyof SurveyData, isOther = false) => (
    <div
      key={option}
      className="justify-start items-center gap-3 inline-flex cursor-pointer mb-4 w-full group"
      onClick={() => handleCheckboxChange(field, option)}
    >
      {/* Checkbox square with dynamic border color based on selection */}
      <div className="w-5 h-5 relative">
        <div className={`w-5 h-5 rounded-sm border-2 absolute transition-colors ${
          (formData[field] as string[]).includes(option) ? 'border-[#7773E1]' : 'border-[#aeaeae] group-hover:border-[#7773E1]/70'
        }`} />
        {(formData[field] as string[]).includes(option) && (
          <div className="w-5 h-5 flex items-center justify-center absolute transition-transform scale-in">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="#7773E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>
      {/* Render input for Other option if selected */}
      {isOther && (formData[field] as string[]).includes('Other') ? (
        <input
          type="text"
          value={formData[getOtherFieldName(field)] as string}
          onChange={(e) => handleTextChange(getOtherFieldName(field), e.target.value)}
          placeholder="Please specify"
          className="flex-1 px-2 py-1 border-b-2 border-[#7773E1] focus:outline-none bg-transparent text-base font-normal"
          autoFocus
        />
      ) : (
        <div className="text-[#303030] text-base font-normal leading-tight group-hover:text-[#7773E1]/70 transition-colors">
          {option}
        </div>
      )}
    </div>
  );

  // ===================================================================
  // Function: renderScreen1
  // -------------------------------------------------------------------
  // Renders the first screen of the survey, including questions on financial
  // challenges, control frequency, and sources of financial stress.
  const renderScreen1 = () => (
    <div className="w-full flex-col justify-start items-center gap-8 flex">
      <div className="w-full flex-col justify-start items-start gap-8 sm:gap-12 flex">
        {/* Question: Biggest Challenge */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold leading-normal">
            What is your biggest challenge when it comes to managing your money?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {[
              'Staying on track with a budget.',
              'Tracking where my money goes.',
              'Dealing with unexpected expenses.',
              'Saving consistently.'
            ].map((option) => renderRadioOption(option, 'biggestChallenge'))}
            {renderRadioOption('Other', 'biggestChallenge', true)}
          </div>
        </div>

        {/* Question: Control Frequency */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold leading-normal">
            How often do you feel in control of your financial situation?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {['Always', 'Often', 'Sometimes', 'Rarely', 'Never'].map(option => renderRadioOption(option, 'controlFrequency'))}
          </div>
        </div>

        {/* Question: Financial Stress Cause */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold leading-normal">
            What causes you the most stress about your finances?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {['Debt', 'Bills', 'Saving enough', 'Lack of planning'].map(option => renderRadioOption(option, 'stressCause'))}
            {renderRadioOption('Other', 'stressCause', true)}
          </div>
        </div>
      </div>
    </div>
  );

  // ===================================================================
  // Function: renderScreen2
  // -------------------------------------------------------------------
  // Renders the second screen with questions on budgeting, expense planning,
  // and automation of finances.
  const renderScreen2 = () => (
    <div className="w-full flex-col justify-start items-center gap-8 flex">
      <div className="w-full flex-col justify-start items-start gap-8 sm:gap-12 flex">
        {/* Question: Budgeting */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold leading-normal">
            Do you currently follow a budget?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {['Yes', 'No', 'Sometimes'].map(option => renderRadioOption(option, 'followsBudget'))}
          </div>
        </div>

        {/* Question: Expense Planning */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold leading-normal">
            How do you typically plan your expenses?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {[
              'Apps ( If yes, what app(s) do you use).',
              'Spreadsheets',
              'Pen and Paper',
              'I do not track my spending'
            ].map(option => renderRadioOption(option, 'expensePlanning'))}
            {formData.expensePlanning === 'Apps ( If yes, what app(s) do you use).' && (
              <div className="w-full pl-8">
                <input
                  type="text"
                  value={formData.expensePlanningApp}
                  onChange={(e) => handleTextChange('expensePlanningApp', e.target.value)}
                  placeholder="What app(s) do you use?"
                  className="w-full px-2 py-1 border-b-2 border-[#7773E1] focus:outline-none bg-transparent text-base font-normal"
                  autoFocus
                />
              </div>
            )}
            {renderRadioOption('Other', 'expensePlanning', true)}
          </div>
        </div>

        {/* Question: Automating Finances */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold leading-normal">
            Do you automate any financial processes (e.g., savings, bill payments)?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {['Yes', 'No', 'No, but I will like to know how'].map(option =>
              renderRadioOption(option, 'automatesFinances')
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // ===================================================================
  // Function: renderScreen3
  // -------------------------------------------------------------------
  // Renders the third screen with questions on monthly financial priorities.
  const renderScreen3 = () => (
    <div className="w-full flex-col justify-start items-center gap-8 flex">
      <div className="w-full flex-col justify-start items-start gap-8 sm:gap-12 flex">
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold leading-normal">
            What things are most important to you every month?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {[
              'Transport',
              'Bills',
              'Rent',
              'Clothes',
              'Food'
            ].map(option => renderCheckboxOption(option, 'monthlyPriorities'))}
            {renderCheckboxOption('Other', 'monthlyPriorities', true)}
          </div>
        </div>
      </div>
    </div>
  );

  // ===================================================================
  // Function: renderScreen4
  // -------------------------------------------------------------------
  // Renders the fourth screen with questions on the frequency of financial review
  // and the obstacles that have hindered planning.
  const renderScreen4 = () => (
    <div className="w-full flex-col justify-start items-center gap-8 flex">
      <div className="w-full flex-col justify-start items-start gap-8 sm:gap-12 flex">
        {/* Question: Financial Review Frequency */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold leading-normal">
            How often do you review your financial situation (e.g., income, expenses, savings)?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {[
              'Every Week',
              'Every month',
              'Every few months',
              'Twice a year',
              'Yearly',
              'Whenever'
            ].map(option => renderRadioOption(option, 'reviewFrequency'))}
          </div>
        </div>

        {/* Question: Planning Obstacles */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold leading-normal">
            What has stopped you from sticking to financial plans in the past?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {[
              'I do not see the need',
              'I forget about it',
              'It makes me anxious',
              'it is hard, I need help'
            ].map(option => renderCheckboxOption(option, 'planningObstacles'))}
            {renderCheckboxOption('Other', 'planningObstacles', true)}
          </div>
        </div>
      </div>
    </div>
  );

  // ===================================================================
  // Function: renderScreen5
  // -------------------------------------------------------------------
  // Renders the fifth and final screen with questions on the user's money management
  // approach and collects their phone number if interested in a budgeting app.
  const renderScreen5 = () => (
    <div className="w-full flex-col justify-start items-center gap-8 flex">
      <div className="w-full flex-col justify-start items-start gap-8 sm:gap-12 flex">
        {/* Question: Money Management Approach */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold leading-normal">
            How would you describe your approach to managing money?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {[
              'Planner: I create and stick to plans.',
              'Improviser: I go with the flow.',
              'Avoider: I try not to think about it.'
            ].map(option => renderRadioOption(option, 'moneyManagementApproach'))}
            {renderRadioOption('Other', 'moneyManagementApproach', true)}
          </div>
        </div>

        {/* Phone Number Collection */}
        <div className="w-full">
          <span className="text-[#303030] text-lg sm:text-xl font-bold leading-normal">
            If you would be interested in an app that always helps you stay within budget and ensure your salary lasts till the next payday, leave your phone number.
          </span>
          <span className="text-[#303030] text-base sm:text-lg font-normal leading-normal">
            (We are a small team building a great product; please leave your real number if possible.)
          </span>
        </div>
        <div className="w-full flex-col justify-center items-start gap-2 flex">
          <div className="relative w-full max-w-[250px]">
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={(e) => handlePhoneChange(e.target.value)}
              className={`w-full text-base font-normal border-b-2 ${
                validationErrors.phoneNumber ? 'border-red-500' : 'border-[#aeaeae]'
              } focus:outline-none focus:border-[#7773E1] bg-transparent p-2`}
            />
            {validationErrors.phoneNumber && (
              <div className="absolute -bottom-6 left-0 text-red-500 text-sm">
                {validationErrors.phoneNumber}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // ===================================================================
  // Component: ExitConfirmationModal
  // -------------------------------------------------------------------
  // A modal component that confirms if the user really wants to exit the survey.
  const ExitConfirmationModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 max-w-sm w-full mx-auto">
        <h3 className="text-xl font-bold text-[#303030] mb-4">Exit Survey?</h3>
        <p className="text-[#303030] mb-6">Are you sure you want to exit? Your responses will not be saved.</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setShowExitConfirmation(false)}
            className="px-4 py-2 text-[#7773E1] hover:bg-[#7773E1]/5 active:bg-[#7773E1]/10 rounded-lg transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={confirmExit}
            className="px-4 py-2 bg-[#7773E1] text-white rounded-lg hover:bg-[#7773E1]/90 active:bg-[#7773E1]/80 transition-all duration-200"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );

  // ===================================================================
  // Component: SuccessMessage
  // -------------------------------------------------------------------
  // A modal component that displays a success message after survey submission.
  const SuccessMessage = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 max-w-sm w-full mx-auto">
        <div className="text-2xl text-[#7773E1] mb-4">✓</div>
        <h3 className="text-xl font-bold text-[#303030] mb-2">Thank You!</h3>
        <p className="text-[#303030]">Your responses have been submitted successfully.</p>
      </div>
    </div>
  );

  // ===================================================================
  // Main JSX Return
  // -------------------------------------------------------------------
  // This return statement assembles the full UI of the survey, including the header,
  // progress bar, survey content (rendered based on the current screen), navigation
  // buttons, and modal overlays for exit confirmation and success messages.
  return (
    <div className="min-h-screen w-full bg-[#fcfcfc] flex justify-center items-center py-4 px-2 sm:px-4">
      <div className="w-full max-w-[800px] relative bg-[#fcfcfc] rounded-3xl backdrop-blur-sm flex-col justify-center items-center gap-6 sm:gap-8 inline-flex p-4 sm:p-8">

        {/* X Button to trigger exit confirmation */}
        <button
          onClick={handleExit}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#7773E1]/10 transition-colors"
          aria-label="Exit survey"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="#7773E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Header Section with Logo and Tagline */}
        <div className="w-full bg-[#fcfcfc] rounded-xl flex-col justify-center items-center gap-4 flex py-4">
          <div className="flex-col justify-center items-center flex">
            <div className="flex items-center justify-center p-4">
              <Image
                src="/PactoLogo.svg"
                alt="Pacto Logo"
                width={200}
                height={200}
                className="w-[200px] h-auto sm:w-[200px]"
                priority
              />
            </div>
            <div className="text-center text-[#303030] text-base sm:text-lg font-normal leading-snug px-4 max-w-[600px]">
              We are on a mission to make good money habits so intuitive they become second nature.
            </div>
          </div>
        </div>

        {/* Progress Bar with animated fill for current step */}
        <div className="w-full max-w-[619px] justify-center items-start gap-2 sm:gap-[21px] inline-flex px-4">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`relative h-2.5 rounded-[5px] transition-all duration-500 ease-in-out ${
                step === currentScreen
                  ? 'flex-[2] bg-[#7773E1] overflow-hidden'
                  : step < currentScreen
                  ? 'flex-1 bg-[#7773E1]/60'
                  : 'flex-1 bg-[#cbcbcb]'
              }`}
            >
              {step === currentScreen && (
                <div 
                  className="absolute inset-0 bg-[#7773E1] rounded-[5px] origin-left animate-progress"
                  style={{
                    animation: 'progress-fill 0.8s ease-out forwards',
                    animationDelay: '0.3s'
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Survey Content: Render based on the current screen */}
        <div className="w-full px-4 mb-8">
          <div className="transition-opacity duration-300 ease-in-out">
            {currentScreen === 1 && renderScreen1()}
            {currentScreen === 2 && renderScreen2()}
            {currentScreen === 3 && renderScreen3()}
            {currentScreen === 4 && renderScreen4()}
            {currentScreen === 5 && renderScreen5()}
          </div>
        </div>

        {/* Navigation Buttons: Back and Continue/Submit */}
        <div className="flex gap-4 sm:gap-6 justify-center items-center w-full px-4 py-6 sm:py-8">
          {currentScreen > 1 && (
            <button
              onClick={handleBack}
              className="w-32 sm:w-40 h-12 px-4 sm:px-6 py-3 border-2 border-[#7773E1] text-[#7773E1] rounded-lg hover:bg-[#7773E1]/5 active:bg-[#7773E1]/10 transition-all duration-200 text-sm sm:text-base font-semibold font-sans flex items-center justify-center"
            >
              Back
            </button>
          )}
          <button
            onClick={handleContinue}
            disabled={isSubmitting}
            className={`w-32 sm:w-40 h-12 px-4 sm:px-6 py-3 bg-[#7773E1] rounded-lg border-2 border-[#7773E1] text-white hover:bg-[#7773E1]/90 active:bg-[#7773E1]/80 transition-all duration-200 text-sm sm:text-base font-semibold font-sans flex items-center justify-center ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              currentScreen === 5 ? 'Submit' : 'Continue'
            )}
          </button>
        </div>
      </div>

      {/* Modal Overlays for Exit Confirmation and Success Message */}
      {showExitConfirmation && <ExitConfirmationModal />}
      {showSuccessMessage && <SuccessMessage />}
    </div>
  );
};

export default Survey;

// =====================================================================
// End of SurveyComponent.annotated.tsx
// ---------------------------------------------------------------------
// This fully annotated file explains the SurveyComponent step by step,
// including state management, event handlers, UI rendering, and CSS classes.
// Use this as a complete reference to understand how the multi-step survey is implemented.
// ===================================================================== 
