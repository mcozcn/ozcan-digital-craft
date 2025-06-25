import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/images/logo.png';

interface HeaderProps {
  language: 'tr' | 'en';
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({
  language,
  toggleLanguage
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Geçici placeholder logo URL'i
  //const logoImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&fit=crop&crop=center";
  
  const translations = {
    tr: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      experiences: 'Deneyimler',
      projects: 'Projeler',
      skills: 'Yetenekler',
      contact: 'İletişim',
      contactMe: 'Bana Ulaşın',
      slogan: 'Dijital Güçle Stratejik Dönüşüm'
    },
    en: {
      home: 'Home',
      about: 'About',
      experiences: 'Experiences',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      contactMe: 'Contact Me',
      slogan: 'Strategic Transformation through Digital Power'
    }
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experiences', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [{
    id: 'home',
    label: t.home
  }, {
    id: 'about',
    label: t.about
  }, {
    id: 'experiences',
    label: t.experiences
  }, {
    id: 'projects',
    label: t.projects
  }, {
    id: 'skills',
    label: t.skills
  }, {
    id: 'contact',
    label: t.contact
  }];

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-navy/80 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <img src={logoImage} alt="Mücahit Özcan Logo" className="w-12 h-12 object-contain rounded-full" />
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-poppins font-bold text-white tracking-wide">
                MÜCAHİT ÖZCAN
              </h1>
              <p className="text-xs md:text-sm font-inter text-gold font-medium">
                {t.slogan}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`relative font-inter font-medium transition-colors duration-300 hover:text-gold ${activeSection === item.id ? 'text-gold' : 'text-white'}`}>
                {item.label}
                {activeSection === item.id && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold animate-fade-in" />}
              </button>)}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={toggleLanguage} className="flex items-center space-x-2 text-white hover:text-gold transition-colors duration-300">
              <Globe size={18} />
              <span className="font-inter text-sm">
                {language === 'tr' ? '🇹🇷 TR' : '🇬🇧 EN'}
              </span>
            </button>
            
            <Button onClick={() => scrollToSection('contact')} className="bg-gold hover:bg-gold/90 text-navy font-poppins font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
              {t.contactMe}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white hover:text-gold transition-colors duration-300">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="lg:hidden mt-4 py-4 border-t border-white/20 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-left font-inter font-medium transition-colors duration-300 hover:text-gold ${activeSection === item.id ? 'text-gold' : 'text-white'}`}>
                  {item.label}
                </button>)}
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <button onClick={toggleLanguage} className="flex items-center space-x-2 text-white hover:text-gold transition-colors duration-300">
                  <Globe size={18} />
                  <span className="font-inter text-sm">
                    {language === 'tr' ? '🇹🇷 TR' : '🇬🇧 EN'}
                  </span>
                </button>
                
                <Button onClick={() => scrollToSection('contact')} className="bg-gold hover:bg-gold/90 text-navy font-poppins font-semibold px-4 py-2 rounded-full">
                  {t.contactMe}
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};

export default Header;
