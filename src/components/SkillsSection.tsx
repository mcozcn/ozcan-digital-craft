
import React from 'react';
import { TrendingUp, Database, Briefcase, Palette, Search, Users, BarChart3, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface SkillsSectionProps {
  language: 'tr' | 'en';
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ language }) => {
  const translations = {
    tr: {
      title: 'Yetenekler',
      haveProjectIdea: 'Proje Fikriniz mi Var?',
      skills: [
        {
          title: 'Stratejik Pazarlama',
          description: 'Dijital strateji, marka konumlandırma',
          progress: 95,
          icon: TrendingUp
        },
        {
          title: 'Dijital Analitik & CRM',
          description: 'Veri analizi, müşteri ilişkileri yönetimi',
          progress: 98,
          icon: Database
        },
        {
          title: 'Proje Yönetimi',
          description: 'Süreç planlama, uygulama',
          progress: 92,
          icon: Briefcase
        },
        {
          title: 'Grafik & Web Tasarım',
          description: 'UI/UX, görsel iletişim',
          progress: 88,
          icon: Palette
        },
        {
          title: 'SEO & Performans Reklamcılığı',
          description: 'Google Ads, içerik stratejisi',
          progress: 94,
          icon: Search
        },
        {
          title: 'Takım Yönetimi & Eğitim',
          description: 'Liderlik, mentorluk',
          progress: 96,
          icon: Users
        },
        {
          title: 'Satış & Operasyon Yönetimi',
          description: 'Süreç optimizasyonu, verimlilik',
          progress: 90,
          icon: BarChart3
        },
        {
          title: 'Sistem Entegrasyonu',
          description: 'Platform bağlantıları, otomasyonlar',
          progress: 86,
          icon: Settings
        }
      ]
    },
    en: {
      title: 'Skills',
      haveProjectIdea: 'Have a Project Idea?',
      skills: [
        {
          title: 'Strategic Marketing',
          description: 'Digital strategy, brand positioning',
          progress: 95,
          icon: TrendingUp
        },
        {
          title: 'Digital Analytics & CRM',
          description: 'Data analysis, customer relationship management',
          progress: 98,
          icon: Database
        },
        {
          title: 'Project Management',
          description: 'Process planning, execution',
          progress: 92,
          icon: Briefcase
        },
        {
          title: 'Graphic & Web Design',
          description: 'UI/UX, visual communication',
          progress: 88,
          icon: Palette
        },
        {
          title: 'SEO & Performance Advertising',
          description: 'Google Ads, content strategy',
          progress: 94,
          icon: Search
        },
        {
          title: 'Team Management & Training',
          description: 'Leadership, mentorship',
          progress: 96,
          icon: Users
        },
        {
          title: 'Sales & Operations Management',
          description: 'Process optimization, efficiency',
          progress: 90,
          icon: BarChart3
        },
        {
          title: 'System Integration',
          description: 'Platform connections, automation',
          progress: 86,
          icon: Settings
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

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy mb-4 relative inline-block">
            {t.title}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold rounded-full"></div>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {t.skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gold/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-poppins font-semibold text-navy mb-1">
                        {skill.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-inter">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="flex justify-between text-sm font-inter text-gray-600 mb-2">
                      <span>Yetkinlik</span>
                      <span>{skill.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-navy to-gold rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.progress}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-gold hover:bg-gold/90 text-navy font-poppins font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse-glow"
          >
            {t.haveProjectIdea}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
