import React from 'react';
import PageTitle from '../../utils/pageTitle';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next'; // Translation
import './AboutPage.css';

const AboutPage = () => {
    const { t } = useTranslation();
    
    return (
        <main>
        <PageTitle title={t('about title')} />
        <section class="about-me">
            <article class="about-me-sections my-journey">
                <h2>{t('my-journey')}</h2>
                <p>
                    <Trans i18nKey='my-journey-description' components={{ b: <b />}} />
                </p>
            </article>
            <article class="about-me-sections">
                <h2>{t('my skills')}</h2>
                <div class="skill-grid">
                    <i class="hidden skills fa-brands fa-html5"></i>
                    <i class="hidden skills fa-brands fa-css3-alt"></i>
                    <i class="hidden skills fa-brands fa-js"></i>
                    <i class="hidden skills fa-brands fa-react"></i>
                    <i class="hidden skills fa-solid fa-database"></i>
                    <i class="hidden skills fa-brands fa-git"></i>
                    <i class="hidden skills fa-brands fa-github"></i>
                    <i class="hidden skills fa-brands fa-wordpress"></i>
                    <i class="hidden skills fa-brands fa-elementor"></i>
                    <i class="hidden skills fa-brands fa-shopify"></i>
                    <i class="skills fa-brands fa-jira"></i>
                    <i class="skills fa-brands fa-yammer"></i>
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

export default AboutPage;