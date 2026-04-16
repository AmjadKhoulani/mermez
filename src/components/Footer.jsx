import React from 'react';
import { useTranslation } from 'react-i18next';
import { Twitter, Linkedin, Instagram, Github, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 tonal-shift bg-neutral-100 dark:bg-neutral-900 px-12 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="mb-8">
            <img 
              src="https://mermez.com/wp-content/uploads/2025/04/Log-Mermez-01-e1744273275240.png" 
              alt="Mermez Lab Logo" 
              className="h-16 object-contain"
            />
          </div>
          <p className="font-label uppercase tracking-[0.1em] text-xs text-neutral-500 dark:text-neutral-400 leading-loose">
            {t('footer.tagline')}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-label text-[10px] text-on-surface/60 tracking-widest uppercase">
              {t('footer.licensed')}
            </span>
          </div>
        </div>
        
        <div className="flex gap-6 mt-8 md:mt-0 items-start">
          <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all duration-300"><Twitter className="w-4 h-4" /></a>
          <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all duration-300"><Linkedin className="w-4 h-4" /></a>
          <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all duration-300"><Instagram className="w-4 h-4" /></a>
          <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all duration-300"><Github className="w-4 h-4" /></a>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative">
        <span className="font-label text-xs tracking-widest text-neutral-500 dark:text-neutral-400">
          {t('footer.licensed')}
        </span>

        <p className="font-label uppercase tracking-widest text-xs text-neutral-500 dark:text-neutral-400 md:absolute md:left-1/2 md:-translate-x-1/2">
          © {new Date().getFullYear()} {t('footer.rights')}
        </p>

        <div className="flex gap-6 items-center">
            <span className="font-label text-[10px] text-primary tracking-[0.4em] opacity-50 hidden md:block">{t('footer.stayTechnical')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
