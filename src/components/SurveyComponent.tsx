'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SurveyData {
  // Screen 1
  biggestChallenge: string;
  otherChallenge: string;
  controlFrequency: string;
  stressCause: string;
  otherStressCause: string;
  // Screen 2
  followsBudget: string;
  expensePlanning: string;
  expensePlanningApp: string;
  expensePlanningOther: string;
  automatesFinances: string;
  // Screen 3
  monthlyPriorities: string[];
  otherPriority: string;
  // Screen 4
  reviewFrequency: string;
  planningObstacles: string[];
  otherObstacle: string;
  // Screen 5
  moneyManagementApproach: string;
  otherApproach: string;
  phoneNumber: string;
}

const Survey: React.FC = () => {
  const router = useRouter();
  const [currentScreen, setCurrentScreen] = useState(1);
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
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

  // Add phone number validation regex
  const PHONE_REGEX = /^[0-9]{10,15}$/;

  // Add validation state
  const [validationErrors, setValidationErrors] = useState<{
    phoneNumber: string;
  }>({
    phoneNumber: ''
  });

  const handleRadioChange = (field: keyof SurveyData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field: keyof SurveyData, value: string) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];

      return {
        ...prev,
        [field]: newArray
      };
    });
  };

  const handleTextChange = (field: keyof SurveyData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePhoneChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setFormData(prev => ({
      ...prev,
      phoneNumber: numericValue
    }));

    // Validate phone number
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

  const handleExit = () => {
    setShowExitConfirmation(true);
  };

  const confirmExit = () => {
    router.push('/'); // Navigate to home page
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Final form data:', formData);
      setShowSuccessMessage(true);
      setTimeout(() => {
        router.push('/'); // Navigate to home after success
      }, 2000);
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert('There was an error submitting your responses. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinue = () => {
    // Scroll to top smoothly before proceeding
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Wait for scroll animation to complete before updating state
    setTimeout(() => {
      if (currentScreen === 5) {
        handleSubmit();
        return;
      }
      setCurrentScreen(prev => prev + 1);
    }, 300); // Delay matches scroll animation duration
  };

  const handleBack = () => {
    if (currentScreen > 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        setCurrentScreen(prev => prev - 1);
      }, 300);
    }
  };

  const getOtherFieldName = (field: keyof SurveyData): keyof SurveyData => {
    const mapping: Record<keyof SurveyData, keyof SurveyData> = {
      biggestChallenge: 'otherChallenge',
      stressCause: 'otherStressCause',
      expensePlanning: 'expensePlanningOther',
      monthlyPriorities: 'otherPriority',
      planningObstacles: 'otherObstacle',
      moneyManagementApproach: 'otherApproach',
      // Add other mappings as needed
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

  const renderRadioOption = (option: string, field: keyof SurveyData, isOther = false) => (
    <div key={option} 
         className="justify-start items-center gap-3 inline-flex cursor-pointer mb-4 w-full group"
         onClick={() => handleRadioChange(field, option)}>
      <div className="w-5 h-5 relative">
        <div className={`w-5 h-5 rounded-full border-2 absolute transition-colors ${
          formData[field] === option ? 'border-[#7773E1]' : 'border-[#aeaeae] group-hover:border-[#7773E1]/70'
        }`} />
        {formData[field] === option && (
          <div className="w-3 h-3 bg-[#7773E1] rounded-full absolute top-1 left-1 transition-transform scale-in" />
        )}
      </div>
      {isOther && formData[field] === 'Other' ? (
        <input
          type="text"
          value={formData[getOtherFieldName(field)] as string}
          onChange={(e) => handleTextChange(getOtherFieldName(field), e.target.value)}
          placeholder="Please specify"
          className="flex-1 px-2 py-1 border-b-2 border-[#7773E1] focus:outline-none bg-transparent text-base font-normal font-['Geist']"
          autoFocus
        />
      ) : (
        <div className="text-[#303030] text-base font-normal font-['Geist'] leading-tight group-hover:text-[#7773E1]/70 transition-colors">
          {option}
        </div>
      )}
    </div>
  );

  const renderCheckboxOption = (option: string, field: keyof SurveyData, isOther = false) => (
    <div key={option} 
         className="justify-start items-center gap-3 inline-flex cursor-pointer mb-4 w-full group"
         onClick={() => handleCheckboxChange(field, option)}>
      <div className="w-5 h-5 relative">
        <div className={`w-5 h-5 rounded-sm border-2 absolute transition-colors ${
          (formData[field] as string[]).includes(option) ? 'border-[#7773E1]' : 'border-[#aeaeae] group-hover:border-[#7773E1]/70'
        }`} />
        {(formData[field] as string[]).includes(option) && (
          <div className="w-5 h-5 flex items-center justify-center absolute transition-transform scale-in">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" 
                    stroke="#7773E1" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>
      {isOther && (formData[field] as string[]).includes('Other') ? (
        <input
          type="text"
          value={formData[getOtherFieldName(field)] as string}
          onChange={(e) => handleTextChange(getOtherFieldName(field), e.target.value)}
          placeholder="Please specify"
          className="flex-1 px-2 py-1 border-b-2 border-[#7773E1] focus:outline-none bg-transparent text-base font-normal font-['Geist']"
          autoFocus
        />
      ) : (
        <div className="text-[#303030] text-base font-normal font-['Geist'] leading-tight group-hover:text-[#7773E1]/70 transition-colors">
          {option}
        </div>
      )}
    </div>
  );

  const renderScreen1 = () => (
    <div className="w-full flex-col justify-start items-center gap-8 flex">
      <div className="w-full flex-col justify-start items-start gap-8 sm:gap-12 flex">
        {/* Question 1 */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold font-['Geist'] leading-normal">
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

        {/* Question 2 */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold font-['Geist'] leading-normal">
            How often do you feel in control of your financial situation?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {['Always', 'Often', 'Sometimes', 'Rarely', 'Never'].map((option) => 
              renderRadioOption(option, 'controlFrequency')
            )}
          </div>
        </div>

        {/* Question 3 */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold font-['Geist'] leading-normal">
            What causes you the most stress about your finances?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {['Debt', 'Bills', 'Saving enough', 'Lack of planning'].map((option) => 
              renderRadioOption(option, 'stressCause')
            )}
            {renderRadioOption('Other', 'stressCause', true)}
          </div>
        </div>
      </div>
    </div>
  );

  const renderScreen2 = () => (
    <div className="w-full flex-col justify-start items-center gap-8 flex">
      <div className="w-full flex-col justify-start items-start gap-8 sm:gap-12 flex">
        {/* Question 1 */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold font-['Geist'] leading-normal">
            Do you currently follow a budget?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {['Yes', 'No', 'Sometimes'].map((option) => renderRadioOption(option, 'followsBudget'))}
          </div>
        </div>

        {/* Question 2 */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold font-['Geist'] leading-normal">
            How do you typically plan your expenses?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {[
              'Apps ( If yes, what app(s) do you use).',
              'Spreadsheets',
              'Pen and Paper',
              'I do not track my spending'
            ].map((option) => renderRadioOption(option, 'expensePlanning'))}
            {formData.expensePlanning === 'Apps ( If yes, what app(s) do you use).' && (
              <div className="w-full pl-8">
                <input
                  type="text"
                  value={formData.expensePlanningApp}
                  onChange={(e) => handleTextChange('expensePlanningApp', e.target.value)}
                  placeholder="What app(s) do you use?"
                  className="w-full px-2 py-1 border-b-2 border-[#7773E1] focus:outline-none bg-transparent text-base font-normal font-['Geist']"
                  autoFocus
                />
              </div>
            )}
            {renderRadioOption('Other', 'expensePlanning', true)}
          </div>
        </div>

        {/* Question 3 */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold font-['Geist'] leading-normal">
            Do you automate any financial processes (e.g., savings, bill payments)?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {['Yes', 'No', 'No, but I will like to know how'].map((option) => 
              renderRadioOption(option, 'automatesFinances')
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderScreen3 = () => (
    <div className="w-full flex-col justify-start items-center gap-8 flex">
      <div className="w-full flex-col justify-start items-start gap-8 sm:gap-12 flex">
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold font-['Geist'] leading-normal">
            What things are most important to you every month?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {[
              'Transport',
              'Bills',
              'Rent',
              'Clothes',
              'Food'
            ].map((option) => renderCheckboxOption(option, 'monthlyPriorities'))}
            {renderCheckboxOption('Other', 'monthlyPriorities', true)}
          </div>
        </div>
      </div>
    </div>
  );

  const renderScreen4 = () => (
    <div className="w-full flex-col justify-start items-center gap-8 flex">
      <div className="w-full flex-col justify-start items-start gap-8 sm:gap-12 flex">
        {/* Question 1 */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold font-['Geist'] leading-normal">
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
            ].map((option) => renderRadioOption(option, 'reviewFrequency'))}
          </div>
        </div>

        {/* Question 2 */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold font-['Geist'] leading-normal">
            What has stopped you from sticking to financial plans in the past?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {[
              'I do not see the need',
              'I forget about it',
              'It makes me anxious',
              'it is hard, I need help'
            ].map((option) => renderCheckboxOption(option, 'planningObstacles'))}
            {renderCheckboxOption('Other', 'planningObstacles', true)}
          </div>
        </div>
      </div>
    </div>
  );

  const renderScreen5 = () => (
    <div className="w-full flex-col justify-start items-center gap-8 flex">
      <div className="w-full flex-col justify-start items-start gap-8 sm:gap-12 flex">
        {/* Question 1 */}
        <div className="w-full flex-col justify-start items-start gap-4 sm:gap-6 flex">
          <div className="w-full text-[#303030] text-lg sm:text-xl font-bold font-['Geist'] leading-normal">
            How would you describe your approach to managing money?
          </div>
          <div className="w-full flex-col justify-start items-start gap-2 flex">
            {[
              'Planner: I create and stick to plans.',
              'Improviser: I go with the flow.',
              'Avoider: I try not to think about it.'
            ].map((option) => renderRadioOption(option, 'moneyManagementApproach'))}
            {renderRadioOption('Other', 'moneyManagementApproach', true)}
          </div>
        </div>

        {/* Question 2 */}
        <div className="w-full">
          <span className="text-[#303030] text-lg sm:text-xl font-bold font-['Geist'] leading-normal">
            If you would be interested in an app that always helps you stay within budget and ensure your salary lasts till the next payday leave your phone number.{' '}
          </span>
          <span className="text-[#303030] text-base sm:text-lg font-normal font-['Geist'] leading-normal">
            (we are a small team trying to build a great product we would appreciate you leaving this blank instead of giving us a fake number)
          </span>
        </div>
        <div className="w-full flex-col justify-center items-start gap-2 flex">
          <div className="relative w-full max-w-[250px]">
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={(e) => handlePhoneChange(e.target.value)}
              className={`w-full text-base font-normal font-['Geist'] leading-tight border-b-2 ${
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

  // Exit Confirmation Modal
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

  // Success Message
  const SuccessMessage = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 max-w-sm w-full mx-auto">
        <div className="text-2xl text-[#7773E1] mb-4">✓</div>
        <h3 className="text-xl font-bold text-[#303030] mb-2">Thank You!</h3>
        <p className="text-[#303030]">Your responses have been submitted successfully.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#fcfcfc] flex justify-center items-center py-4 px-2 sm:px-4">
      <div className="w-full max-w-[800px] relative bg-[#fcfcfc] rounded-3xl backdrop-blur-sm flex-col justify-center items-center gap-6 sm:gap-8 inline-flex p-4 sm:p-8">
        {/* X Button */}
        <button
          onClick={handleExit}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#7773E1]/10 transition-colors"
          aria-label="Exit survey"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="#7773E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Header Section with updated logo size */}
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
            <div className="text-center text-[#303030] text-base sm:text-lg font-normal font-['Geist'] leading-snug px-4 max-w-[600px]">
              We are on a mission to make good money habits so intuitive they become second nature.
            </div>
          </div>
        </div>

        {/* Progress Bar - Enhanced animation */}
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
                    animationDelay: '0.3s' // Start after scroll completes
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Survey Content with smooth transitions */}
        <div className="w-full px-4 mb-8">
          <div className="transition-opacity duration-300 ease-in-out">
            {currentScreen === 1 && renderScreen1()}
            {currentScreen === 2 && renderScreen2()}
            {currentScreen === 3 && renderScreen3()}
            {currentScreen === 4 && renderScreen4()}
            {currentScreen === 5 && renderScreen5()}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 sm:gap-6 justify-center items-center w-full px-4 py-6 sm:py-8">
          {currentScreen > 1 && (
            <button
              onClick={handleBack}
              className="w-32 sm:w-40 h-12 px-4 sm:px-6 py-3 border-2 border-[#7773E1] text-[#7773E1] rounded-lg hover:bg-[#7773E1]/5 active:bg-[#7773E1]/10 transition-all duration-200 text-sm sm:text-base font-semibold font-['Geist'] flex items-center justify-center"
            >
              Back
            </button>
          )}
          <button
            onClick={handleContinue}
            disabled={isSubmitting}
            className={`w-32 sm:w-40 h-12 px-4 sm:px-6 py-3 bg-[#7773E1] rounded-lg border-2 border-[#7773E1] text-white hover:bg-[#7773E1]/90 active:bg-[#7773E1]/80 transition-all duration-200 text-sm sm:text-base font-semibold font-['Geist'] flex items-center justify-center ${
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

      {/* Modals */}
      {showExitConfirmation && <ExitConfirmationModal />}
      {showSuccessMessage && <SuccessMessage />}

      {/* Add refined animations */}
      <style jsx global>{`
        @keyframes progress-fill {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        .animate-progress {
          animation: progress-fill 0.8s ease-out forwards;
        }

        /* Responsive logo sizing */
        @media (max-width: 640px) {
          .w-\\[200px\\] {
            width: 150px;
          }
        }

        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Survey; 