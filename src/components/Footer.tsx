
import React from 'react';
import { Linkedin, Mail, Globe } from 'lucide-react';

interface FooterProps {
  language: 'tr' | 'en';
  toggleLanguage: () => void;
}

const Footer: React.FC<FooterProps> = ({ language, toggleLanguage }) => {
  const translations = {
    tr: {
      copyright: '© 2025 Mücahit Özcan. Tüm hakları saklıdır.',
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      experiences: 'Deneyimler',
      projects: 'Projeler',
      skills: 'Yetenekler',
      contact: 'İletişim'
    },
    en: {
      copyright: '© 2025 Mücahit Özcan. All rights reserved.',
      home: 'Home',
      about: 'About',
      experiences: 'Experiences',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    }
  };

  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'experiences', label: t.experiences },
    { id: 'projects', label: t.projects },
    { id: 'skills', label: t.skills },
    { id: 'contact', label: t.contact },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-poppins font-bold text-gold">
              MÜCAHİT ÖZCAN
            </h3>
            <p className="font-inter text-gray-300 leading-relaxed">
              {language === 'tr' 
                ? 'Dijital dönüşümde lider, strateji ve müşteri odaklı çözümlerde uzman.'
                : 'A leader in digital transformation, specializing in strategy and customer-focused solutions.'
              }
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/mucahitozcan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mucahit@example.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4 text-gold">
              {language === 'tr' ? 'Hızlı Bağlantılar' : 'Quick Links'}
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block font-inter text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4 text-gold">
              {language === 'tr' ? 'İletişim' : 'Contact'}
            </h4>
            <div className="space-y-2 font-inter text-gray-300">
              <p>mucahit@example.com</p>
              <p>+90 532 123 45 67</p>
              <p>{language === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Turkey'}</p>
            </div>
            
            {/* Language Switcher */}
            <div className="mt-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-gray-300 hover:text-gold transition-colors duration-300"
              >
                <Globe size={18} />
                <span className="font-inter text-sm">
                  {language === 'tr' ? '🇬🇧 English' : '🇹🇷 Türkçe'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <p className="font-inter text-gray-400">
              {t.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
