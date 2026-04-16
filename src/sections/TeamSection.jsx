import React from 'react';
import { useTranslation } from 'react-i18next';
import { SITE_CONTENT } from '../data/content';

const defaultAvatar = (name) => {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  return initials;
};

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-surface-container-low/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
          <div>
            <p className="font-label text-xs text-primary mb-4 tracking-[0.3em] uppercase">
              {t('about.teamSub')}
            </p>
            <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase">
              {t('about.team')}
            </h2>
          </div>
          <p className="max-w-sm text-secondary font-light leading-relaxed text-sm">
            {t('about.description')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {SITE_CONTENT.about.team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-surface border border-on-surface/5 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Image or Avatar */}
              <div className="aspect-[3/4] relative overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center">
                    <span className="font-headline font-black text-5xl text-primary/30 group-hover:text-primary/60 transition-colors duration-300">
                      {defaultAvatar(member.name)}
                    </span>
                  </div>
                )}
                {/* Number Tag */}
                <div className="absolute top-4 left-4">
                  <span className="font-label text-[10px] tracking-[0.3em] uppercase bg-surface/80 backdrop-blur-sm px-2 py-1 rounded text-primary">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 border-t border-on-surface/5">
                <h3 className="font-headline font-black text-sm md:text-base tracking-tight text-on-surface mb-1 leading-tight">
                  {member.name}
                </h3>
                <p className="font-label text-[10px] tracking-[0.15em] uppercase text-primary">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
