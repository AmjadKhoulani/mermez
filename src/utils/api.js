import i18n from 'i18next';

const BASE_URL = '/api';

export const fetchContent = async (type) => {
  try {
    const response = await fetch(`${BASE_URL}/get_content.php?type=${type}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${type}:`, error);
    return [];
  }
};

export const getLocalizedField = (item, field) => {
  if (!item) return '';
  const lang = i18n.language || 'en';
  // Attempt to get the localized field, fallback to English
  return item[`${field}_${lang}`] || item[`${field}_en`] || item[field] || '';
};

export const updatePortfolio = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/update_portfolio.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error('Error updating portfolio:', error);
    return { error: error.message };
  }
};

export const updateSEO = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/update_seo.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error('Error updating SEO:', error);
    return { error: error.message };
  }
};
