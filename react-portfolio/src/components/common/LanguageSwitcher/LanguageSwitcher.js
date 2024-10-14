import React from 'react';
import { useTranslation } from 'react-i18next';
import enFlag from '../../images/flags/united-kingdom.png';
import huFlag from '../../images/flags/hungary.png';
import './LanguageSwitcher.css'; // Your custom CSS

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    // Ensure that changeLanguage is called on the i18n object
    if (i18n && typeof i18n.changeLanguage === 'function') {
      i18n.changeLanguage(language);
      localStorage.setItem('selectedLanguage', language);
    } else {
      console.error('i18n instance is not properly initialized or changeLanguage is not a function');
    }
  };

  // Language options with the path to the SVG files
  const languages = [
    { code: 'en', name: 'English', flag: enFlag }, // Adjust the path as per your folder structure
    { code: 'hu', name: 'Magyar', flag: huFlag },
  ];

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <img
          key={lang.code}
          src={lang.flag}
          alt={`${lang.name} flag`}
          className="flag-icon"
          onClick={() => changeLanguage(lang.code)}
          title={lang.name}
        />
      ))}
    </div>
  );
}

export default LanguageSwitcher;


