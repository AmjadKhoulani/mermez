import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const ServiceDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const serviceData = SITE_CONTENT.services.find(s => s.id === id);

  if (!serviceData) {
    return <Navigate to="/services" replace />;
  }

  // Fallback if translations are missing
  const localizedTitle = t(`services.deep.${id}.title`, { defaultValue: serviceData.title });
  const localizedSubtitle = t(`services.deep.${id}.subtitle`, { defaultValue: "Advanced Implementation" });
  const localizedDesc = t(`services.deep.${id}.description`, { defaultValue: "We engineer precise solutions tailored directly to the core of this discipline, ensuring high scalability." });
  const localizedFeature1 = t(`services.deep.${id}.f1`, { defaultValue: "Technical Discovery & Scoping" });
  const localizedFeature2 = t(`services.deep.${id}.f2`, { defaultValue: "Architecture & Wireframing" });
  const localizedFeature3 = t(`services.deep.${id}.f3`, { defaultValue: "Deployment & Optimization" });

  return (
    <div className="px-8 md:px-16 lg:px-24 py-24 bg-surface min-h-screen">
      <SEO 
        title={localizedTitle}
        description={localizedDesc}
        keywords={serviceData.seoKeywords}
      />

      <div className="max-w-4xl mx-auto">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest mb-16 hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Services
        </Link>

        <header className="mb-24">
          <div className="flex items-center gap-8 mb-8">
            <div className="w-20 h-20 bg-surface-container-high rounded-xl flex items-center justify-center border border-on-surface/5">
              <span className="material-symbols-outlined text-4xl text-primary">{serviceData.icon}</span>
            </div>
            <p className="font-label text-xs text-primary tracking-[0.3em] uppercase">{localizedSubtitle}</p>
          </div>
          
          <h1 className="font-headline font-black text-5xl md:text-7xl tracking-tighter mb-12 uppercase leading-tight">
            {localizedTitle}
          </h1>
          <p className="text-2xl text-secondary font-light leading-relaxed">
            {localizedDesc}
          </p>
        </header>

        <div className="bg-surface-container-low p-12 rounded-2xl border border-on-surface/5 mb-32">
          <h3 className="font-headline font-bold text-3xl mb-8 tracking-tight">EXECUTION PROTOCOL</h3>
          <div className="space-y-8">
            <div className="flex gap-6 border-b border-on-surface/10 pb-8">
              <span className="font-label text-xs text-primary mt-1">01</span>
              <div>
                <h4 className="font-headline font-bold text-xl mb-2">{localizedFeature1}</h4>
                <p className="text-secondary">Establishing the foundational metrics and requirements to ensure precision engineering.</p>
              </div>
            </div>
            <div className="flex gap-6 border-b border-on-surface/10 pb-8">
              <span className="font-label text-xs text-primary mt-1">02</span>
              <div>
                <h4 className="font-headline font-bold text-xl mb-2">{localizedFeature2}</h4>
                <p className="text-secondary">Structuring the core logic and visual hierarchy before code generation begins.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="font-label text-xs text-primary mt-1">03</span>
              <div>
                <h4 className="font-headline font-bold text-xl mb-2">{localizedFeature3}</h4>
                <p className="text-secondary">Executing the build phase and launching into the global digital ecosystem.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;
