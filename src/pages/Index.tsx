import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TimelineSection from '../components/TimelineSection';
import EducationSection from '../components/EducationSection';
import ContestSection from '../components/ContestSection';
import QuizSection from '../components/QuizSection';
import Footer from '@/components/Footer';
import { ArrowUp } from 'lucide-react'; // иконка стрелки

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <HeroSection />
      <TimelineSection />
      <EducationSection />
      {/* <ContestSection /> */}
      <QuizSection />
      {/* <Footer /> */}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Index;
