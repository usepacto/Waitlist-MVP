'use client';

import React, { useState } from 'react';


export default function Home() {
  const [showingSurvey, setShowingSurvey] = useState(false);

  const handleSurveyClose = () => {
    setShowingSurvey(false);
  };

  if (showingSurvey) {
    return <Survey onClose={handleSurveyClose} />;
  }

  return (
    <main
      className={`
        /* Base Styles */
        w-full min-h-screen flex flex-col items-center
        /* PHONE */
        gap-6
        /* TABLET */
        md:gap-8
        /* DESKTOP */
        lg:gap-10
      `}
    >
      About Us
    </main>
  );
}
