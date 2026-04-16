import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Zap, Eye, Network, Terminal } from 'lucide-react';

const AISection = () => {
  const { t } = useTranslation();

  const pillars = [
    { id: 'generative', icon: BrainCircuit, color: 'text-blue-400' },
    { id: 'automation', icon: Zap, color: 'text-yellow-400' },
    { id: 'predictive', icon: Terminal, color: 'text-purple-400' },
    { id: 'vision', icon: Eye, color: 'text-green-400' }
  ];

  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background Neural Animation (Simulation) */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="w-full h-full">
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary mb-8">
              <Network className="w-4 h-4" />
              <span className="font-label text-xs tracking-[0.3em] uppercase font-bold">{t('aiSection.tagline')}</span>
            </div>
            
            <h2 className="font-headline font-black text-6xl md:text-8xl tracking-tighter text-white mb-8 leading-[0.9]">
              {t('aiSection.headline')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500">
                {t('aiSection.headlineAccent')}
              </span>
            </h2>

            <p className="text-xl text-white/50 font-light leading-relaxed mb-12 max-w-xl">
               {t('aiSection.description')}
            </p>

            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md relative group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <q className="text-lg text-white/80 italic leading-relaxed block">
                {t('aiSection.manifesto')}
              </q>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-white/20 hover:bg-white/10 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${pillar.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-headline font-bold text-xl text-white mb-2 uppercase tracking-tight italic">
                    {t(`aiSection.pillars.${pillar.id}`)}
                  </h4>
                  <div className="h-1 w-12 bg-white/10 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                </motion.div>
              );
            })}
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="md:col-span-2 mt-4 py-6 px-12 bg-primary text-white rounded-2xl font-label text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-4 group"
            >
              {t('aiSection.cta')}
              <Cpu className="w-4 h-4 group-hover:rotate-90 transition-transform" />
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AISection;
