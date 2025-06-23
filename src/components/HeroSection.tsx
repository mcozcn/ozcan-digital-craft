
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  language: 'tr' | 'en';
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const translations = {
    tr: {
      headline: 'Dijital Güçle Stratejik Dönüşüm',
      subheadline: '13+ yıllık deneyimle işletmeleri dijital çağda güçlendiren stratejik bir yol arkadaşı.',
      exploreProjects: 'Projelerimi Keşfet',
      contactMe: 'Bana Ulaşın',
      scrollDown: 'Aşağı Kaydır'
    },
    en: {
      headline: 'Strategic Transformation through Digital Power',
      subheadline: 'A strategic partner empowering businesses in the digital age with 13+ years of experience.',
      exploreProjects: 'Explore My Projects',
      contactMe: 'Contact Me',
      scrollDown: 'Scroll Down'
    }
  };

  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6 leading-tight">
            {t.headline}
          </h1>
          
          <p className="text-lg md:text-xl font-inter text-neutral-light mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-gold hover:bg-gold/90 text-navy font-poppins font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pulse-glow"
            >
              {t.exploreProjects}
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gold hover:bg-gold/90 text-navy font-poppins font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {t.contactMe}
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-white/70 hover:text-gold transition-colors duration-300 group"
          >
            <span className="font-inter text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {t.scrollDown}
            </span>
            <ChevronDown size={24} className="animate-bounce" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-gold rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
