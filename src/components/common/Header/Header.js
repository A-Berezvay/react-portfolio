import React from 'react';
import { useTranslation } from 'react-i18next'; // Translation
import './Header.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
    const { t } = useTranslation();

    return(
        <header>
        <a href="/"><h1>Albert Berezvay</h1></a>
         <nav>
             <ul>
                 <li><a className="header-navigation" href="/about">{t('about')}</a></li>
                 <li><a className="header-navigation" href="/project">{t('projects')}</a></li>
                 <li><a href="/contact"><button>{t('contact')}</button></a></li>
                 <LanguageSwitcher />
                 <i id="close-button" className="fa-solid fa-xmark"></i>
             </ul>
             <i id="menu-button" className="fa-solid fa-bars"></i>
         </nav>
     </header>
    );
}

export default Header;
