import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SITE_CONTENT } from '../data/content';
import SEO from '../components/SEO';
import { ArrowLeft, ExternalLink, Cpu, Layout, Users, BarChart } from 'lucide-react';

const WorkDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  
  const project = SITE_CONTENT.portfolio.find(p => p.id === id);
  const localized = t(`projects.${id}`, { returnObjects: true });

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface">
        <h1 className="font-headline font-black text-4xl mb-8 uppercase italic">Project Not Found</h1>
        <Link to="/portfolio" className="bg-primary text-white px-8 py-3 rounded-full font-label text-xs uppercase tracking-widest">
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-surface min-h-screen">
      <SEO 
        title={`${project.title} | ${t('nav.work')}`}
        description={project.description}
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
        
        <div className="absolute bottom-24 left-8 md:left-16 lg:left-24 right-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary font-label text-xs uppercase tracking-[0.3em] mb-12 hover:gap-4 transition-all">
              <ArrowLeft className="w-4 h-4" />
              {t('nav.work')}
            </Link>
            <h1 className="font-headline font-black text-7xl md:text-9xl tracking-tighter text-on-surface uppercase italic leading-[0.85]">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Project Specs */}
      <section className="px-8 md:px-16 lg:px-24 py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <p className="font-label text-[10px] text-on-surface/30 uppercase tracking-[0.3em] mb-2 italic">Category</p>
            <p className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">{project.category}</p>
          </div>
          <div>
            <p className="font-label text-[10px] text-on-surface/30 uppercase tracking-[0.3em] mb-2 italic">Year</p>
            <p className="font-headline font-bold text-lg text-on-surface">{project.year}</p>
          </div>
          <div>
            <p className="font-label text-[10px] text-on-surface/30 uppercase tracking-[0.3em] mb-2 italic">Industry</p>
            <p className="font-headline font-bold text-lg text-on-surface">Enterprise</p>
          </div>
          <div>
            <p className="font-label text-[10px] text-on-surface/30 uppercase tracking-[0.3em] mb-2 italic">Role</p>
            <p className="font-headline font-bold text-lg text-on-surface">Digital Lead</p>
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="px-8 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-12">
            <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter text-on-surface mb-12 uppercase italic">
              The Evolution of <span className="text-autograph-gradient">{project.title}</span>
            </h2>
            <p className="text-2xl text-secondary font-light leading-relaxed mb-24 max-w-4xl italic">
              {project.story}
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-32">
            <div>
              <div className="flex items-center gap-6 mb-8">
                 <div className="w-12 h-px bg-primary" />
                 <h3 className="font-label text-xs tracking-[0.4em] uppercase text-primary font-black italic">The Challenge</h3>
              </div>
              <p className="text-xl text-on-surface/70 leading-relaxed font-light">
                {localized.challenge}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-6 mb-8">
                 <div className="w-12 h-px bg-primary" />
                 <h3 className="font-label text-xs tracking-[0.4em] uppercase text-primary font-black italic">Our Solution</h3>
              </div>
              <p className="text-xl text-on-surface/70 leading-relaxed font-light mb-12">
                {localized.solution}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, i) => (
                  <div key={i} className="p-6 bg-on-surface/5 border border-on-surface/5 rounded-xl flex items-center gap-4 group hover:bg-on-surface/10 transition-all">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-on-surface/80 font-medium tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-6 mb-8">
                 <div className="w-12 h-px bg-primary" />
                 <h3 className="font-label text-xs tracking-[0.4em] uppercase text-primary font-black italic">Impact & Results</h3>
              </div>
              <div className="p-12 bg-primary/10 border border-primary/20 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <BarChart className="w-32 h-32" />
                </div>
                <p className="text-2xl text-primary font-bold leading-relaxed relative z-10 italic">
                  {localized.result}
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:sticky lg:top-32 self-start">
             <div className="p-10 bg-surface-container-low border border-on-surface/10 rounded-3xl">
               <h4 className="font-headline font-black text-xl text-on-surface mb-8 uppercase tracking-widest italic">Tech Stack</h4>
               <div className="flex flex-col gap-6">
                 {project.techStack.map((tech, i) => (
                   <div key={i} className="flex justify-between items-center pb-4 border-b border-on-surface/5 group">
                      <span className="text-on-surface/60 font-light tracking-widest group-hover:text-primary transition-colors">{tech}</span>
                      <Cpu className="w-4 h-4 text-on-surface/20 group-hover:rotate-90 transition-transform" />
                   </div>
                 ))}
               </div>
               
               <button className="w-full mt-12 py-5 bg-primary text-white rounded-xl font-label text-[10px] uppercase tracking-[0.3em] font-black flex items-center justify-center gap-4 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] transition-all">
                  Launch Live Project
                  <ExternalLink className="w-4 h-4" />
               </button>
             </div>
          </aside>

        </div>
      </section>

      {/* Footer Nav */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-white/5 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
           <Link to="/portfolio" className="group flex flex-col items-start">
              <span className="font-label text-[10px] text-on-surface/20 uppercase tracking-[0.5em] mb-4">View All</span>
              <span className="font-headline font-black text-3xl text-on-surface group-hover:text-primary transition-colors italic">THE PORTFOLIO</span>
           </Link>
           <Link to="/contact" className="group flex flex-col items-end text-right">
              <span className="font-label text-[10px] text-on-surface/20 uppercase tracking-[0.5em] mb-4">Next Step</span>
              <span className="font-headline font-black text-3xl text-on-surface group-hover:text-primary transition-colors italic">START A PROJECT</span>
           </Link>
        </div>
      </section>
    </div>
  );
};

export default WorkDetail;
