import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.work'), path: '/portfolio' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
    { code: 'tr', label: 'TR' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full mx-auto border-b border-on-surface/5">
      <Link 
        to="/" 
        className="flex items-center gap-2"
      >
        <img 
          src="https://mermez.com/wp-content/uploads/2025/04/Log-Mermez-01-e1744273275240.png" 
          alt="Mermez Lab Logo" 
          className="h-12 md:h-16 object-contain"
        />
      </Link>
      
      <div className="hidden lg:flex gap-8 items-center">
        {navLinks.map((link) => (
          <NavLink 
            key={link.path}
            to={link.path}
            className={({ isActive }) => 
              `font-label text-xs uppercase tracking-[0.1em] transition-all duration-300 ease-in-out border-b-2 ${
                isActive 
                ? 'text-primary border-primary pb-1' 
                : 'text-secondary border-transparent hover:text-on-surface pb-1'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}

        {/* Language Switcher */}
        <div className="flex items-center gap-3 ml-4 pl-6 border-l border-on-surface/10 group relative">
          <Globe className="w-5 h-5 text-secondary group-hover:text-primary transition-colors cursor-pointer" />
          <div className="flex gap-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`font-label text-[11px] px-2 py-1.5 rounded transition-all font-bold uppercase ${
                  i18n.language === lang.code 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-secondary hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {lang.code}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Link 
        to="/contact"
        className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3.5 rounded-lg font-label text-sm uppercase tracking-[0.1em] shadow-lg shadow-primary/20 hover:shadow-primary/40 scale-95 hover:scale-100 active:scale-95 transition-all duration-300"
      >
        {t('nav.cta')}
      </Link>
    </nav>
  );
};

export default Navbar;
