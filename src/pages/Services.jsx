import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SITE_CONTENT } from '../data/content';
import SEO from '../components/SEO';

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="px-8 md:px-16 lg:px-24 py-24 bg-surface min-h-screen">
      <SEO 
        title={t('seo.services.title')}
        description={t('seo.services.description')}
        keywords={t('seo.services.keywords')}
      />
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <p className="font-label text-xs text-primary mb-6 tracking-[0.3em] uppercase">{t('sections.capabilities')}</p>
          <h1 className="font-headline font-black text-6xl md:text-8xl tracking-tighter mb-12">
            TECHNICAL<br/><span className="text-autograph-gradient">CAPABILITIES</span>
          </h1>
          <p className="max-w-2xl text-xl text-secondary font-light leading-relaxed">
            We provide brilliant ideas to grow your startup. Our team of experts crafts innovative solutions that drive success through design, development, and marketing precision.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {SITE_CONTENT.services.map((service, index) => (
            <Link to={`/services/${service.id}`} key={index} className="border-t border-on-surface/10 pt-12 group cursor-pointer block">
              <span className="font-label text-[10px] text-primary tracking-[0.4em] mb-8 block uppercase">
                0{index + 1} / {service.title}
              </span>
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">{service.icon}</span>
                <h3 className="font-headline font-bold text-2xl tracking-tight group-hover:text-primary transition-colors">
                  {service.title.toUpperCase()}
                </h3>
              </div>
              <p className="text-secondary leading-relaxed font-light mb-8">
                {service.description} Our protocol ensures high-fidelity results.
              </p>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface/50 group-hover:text-on-surface inline-flex items-center gap-2">
                Explore Protocol <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
