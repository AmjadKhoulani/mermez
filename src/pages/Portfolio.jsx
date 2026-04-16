import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SITE_CONTENT } from '../data/content';
import SEO from '../components/SEO';

const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <div className="px-8 md:px-16 lg:px-24 py-24 bg-surface min-h-screen">
      <SEO 
        title={t('seo.portfolio.title')}
        description={t('seo.portfolio.description')}
        keywords={t('seo.portfolio.keywords')}
      />
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <p className="font-label text-xs text-primary mb-6 tracking-[0.3em] uppercase">{t('nav.work')}</p>
          <h1 className="font-headline font-black text-6xl md:text-8xl tracking-tighter mb-12 uppercase">
            SELECTED<br/><span className="text-autograph-gradient">{t('nav.work').toUpperCase()}</span>
          </h1>
          <p className="max-w-3xl text-2xl text-secondary font-light leading-relaxed">
            Discover how we translate complex engineering into fluid brand experiences across various industries.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SITE_CONTENT.portfolio.map((project, index) => (
            <Link 
              key={index} 
              to={`/work/${project.id}`}
              className="group relative overflow-hidden bg-surface-container-low rounded-lg aspect-[16/10]"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <p className="font-label text-xs mb-4 tracking-[0.4em] uppercase text-primary">{project.category}</p>
                <h3 className="font-headline font-black text-4xl mb-4 tracking-tight">{project.title}</h3>
                <p className="text-white/60 font-light max-w-md">{project.description}</p>
              </div>
              <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">arrow_outward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
