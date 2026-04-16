import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 mb-32 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 right-0 p-8 select-none pointer-events-none hidden lg:block"
      >
        <span className="font-headline font-black text-[20rem] leading-none">MRMZ</span>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl relative z-10 mt-16"
      >
        <motion.p variants={itemVariants} className="font-label text-sm md:text-base tracking-[0.2em] text-primary mb-8 uppercase">
          {t('hero.tagline')}
        </motion.p>
        
        <motion.h1 variants={itemVariants} className={`font-headline font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-12 text-on-surface ${isRtl ? 'leading-[1.3]' : 'leading-[0.9]'}`}>
          {t('hero.headline')}<br/>
          <span className="text-autograph-gradient">{t('hero.headlineAccent')}</span><br/>
          {t('hero.headlineEnd')}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.div variants={itemVariants} className="md:col-span-6">
            <p className="text-xl md:text-2xl font-light text-secondary leading-relaxed">
              {t('hero.description')}
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:col-start-9 md:col-span-4 flex flex-col items-start gap-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-[1px] bg-outline transition-all duration-300 group-hover:w-24 group-hover:bg-primary"></div>
              <span className="font-label text-xs uppercase tracking-[0.2em] group-hover:text-primary transition-colors">{t('hero.cta')}</span>
            </div>
            
            <div className="flex gap-12 mt-8 pt-8 border-t border-on-surface/5 w-full">
              <div>
                <p className="font-headline font-black text-3xl">03+</p>
                <p className="font-label text-xs uppercase tracking-widest text-primary mt-1">Regions</p>
              </div>
              <div>
                <p className="font-headline font-black text-3xl">100%</p>
                <p className="font-label text-xs uppercase tracking-widest text-primary mt-1">Precision</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

