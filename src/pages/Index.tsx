
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TimelineSection from '../components/TimelineSection';
import EducationSection from '../components/EducationSection';
import ContestSection from '../components/ContestSection';
import QuizSection from '../components/QuizSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TimelineSection />
      <EducationSection />
      {/* <ContestSection /> */}
      <QuizSection />
      <Footer />
    </div>
  );
};

export default Index;
