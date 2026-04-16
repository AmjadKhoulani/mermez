import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchContent, getLocalizedField } from '../utils/api';
import { ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const data = await fetchContent('portfolio');
      // Show first 4 projects on home page
      setProjects(data.slice(0, 4));
      setLoading(false);
    };
    loadProjects();
  }, [i18n.language]);

  return (
    <section id="portfolio" className="py-32 px-8 md:px-16 lg:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-baseline mb-20 border-b border-on-surface/10 pb-6">
          <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase">
            {t('sections.works')}
          </h2>
          <span className="font-label text-xs text-secondary tracking-[0.3em] uppercase">
            {t('sections.worksSub')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {loading ? (
             [1, 2, 3].map(n => (
               <div key={n} className="bg-white/5 animate-pulse rounded-2xl aspect-[16/10]"></div>
             ))
          ) : projects.map((project, index) => (
            <Link 
              key={project.id || index} 
              to={`/work/${project.id}`}
              className={`group flex flex-col ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-surface-container-low mb-8">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={getLocalizedField(project, 'title')} 
                  src={project.image}
                />
                <div className="absolute inset-0 bg-on-surface/10 group-hover:bg-on-surface/0 transition-colors duration-500"></div>
                <div className="absolute top-6 right-6 translate-x-12 translate-y--12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-primary text-white p-3 rounded-full shadow-xl">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold">
                    0{index + 1}
                  </span>
                  <div className="h-[1px] w-8 bg-primary/30"></div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">
                    {getLocalizedField(project, 'category')}
                  </span>
                </div>
                <h3 className="font-headline font-black text-2xl md:text-3xl tracking-tight text-on-surface group-hover:text-primary transition-colors">
                  {getLocalizedField(project, 'title')}
                </h3>
                <p className="text-secondary font-light max-w-md leading-relaxed">
                  {getLocalizedField(project, 'description')}
                </p>
                <div className="pt-4 overflow-hidden">
                   <div className="h-px w-full bg-on-surface/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
