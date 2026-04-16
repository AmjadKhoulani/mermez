import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { fetchContent, getLocalizedField } from '../utils/api';

const SEO = ({ pageKey, title: propsTitle, description: propsDescription, keywords: propsKeywords, image, url }) => {
  const { i18n, t } = useTranslation();
  const [dynamicMeta, setDynamicMeta] = useState(null);

  useEffect(() => {
    if (pageKey) {
      const loadSEO = async () => {
        const data = await fetchContent('seo');
        const meta = data.find(m => m.page_key === pageKey);
        if (meta) setDynamicMeta(meta);
      };
      loadSEO();
    }
  }, [pageKey, i18n.language]);
  
  const siteTitle = "Mermez Lab";
  
  // Resolve values: Database -> Props -> Translation Fallback -> Default
  const rawTitle = getLocalizedField(dynamicMeta, 'title') || propsTitle || t(`seo.${pageKey}.title`);
  const fullTitle = rawTitle ? `${rawTitle} | ${siteTitle}` : `${siteTitle} | Advanced Technical Studios`;
  
  const metaDescription = getLocalizedField(dynamicMeta, 'desc') || propsDescription || t(`seo.${pageKey}.description`) || "Mermez Lab is an advanced technical studio specializing in Marketplace, Ecommerce, ERP, and CRM solutions.";
  const metaKeywords = getLocalizedField(dynamicMeta, 'keywords') || propsKeywords || t(`seo.${pageKey}.keywords`) || "Mermez Lab, technical studio, digital agency";
  
  const metaImage = image || "https://mermez.com/wp-content/uploads/2025/04/Log-Mermez-01-e1744273275240.png";
  const canonicalUrl = url || window.location.href;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />

      <link rel="alternate" hrefLang="ar" href={`${window.location.origin}${window.location.pathname}?lng=ar`} />
      <link rel="alternate" hrefLang="en" href={`${window.location.origin}${window.location.pathname}?lng=en`} />
      <link rel="alternate" hrefLang="tr" href={`${window.location.origin}${window.location.pathname}?lng=tr`} />

      <html lang={i18n.language} dir={i18n.dir()} />
    </Helmet>
  );
};

export default SEO;
