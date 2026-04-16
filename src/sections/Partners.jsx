import React from 'react';
import { useTranslation } from 'react-i18next';
import { SITE_CONTENT } from '../data/content';
import { ShieldCheck } from 'lucide-react';

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-surface border-t border-on-surface/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary mb-6">
            <ShieldCheck className="w-3 h-3" />
            <span className="font-label text-[10px] tracking-widest uppercase font-bold">{t('partners.subtitle')}</span>
          </div>
          <h2 className="font-headline font-black text-3xl md:text-5xl tracking-tighter uppercase mb-6">
            {t('partners.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-secondary font-light leading-relaxed">
            {t('partners.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {SITE_CONTENT.partners.map((partner, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center p-8 bg-surface-container-low/30 hover:bg-surface-container-high transition-all duration-300 rounded-xl border border-on-surface/5 hover:border-primary/20"
            >
              <span className="font-label text-[9px] tracking-[0.2em] text-primary/60 mb-2 uppercase group-hover:text-primary transition-colors">
                {partner.type}
              </span>
              <p className="font-headline font-black text-base md:text-lg text-center tracking-tight text-on-surface/80 group-hover:text-on-surface transition-colors">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
