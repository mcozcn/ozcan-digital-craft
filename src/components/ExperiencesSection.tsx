import React from 'react';
import { Briefcase, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExperiencesSectionProps {
  language: 'tr' | 'en';
}

const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ language }) => {
  const translations = {
    tr: {
      title: 'Deneyimler',
      viewProjects: 'Projelerimi Gör',
      experiences: [
        {
          title: 'Freelance Dijital Pazarlama Müdürü',
          company: 'Bağımsız',
          period: '2020 – Günümüz',
          achievements: [
            'KOBİ\'ler için sektör genelinde dijital pazarlama stratejileri geliştirdim',
            'E-ticaret platformlarında %30 satış artışı sağladım',
            'SEO optimizasyonu ile organik erişimi %50 artırdım',
            'Sosyal medya ve içerik stratejileri ile marka bilinirliğini güçlendirdim'
          ]
        },
        {
          title: 'Kıdemli Müşteri Yönetimi Uzmanı',
          company: 'GSK',
          period: '2015 – 2018',
          achievements: [
            'CRM optimizasyonu ile müşteri şikayetlerini %20 azalttım',
            'Yıllık hedeflerin %95\'ini gerçekleştirdim',
            'Müşteri veri analitiği ile pazarlama stratejilerine rehberlik ettim',
            '180 eczanenin performansını yönettim ve değerlendirdim'
          ]
        },
        {
          title: 'Teknoloji Uzmanı',
          company: 'Turkcell',
          period: '2009 – 2011',
          achievements: [
            'Akıllı cihaz satışlarında %15 artış sağladım',
            'Ekip eğitimleri ile mağaza performansını iyileştirdim',
            'Müşteri deneyimini artırmak için süreçleri optimize ettim',
            'Yeni ürün lansmanları için teknik eğitimleri koordine ettim'
          ]
        },
        {
          title: 'Mağaza Müdürü',
          company: 'Teknosa',
          period: '2005 – 2008',
          achievements: [
            'Operasyon ve envanter yönetimini optimize ettim',
            'Ziyaretçi-satış dönüşüm oranlarını iyileştirdim',
            'Satış hedeflerini sürekli tutturarak bölgesel ödüller kazandım',
            'Müşteri odaklı mağaza kültürünü geliştirdim'
          ]
        }
      ]
    },
    en: {
      title: 'Experiences',
      viewProjects: 'View My Projects',
      experiences: [
        {
          title: 'Freelance Digital Marketing Manager',
          company: 'Independent',
          period: '2020 – Present',
          achievements: [
            'Developed digital marketing strategies for SMEs across industries',
            'Achieved 30% sales growth on e-commerce platforms',
            'Boosted organic reach by 50% through SEO optimization',
            'Enhanced brand awareness via social media and content strategies'
          ]
        },
        {
          title: 'Senior Customer Management Specialist',
          company: 'GSK',
          period: '2015 – 2018',
          achievements: [
            'Reduced customer complaints by 20% through CRM optimization',
            'Achieved 95% of annual targets',
            'Guided marketing strategies with customer data analytics',
            'Managed and evaluated performance of 180 pharmacies'
          ]
        },
        {
          title: 'Technology Specialist',
          company: 'Turkcell',
          period: '2009 – 2011',
          achievements: [
            'Increased smart device sales by 15%',
            'Improved store performance through team training',
            'Optimized processes to enhance customer experience',
            'Coordinated technical training for new product launches'
          ]
        },
        {
          title: 'Store Manager',
          company: 'Teknosa',
          period: '2005 – 2008',
          achievements: [
            'Optimized operations and inventory management',
            'Improved visitor-to-sale conversion rates',
            'Consistently met sales targets, earning regional awards',
            'Fostered a customer-centric store culture'
          ]
        }
      ]
    }
  };

  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIcon = (index: number) => {
    const icons = [Briefcase, TrendingUp, Users, Award];
    return icons[index % icons.length];
  };

  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy mb-4 relative inline-block">
            {t.title}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold rounded-full"></div>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gold transform md:-translate-x-1/2"></div>

          {t.experiences.map((experience, index) => {
            const IconComponent = getIcon(index);
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gold rounded-full transform md:-translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-navy rounded-full"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-6/12 ${isEven ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gold/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-poppins font-semibold text-navy">
                          {experience.title}
                        </h3>
                        <p className="text-gold font-inter font-medium">
                          {experience.company} • {experience.period}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start text-gray-700 font-inter"
                        >
                          <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-gold hover:bg-gold/90 text-navy font-poppins font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {t.viewProjects}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
