
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  // Update document language
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <ExperiencesSection language={language} />
      <ProjectsSection language={language} />
      <SkillsSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} toggleLanguage={toggleLanguage} />
    </div>
  );
};

export default Index;
