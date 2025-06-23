
import React, { useState } from 'react';
import { Mail, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  language: 'tr' | 'en';
}

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const translations = {
    tr: {
      title: 'İletişim',
      subtitle: 'Dijital dönüşüm yolculuğunuzda yanınızdayım. Hadi konuşalım!',
      nameLabel: 'Adınız',
      namePlaceholder: 'Adınızı girin',
      emailLabel: 'E-posta',
      emailPlaceholder: 'E-posta adresinizi girin',
      messageLabel: 'Mesajınız',
      messagePlaceholder: 'Projeniz hakkında detayları paylaşın...',
      sendMessage: 'Mesaj Gönder',
      sending: 'Gönderiliyor...',
      email: 'mucahit@example.com',
      phone: '+90 532 123 45 67',
      location: 'İstanbul, Türkiye',
      successMessage: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.',
      errorMessage: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
      linkedinProfile: 'LinkedIn Profilim'
    },
    en: {
      title: 'Contact',
      subtitle: 'I\'m here to guide you on your digital transformation journey. Let\'s talk!',
      nameLabel: 'Your Name',
      namePlaceholder: 'Enter your name',
      emailLabel: 'Email',
      emailPlaceholder: 'Enter your email address',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Share details about your project...',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      email: 'mucahit@example.com',
      phone: '+90 532 123 45 67',
      location: 'Istanbul, Turkey',
      successMessage: 'Your message has been sent successfully! I will get back to you soon.',
      errorMessage: 'An error occurred while sending the message. Please try again.',
      linkedinProfile: 'My LinkedIn Profile'
    }
  };

  const t = translations[language];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Başarılı!",
        description: t.successMessage,
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Hata!",
        description: t.errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: t.email,
      href: `mailto:${t.email}`,
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: t.phone,
      href: `tel:${t.phone}`,
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      label: 'Konum',
      value: t.location,
      href: '#',
      color: 'text-red-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: t.linkedinProfile,
      href: 'https://linkedin.com/in/mucahitozcan',
      color: 'text-blue-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4 relative inline-block">
            {t.title}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold rounded-full"></div>
          </h2>
          <p className="text-xl font-inter text-neutral-light max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-poppins font-semibold text-navy mb-2">
                    {t.nameLabel}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.namePlaceholder}
                    className="font-inter focus:ring-gold focus:border-gold"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-poppins font-semibold text-navy mb-2">
                    {t.emailLabel}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.emailPlaceholder}
                    className="font-inter focus:ring-gold focus:border-gold"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-poppins font-semibold text-navy mb-2">
                    {t.messageLabel}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.messagePlaceholder}
                    className="font-inter focus:ring-gold focus:border-gold resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold/90 text-navy font-poppins font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-navy mr-2"></div>
                      {t.sending}
                    </>
                  ) : (
                    <>
                      {t.sendMessage}
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card
                  key={index}
                  className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 ${info.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-poppins font-semibold text-white mb-1">
                          {info.label}
                        </h3>
                        {info.href && info.href !== '#' ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="font-inter text-neutral-light hover:text-gold transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="font-inter text-neutral-light">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
