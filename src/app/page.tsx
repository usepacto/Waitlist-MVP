'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Context from '../components/Context';
import FeatureShowcase from '../components/FeatureShowcase';
import FinalCTA from '../components/FinalCTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Survey from '../components/SurveyComponent';

export default function Home() {
  const [showingSurvey, setShowingSurvey] = useState(false);

  const handleSurveyClose = () => {
    setShowingSurvey(false);
  };

  const handleSurveyShow = () => {
    // Scroll to top before showing survey
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Wait for scroll to complete before showing survey
    setTimeout(() => {
      setShowingSurvey(true);
    }, 300);
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
      <div className="w-full flex flex-col items-center">
        <Navbar /> 
        <HeroSection onSurveyShow={handleSurveyShow} />
        <Context />
        <FeatureShowcase />
        <FinalCTA onSurveyShow={handleSurveyShow} />
        <FAQ />
        <Footer onSurveyShow={handleSurveyShow} />
      </div>
    </main>
  );
}
