import React from 'react';
import { useTranslation } from 'react-i18next'; // Translation
import './HomePage.css';
import Portrait from '../../images/Portrait.jpeg';


const HomePage = () => {
  const { t } = useTranslation();

  return (
    <main className="interactive-main">
      <section className="home-page">
        <div>
          <div className="animation">
            <h2 className='heading'>{t('title')}</h2>
          </div>
          <p className='text'>{t('introduction')}</p>
        </div>
        <div>

          <p>{t('description')}</p> {/* Assuming you have a description key */}
        </div>
        <img src={Portrait} className="portrait-image" alt="Portrait image of myself" />
      </section>
    </main>
  );
}

export default HomePage;
