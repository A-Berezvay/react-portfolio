import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Translation
import './Header.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const { t } = useTranslation(); // Set "t" as a variable for translation
    const navigate = useNavigate();
    const handleAboutClick = () => {
        if (window.location.pathname !== '/') {
            navigate('/');  // Navigates to the homepage
        }
        setTimeout(() => {
            const aboutSection = document.getElementById('about-me');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); 
};

    return(
        <header>
            <a href="/"><h1>Albert Berezvay</h1></a>
            <nav>
                <i id="menu-button" className="fa-solid fa-bars" onClick={toggleMenu} style={{ display: isMenuOpen ? 'none' : 'block' }}></i>
                <ul className={isMenuOpen ? 'show-menu' : ''}>
                    <li><a onClick={handleAboutClick} className="header-navigation">{t('about')}</a></li>
                    <li><Link to="/project" className="header-navigation">{t('projects')}</Link></li>
                    <li><Link to="/contact"><button>{t('contact')}</button></Link></li>
                    <LanguageSwitcher />
                </ul>
                <i id="close-button" className="fa-solid fa-xmark" onClick={toggleMenu} style={{ display: isMenuOpen ? 'block' : 'none' }}></i>
            </nav>
        </header>
    );
}

export default Header;
