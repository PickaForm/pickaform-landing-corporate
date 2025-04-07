
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Challenges from '@/components/Challenges';
import AIFeatures from '@/components/AIFeatures';
import Integration from '@/components/Integration';
import Security from '@/components/Security';
import Testimonials from '@/components/Testimonials';
import PricingPlans from '@/components/PricingPlans';
import MakersSection from '@/components/MakersSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Challenges />
        <AIFeatures />
        <Integration />
        <Security />
        <PricingPlans />
        <MakersSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
