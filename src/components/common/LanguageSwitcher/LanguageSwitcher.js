import React from 'react';
import i18n from '../../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('hu')}>Magyar</button>
    </div>
  );
}

export default LanguageSwitcher;
