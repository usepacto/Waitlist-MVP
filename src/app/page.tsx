import React from 'react';
import HeroSection from '@/components/HeroSection';
import ScrollableCards from '@/components/ScrollableCards';
import FeatureShowcase from '@/components/FeatureShowcase';
import WaitlistForm from '@/components/WaitlistForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ScrollableCards />
      <FeatureShowcase />
      <WaitlistForm />
    </main>
  );
}
