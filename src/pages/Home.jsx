import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Hero from '../sections/Hero';
import Portfolio from '../sections/Portfolio';
import Services from '../sections/Services';
import AISection from '../sections/AISection';
import MetadataSection from '../sections/MetadataSection';
import Partners from '../sections/Partners';
import TeamSection from '../sections/TeamSection';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="w-full">
      <SEO pageKey="home" />
      <Hero />
      <Services />
      <AISection />
      <Portfolio />
      <TeamSection />
      <MetadataSection />
      <Partners />
    </main>
  );
};

export default Home;
