
import React, { useState } from 'react';
import { ExternalLink, Smartphone, Globe, FileText, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectsSectionProps {
  language: 'tr' | 'en';
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Geçici placeholder resimler
  const beautiqImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop";
  const turkuazImage = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop";
  const hanedanImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop";
  const degirmenImage = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop";

  const translations = {
    tr: {
      title: 'Projeler',
      allProjects: 'Tüm Projeler',
      mobileApp: 'Mobil Uygulama',
      website: 'Website',
      digitalCatalog: 'Dijital Katalog',
      trainingSystem: 'Eğitim Sistemi',
      viewDemo: 'Demoyu İncele',
      visitSite: 'Siteyi Ziyaret Et',
      viewCatalog: 'Kataloğu Gör',
      viewSystem: 'Sistemi İncele',
      viewApp: 'Uygulamayı İncele',
      moreProjects: 'Daha Fazla Proje Gör',
      projects: [
        {
          title: 'Beautiq',
          subtitle: 'Güzellik Salonu Yönetimi',
          year: '2024–2025',
          category: 'mobile',
          description: 'Randevu, müşteri ve envanter yönetimi için mobil uygulama ve sistem.',
          result: 'Rezervasyonlarda %40 artış ve müşteri memnuniyeti.',
          image: beautiqImage,
          cta: 'Uygulamayı İncele',
          link: 'https://beautiq.lovable.app/'
        },
        {
          title: 'Antalya Turkuaz Website',
          subtitle: 'Kurumsal Website',
          year: '2025',
          category: 'website',
          description: 'Güvenlik ve BT çözümleri için SEO optimize, responsive kurumsal website.',
          result: '%60 organik trafik artışı, %30 lead artışı.',
          image: turkuazImage,
          cta: 'Siteyi Ziyaret Et',
          link: 'https://www.antalyaturkuaz.com/'
        },
        {
          title: 'Hanedan Konakları',
          subtitle: 'Dijital Katalog',
          year: '2024',
          category: 'catalog',
          description: '3D görsel, sanal tur ve dinamik fiyatlandırma ile interaktif katalog.',
          result: 'Satış sürecinde akıcılık, prestij artışı.',
          image: hanedanImage,
          cta: 'Kataloğu Gör',
          link: 'https://mcozcn.github.io/mucahitozcan/documents/hanedan-konaklari-katalog.pdf'
        },
        {
          title: 'Değirmen Fabrika',
          subtitle: 'Üretim Kılavuzu ve Eğitim Sistemi',
          year: '2024',
          category: 'training',
          description: 'Fabrika süreçleri için dijital rehber ve eğitim platformu.',
          result: '%35 öğrenme süresi azalması, %90 sınav başarısı.',
          image: degirmenImage,
          cta: 'Sistemi İncele',
          link: 'https://mcozcn.github.io/mucahitozcan/documents/degirmen-kilavuz-sistemi.pdf'
        }
      ]
    },
    en: {
      title: 'Projects',
      allProjects: 'All Projects',
      mobileApp: 'Mobile App',
      website: 'Website',
      digitalCatalog: 'Digital Catalog',
      trainingSystem: 'Training System',
      viewDemo: 'View Demo',
      visitSite: 'Visit Site',
      viewCatalog: 'View Catalog',
      viewSystem: 'View System',
      viewApp: 'View App',
      moreProjects: 'View More Projects',
      projects: [
        {
          title: 'Beautiq',
          subtitle: 'Beauty Salon Management',
          year: '2024–2025',
          category: 'mobile',
          description: 'Mobile app and system for appointment, customer, and inventory management.',
          result: '40% increase in bookings and customer satisfaction.',
          image: beautiqImage,
          cta: 'View App',
          link: 'https://beautiq.lovable.app/'
        },
        {
          title: 'Antalya Turkuaz Website',
          subtitle: 'Corporate Website',
          year: '2025',
          category: 'website',
          description: 'SEO-optimized, responsive corporate website for security and IT solutions.',
          result: '60% organic traffic growth, 30% lead increase.',
          image: turkuazImage,
          cta: 'Visit Site',
          link: 'https://www.antalyaturkuaz.com/'
        },
        {
          title: 'Hanedan Konakları',
          subtitle: 'Digital Catalog',
          year: '2024',
          category: 'catalog',
          description: 'Interactive catalog with 3D visuals, virtual tours, and dynamic pricing.',
          result: 'Streamlined sales process, enhanced prestige.',
          image: hanedanImage,
          cta: 'View Catalog',
          link: 'https://mcozcn.github.io/mucahitozcan/documents/hanedan-konaklari-katalog.pdf'
        },
        {
          title: 'Değirmen Factory',
          subtitle: 'Production Guide & Training System',
          year: '2024',
          category: 'training',
          description: 'Digital guide and training platform for factory processes.',
          result: '35% reduced learning time, 90% exam success rate.',
          image: degirmenImage,
          cta: 'View System',
          link: 'https://mcozcn.github.io/mucahitozcan/documents/degirmen-kilavuz-sistemi.pdf'
        }
      ]
    }
  };

  const t = translations[language];

  const filters = [
    { id: 'all', label: t.allProjects, icon: null },
    { id: 'mobile', label: t.mobileApp, icon: Smartphone },
    { id: 'website', label: t.website, icon: Globe },
    { id: 'catalog', label: t.digitalCatalog, icon: FileText },
    { id: 'training', label: t.trainingSystem, icon: BookOpen },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? t.projects 
    : t.projects.filter(project => project.category === activeFilter);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy mb-4 relative inline-block">
            {t.title}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold rounded-full"></div>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gold text-navy shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {IconComponent && <IconComponent size={18} />}
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-gold text-navy px-3 py-1 rounded-full text-sm font-poppins font-semibold">
                  {project.year}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gold font-inter font-semibold mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-700 font-inter leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-inter text-gray-800">
                      <strong className="text-navy">Sonuç:</strong> {project.result}
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => window.open(project.link, '_blank')}
                  className="w-full bg-navy hover:bg-navy/90 text-white font-poppins font-semibold rounded-full transition-all duration-300 hover:scale-105 group"
                >
                  {project.cta}
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-gold hover:bg-gold/90 text-navy font-poppins font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {t.moreProjects}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
