import React from 'react';
import { useTranslation } from 'react-i18next';
import { SITE_CONTENT } from '../data/content';
import SEO from '../components/SEO';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="px-8 md:px-16 lg:px-24 py-24 bg-surface min-h-screen">
      <SEO pageKey="contact" />
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <p className="font-label text-xs text-primary mb-6 tracking-[0.3em] uppercase">{t('nav.contact')}</p>
          <h1 className="font-headline font-black text-6xl md:text-8xl tracking-tighter mb-12 uppercase">
            {t('contact.headline')}<br/><span className="text-autograph-gradient">{t('contact.headlineAccent')}</span>
          </h1>
          <p className="max-w-3xl text-2xl text-secondary font-light leading-relaxed">
            {t('contact.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Contact Form */}
          <div>
            <form className="space-y-12">
              <div className="group relative">
                <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">01 / {t('contact.form.name')}</label>
                <input 
                  type="text" 
                  placeholder="IDENTITY" 
                  className="w-full bg-transparent border-b border-on-surface/20 py-4 font-headline focus:outline-none focus:border-primary transition-colors text-xl"
                />
              </div>
              <div className="group relative">
                <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">02 / {t('contact.form.email')}</label>
                <input 
                  type="email" 
                  placeholder="PROTOCOL@DOMAIN.COM" 
                  className="w-full bg-transparent border-b border-on-surface/20 py-4 font-headline focus:outline-none focus:border-primary transition-colors text-xl"
                />
              </div>
              <div className="group relative">
                <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">03 / {t('contact.form.scope')}</label>
                <textarea 
                  rows="4" 
                  placeholder="DESCRIPTION OF TECHNICAL REQUIREMENTS" 
                  className="w-full bg-transparent border-b border-on-surface/20 py-4 font-headline focus:outline-none focus:border-primary transition-colors text-xl resize-none"
                ></textarea>
              </div>
              <button className="bg-on-surface text-surface py-6 px-12 rounded-lg font-label text-xs uppercase tracking-[0.2em] hover:bg-primary transition-all duration-300 w-full md:w-auto">
                {t('contact.form.submit')}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-24">
            <div>
              <h3 className="font-headline font-bold text-2xl mb-8 tracking-tight uppercase">{t('contact.links')}</h3>
              <div className="space-y-4">
                <p className="font-label text-xs uppercase tracking-widest text-secondary">Signal / Phone</p>
                <a href={`tel:${SITE_CONTENT.contact.phone}`} className="font-headline text-3xl hover:text-primary transition-colors">{SITE_CONTENT.contact.phone}</a>
              </div>
              <div className="space-y-4 mt-12">
                <p className="font-label text-xs uppercase tracking-widest text-secondary">Protocol / Email</p>
                <a href={`mailto:${SITE_CONTENT.contact.email}`} className="font-headline text-3xl hover:text-primary transition-colors">{SITE_CONTENT.contact.email}</a>
              </div>
            </div>

            <div>
              <h3 className="font-headline font-bold text-2xl mb-8 tracking-tight uppercase">{t('contact.locations')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {SITE_CONTENT.contact.offices.map((office, index) => (
                  <div key={index} className="border-t border-on-surface/10 pt-8 group">
                    <h4 className="font-label text-xs uppercase tracking-[0.4em] text-primary mb-2 flex items-center gap-2">
                        {office.country.toUpperCase()}
                        <span className="w-4 h-[1px] bg-primary"></span>
                    </h4>
                    <p className="font-headline font-bold text-lg mb-4 text-on-surface/90">{office.city}</p>
                    <p className="text-secondary leading-relaxed font-light mb-4">{office.address}</p>
                    <a href={`tel:${office.phone}`} className="inline-flex items-center gap-2 text-sm font-label tracking-widest text-on-surface/60 group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-base">phone</span>
                      {office.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
