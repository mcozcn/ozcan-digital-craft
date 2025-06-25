import React from 'react';
import { Brain, Users, Laptop, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
interface AboutSectionProps {
  language: 'tr' | 'en';
}
const AboutSection: React.FC<AboutSectionProps> = ({
  language
}) => {
  const translations = {
    tr: {
      title: 'Hakkımda',
      bio1: 'Dijital dönüşümde lider, strateji ve müşteri odaklı çözümlerde uzman. 13+ yıllık deneyimimle işletmelerin potansiyelini ortaya çıkarıyorum.',
      bio2: 'Teknolojiyi insan odaklı yaklaşımlarla birleştirerek, ölçülebilir sonuçlar sunuyorum. Her projede müşteri memnuniyeti ve uzun vadeli başarıyı hedefliyorum.',
      bio3: 'Agile metodoloji, veri analizi ve yaratıcı problem çözme becerilerimle, işletmelerin dijital çağda rekabet avantajı elde etmelerine yardımcı oluyorum.',
      exploreExperiences: 'Deneyimlerimi Keşfet',
      strengths: {
        strategic: {
          title: 'Stratejik Düşünme',
          description: 'Veri odaklı kararlar ve uzun vadeli planlama ile işletmeleri geleceğe hazırlıyorum.'
        },
        leadership: {
          title: 'Takım Liderliği',
          description: 'Agile metodoloji ve ekip motivasyonu ile yüksek performanslı takımlar oluşturuyorum.'
        },
        technical: {
          title: 'Teknik Uzmanlık',
          description: 'Dijital platformlar ve araç çözümlerinde derinlemesine bilgi ve deneyim.'
        },
        client: {
          title: 'Müşteri Odaklılık',
          description: 'Kullanıcı deneyimi ve müşteri memnuniyetini her zaman önceleyerek çözümler üretiyorum.'
        }
      }
    },
    en: {
      title: 'About Me',
      bio1: 'A leader in digital transformation, specializing in strategy and customer-focused solutions. I unlock business potential with 13+ years of experience.',
      bio2: 'By combining technology with human-centered approaches, I deliver measurable results. I aim for customer satisfaction and long-term success in every project.',
      bio3: 'With my agile methodology, data analysis, and creative problem-solving skills, I help businesses gain competitive advantage in the digital age.',
      exploreExperiences: 'Explore My Experiences',
      strengths: {
        strategic: {
          title: 'Strategic Thinking',
          description: 'Preparing businesses for the future with data-driven decisions and long-term planning.'
        },
        leadership: {
          title: 'Team Leadership',
          description: 'Creating high-performance teams through agile methodology and team motivation.'
        },
        technical: {
          title: 'Technical Expertise',
          description: 'Deep knowledge and experience in digital platforms and tool solutions.'
        },
        client: {
          title: 'Client Focus',
          description: 'Always prioritizing user experience and customer satisfaction in solution development.'
        }
      }
    }
  };
  const t = translations[language];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const strengths = [{
    icon: Brain,
    title: t.strengths.strategic.title,
    description: t.strengths.strategic.description,
    color: 'text-gold'
  }, {
    icon: Users,
    title: t.strengths.leadership.title,
    description: t.strengths.leadership.description,
    color: 'text-navy'
  }, {
    icon: Laptop,
    title: t.strengths.technical.title,
    description: t.strengths.technical.description,
    color: 'text-gold'
  }, {
    icon: Target,
    title: t.strengths.client.title,
    description: t.strengths.client.description,
    color: 'text-navy'
  }];
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy mb-4 relative inline-block">
            {t.title}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold rounded-full"></div>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="space-y-4">
              <p className="text-lg font-inter text-gray-700 leading-relaxed">
                {t.bio1}
              </p>
              <p className="text-lg font-inter text-gray-700 leading-relaxed">
                {t.bio2}
              </p>
              <p className="text-lg font-inter text-gray-700 leading-relaxed">
                {t.bio3}
              </p>
            </div>
            
            <Button onClick={() => scrollToSection('experiences')} className="bg-navy hover:bg-navy/90 text-white font-poppins font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
              {t.exploreExperiences}
            </Button>
          </div>

          {/* Professional Image */}
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img alt="Mücahit Özcan" src="/images/hero.png" className="w-full h-full object-contain" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Strengths */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => {
          const IconComponent = strength.icon;
          return <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 group-hover:bg-gray-100 transition-colors duration-300`}>
                    <IconComponent className={`w-8 h-8 ${strength.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-poppins font-semibold text-navy mb-3">
                    {strength.title}
                  </h3>
                  
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default AboutSection;
