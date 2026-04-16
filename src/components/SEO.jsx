import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ title, description, keywords, image, url }) => {
  const { i18n } = useTranslation();
  
  const siteTitle = "Mermez Lab";
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Advanced Technical Studios`;
  const defaultDescription = "Mermez Lab is an advanced technical studio specializing in Marketplace, Ecommerce, ERP, and CRM solutions across Turkey, Syria, and the UK.";
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || "Mermez Lab, technical studio, digital agency, ERP Syria, ERP Turkey, Marketplace solutions, Ecommerce UK";
  const metaImage = image || "https://mermez.com/wp-content/uploads/2025/04/Log-Mermez-01-e1744273275240.png"; // Placeholder for social sharing
  const canonicalUrl = url || window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />

      {/* Multi-language SEO: hrefLang tags */}
      <link rel="alternate" hrefLang="ar" href={`${window.location.origin}${window.location.pathname}?lng=ar`} />
      <link rel="alternate" hrefLang="en" href={`${window.location.origin}${window.location.pathname}?lng=en`} />
      <link rel="alternate" hrefLang="tr" href={`${window.location.origin}${window.location.pathname}?lng=tr`} />
      <link rel="alternate" hrefLang="x-default" href={`${window.location.origin}${window.location.pathname}`} />

      {/* Set HTML lang and dir via Helmet as a fallback (i18n.js handles it too) */}
      <html lang={i18n.language} dir={i18n.dir()} />
    </Helmet>
  );
};

export default SEO;
