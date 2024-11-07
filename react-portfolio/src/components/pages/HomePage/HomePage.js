import React from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next'; // Translation
import SkillChart from '../../common/Charts/SkillChart';
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
        <img src={Portrait} className="portrait-image" alt="Portrait image of myself" />
      </section>
      <section id="about-me">
            <article class="about-me-sections my-journey">
                <h2>{t('my-journey')}</h2>
                <p>
                    <Trans i18nKey='my-journey-description' components={{ b: <b />}} />
                </p>
            </article>
            <article class="about-me-sections">
                <h2>{t('my skills')}</h2>
                <SkillChart />
                <div className="skill-levels">
                    <p><strong>Beginner (1-25):</strong> {t('skill beginner')}</p>
                    <p><strong>Intermediate (26-50):</strong> {t('skill intermediate')}</p>
                    <p><strong>Advanced (51-75):</strong> {t('skill advanced')}</p>
                    <p><strong>Expert (76-100):</strong> {t('skill expert')}</p>
                </div>
            </article>
        </section>
        <section class="my-work">
            <h2>{t('what i do')}</h2>
            <div class="offers">
                <article class="features">
                    <div class="icon-holder">
                        <i class="fa-solid fa-code"></i>
                    </div>
                    <div class="features-content">
                        <h3>{t('web development')}</h3>
                        <p>
                        <Trans i18nKey='web development description' components={{ b: <b />}} />
                        </p>
                    </div>
                </article>
                <article class="hidden features">
                    <div class="icon-holder">
                        <i class="fa-solid fa-pencil"></i>
                    </div>
                    <div class="features-content">
                        <h3>{t('ui/ux')}</h3>
                        <p>
                            <Trans i18nKey='ui/ux description' components={{ b: <b />}} />
                        </p>
                    </div>
                </article>
                <article class="hidden features">
                    <div class="icon-holder">
                        <i class="fa-solid fa-desktop"></i>
                    </div>
                    <div class="features-content">
                        <h3>{t('web design')}</h3>
                        <p>
                            <Trans i18nKey='web design description' components={{ b: <b />}} />
                        </p>
                    </div>
                </article>          
            </div>
        </section>
        <section class="contact-me">
            <h2><Trans i18nKey='about cta' components={{ b: <b />}} /></h2>
            <a href="/contact"><button>{t('about cta button')}</button></a>
        </section>
    </main>
  );
}

export default HomePage;
