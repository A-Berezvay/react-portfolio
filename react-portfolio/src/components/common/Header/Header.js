import React, {useState} from 'react';
import { useTranslation } from 'react-i18next'; // Translation
import './Header.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const { t } = useTranslation(); // Set "t" as a variable for translation

    return(
        <header>
            <a href="/"><h1>Albert Berezvay</h1></a>
            <nav>
                <i id="menu-button" className="fa-solid fa-bars" onClick={toggleMenu} style={{ display: isMenuOpen ? 'none' : 'block' }}></i>
                <ul className={isMenuOpen ? 'show-menu' : ''}>
                    <li><a className="header-navigation" href="/about">{t('about')}</a></li>
                    <li><a className="header-navigation" href="/project">{t('projects')}</a></li>
                    <li><a href="/contact"><button>{t('contact')}</button></a></li>
                    <LanguageSwitcher />
                </ul>
                <i id="close-button" className="fa-solid fa-xmark" onClick={toggleMenu} style={{ display: isMenuOpen ? 'block' : 'none' }}></i>
            </nav>
        </header>
    );
}

export default Header;
