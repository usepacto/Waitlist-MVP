'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Context from '../components/Context';
import FeatureShowcase from '../components/FeatureShowcase';
import FinalCTA from '../components/FinalCTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <HeroSection />
      <Context />
      <FeatureShowcase />
      <FinalCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
