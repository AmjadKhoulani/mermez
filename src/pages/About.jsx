import React from 'react';
import { useTranslation } from 'react-i18next';
import { SITE_CONTENT } from '../data/content';
import SEO from '../components/SEO';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="px-8 md:px-16 lg:px-24 py-24 bg-surface min-h-screen">
      <SEO pageKey="about" />
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <p className="font-label text-xs text-primary mb-6 tracking-[0.3em] uppercase">{t('nav.about')}</p>
          <h1 className="font-headline font-black text-6xl md:text-8xl tracking-tighter mb-12 uppercase">
            {t('about.headline')} <span className="text-autograph-gradient">{t('about.headlineAccent')}</span>
          </h1>
          <p className="max-w-3xl text-2xl text-secondary font-light leading-relaxed">
            {t('about.description')}
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-48 items-center">
          <div>
            <h2 className="font-headline font-bold text-4xl mb-8 tracking-tight uppercase">{t('sections.methodology')}</h2>
            <p className="text-lg text-secondary leading-relaxed font-light mb-8">
              {t('hero.description')}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-primary"></div>
                <span className="font-label text-xs uppercase tracking-widest">Precision Engineering</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-primary"></div>
                <span className="font-label text-xs uppercase tracking-widest">Digital Strategy</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-primary"></div>
                <span className="font-label text-xs uppercase tracking-widest">User Experience</span>
              </div>
            </div>
          </div>
          <div className="aspect-[4/5] bg-surface-container-low rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQTT6Sxbptb9fSY7PSozEeB3GExdLTMV5U-qJK5_NvhvUTl9zH7Ap3qhRIZ79QYGnF6vhrg6Bt3E-ednImHzXy-hU3B1ATnhEHr-2U8NhYd5c_6ApHtpwYEPZOisQrFYTculzLRhcQkH7QUXY2CYaVi6pc-rqwFR8HaR0E-pasit8iXXxTMIbPEj6jiTzQNrwvVexvLWE4T3livgWAI6hXFITVwwmv2JJ20WVv9N-wvHBIfsNotaSA-2nyvL1iNBxSLDZUFqhTUGFK" 
              alt="Mermez Studio" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section>
          <div className="flex justify-between items-baseline mb-16 border-b border-on-surface/10 pb-4">
            <h2 className="font-headline font-bold text-4xl tracking-tight uppercase">{t('about.team')}</h2>
            <span className="font-label text-xs text-secondary tracking-widest">{t('about.teamSub')}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SITE_CONTENT.about.team.map((member, index) => (
              <div key={index} className="group cursor-default">
                <div className="aspect-square bg-surface-container-high mb-8 rounded-lg overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl font-headline font-black text-on-surface/10">M</div>
                  )}
                </div>
                <h4 className="font-headline font-bold text-xl mb-2">{member.name}</h4>
                <p className="font-label text-xs text-primary uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
