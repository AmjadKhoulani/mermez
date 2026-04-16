import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SITE_CONTENT } from '../data/content';
import { 
  ShoppingBag, ShoppingCart, Layers, Users, Monitor, 
  Smartphone, Layout, PenTool, TrendingUp, Search, 
  Share2, Play, Cpu, ArrowUpRight, MessageSquare, Zap, BarChart3, Eye 
} from 'lucide-react';

const iconMap = {
  'shopping-bag': ShoppingBag,
  'shopping-cart': ShoppingCart,
  'layers': Layers,
  'users': Users,
  'monitor': Monitor,
  'smartphone': Smartphone,
  'layout': Layout,
  'pen-tool': PenTool,
  'trending-up': TrendingUp,
  'search': Search,
  'share-2': Share2,
  'play': Play,
  'cpu': Cpu,
  'message-square': MessageSquare,
  'zap': Zap,
  'bar-chart': BarChart3,
  'eye': Eye
};

const BentoCard = ({ service, index, size }) => {
  const { t } = useTranslation();
  const Icon = iconMap[service.icon] || Layers;
  
  const spanClasses = {
    large: 'md:col-span-2 md:row-span-2',
    wide: 'md:col-span-2 md:row-span-1',
    normal: 'md:col-span-1 md:row-span-1'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative group overflow-hidden rounded-3xl p-8 border border-white/5 bg-on-surface/40 backdrop-blur-md transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(var(--primary-rgb),0.3)] ${spanClasses[size]}`}
    >
      {/* Background Decorative Glow */}
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary mb-12 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
          <Icon className="w-7 h-7" />
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-headline font-black text-2xl tracking-tighter text-white uppercase italic">
              {t(`serviceNames.${service.id}`) || service.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-primary transition-colors duration-500" />
          </div>
          <p className="text-white/50 leading-relaxed font-light text-sm max-w-[280px]">
            {t(`serviceDescriptions.${service.id}`) || service.description}
          </p>
        </div>
      </div>
      
      {/* Technical Annotation */}
      <div className="absolute bottom-6 right-8 font-label text-[10px] text-white/10 tracking-widest uppercase italic group-hover:text-primary/20 transition-colors">
        Node.0{index + 1}
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useTranslation();

  const enterpriseServiceIds = ['marketplace-services', 'ecommerce-services', 'erp-services', 'crm-services'];
  const enterpriseServices = SITE_CONTENT.services.filter(s => enterpriseServiceIds.includes(s.id));
  const otherServices = SITE_CONTENT.services.filter(s => !enterpriseServiceIds.includes(s.id));

  return (
    <section id="services" className="relative bg-on-surface text-surface py-32 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <div className="max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-label text-xs text-primary mb-6 tracking-[0.4em] uppercase font-bold"
            >
              {t('sections.capabilities')}
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-headline font-black text-5xl md:text-8xl tracking-tighter text-white leading-[0.9]"
            >
              {t('sections.capabilitiesTitle')}
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 max-w-sm font-light leading-relaxed border-l-2 border-primary/20 pl-6 italic"
          >
            "We specialize in high-load enterprise solutions, connecting complex data nodes into seamless digital marketplaces."
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-32 auto-rows-fr">
          {enterpriseServices[0] && <BentoCard service={enterpriseServices[0]} index={0} size="large" />}
          {enterpriseServices[1] && <BentoCard service={enterpriseServices[1]} index={1} size="normal" />}
          {enterpriseServices[2] && <BentoCard service={enterpriseServices[2]} index={2} size="normal" />}
          {enterpriseServices[3] && <BentoCard service={enterpriseServices[3]} index={3} size="wide" />}
        </div>

        {/* Core Specializations Section */}
        <div className="border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <h4 className="font-headline font-black text-3xl text-white tracking-tighter uppercase shrink-0 italic">
              Core Specializations
            </h4>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {otherServices.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(var(--primary-rgb), 0.1)', borderColor: 'rgba(var(--primary-rgb), 0.3)' }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/70 font-label text-[10px] tracking-widest uppercase transition-all flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {service.title}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
